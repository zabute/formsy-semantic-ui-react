function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Form, Checkbox, Radio } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

var FormsyCheckbox = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormsyCheckbox, _Component);

  function FormsyCheckbox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleChange = function (e, data) {
      var checked = data.checked;

      _this.props.setValue(checked);

      if (_this.props.onChange) _this.props.onChange(e, data);
    };

    return _this;
  }

  var _proto = FormsyCheckbox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        defaultChecked = _this$props.defaultChecked,
        setValue = _this$props.setValue;
    if (defaultChecked) setValue(true);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        inputAs = _this$props2.inputAs,
        required = _this$props2.required,
        isValid = _this$props2.isValid,
        isPristine = _this$props2.isPristine,
        errorLabel = _this$props2.errorLabel,
        getErrorMessage = _this$props2.getErrorMessage,
        getValue = _this$props2.getValue,
        as = _this$props2.as,
        width = _this$props2.width,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        inline = _this$props2.inline,
        passRequiredToField = _this$props2.passRequiredToField;
    var error = !isPristine() && !isValid();

    var checkboxProps = _extends(_extends({}, filterSuirElementProps(this.props)), {}, {
      checked: getValue(),
      onChange: this.handleChange
    });

    if (inputAs === Checkbox || inputAs === Radio) delete checkboxProps.error;
    return /*#__PURE__*/React.createElement(Form.Field, {
      as: as,
      className: className,
      required: required && passRequiredToField,
      error: error,
      width: width,
      inline: inline,
      disabled: disabled
    }, createElement(inputAs, _extends({}, checkboxProps)), error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()));
  };

  return FormsyCheckbox;
}(Component);

FormsyCheckbox.defaultProps = {
  inputAs: Checkbox
};
export default withFormsy(FormsyCheckbox);