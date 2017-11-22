'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormsyCheckbox = require('./FormsyCheckbox');

var _FormsyCheckbox2 = _interopRequireDefault(_FormsyCheckbox);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _default = function () {
  function _default(props) {
    return _react2['default'].createElement(_FormsyCheckbox2['default'], _extends({ inputAs: _semanticUiReact.Radio }, props));
  }

  return _default;
}();

exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/FormsyRadio.js');
}();

;