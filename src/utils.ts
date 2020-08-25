export function filterSuirElementProps(props: any) {
  const {
    as,
    instantValidation,
    error,
    defaultChecked,
    defaultSelected,
    rootClassName,
    rootStyle,
    defaultValue,
    rootElement,
    errorLabel,
    formRadioGroup,
    isPristine,
    isValid,
    errorMessage,
    setValidations,
    setValue,
    value,
    resetValue,
    hasValue,
    errorMessages,
    isFormDisabled,
    isFormSubmitted,
    isRequired,
    showRequired,
    showError,
    isValidValue,
    validations,
    validationError,
    validationErrors,
    width,
    passRequiredToField,
    inputAs,
    innerRef, //eslint-disable-line
    inline,
    attachToForm,
    detachFromForm,
    runValidation,
    validate,
    ...suirProps
  } = props;

  return suirProps;
}