import { spawnSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const REPO_ROOT = join(__dirname, '..');
const DIST = join(REPO_ROOT, 'dist');
const TSC = require.resolve('typescript/bin/tsc');

/**
 * `withFormsy<T, V>` does not let TypeScript infer `V`, so the unresolved type parameter
 * used to be emitted into `dist/*.d.ts` as a bare `keyof InjectedProps<V>` / `InputValueType`.
 * The build itself stays green, but every downstream consumer then fails with
 * `TS2304: Cannot find name 'V'`. These tests type-check the *built* output against a
 * real consumer project so that regression cannot come back.
 */
const hasBuild = (() => {
  try {
    readFileSync(join(DIST, 'index.d.ts'));
    return true;
  } catch {
    return false;
  }
})();

/**
 * `dist` is gitignored and is not rebuilt by `yarn test`, so a leftover build from an
 * earlier commit makes these specs assert against stale declarations — they then fail in
 * a way that looks like a code regression but is really just an out-of-date artifact.
 */
const isStale = (() => {
  if (!hasBuild) return true;

  try {
    const builtAt = statSync(join(DIST, 'index.d.ts')).mtimeMs;
    const entry = join(REPO_ROOT, 'src');

    return readdirSync(entry)
      .filter((f) => /\.(ts|tsx)$/.test(f))
      .some((f) => statSync(join(entry, f)).mtimeMs > builtAt);
  } catch {
    return true;
  }
})();

/**
 * These specs assert on *built* output, but `dist` is gitignored and `yarn test` does
 * not build. Rather than requiring a manual `yarn build` first (which made `yarn test`
 * fail on a clean checkout), or skipping silently (which reports green while checking
 * nothing), build on demand so `yarn test` is correct on its own.
 */
beforeAll(() => {
  if (hasBuild && !isStale) return;

  const result = spawnSync('yarn', ['build'], { cwd: REPO_ROOT, encoding: 'utf8', stdio: 'pipe' });

  if (result.status !== 0) {
    throw new Error(
      `Needed a fresh build in ${DIST} but \`yarn build\` failed:\n${result.stdout ?? ''}${result.stderr ?? ''}`
    );
  }
}, 300_000);

/**
 * Returns only diagnostics that originate in the emitted `dist/*.d.ts` files.
 * Everything else (semantic-ui-react's own React 19 `ReactNodeArray` breakage, UMD-global
 * noise in the fixture) is filtered out so the assertions stay specific.
 */
function typecheck(fileName: string, source: string) {
  // Placed inside the repo so `react`/`formsy-react`/etc. resolve normally; a fixture in
  // the system temp dir has no node_modules and reports bogus "Cannot find module 'react'".
  const dir = mkdtempSync(join(REPO_ROOT, 'node_modules', '.types-fixture-'));

  try {
    // Diagnostics are printed relative to `cwd`, which is the fixture dir. Anchor on the
    // relative path to our own dist so unrelated `.../semantic-ui-react/dist/...` errors
    // (its React 19 `ReactNodeArray` breakage) can't slip into the filtered result.
    const distPrefix = `${relative(dir, DIST).split(sep).join('/')}/`;

    writeFileSync(
      join(dir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          jsx: 'react',
          strict: true,
          // Must stay false: the bug under test lives *inside* the emitted .d.ts files,
          // and skipLibCheck would hide exactly the errors we want to catch.
          skipLibCheck: false,
          moduleResolution: 'bundler',
          module: 'esnext',
          target: 'esnext',
          noEmit: true,
          types: [],
          // `paths` needs no `baseUrl` (and `baseUrl` is deprecated in TS 6 — setting it
          // aborts the whole compilation before a single file is checked).
          paths: {
            'formsy-semantic-ui-react': [DIST],
          },
        },
        include: [fileName],
      })
    );
    writeFileSync(join(dir, fileName), source);

    // Invoke the compiler directly. `npx tsc` from a temp cwd resolves to the unrelated
    // "this is not the tsc command you are looking for" shim, and `-p` must be
    // absolute or it gets resolved against the wrong project.
    //
    // `--pretty false` is essential: with the default pretty formatter the diagnostics
    // span several lines (message, code frame, elided frames), so a line-based filter
    // picks up bare `file:line:col` fragments with no error code attached.
    const result = spawnSync(process.execPath, [TSC, '-p', join(dir, 'tsconfig.json'), '--pretty', 'false'], {
      cwd: dir,
      encoding: 'utf8',
      // Jest exports FORCE_COLOR; without clearing it tsc may still colourise output.
      env: { ...process.env, FORCE_COLOR: '0', NO_COLOR: '1' },
    });

    if (result.error) {
      throw result.error;
    }

    return (
      `${result.stdout ?? ''}${result.stderr ?? ''}`
        // eslint-disable-next-line no-control-regex
        .replace(/\[[0-9;]*m/g, '')
        .split('\n')
        // Only complete diagnostics pointing at our own emitted declarations. Matching on
        // `error TS<code>` (rather than a bare path) keeps code frames and elided-frame
        // fragments — which repeat the path without an error code — out of the result.
        .filter((line) => /error TS\d+:/.test(line) && line.includes(distPrefix))
        .join('\n')
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

describe('published type declarations', () => {
  it('resolves every type parameter in the emitted d.ts files', () => {
    const output = typecheck(
      'consumer.tsx',
      [
        "import * as React from 'react';",
        "import { Checkbox, Dropdown, Input, RadioGroup, TextArea } from 'formsy-semantic-ui-react';",
        '',
        'export const usage = (',
        '  <div>',
        '    <Input name="a" />',
        '    <TextArea name="b" />',
        '    <Checkbox name="c" />',
        '    <Dropdown name="d" />',
        '    <RadioGroup name="e">',
        '      <input type="radio" value="1" />',
        '    </RadioGroup>',
        '  </div>',
        ');',
      ].join('\n')
    );

    expect(output).toBe('');
  });

  it('exposes statics off the Form component', () => {
    const output = typecheck(
      'consumer.tsx',
      [
        "import * as React from 'react';",
        "import { Form } from 'formsy-semantic-ui-react';",
        '',
        'export const usage = (',
        '  <Form>',
        '    <Form.Checkbox name="c" />',
        '    <Form.Input name="i" />',
        '    <Form.TextArea name="t" />',
        '    <Form.Dropdown name="d" />',
        '    <Form.Select name="s" />',
        '    <Form.RadioGroup name="r">',
        '      <input type="radio" value="1" />',
        '    </Form.RadioGroup>',
        '    <Form.Field />',
        '    <Form.Button />',
        '  </Form>',
        ');',
      ].join('\n')
    );

    expect(output).toBe('');
  });
});
