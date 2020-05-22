"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Radio3 = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/addons/Radio/Radio"));

var _Checkbox3 = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox"));

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

    var checkboxProps = _extends(_extends({}, (0, _utils.filterSuirElementProps)(this.props)), {}, {
      checked: getValue(),
      onChange: this.handleChange
    });

    if (inputAs === _Checkbox3["default"] || inputAs === _Radio3["default"]) delete checkboxProps.error;
    return /*#__PURE__*/_react["default"].createElement(_Form3["default"].Field, {
      as: as,
      className: className,
      required: required && passRequiredToField,
      error: error,
      width: width,
      inline: inline,
      disabled: disabled
    }, (0, _react.createElement)(inputAs, _extends({}, checkboxProps)), error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage()));
  };

  return FormsyCheckbox;
}(_react.Component);

FormsyCheckbox.defaultProps = {
  inputAs: _Checkbox3["default"]
};

var _default = (0, _formsyReact.withFormsy)(FormsyCheckbox);

exports["default"] = _default;