'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyRadioGroup.__proto__ || Object.getPrototypeOf(FormsyRadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyRadioGroup, [{
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (nextProps.isFormSubmitted()) this.setState({ allowError: true });
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'handleChange',
    value: function () {
      function handleChange(e, _ref2) {
        var value = _ref2.value;

        this.props.setValue(value);
      }

      return handleChange;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            getValue = _props.getValue,
            errorLabel = _props.errorLabel,
            isValid = _props.isValid,
            getErrorMessage = _props.getErrorMessage,
            className = _props.className,
            style = _props.style;
        var allowError = this.state.allowError;


        var clonedChildren = _react.Children.map(children, function (radio) {
          return (0, _react.cloneElement)(radio, {
            checked: radio.props.value === getValue(),
            onChange: _this2.handleChange.bind(_this2)
          });
        });

        return _react2['default'].createElement(
          'div',
          {
            className: className,
            style: style
          },
          clonedChildren,
          !isValid() && allowError && errorLabel && (0, _react.cloneElement)(errorLabel, { children: getErrorMessage() })
        );
      }

      return render;
    }()
  }]);

  return FormsyRadioGroup;
}(_react.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  setValue: _react.PropTypes.func.isRequired,
  getValue: _react.PropTypes.func.isRequired,
  isValid: _react.PropTypes.func.isRequired,
  errorLabel: _react.PropTypes.element,
  getErrorMessage: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  validationError: _react.PropTypes.string,
  validationErrors: _react.PropTypes.object,
  validations: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
}, _temp2)) || _class);
exports['default'] = FormsyRadioGroup;