"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Form3 = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/collections/Form/Form"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formsyReact = require("formsy-react");

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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
    return /*#__PURE__*/_react["default"].createElement(_Form3["default"].Group, _extends({
      as: as
    }, (0, _utils.filterSuirElementProps)(this.props)), label && /*#__PURE__*/_react["default"].createElement(_Form3["default"].Field, formFieldProps), _react.Children.map(children, function (radio) {
      var props = {
        checked: getValue() === radio.props.value,
        onChange: _this2.handleChange
      };
      if (formRadioGroup) props.error = error;
      return /*#__PURE__*/_react["default"].createElement(_Form3["default"].Field, null, " ", (0, _react.cloneElement)(radio, _extends({}, props)), " ");
    }), error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage()));
  };

  return FormsyRadioGroup;
}(_react.Component);

FormsyRadioGroup.defaultProps = {
  passRequiredToField: true
};

var _default = (0, _formsyReact.withFormsy)(FormsyRadioGroup);

exports["default"] = _default;