"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Radio3 = _interopRequireDefault(require("semantic-ui-react/dist\\commonjs\\addons\\Radio/Radio"));

var _react = _interopRequireDefault(require("react"));

var _FormsyCheckbox = _interopRequireDefault(require("./FormsyCheckbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsyCheckbox["default"], _extends({
    inputAs: _Radio3["default"]
  }, props));
};

exports["default"] = _default;