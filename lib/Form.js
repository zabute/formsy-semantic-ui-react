"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formsyReact = _interopRequireDefault(require("formsy-react"));

var _semanticUiReact = require("semantic-ui-react");

var _FormsyInput = _interopRequireDefault(require("./FormsyInput"));

var _FormsyTextArea = _interopRequireDefault(require("./FormsyTextArea"));

var _FormsyCheckbox = _interopRequireDefault(require("./FormsyCheckbox"));

var _FormsyDropdown = _interopRequireDefault(require("./FormsyDropdown"));

var _FormsySelect = _interopRequireDefault(require("./FormsySelect"));

var _FormsyRadioGroup = _interopRequireDefault(require("./FormsyRadioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "updateInputsWithError", function (errors) {
      return _this.formsyForm.updateInputsWithError(errors);
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function (mapping) {
      return _this.formsyForm.reset(mapping);
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (event) {
      return _this.formsyForm.submit(event);
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
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
          nonFormsyReactFormProps = _objectWithoutProperties(_this$props2, ["mapping", "validationErrors", "onValid", "onValidSubmit", "onInvalid", "onInvalidSubmit", "onChange", "reset", "preventExternalInvalidation", "onSuccess", "onError"]);

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
          nonSemanticUIFormProps = _objectWithoutProperties(_this$props3, ["as", "error", "inverted", "loading", "reply", "size", "success", "warning", "width"]);

      return /*#__PURE__*/_react["default"].createElement(_formsyReact["default"], _extends({
        noValidate: true,
        ref: function ref(_ref) {
          return _this2.formsyForm = _ref;
        },
        onSubmit: onSubmit
      }, nonSemanticUIFormProps), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form, _extends({
        as: as
      }, nonFormsyReactFormProps), children));
    }
  }]);

  return Form;
}(_react.Component);

exports["default"] = Form;

_defineProperty(Form, "propTypes", {
  as: _propTypes["default"].any,
  children: _propTypes["default"].node,
  onSubmit: _propTypes["default"].func
});

_defineProperty(Form, "defaultProps", {
  as: 'div'
});

_defineProperty(Form, "Input", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsyInput["default"], _extends({
    inputAs: _semanticUiReact.Form.Input
  }, props));
});

_defineProperty(Form, "TextArea", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsyTextArea["default"], _extends({
    inputAs: _semanticUiReact.Form.TextArea
  }, props));
});

_defineProperty(Form, "Select", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsySelect["default"], _extends({
    inputAs: _semanticUiReact.Form.Select
  }, props));
});

_defineProperty(Form, "RadioGroup", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsyRadioGroup["default"], _extends({
    formRadioGroup: true
  }, props));
});

_defineProperty(Form, "Dropdown", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsyDropdown["default"], _extends({
    inputAs: _semanticUiReact.Form.Dropdown
  }, props));
});

_defineProperty(Form, "Checkbox", _FormsyCheckbox["default"]);

_defineProperty(Form, "Button", _semanticUiReact.Form.Button);

_defineProperty(Form, "Radio", _semanticUiReact.Form.Radio);

_defineProperty(Form, "Field", _semanticUiReact.Form.Field);

_defineProperty(Form, "Group", _semanticUiReact.Form.Group);