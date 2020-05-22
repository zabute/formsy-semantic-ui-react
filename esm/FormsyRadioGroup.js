function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Form } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

var FormsyRadioGroup = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormsyRadioGroup, _Component);

  function FormsyRadioGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleChange = function (e, data) {
      var value = data.value;

      _this.props.setValue(value);

      if (_this.props.onChange) _this.props.onChange(e, data);
    };

    return _this;
  }

  var _proto = FormsyRadioGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        defaultSelected = _this$props.defaultSelected,
        setValue = _this$props.setValue;
    if (defaultSelected) setValue(defaultSelected);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        as = _this$props2.as,
        label = _this$props2.label,
        required = _this$props2.required,
        formRadioGroup = _this$props2.formRadioGroup,
        defaultSelected = _this$props2.defaultSelected,
        children = _this$props2.children,
        getValue = _this$props2.getValue,
        errorLabel = _this$props2.errorLabel,
        isValid = _this$props2.isValid,
        isPristine = _this$props2.isPristine,
        getErrorMessage = _this$props2.getErrorMessage,
        passRequiredToField = _this$props2.passRequiredToField,
        disabled = _this$props2.disabled;
    var error = !isPristine() && !isValid();
    var formFieldProps = {
      required: required && passRequiredToField,
      error: !disabled && error,
      label: label
    };
    return /*#__PURE__*/React.createElement(Form.Group, _extends({
      as: as
    }, filterSuirElementProps(this.props)), label && /*#__PURE__*/React.createElement(Form.Field, formFieldProps), Children.map(children, function (radio) {
      var props = {
        checked: getValue() === radio.props.value,
        onChange: _this2.handleChange
      };
      if (formRadioGroup) props.error = error;
      return /*#__PURE__*/React.createElement(Form.Field, null, " ", cloneElement(radio, _extends({}, props)), " ");
    }), error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()));
  };

  return FormsyRadioGroup;
}(Component);

FormsyRadioGroup.defaultProps = {
  passRequiredToField: true
};
export default withFormsy(FormsyRadioGroup);