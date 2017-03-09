'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyInput = (_dec = (0, _formsyReact.Decorator)(), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(FormsyInput, _Component);

  function FormsyInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyInput.__proto__ || Object.getPrototypeOf(FormsyInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false, currentValue: null }, _this.setInputValue = (0, _lodash2['default'])(function (value) {
      return _this.props.setValue(value);
    }, 100), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyInput, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.setState({ currentValue: this.props.defaultValue });
        this.props.setValue(this.props.defaultValue);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (nextProps.isFormSubmitted()) this.setState({ allowError: true });
        if (nextProps.getValue() !== this.state.currentValue) {
          this.setState({ currentValue: this.props.getValue() });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentWillUpdate',
    value: function () {
      function componentWillUpdate(nextProps) {
        if (!this.props.isPristine() && nextProps.isPristine()) {
          this.setState({ currentValue: this.props.getValue() });
        }
      }

      return componentWillUpdate;
    }()
  }, {
    key: 'handleChange',
    value: function () {
      function handleChange(e, _ref2) {
        var value = _ref2.value;

        this.setState({ currentValue: value });
        this.setInputValue(value);
      }

      return handleChange;
    }()
  }, {
    key: 'handleBlur',
    value: function () {
      function handleBlur() {
        this.setState({ allowError: true });
        if (this.props.onBlur) this.props.onBlur();
      }

      return handleBlur;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            as = _props.as,
            isValid = _props.isValid,
            errorLabel = _props.errorLabel,
            getErrorMessage = _props.getErrorMessage,
            rootClassName = _props.rootClassName,
            rootStyle = _props.rootStyle,
            inputClassName = _props.inputClassName,
            inputStyle = _props.inputStyle,
            defaultValue = _props.defaultValue,
            isPristine = _props.isPristine,
            getValue = _props.getValue,
            setValidations = _props.setValidations,
            setValue = _props.setValue,
            resetValue = _props.resetValue,
            hasValue = _props.hasValue,
            getErrorMessages = _props.getErrorMessages,
            isFormDisabled = _props.isFormDisabled,
            isFormSubmitted = _props.isFormSubmitted,
            isRequired = _props.isRequired,
            showRequired = _props.showRequired,
            showError = _props.showError,
            isValidValue = _props.isValidValue,
            validations = _props.validations,
            validationError = _props.validationError,
            validationErrors = _props.validationErrors,
            otherProps = _objectWithoutProperties(_props, ['as', 'isValid', 'errorLabel', 'getErrorMessage', 'rootClassName', 'rootStyle', 'inputClassName', 'inputStyle', 'defaultValue', 'isPristine', 'getValue', 'setValidations', 'setValue', 'resetValue', 'hasValue', 'getErrorMessages', 'isFormDisabled', 'isFormSubmitted', 'isRequired', 'showRequired', 'showError', 'isValidValue', 'validations', 'validationError', 'validationErrors']);

        var _state = this.state,
            allowError = _state.allowError,
            currentValue = _state.currentValue;

        var error = !isValid() && !isPristine() && allowError;

        var props = _extends({
          error: error,
          onBlur: this.handleBlur.bind(this),
          onChange: this.handleChange.bind(this),
          className: inputClassName,
          value: currentValue || isPristine() && defaultValue || '',
          style: inputStyle
        }, otherProps);

        return _react2['default'].createElement(
          'div',
          { className: rootClassName, style: rootStyle },
          (0, _react.cloneElement)(as === 'input' ? _react2['default'].createElement(_semanticUiReact.Input, null) : _react2['default'].createElement(_semanticUiReact.TextArea, null), _extends({}, props)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, { children: getErrorMessage() })
        );
      }

      return render;
    }()
  }]);

  return FormsyInput;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  isValid: _react.PropTypes.func.isRequired,
  as: _react.PropTypes.oneOf(['input', 'textarea']),
  setValue: _react.PropTypes.func.isRequired,
  getValue: _react.PropTypes.func.isRequired,
  isPristine: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.string,
  errorLabel: _react.PropTypes.element,
  onBlur: _react.PropTypes.func,
  rootClassName: _react.PropTypes.string,
  rootStyle: _react.PropTypes.object,
  inputClassName: _react.PropTypes.string,
  inputStyle: _react.PropTypes.object,
  getErrorMessage: _react.PropTypes.func.isRequired,
  validationError: _react.PropTypes.string,
  validationErrors: _react.PropTypes.object,
  validations: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
}, _class2.defaultProps = {
  as: 'input',
  defaultValue: ''
}, _temp2)) || _class);
exports['default'] = FormsyInput;