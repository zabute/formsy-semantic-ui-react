function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Form, Dropdown, Select } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

var FormsyDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormsyDropdown, _Component);

  function FormsyDropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      allowError: false
    };

    _this.handleChange = function (e, data) {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          getValue = _this$props.getValue,
          setValue = _this$props.setValue,
          onChange = _this$props.onChange;
      var value = data.value;
      if (multiple && getValue() && getValue().length > value.length) _this.showError();
      setValue(value);
      if (onChange) onChange(e, data);
    };

    _this.handleBlur = function (e, data) {
      var onBlur = _this.props.onBlur;
      if (onBlur) onBlur(e, data);
    };

    _this.handleClose = function () {
      return _this.showError();
    };

    _this.showError = function () {
      return _this.setState({
        allowError: true
      });
    };

    return _this;
  }

  var _proto = FormsyDropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props2 = this.props,
        defaultValue = _this$props2.defaultValue,
        setValue = _this$props2.setValue;
    if (defaultValue) setValue(defaultValue);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.showError();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        inputAs = _this$props3.inputAs,
        id = _this$props3.id,
        required = _this$props3.required,
        label = _this$props3.label,
        getValue = _this$props3.getValue,
        defaultValue = _this$props3.defaultValue,
        multiple = _this$props3.multiple,
        errorLabel = _this$props3.errorLabel,
        getErrorMessage = _this$props3.getErrorMessage,
        isValid = _this$props3.isValid,
        isPristine = _this$props3.isPristine,
        as = _this$props3.as,
        width = _this$props3.width,
        className = _this$props3.className,
        disabled = _this$props3.disabled,
        inline = _this$props3.inline,
        passRequiredToField = _this$props3.passRequiredToField;
    var shortHandMode = inputAs === Form.Dropdown || inputAs === Form.Select;
    var error = !isPristine() && !isValid() && this.state.allowError;

    var dropdownProps = _extends(_extends({}, filterSuirElementProps(this.props)), {}, {
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onClose: this.handleClose,
      value: getValue() || defaultValue || multiple && [] || '',
      error: !disabled && error,
      id: id
    });

    var dropdownNode = shortHandMode ? createElement(inputAs, dropdownProps).props.control : inputAs;
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
    }, " ", label, " "), createElement(dropdownNode, _extends({}, dropdownProps)), error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()));
  };

  return FormsyDropdown;
}(Component);

FormsyDropdown.defaultProps = {
  inputAs: Dropdown,
  passRequiredToField: true
};
export default withFormsy(FormsyDropdown);