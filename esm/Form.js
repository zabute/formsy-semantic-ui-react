function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import { Form as SemanticUIForm } from 'semantic-ui-react';
import FormsyInput from './FormsyInput';
import FormsyTextArea from './FormsyTextArea';
import FormsyCheckbox from './FormsyCheckbox';
import FormsyDropdown from './FormsyDropdown';
import FormsySelect from './FormsySelect';
import FormsyRadioGroup from './FormsyRadioGroup';

var Form = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.updateInputsWithError = function (errors) {
      return _this.formsyForm.updateInputsWithError(errors);
    };

    _this.reset = function (mapping) {
      return _this.formsyForm.reset(mapping);
    };

    _this.submit = function (event) {
      return _this.formsyForm.submit(event);
    };

    return _this;
  }

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        onSubmit = _this$props.onSubmit;

    var _this$props2 = this.props,
        mapping = _this$props2.mapping,
        validationErrors = _this$props2.validationErrors,
        onValid = _this$props2.onValid,
        onValidSubmit = _this$props2.onValidSubmit,
        onInvalid = _this$props2.onInvalid,
        onInvalidSubmit = _this$props2.onInvalidSubmit,
        onChange = _this$props2.onChange,
        reset = _this$props2.reset,
        preventExternalInvalidation = _this$props2.preventExternalInvalidation,
        onSuccess = _this$props2.onSuccess,
        onError = _this$props2.onError,
        nonFormsyReactFormProps = _objectWithoutPropertiesLoose(_this$props2, ["mapping", "validationErrors", "onValid", "onValidSubmit", "onInvalid", "onInvalidSubmit", "onChange", "reset", "preventExternalInvalidation", "onSuccess", "onError"]);

    var _this$props3 = this.props,
        as = _this$props3.as,
        error = _this$props3.error,
        inverted = _this$props3.inverted,
        loading = _this$props3.loading,
        reply = _this$props3.reply,
        size = _this$props3.size,
        success = _this$props3.success,
        warning = _this$props3.warning,
        width = _this$props3.width,
        nonSemanticUIFormProps = _objectWithoutPropertiesLoose(_this$props3, ["as", "error", "inverted", "loading", "reply", "size", "success", "warning", "width"]);

    return /*#__PURE__*/React.createElement(Formsy, _extends({
      noValidate: true,
      ref: function ref(_ref) {
        return _this2.formsyForm = _ref;
      },
      onSubmit: onSubmit
    }, nonSemanticUIFormProps), /*#__PURE__*/React.createElement(SemanticUIForm, _extends({
      as: as
    }, nonFormsyReactFormProps), children));
  };

  return Form;
}(Component);

Form.defaultProps = {
  as: 'div'
};

Form.Input = function (props) {
  return /*#__PURE__*/React.createElement(FormsyInput, _extends({
    inputAs: SemanticUIForm.Input
  }, props));
};

Form.TextArea = function (props) {
  return /*#__PURE__*/React.createElement(FormsyTextArea, _extends({
    inputAs: SemanticUIForm.TextArea
  }, props));
};

Form.Select = function (props) {
  return /*#__PURE__*/React.createElement(FormsySelect, _extends({
    inputAs: SemanticUIForm.Select
  }, props));
};

Form.RadioGroup = function (props) {
  return /*#__PURE__*/React.createElement(FormsyRadioGroup, _extends({
    formRadioGroup: true
  }, props));
};

Form.Dropdown = function (props) {
  return /*#__PURE__*/React.createElement(FormsyDropdown, _extends({
    inputAs: SemanticUIForm.Dropdown
  }, props));
};

Form.Checkbox = FormsyCheckbox;
Form.Button = SemanticUIForm.Button;
Form.Radio = SemanticUIForm.Radio;
Form.Field = SemanticUIForm.Field;
Form.Group = SemanticUIForm.Group;
export { Form as default };