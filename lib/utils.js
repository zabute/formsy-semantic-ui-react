"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSuirElementProps = filterSuirElementProps;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function filterSuirElementProps(props) {
  var as = props.as,
      instantValidation = props.instantValidation,
      error = props.error,
      defaultChecked = props.defaultChecked,
      defaultSelected = props.defaultSelected,
      rootClassName = props.rootClassName,
      rootStyle = props.rootStyle,
      defaultValue = props.defaultValue,
      rootElement = props.rootElement,
      errorLabel = props.errorLabel,
      formRadioGroup = props.formRadioGroup,
      isPristine = props.isPristine,
      isValid = props.isValid,
      errorMessage = props.errorMessage,
      setValidations = props.setValidations,
      setValue = props.setValue,
      value = props.value,
      resetValue = props.resetValue,
      hasValue = props.hasValue,
      errorMessages = props.errorMessages,
      isFormDisabled = props.isFormDisabled,
      isFormSubmitted = props.isFormSubmitted,
      isRequired = props.isRequired,
      showRequired = props.showRequired,
      showError = props.showError,
      isValidValue = props.isValidValue,
      validations = props.validations,
      validationError = props.validationError,
      validationErrors = props.validationErrors,
      width = props.width,
      passRequiredToField = props.passRequiredToField,
      inputAs = props.inputAs,
      innerRef = props.innerRef,
      inline = props.inline,
      attachToForm = props.attachToForm,
      detachFromForm = props.detachFromForm,
      runValidation = props.runValidation,
      validate = props.validate,
      suirProps = _objectWithoutProperties(props, ["as", "instantValidation", "error", "defaultChecked", "defaultSelected", "rootClassName", "rootStyle", "defaultValue", "rootElement", "errorLabel", "formRadioGroup", "isPristine", "isValid", "errorMessage", "setValidations", "setValue", "value", "resetValue", "hasValue", "errorMessages", "isFormDisabled", "isFormSubmitted", "isRequired", "showRequired", "showError", "isValidValue", "validations", "validationError", "validationErrors", "width", "passRequiredToField", "inputAs", "innerRef", "inline", "attachToForm", "detachFromForm", "runValidation", "validate"]);

  return suirProps;
}