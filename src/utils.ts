import { createElement } from 'react';
import { Dropdown, Form as SemanticUIForm, Input, Select, TextArea } from 'semantic-ui-react';

const removeProps = [
  'as',
  'attachToForm',
  'defaultChecked',
  'defaultSelected',
  'defaultValue',
  'detachFromForm',
  'error',
  'errorLabel',
  'errorMessage',
  'errorMessages',
  'formRadioGroup',
  'hasValue',
  'inline',
  'innerRef',
  'inputAs',
  'inputClassName',
  'instantValidation',
  'isFormDisabled',
  'isFormSubmitted',
  'isPristine',
  'isRequired',
  'isValid',
  'isValidValue',
  'label',
  'passRequiredToField',
  'resetValue',
  'rootClassName',
  'rootElement',
  'rootStyle',
  'runValidation',
  'setValidations',
  'setValue',
  'showError',
  'showRequired',
  'validate',
  'validationError',
  'validationErrors',
  'validations',
  'value',
  'width',
] as const;

export function filterSuirElementProps(props: Record<string, any>) {
  return Object.fromEntries(
    Object.keys(props)
      .filter((prop: any) => !removeProps.includes(prop))
      .map((prop) => [prop, props[prop]])
  );
}

/**
 * semantic-ui-react's `Form.Input` / `Form.TextArea` / `Form.Dropdown` / `Form.Select`
 * are thin wrappers around the matching base component (`<Form.Field control={Input} />`).
 *
 * Up to v2 they were classes exposing the resolved control as an instance field, which
 * callers read by rendering the component and inspecting the result. From v3 onwards they
 * are `forwardRef` components and `control` is an ordinary prop, so that trick yields
 * `undefined`. Resolve the shorthand explicitly instead, keeping v2 support by falling
 * back to the previous instance-based lookup.
 */
export function resolveControlComponent(inputAs: any): any {
  const control = getShorthandControl(inputAs);

  if (control) {
    return control;
  }

  // semantic-ui-react v2: the wrapper is a class whose instance exposes `.control`.
  try {
    return (createElement(inputAs as any) as any)?.props?.control;
  } catch {
    return undefined;
  }
}

// Built lazily: semantic-ui-react's barrel has circular imports and does not guarantee
// that `Input`/`TextArea`/... are initialised while this module body is evaluated.
let shorthandControls: Map<any, any> | undefined;

function getShorthandControl(inputAs: any) {
  if (!shorthandControls) {
    const form = (SemanticUIForm ?? {}) as Record<string, any>;

    shorthandControls = new Map(
      [
        [form.Input, Input],
        [form.TextArea, TextArea],
        [form.Dropdown, Dropdown],
        [form.Select, Select],
      ].filter(([shorthand]) => shorthand) as [any, any][]
    );
  }

  return shorthandControls.get(inputAs);
}
