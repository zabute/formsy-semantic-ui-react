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
      getValue = props.getValue,
      isPristine = props.isPristine,
      isValid = props.isValid,
      getErrorMessage = props.getErrorMessage,
      setValidations = props.setValidations,
      setValue = props.setValue,
      resetValue = props.resetValue,
      hasValue = props.hasValue,
      getErrorMessages = props.getErrorMessages,
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
      suirProps = _objectWithoutProperties(props, ["as", "instantValidation", "error", "defaultChecked", "defaultSelected", "rootClassName", "rootStyle", "defaultValue", "rootElement", "errorLabel", "formRadioGroup", "getValue", "isPristine", "isValid", "getErrorMessage", "setValidations", "setValue", "resetValue", "hasValue", "getErrorMessages", "isFormDisabled", "isFormSubmitted", "isRequired", "showRequired", "showError", "isValidValue", "validations", "validationError", "validationErrors", "width", "passRequiredToField", "inputAs", "innerRef"]);

  return suirProps;
}