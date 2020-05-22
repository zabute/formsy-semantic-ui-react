"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Form3 = _interopRequireDefault(require("semantic-ui-react/dist\\commonjs\\collections\\Form/Form"));

var _react = _interopRequireDefault(require("react"));

var _FormsyInput = _interopRequireDefault(require("./FormsyInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(_FormsyInput["default"], _extends({
    inputAs: _Form3["default"].TextArea
  }, props));
};

exports["default"] = _default;