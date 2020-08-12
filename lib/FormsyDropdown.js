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

var FormsyDropdown = /*#__PURE__*/function (_Component) {
  _inherits(FormsyDropdown, _Component);

  var _super = _createSuper(FormsyDropdown);

  function FormsyDropdown() {
    var _this;

    _classCallCheck(this, FormsyDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      allowError: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e, data) {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          value = _this$props.value,
          setValue = _this$props.setValue,
          onChange = _this$props.onChange;

      if (multiple && value && value.length > data.value.length) {
        _this.showError();
      }

      setValue(data.value);

      if (onChange) {
        onChange(e, data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e, data) {
      var onBlur = _this.props.onBlur;
      if (onBlur) onBlur(e, data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      return _this.showError();
    });

    _defineProperty(_assertThisInitialized(_this), "showError", function () {
      return _this.setState({
        allowError: true
      });
    });

    return _this;
  }

  _createClass(FormsyDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          defaultValue = _this$props2.defaultValue,
          setValue = _this$props2.setValue;
      if (defaultValue) setValue(defaultValue);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isFormSubmitted !== this.props.isFormSubmitted && this.props.isFormSubmitted) {
        this.showError();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          inputAs = _this$props3.inputAs,
          id = _this$props3.id,
          required = _this$props3.required,
          label = _this$props3.label,
          value = _this$props3.value,
          defaultValue = _this$props3.defaultValue,
          multiple = _this$props3.multiple,
          errorLabel = _this$props3.errorLabel,
          errorMessage = _this$props3.errorMessage,
          isValid = _this$props3.isValid,
          isPristine = _this$props3.isPristine,
          as = _this$props3.as,
          width = _this$props3.width,
          className = _this$props3.className,
          disabled = _this$props3.disabled,
          inline = _this$props3.inline,
          passRequiredToField = _this$props3.passRequiredToField;
      var shortHandMode = inputAs === _semanticUiReact.Form.Dropdown || inputAs === _semanticUiReact.Form.Select;
      var error = !isPristine && !isValid && this.state.allowError;

      var dropdownProps = _objectSpread(_objectSpread({}, (0, _utils.filterSuirElementProps)(this.props)), {}, {
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        onClose: this.handleClose,
        value: value || defaultValue || multiple && [] || '',
        error: !disabled && error,
        id: id
      });

      var dropdownNode = shortHandMode ? /*#__PURE__*/(0, _react.createElement)(inputAs, dropdownProps).props.control : inputAs;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
        as: as,
        className: className,
        required: required && passRequiredToField,
        error: !disabled && error,
        width: width,
        inline: inline,
        disabled: disabled
      }, shortHandMode && label && /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: id
      }, " ", label, " "), /*#__PURE__*/(0, _react.createElement)(dropdownNode, _objectSpread({}, dropdownProps)), error && errorLabel && /*#__PURE__*/(0, _react.cloneElement)(errorLabel, {}, errorMessage));
    }
  }]);

  return FormsyDropdown;
}(_react.Component);

_defineProperty(FormsyDropdown, "propTypes", {
  id: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  width: _propTypes["default"].number,
  className: _propTypes["default"].string,
  inputClassName: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  inline: _propTypes["default"].bool,
  passRequiredToField: _propTypes["default"].bool,
  inputAs: _propTypes["default"].oneOf([_semanticUiReact.Dropdown, _semanticUiReact.Select, _semanticUiReact.Form.Dropdown, _semanticUiReact.Form.Select]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]))]),
  required: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  errorLabel: _propTypes["default"].element,
  isValid: _propTypes["default"].bool.isRequired,
  isPristine: _propTypes["default"].bool.isRequired,
  isFormSubmitted: _propTypes["default"].bool.isRequired,
  setValue: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func,
  value: _propTypes["default"].any,
  multiple: _propTypes["default"].bool,
  errorMessage: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  validationError: _propTypes["default"].string,
  validationErrors: _propTypes["default"].object,
  validations: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
});

_defineProperty(FormsyDropdown, "defaultProps", {
  inputAs: _semanticUiReact.Dropdown,
  passRequiredToField: true
});

var _default = (0, _formsyReact.withFormsy)(FormsyDropdown);

exports["default"] = _default;