"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _TextArea3 = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/addons/TextArea/TextArea"));

var _Input3 = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/elements/Input/Input"));

var _Form3 = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/collections/Form/Form"));

var _react = _interopRequireWildcard(require("react"));

var _formsyReact = require("formsy-react");

var _utils = require("./utils");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

    var inputProps = _extends(_extends({}, (0, _utils.filterSuirElementProps)(this.props)), {}, {
      value: getValue() || isPristine() && defaultValue || '',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      className: inputClassName,
      error: !disabled && error,
      label: label,
      id: id
    });

    var shortHandMode = inputAs === _Form3["default"].Input || inputAs === _Form3["default"].TextArea;
    var inputNode = shortHandMode ? (0, _react.createElement)(inputAs).props.control : inputAs;

    if (shortHandMode) {
      delete inputProps.label;
      if (inputAs === _Form3["default"].TextArea) delete inputProps.error;
    }

    return /*#__PURE__*/_react["default"].createElement(_Form3["default"].Field, {
      as: as,
      className: className,
      required: required && passRequiredToField,
      error: !disabled && error,
      width: width,
      inline: inline,
      disabled: disabled
    }, shortHandMode && label && /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: id
    }, " ", label, " "), (0, _react.createElement)(inputNode, _extends({}, inputProps)), !disabled && error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage()));
  };

  return FormsyInput;
}(_react.Component);

FormsyInput.defaultProps = {
  inputAs: _Input3["default"],
  passRequiredToField: true
};

var _default = (0, _formsyReact.withFormsy)(FormsyInput);

exports["default"] = _default;