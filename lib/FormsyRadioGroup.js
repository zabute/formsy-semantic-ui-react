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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyRadioGroup = (_dec = (0, _formsyReact.Decorator)(), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(FormsyRadioGroup, _Component);

  function FormsyRadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyRadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyRadioGroup.__proto__ || Object.getPrototypeOf(FormsyRadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, input) {
      _this.props.setValue(input.value);
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
            label = _props2.label,
            required = _props2.required,
            formRadioGroup = _props2.formRadioGroup,
            children = _props2.children,
            getValue = _props2.getValue,
            errorLabel = _props2.errorLabel,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            getErrorMessage = _props2.getErrorMessage;


        var error = !isPristine() && !isValid();
        var formFieldProps = { required: required, label: label, error: error };

        return _react2['default'].createElement(
          _semanticUiReact.Form.Group,
          null,
          label && _react2['default'].createElement(_semanticUiReact.Form.Field, formFieldProps),
          _react.Children.map(children, function (radio) {
            var props = {
              checked: getValue() === radio.props.value,
              onChange: _this2.handleChange
            };if (formRadioGroup) props.error = error;
            return (0, _react.cloneElement)(radio, _extends({}, props));
          }),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyRadioGroup;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  formRadioGroup: _react.PropTypes.bool,
  rootElement: _react.PropTypes.any,
  required: _react.PropTypes.bool,
  inline: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  setValue: _react.PropTypes.func.isRequired,
  getValue: _react.PropTypes.func.isRequired,
  isValid: _react.PropTypes.func.isRequired,
  isPristine: _react.PropTypes.func.isRequired,
  defaultSelected: _react.PropTypes.string,
  errorLabel: _react.PropTypes.element,
  getErrorMessage: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node,
  validationError: _react.PropTypes.string,
  validationErrors: _react.PropTypes.object,
  validations: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
}, _class2.defaultProps = {
  rootElement: _semanticUiReact.Form.Field
}, _temp2)) || _class);
exports['default'] = FormsyRadioGroup;