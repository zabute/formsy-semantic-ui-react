"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formsyReact = require("formsy-react");

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var FormsyCheckbox = /*#__PURE__*/function (_Component) {
  _inherits(FormsyCheckbox, _Component);

  var _super = _createSuper(FormsyCheckbox);

  function FormsyCheckbox() {
    var _this;

    _classCallCheck(this, FormsyCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e, data) {
      var checked = data.checked;

      _this.props.setValue(checked);

      if (_this.props.onChange) _this.props.onChange(e, data);
    });

    return _this;
  }

  _createClass(FormsyCheckbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          defaultChecked = _this$props.defaultChecked,
          setValue = _this$props.setValue;
      if (defaultChecked) setValue(true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          inputAs = _this$props2.inputAs,
          required = _this$props2.required,
          isValid = _this$props2.isValid,
          isPristine = _this$props2.isPristine,
          errorLabel = _this$props2.errorLabel,
          errorMessage = _this$props2.errorMessage,
          value = _this$props2.value,
          as = _this$props2.as,
          width = _this$props2.width,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          inline = _this$props2.inline,
          passRequiredToField = _this$props2.passRequiredToField;
      var error = !isPristine && !isValid;

      var checkboxProps = _objectSpread(_objectSpread({}, (0, _utils.filterSuirElementProps)(this.props)), {}, {
        checked: !!value,
        onChange: this.handleChange
      });

      if (inputAs === _semanticUiReact.Checkbox || inputAs === _semanticUiReact.Radio) delete checkboxProps.error;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
        as: as,
        className: className,
        required: required && passRequiredToField,
        error: error,
        width: width,
        inline: inline,
        disabled: disabled
      }, /*#__PURE__*/(0, _react.createElement)(inputAs, _objectSpread({}, checkboxProps)), error && errorLabel && /*#__PURE__*/(0, _react.cloneElement)(errorLabel, {}, errorMessage));
    }
  }]);

  return FormsyCheckbox;
}(_react.Component);

_defineProperty(FormsyCheckbox, "propTypes", {
  name: _propTypes["default"].string.isRequired,
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  width: _propTypes["default"].number,
  className: _propTypes["default"].string,
  inputClassName: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  inline: _propTypes["default"].bool,
  passRequiredToField: _propTypes["default"].bool,
  inputAs: _propTypes["default"].oneOf([_semanticUiReact.Form.Checkbox, _semanticUiReact.Form.Radio, _semanticUiReact.Checkbox, _semanticUiReact.Radio]),
  defaultChecked: _propTypes["default"].bool,
  setValue: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].any,
  isValid: _propTypes["default"].bool.isRequired,
  isPristine: _propTypes["default"].bool.isRequired,
  required: _propTypes["default"].bool,
  errorMessage: _propTypes["default"].string,
  errorLabel: _propTypes["default"].element,
  onChange: _propTypes["default"].func
});

_defineProperty(FormsyCheckbox, "defaultProps", {
  inputAs: _semanticUiReact.Checkbox
});

var _default = (0, _formsyReact.withFormsy)(FormsyCheckbox);

exports["default"] = _default;