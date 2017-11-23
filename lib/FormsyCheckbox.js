'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyCheckbox = function (_Component) {
  _inherits(FormsyCheckbox, _Component);

  function FormsyCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyCheckbox.__proto__ || Object.getPrototypeOf(FormsyCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, data) {
      var checked = data.checked;

      _this.props.setValue(checked);
      if (_this.props.onChange) _this.props.onChange(e, data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyCheckbox, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            defaultChecked = _props.defaultChecked,
            setValue = _props.setValue;

        if (defaultChecked) setValue(true);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            inputAs = _props2.inputAs,
            required = _props2.required,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            errorLabel = _props2.errorLabel,
            getErrorMessage = _props2.getErrorMessage,
            getValue = _props2.getValue,
            as = _props2.as,
            width = _props2.width,
            className = _props2.className,
            disabled = _props2.disabled,
            inline = _props2.inline,
            passRequiredToField = _props2.passRequiredToField;


        var error = !isPristine() && !isValid();

        var checkboxProps = _extends({}, (0, _utils.filterSuirElementProps)(this.props), {
          checked: getValue(),
          onChange: this.handleChange
        });

        if (inputAs === _semanticUiReact.Checkbox || inputAs === _semanticUiReact.Radio) delete checkboxProps.error;

        return _react2['default'].createElement(
          _semanticUiReact.Form.Field,
          {
            as: as,
            className: className,
            required: required && passRequiredToField,
            error: error,
            width: width,
            inline: inline,
            disabled: disabled
          },
          (0, _react.createElement)(inputAs, _extends({}, checkboxProps)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyCheckbox;
}(_react.Component);

FormsyCheckbox.propTypes = {
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
  width: _propTypes2['default'].number,
  className: _propTypes2['default'].string,
  inputClassName: _propTypes2['default'].string,
  disabled: _propTypes2['default'].bool,
  inline: _propTypes2['default'].bool,
  passRequiredToField: _propTypes2['default'].bool,
  inputAs: _propTypes2['default'].oneOf([_semanticUiReact.Form.Checkbox, _semanticUiReact.Form.Radio, _semanticUiReact.Checkbox, _semanticUiReact.Radio]),
  defaultChecked: _propTypes2['default'].bool,
  setValue: _propTypes2['default'].func.isRequired,
  isValid: _propTypes2['default'].func.isRequired,
  getValue: _propTypes2['default'].func.isRequired,
  isPristine: _propTypes2['default'].func.isRequired,
  required: _propTypes2['default'].bool,
  getErrorMessage: _propTypes2['default'].func.isRequired,
  errorLabel: _propTypes2['default'].element,
  onChange: _propTypes2['default'].func
};
FormsyCheckbox.defaultProps = {
  inputAs: _semanticUiReact.Checkbox
};
exports['default'] = (0, _formsyReact.withFormsy)(FormsyCheckbox);