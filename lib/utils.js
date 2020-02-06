"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSuirElementProps = filterSuirElementProps;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      suirProps = _objectWithoutProperties(props, ["as", "instantValidation", "error", "defaultChecked", "defaultSelected", "rootClassName", "rootStyle", "defaultValue", "rootElement", "errorLabel", "formRadioGroup", "isPristine", "isValid", "errorMessage", "setValidations", "setValue", "value", "resetValue", "hasValue", "errorMessages", "isFormDisabled", "isFormSubmitted", "isRequired", "showRequired", "showError", "isValidValue", "validations", "validationError", "validationErrors", "width", "passRequiredToField", "inputAs", "innerRef", "inline"]);

  return suirProps;
}