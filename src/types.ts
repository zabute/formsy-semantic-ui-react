import type { InjectedProps, WrapperProps } from 'formsy-react';
import type React from 'react';

/**
 * `withFormsy<T, V>` returns `ComponentType<Omit<T & WrapperProps<V>, keyof InjectedProps<V>>>`,
 * and TypeScript cannot infer `V` from the wrapped component's props. It therefore carries the
 * unresolved type parameter into the emitted declaration file, producing `keyof InjectedProps<V>`
 * with no `V` in scope — which breaks every consumer of the built types (TS2304).
 *
 * Binding `V` explicitly keeps the generated `.d.ts` self-contained and portable.
 */
export type FormsyWrappedProps<T, V> = Omit<T & WrapperProps<V>, keyof InjectedProps<V>>;

/** The public component type produced by formsy-react's `withFormsy`, with `V` bound. */
export type FormsyComponent<T, V = any> = React.ComponentType<FormsyWrappedProps<T, V>>;
