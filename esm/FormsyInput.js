function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component, createElement, cloneElement } from 'react';
import { withFormsy } from 'formsy-react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';
import PropTypes from 'prop-types';

var FormsyInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormsyInput, _Component);

  function FormsyInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      allowError: false
    };

    _this.handleChange = function (e, data) {
      var value = data.value;

      _this.props.setValue(value);

      if (_this.props.onChange) _this.props.onChange(e, data);
      if (_this.props.instantValidation) _this.showError();
    };

    _this.handleBlur = function (e, data) {
      _this.showError();

      if (_this.props.onBlur) _this.props.onBlur(e, data);
    };

    _this.showError = function () {
      return _this.setState({
        allowError: true
      });
    };

    return _this;
  }

  var _proto = FormsyInput.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        defaultValue = _this$props.defaultValue,
        setValue = _this$props.setValue;
    if (defaultValue) setValue(defaultValue);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.showError();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        inputAs = _this$props2.inputAs,
        inputClassName = _this$props2.inputClassName,
        required = _this$props2.required,
        label = _this$props2.label,
        defaultValue = _this$props2.defaultValue,
        getValue = _this$props2.getValue,
        isValid = _this$props2.isValid,
        isPristine = _this$props2.isPristine,
        getErrorMessage = _this$props2.getErrorMessage,
        errorLabel = _this$props2.errorLabel,
        as = _this$props2.as,
        width = _this$props2.width,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        inline = _this$props2.inline,
        passRequiredToField = _this$props2.passRequiredToField;
    var allowError = this.state.allowError;
    var error = !isPristine() && !isValid() && allowError;

    var inputProps = _extends(_extends({}, filterSuirElementProps(this.props)), {}, {
      value: getValue() || isPristine() && defaultValue || '',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      className: inputClassName,
      error: !disabled && error,
      label: label,
      id: id
    });

    var shortHandMode = inputAs === Form.Input || inputAs === Form.TextArea;
    var inputNode = shortHandMode ? createElement(inputAs).props.control : inputAs;

    if (shortHandMode) {
      delete inputProps.label;
      if (inputAs === Form.TextArea) delete inputProps.error;
    }

    return /*#__PURE__*/React.createElement(Form.Field, {
      as: as,
      className: className,
      required: required && passRequiredToField,
      error: !disabled && error,
      width: width,
      inline: inline,
      disabled: disabled
    }, shortHandMode && label && /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    }, " ", label, " "), createElement(inputNode, _extends({}, inputProps)), !disabled && error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()));
  };

  return FormsyInput;
}(Component);

FormsyInput.defaultProps = {
  inputAs: Input,
  passRequiredToField: true
};
export default withFormsy(FormsyInput);