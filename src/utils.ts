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
