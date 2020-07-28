'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyInput = function (_Component) {
  _inherits(FormsyInput, _Component);

  function FormsyInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyInput.__proto__ || Object.getPrototypeOf(FormsyInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _this.handleChange = function (e, data) {
      var value = data.value;

      _this.props.setValue(value);
      if (_this.props.onChange) _this.props.onChange(e, data);
      if (_this.props.instantValidation) _this.showError();
    }, _this.handleBlur = function (e, data) {
      _this.showError();
      if (_this.props.onBlur) _this.props.onBlur(e, data);
    }, _this.showError = function () {
      return _this.setState({ allowError: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyInput, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            defaultValue = _props.defaultValue,
            setValue = _props.setValue;

        if (defaultValue) setValue(defaultValue);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        if (prevProps.isFormSubmitted !== this.props.isFormSubmitted && this.props.isFormSubmitted) {
          this.showError();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            id = _props2.id,
            inputAs = _props2.inputAs,
            inputClassName = _props2.inputClassName,
            required = _props2.required,
            label = _props2.label,
            defaultValue = _props2.defaultValue,
            value = _props2.value,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            errorMessage = _props2.errorMessage,
            errorLabel = _props2.errorLabel,
            as = _props2.as,
            width = _props2.width,
            className = _props2.className,
            disabled = _props2.disabled,
            inline = _props2.inline,
            passRequiredToField = _props2.passRequiredToField;
        var allowError = this.state.allowError;

        var error = !isPristine && !isValid && allowError;

        var inputProps = _extends({}, (0, _utils.filterSuirElementProps)(this.props), {
          value: value || isPristine && defaultValue || '',
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          className: inputClassName,
          error: !disabled && error,
          label: label,
          id: id
        });

        var isFormField = inputAs === _semanticUiReact.Form.Input || inputAs === _semanticUiReact.Form.TextArea;
        var inputNode = isFormField ? (0, _react.createElement)(inputAs).props.control : inputAs;

        if (isFormField) {
          delete inputProps.label;
          if (inputAs === _semanticUiReact.Form.TextArea) delete inputProps.error;
        }

        var inputElement = !isFormField && (0, _react.isValidElement)(inputAs) ? (0, _react.cloneElement)(inputAs, _extends({}, inputProps, inputAs.props)) : (0, _react.createElement)(inputNode, _extends({}, inputProps));

        var shouldShowFormLabel = isFormField || (0, _react.isValidElement)(inputAs);

        return _react2['default'].createElement(
          _semanticUiReact.Form.Field,
          {
            as: as,
            className: className,
            required: required && passRequiredToField,
            error: !disabled && error,
            width: width,
            inline: inline,
            disabled: disabled
          },
          shouldShowFormLabel && label && _react2['default'].createElement(
            'label',
            { htmlFor: id },
            ' ',
            label,
            ' '
          ),
          inputElement,
          !disabled && error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, errorMessage)
        );
      }

      return render;
    }()
  }]);

  return FormsyInput;
}(_react.Component);

FormsyInput.propTypes = {
  id: _propTypes2['default'].string,
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
  width: _propTypes2['default'].number,
  className: _propTypes2['default'].string,
  inputClassName: _propTypes2['default'].string,
  disabled: _propTypes2['default'].bool,
  inline: _propTypes2['default'].bool,
  passRequiredToField: _propTypes2['default'].bool,
  inputAs: _propTypes2['default'].any,
  errorLabel: _propTypes2['default'].element,
  required: _propTypes2['default'].bool,
  label: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
  instantValidation: _propTypes2['default'].bool,
  defaultValue: _propTypes2['default'].string,
  onBlur: _propTypes2['default'].func,
  setValue: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  onChange: _propTypes2['default'].func,
  isValid: _propTypes2['default'].bool.isRequired,
  isPristine: _propTypes2['default'].bool.isRequired,
  isFormSubmitted: _propTypes2['default'].bool.isRequired,
  errorMessage: _propTypes2['default'].string,
  validationError: _propTypes2['default'].string,
  validationErrors: _propTypes2['default'].object,
  validations: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object])
};
FormsyInput.defaultProps = {
  inputAs: _semanticUiReact.Input,
  passRequiredToField: true
};
exports['default'] = (0, _formsyReact.withFormsy)(FormsyInput);