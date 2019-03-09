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

var FormsyDropdown = function (_Component) {
  _inherits(FormsyDropdown, _Component);

  function FormsyDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyDropdown.__proto__ || Object.getPrototypeOf(FormsyDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleBlur = function () {
      var _this3;

      return (_this3 = _this).__handleBlur__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleClose = function () {
      var _this4;

      return (_this4 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.showError = function () {
      var _this5;

      return (_this5 = _this).__showError__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyDropdown, [{
    key: '__showError__REACT_HOT_LOADER__',
    value: function () {
      function __showError__REACT_HOT_LOADER__() {
        return this.__showError__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __showError__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function () {
      function __handleClose__REACT_HOT_LOADER__() {
        return this.__handleClose__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleClose__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function () {
      function __handleBlur__REACT_HOT_LOADER__() {
        return this.__handleBlur__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleBlur__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function () {
      function __handleChange__REACT_HOT_LOADER__() {
        return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleChange__REACT_HOT_LOADER__;
    }()
  }, {
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
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function () {
      function __handleChange__REACT_HOT_LOADER__() {
        return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleChange__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function () {
      function __handleChange__REACT_HOT_LOADER__(e, data) {
        var _props2 = this.props,
            multiple = _props2.multiple,
            getValue = _props2.getValue,
            setValue = _props2.setValue,
            onChange = _props2.onChange;
        var value = data.value;

        if (multiple && getValue() && getValue().length > value.length) this.showError();
        setValue(value);
        if (onChange) onChange(e, data);
      }

      return __handleChange__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function () {
      function __handleBlur__REACT_HOT_LOADER__() {
        return this.__handleBlur__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleBlur__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function () {
      function __handleBlur__REACT_HOT_LOADER__(e, data) {
        var onBlur = this.props.onBlur;

        if (onBlur) onBlur(e, data);
      }

      return __handleBlur__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function () {
      function __handleClose__REACT_HOT_LOADER__() {
        return this.__handleClose__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleClose__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function () {
      function __handleClose__REACT_HOT_LOADER__() {
        return this.showError();
      }

      return __handleClose__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__showError__REACT_HOT_LOADER__',
    value: function () {
      function __showError__REACT_HOT_LOADER__() {
        return this.__showError__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __showError__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__showError__REACT_HOT_LOADER__',
    value: function () {
      function __showError__REACT_HOT_LOADER__() {
        return this.setState({ allowError: true });
      }

      return __showError__REACT_HOT_LOADER__;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            inputAs = _props3.inputAs,
            id = _props3.id,
            required = _props3.required,
            label = _props3.label,
            getValue = _props3.getValue,
            defaultValue = _props3.defaultValue,
            multiple = _props3.multiple,
            errorLabel = _props3.errorLabel,
            getErrorMessage = _props3.getErrorMessage,
            isValid = _props3.isValid,
            isPristine = _props3.isPristine,
            as = _props3.as,
            width = _props3.width,
            className = _props3.className,
            disabled = _props3.disabled,
            inline = _props3.inline,
            passRequiredToField = _props3.passRequiredToField;


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

        var dropdownNode = shortHandMode ? (0, _react.createElement)(inputAs, dropdownProps).props.control : inputAs;

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
}(_react.Component);

FormsyDropdown.propTypes = {
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
};
FormsyDropdown.defaultProps = {
  inputAs: _semanticUiReact.Dropdown,
  passRequiredToField: true
};
exports['default'] = (0, _formsyReact.withFormsy)(FormsyDropdown);
