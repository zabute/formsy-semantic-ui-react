import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: true,
    },
    {
      format: 'cjs',
      dts: true,
    },
  ],
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  output: {
    cleanDistPath: true,
    distPath: './dist',
  },
  plugins: [pluginReact(), pluginTypeCheck()],
});
