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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyDropdown = (_dec = (0, _formsyReact.Decorator)(), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(FormsyDropdown, _Component);

  function FormsyDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyDropdown.__proto__ || Object.getPrototypeOf(FormsyDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _this.handleBlur = function () {
      _this.setState({ allowError: true });
      if (_this.props.onBlur) _this.props.onBlur();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyDropdown, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        if (this.props.defaultValue) this.props.setValue(this.props.defaultValue);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps() {
        if (this.props.isFormSubmitted()) this.setState({ allowError: true });
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'handleChange',
    value: function () {
      function handleChange(e, input) {
        this.props.setValue(input.value);
        if (!this.props.multiple) this.setState({ allowError: true });
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
            getValue = _props.getValue,
            defaultValue = _props.defaultValue,
            multiple = _props.multiple,
            rootClassName = _props.rootClassName,
            rootStyle = _props.rootStyle,
            className = _props.className,
            style = _props.style,
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
            otherProps = _objectWithoutProperties(_props, ['as', 'isValid', 'isPristine', 'errorLabel', 'getErrorMessage', 'getValue', 'defaultValue', 'multiple', 'rootClassName', 'rootStyle', 'className', 'style', 'setValidations', 'setValue', 'resetValue', 'hasValue', 'getErrorMessages', 'isFormDisabled', 'isFormSubmitted', 'isRequired', 'showRequired', 'showError', 'isValidValue', 'validations', 'validationError', 'validationErrors']);

        var allowError = this.state.allowError;


        var error = !isValid() && !isPristine() && allowError;

        var props = _extends({
          onChange: this.handleChange.bind(this),
          value: getValue() || defaultValue || multiple && [] || '',
          error: error,
          className: className,
          multiple: multiple,
          onBlur: this.handleBlur,
          style: style
        }, otherProps);

        return _react2['default'].createElement(
          'div',
          { className: rootClassName, style: rootStyle },
          (0, _react.cloneElement)(as === 'dropdown' ? _react2['default'].createElement(_semanticUiReact.Dropdown, null) : _react2['default'].createElement(_semanticUiReact.Select, null), _extends({}, props)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, { children: getErrorMessage() })
        );
      }

      return render;
    }()
  }]);

  return FormsyDropdown;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  as: _react.PropTypes.oneOf(['dropdown', 'select']),
  isValid: _react.PropTypes.func.isRequired,
  isPristine: _react.PropTypes.func.isRequired,
  setValue: _react.PropTypes.func.isRequired,
  onBlur: _react.PropTypes.func,
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
  getValue: _react.PropTypes.func.isRequired,
  multiple: _react.PropTypes.bool,
  errorLabel: _react.PropTypes.element,
  isFormSubmitted: _react.PropTypes.func.isRequired,
  getErrorMessage: _react.PropTypes.func.isRequired,
  rootClassName: _react.PropTypes.string,
  rootStyle: _react.PropTypes.object,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  validationError: _react.PropTypes.string,
  validationErrors: _react.PropTypes.object,
  validations: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
}, _class2.defaultProps = {
  as: 'dropdown'
}, _temp2)) || _class);
exports['default'] = FormsyDropdown;