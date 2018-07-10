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

var FormsyRadioGroup = function (_Component) {
  _inherits(FormsyRadioGroup, _Component);

  function FormsyRadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyRadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyRadioGroup.__proto__ || Object.getPrototypeOf(FormsyRadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, data) {
      var value = data.value;

      _this.props.setValue(value);
      if (_this.props.onChange) _this.props.onChange(e, data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyRadioGroup, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            defaultSelected = _props.defaultSelected,
            setValue = _props.setValue;

        if (defaultSelected) setValue(defaultSelected);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props2 = this.props,
            as = _props2.as,
            label = _props2.label,
            required = _props2.required,
            formRadioGroup = _props2.formRadioGroup,
            defaultSelected = _props2.defaultSelected,
            children = _props2.children,
            getValue = _props2.getValue,
            errorLabel = _props2.errorLabel,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            getErrorMessage = _props2.getErrorMessage,
            passRequiredToField = _props2.passRequiredToField,
            disabled = _props2.disabled;


        var error = !isPristine() && !isValid();
        var formFieldProps = {
          required: required && passRequiredToField,
          error: !disabled && error,
          label: label
        };

        return _react2['default'].createElement(
          _semanticUiReact.Form.Group,
          _extends({ as: as }, (0, _utils.filterSuirElementProps)(this.props)),
          label && _react2['default'].createElement(_semanticUiReact.Form.Field, formFieldProps),
          _react.Children.map(children, function (radio) {
            var props = {
              checked: getValue() === radio.props.value,
              onChange: _this2.handleChange
            };if (formRadioGroup) props.error = error;
            return _react2['default'].createElement(
              _semanticUiReact.Form.Field,
              null,
              ' ',
              (0, _react.cloneElement)(radio, _extends({}, props)),
              ' '
            );
          }),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyRadioGroup;
}(_react.Component);

FormsyRadioGroup.propTypes = {
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),
  passRequiredToField: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  formRadioGroup: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  label: _propTypes2['default'].string,
  setValue: _propTypes2['default'].func.isRequired,
  getValue: _propTypes2['default'].func.isRequired,
  isValid: _propTypes2['default'].func.isRequired,
  isPristine: _propTypes2['default'].func.isRequired,
  onChange: _propTypes2['default'].func,
  defaultSelected: _propTypes2['default'].string,
  errorLabel: _propTypes2['default'].element,
  getErrorMessage: _propTypes2['default'].func.isRequired,
  children: _propTypes2['default'].node,
  validationError: _propTypes2['default'].string,
  validationErrors: _propTypes2['default'].object,
  validations: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object])
};
FormsyRadioGroup.defaultProps = {
  passRequiredToField: true
};
exports['default'] = (0, _formsyReact.withFormsy)(FormsyRadioGroup);