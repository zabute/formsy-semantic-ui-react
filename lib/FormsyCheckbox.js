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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
        var _props = this.props,
            defaultChecked = _props.defaultChecked,
            setValue = _props.setValue;

        if (defaultChecked) setValue(true);
      }

      return componentDidMount;
    }()
  }, {
    key: 'handleChange',
    value: function () {
      function handleChange(e, _ref) {
        var checked = _ref.checked;

        this.props.setValue(checked);
      }

      return handleChange;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            as = _props2.as,
            required = _props2.required,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            errorLabel = _props2.errorLabel,
            getErrorMessage = _props2.getErrorMessage,
            getValue = _props2.getValue;


        var error = !isPristine() && !isValid();

        var checkboxProps = _extends({
          checked: getValue(),
          onChange: this.handleChange.bind(this)
        }, (0, _utils.filterSuirElementProps)(this.props));

        if (as === _semanticUiReact.Checkbox || as === _semanticUiReact.Radio) delete checkboxProps.error;

        return _react2['default'].createElement(
          _semanticUiReact.Form.Field,
          { required: required, error: error },
          (0, _react.createElement)(as, _extends({}, checkboxProps)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyCheckbox;
}(_react.Component), _class2.propTypes = {
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOf([_semanticUiReact.Form.Checkbox, _semanticUiReact.Form.Radio, _semanticUiReact.Checkbox, _semanticUiReact.Radio]),
  defaultChecked: _propTypes2['default'].bool,
  setValue: _propTypes2['default'].func.isRequired,
  isValid: _propTypes2['default'].func.isRequired,
  getValue: _propTypes2['default'].func.isRequired,
  isPristine: _propTypes2['default'].func.isRequired,
  required: _propTypes2['default'].bool,
  getErrorMessage: _propTypes2['default'].func.isRequired,
  errorLabel: _propTypes2['default'].element
}, _class2.defaultProps = {
  as: _semanticUiReact.Checkbox
}, _temp)) || _class);
exports['default'] = FormsyCheckbox;