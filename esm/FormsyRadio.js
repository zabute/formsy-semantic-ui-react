function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Checkbox from './FormsyCheckbox';
import { Radio } from 'semantic-ui-react';
export default (function (props) {
  return /*#__PURE__*/React.createElement(Checkbox, _extends({
    inputAs: Radio
  }, props));
});