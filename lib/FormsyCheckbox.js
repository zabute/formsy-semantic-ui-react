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

var FormsyCheckbox = (_dec = (0, _formsyReact.Decorator)(), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(FormsyCheckbox, _Component);

  function FormsyCheckbox() {
    _classCallCheck(this, FormsyCheckbox);

    return _possibleConstructorReturn(this, (FormsyCheckbox.__proto__ || Object.getPrototypeOf(FormsyCheckbox)).apply(this, arguments));
  }

  _createClass(FormsyCheckbox, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        if (this.props.defaultChecked) this.props.setValue(true);
      }

      return componentDidMount;
    }()
  }, {
    key: 'handleChange',
    value: function () {
      function handleChange(e, input) {
        this.props.setValue(input.checked);
        this.setState({ allowErrors: true });
      }

      return handleChange;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            as = _props.as,
            isValid = _props.isValid,
            isPristine = _props.isPristine,
            errorLabel = _props.errorLabel,
            getErrorMessage = _props.getErrorMessage,
            rootClassName = _props.rootClassName,
            rootStyle = _props.rootStyle,
            className = _props.className,
            style = _props.style,
            getValue = _props.getValue,
            defaultChecked = _props.defaultChecked,
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
            otherProps = _objectWithoutProperties(_props, ['as', 'isValid', 'isPristine', 'errorLabel', 'getErrorMessage', 'rootClassName', 'rootStyle', 'className', 'style', 'getValue', 'defaultChecked', 'setValidations', 'setValue', 'resetValue', 'hasValue', 'getErrorMessages', 'isFormDisabled', 'isFormSubmitted', 'isRequired', 'showRequired', 'showError', 'isValidValue', 'validations', 'validationError', 'validationErrors']);

        var props = _extends({
          checked: getValue(),
          onChange: this.handleChange.bind(this),
          className: className,
          style: style
        }, otherProps);

        return _react2['default'].createElement(
          'div',
          { className: rootClassName, style: rootStyle },
          (0, _react.cloneElement)(as === 'checkbox' ? _react2['default'].createElement(_semanticUiReact.Checkbox, null) : _react2['default'].createElement(_semanticUiReact.Radio, null), _extends({}, props)),
          !isValid() && !isPristine() && errorLabel && (0, _react.cloneElement)(errorLabel, { children: getErrorMessage() })
        );
      }

      return render;
    }()
  }]);

  return FormsyCheckbox;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  as: _react.PropTypes.oneOf(['checkbox', 'radio']),
  defaultChecked: _react.PropTypes.bool,
  setValue: _react.PropTypes.func.isRequired,
  isValid: _react.PropTypes.func.isRequired,
  getValue: _react.PropTypes.func.isRequired,
  isPristine: _react.PropTypes.func.isRequired,
  required: _react.PropTypes.bool,
  rootClassName: _react.PropTypes.string,
  rootStyle: _react.PropTypes.object,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  getErrorMessage: _react.PropTypes.func.isRequired,
  errorLabel: _react.PropTypes.element
}, _class2.defaultProps = {
  as: 'checkbox'
}, _temp)) || _class);
exports['default'] = FormsyCheckbox;