'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('./utils');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyDropdown.__proto__ || Object.getPrototypeOf(FormsyDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _this.handleChange = function (e, _ref2) {
      var value = _ref2.value;
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          getValue = _this$props.getValue,
          setValue = _this$props.setValue;

      if (multiple && getValue() && getValue().length > value.length) _this.showError();
      setValue(value);
    }, _this.showError = function () {
      return _this.setState({ allowError: true });
    }, _this.handleClose = function () {
      return _this.showError();
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
            as = _props2.as,
            rootElement = _props2.rootElement,
            getValue = _props2.getValue,
            defaultValue = _props2.defaultValue,
            multiple = _props2.multiple,
            errorLabel = _props2.errorLabel,
            getErrorMessage = _props2.getErrorMessage,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine;


        var error = !isPristine() && !isValid() && this.state.allowError;

        var dropdownProps = _extends({
          key: 'dropdown',
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          onClose: this.handleClose,
          value: getValue() || defaultValue || multiple && [],
          error: error
        }, (0, _utils.filterSuirElementProps)(this.props));

        var errorLabelProps = {
          key: 'errorLabel',
          children: getErrorMessage()
        };

        return (0, _react.createElement)(rootElement, {}, [(0, _react.createElement)(as, _extends({}, dropdownProps)), error && errorLabel && (typeof errorLabel === 'string' ? (0, _react.createElement)(errorLabel, _extends({}, errorLabelProps)) : (0, _react.cloneElement)(errorLabel, _extends({}, errorLabelProps)))]);
      }

      return render;
    }()
  }]);

  return FormsyDropdown;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  rootElement: _react.PropTypes.any,
  as: _react.PropTypes.oneOf([_semanticUiReact.Dropdown, _semanticUiReact.Select, _semanticUiReact.Form.Dropdown, _semanticUiReact.Form.Select]),
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
  errorLabel: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),
  isValid: _react.PropTypes.func.isRequired,
  isPristine: _react.PropTypes.func.isRequired,
  setValue: _react.PropTypes.func.isRequired,
  onBlur: _react.PropTypes.func,
  getValue: _react.PropTypes.func.isRequired,
  multiple: _react.PropTypes.bool,
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
  as: _semanticUiReact.Dropdown,
  rootElement: _semanticUiReact.Form.Field
}, _temp2)) || _class);
exports['default'] = FormsyDropdown;