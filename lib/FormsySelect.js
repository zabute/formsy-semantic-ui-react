'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsySelect = (_dec = (0, _formsyReact.Decorator)(), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(FormsySelect, _Component);

  function FormsySelect() {
    _classCallCheck(this, FormsySelect);

    return _possibleConstructorReturn(this, (FormsySelect.__proto__ || Object.getPrototypeOf(FormsySelect)).apply(this, arguments));
  }

  _createClass(FormsySelect, [{
    key: 'handleChange',
    value: function () {
      function handleChange(e, input) {
        this.props.setValue(input.value);
      }

      return handleChange;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            isValid = _props.isValid,
            isPristine = _props.isPristine,
            errorLabel = _props.errorLabel,
            getErrorMessage = _props.getErrorMessage,
            setValidations = _props.setValidations,
            setValue = _props.setValue,
            resetValue = _props.resetValue,
            getValue = _props.getValue,
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
            otherProps = _objectWithoutProperties(_props, ['isValid', 'isPristine', 'errorLabel', 'getErrorMessage', 'setValidations', 'setValue', 'resetValue', 'getValue', 'hasValue', 'getErrorMessages', 'isFormDisabled', 'isFormSubmitted', 'isRequired', 'showRequired', 'showError', 'isValidValue', 'validations', 'validationError', 'validationErrors']);

        var error = !isValid() && !isPristine();

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_semanticUiReact.Select, _extends({
            onChange: this.handleChange.bind(this),
            error: error
          }, otherProps)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, { children: getErrorMessage() })
        );
      }

      return render;
    }()
  }]);

  return FormsySelect;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  isValid: _react.PropTypes.func.isRequired,
  isPristine: _react.PropTypes.func.isRequired,
  setValue: _react.PropTypes.func.isRequired,
  errorLabel: _react.PropTypes.element,
  getErrorMessage: _react.PropTypes.func.isRequired,
  validationError: _react.PropTypes.string,
  validationErrors: _react.PropTypes.object,
  validations: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
}, _temp)) || _class);
exports['default'] = FormsySelect;