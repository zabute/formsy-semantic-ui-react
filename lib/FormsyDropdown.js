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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyDropdown.__proto__ || Object.getPrototypeOf(FormsyDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _this.handleChange = function (e, data) {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          getValue = _this$props.getValue,
          setValue = _this$props.setValue,
          onChange = _this$props.onChange;
      var value = data.value;

      if (multiple && getValue() && getValue().length > value.length) _this.showError();
      setValue(value);
      if (onChange) onChange(e, data);
    }, _this.handleBlur = function (e, data) {
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur(e, data);
    }, _this.handleClose = function () {
      return _this.showError();
    }, _this.showError = function () {
      return _this.setState({ allowError: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyDropdown, [{
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
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (nextProps.isFormSubmitted()) this.showError();
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            inputAs = _props2.inputAs,
            id = _props2.id,
            required = _props2.required,
            label = _props2.label,
            getValue = _props2.getValue,
            defaultValue = _props2.defaultValue,
            multiple = _props2.multiple,
            errorLabel = _props2.errorLabel,
            getErrorMessage = _props2.getErrorMessage,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            as = _props2.as,
            width = _props2.width,
            className = _props2.className,
            disabled = _props2.disabled,
            inline = _props2.inline,
            passRequiredToField = _props2.passRequiredToField;


        var shortHandMode = inputAs === _semanticUiReact.Form.Dropdown || inputAs === _semanticUiReact.Form.Select;
        var error = !isPristine() && !isValid() && this.state.allowError;

        var dropdownProps = _extends({}, (0, _utils.filterSuirElementProps)(this.props), {
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          onClose: this.handleClose,
          value: getValue() || defaultValue || multiple && [] || '',
          error: !disabled && error,
          id: id
        });

        var dropdownNode = shortHandMode ? (0, _react.createElement)(inputAs).props.control : inputAs;

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
          shortHandMode && _react2['default'].createElement(
            'label',
            { htmlFor: id },
            ' ',
            label,
            ' '
          ),
          (0, _react.createElement)(dropdownNode, _extends({}, dropdownProps)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyDropdown;
}(_react.Component), _class2.propTypes = {
  id: _propTypes2['default'].string,
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
  width: _propTypes2['default'].number,
  className: _propTypes2['default'].string,
  inputClassName: _propTypes2['default'].string,
  disabled: _propTypes2['default'].bool,
  inline: _propTypes2['default'].bool,
  passRequiredToField: _propTypes2['default'].bool,
  inputAs: _propTypes2['default'].oneOf([_semanticUiReact.Dropdown, _semanticUiReact.Select, _semanticUiReact.Form.Dropdown, _semanticUiReact.Form.Select]),
  defaultValue: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string, _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]))]),
  required: _propTypes2['default'].bool,
  label: _propTypes2['default'].string,
  errorLabel: _propTypes2['default'].element,
  isValid: _propTypes2['default'].func.isRequired,
  isPristine: _propTypes2['default'].func.isRequired,
  setValue: _propTypes2['default'].func.isRequired,
  onBlur: _propTypes2['default'].func,
  getValue: _propTypes2['default'].func.isRequired,
  multiple: _propTypes2['default'].bool,
  isFormSubmitted: _propTypes2['default'].func.isRequired,
  getErrorMessage: _propTypes2['default'].func.isRequired,
  onChange: _propTypes2['default'].func,
  validationError: _propTypes2['default'].string,
  validationErrors: _propTypes2['default'].object,
  validations: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object])
}, _class2.defaultProps = {
  inputAs: _semanticUiReact.Dropdown,
  passRequiredToField: true
}, _temp2)) || _class);
exports['default'] = FormsyDropdown;