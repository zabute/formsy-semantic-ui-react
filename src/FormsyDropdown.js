import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as formsy } from 'formsy-react';
import { Dropdown, Select } from 'semantic-ui-react';

@formsy()
export default class FormsyDropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf(['dropdown', 'select']),
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),
    getValue: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    errorLabel: PropTypes.element,
    isFormSubmitted: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
    rootClassName: PropTypes.string,
    rootStyle: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  static defaultProps = {
    as: 'dropdown',
  }

  state = { allowError: false };

  componentDidMount() {
    if (this.props.defaultValue) this.props.setValue(this.props.defaultValue);
  }

  componentWillReceiveProps() {
    if (this.props.isFormSubmitted()) this.setState({ allowError: true });
  }

  handleChange(e, input) {
    this.props.setValue(input.value);
    if (!this.props.multiple) this.setState({ allowError: true });
  }

  handleBlur = () => {
    this.setState({ allowError: true });
    if (this.props.onBlur) this.props.onBlur();
  }

  render() {
    const {
      as,
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
      getValue,
      defaultValue,
      multiple,
      rootClassName,
      rootStyle,
      className,
      style,
      setValidations, // eslint-disable-line
      setValue, // eslint-disable-line
      resetValue, // eslint-disable-line
      hasValue, // eslint-disable-line
      getErrorMessages, // eslint-disable-line
      isFormDisabled, // eslint-disable-line
      isFormSubmitted, // eslint-disable-line
      isRequired, // eslint-disable-line
      showRequired, // eslint-disable-line
      showError, // eslint-disable-line
      isValidValue, // eslint-disable-line
      validations, // eslint-disable-line
      validationError, // eslint-disable-line
      validationErrors, // eslint-disable-line
      ...otherProps,
    } = this.props;

    const { allowError } = this.state;

    const error = !isValid() && !isPristine() && allowError;

    const props = {
      onChange: ::this.handleChange,
      value: getValue() || defaultValue || multiple && [] || '',
      error: error,
      className: className,
      multiple: multiple,
      onBlur: this.handleBlur,
      style: style,
      ...otherProps,
    };

    return (
      <div className={ rootClassName } style={ rootStyle }>
        { cloneElement(as === 'dropdown' ? <Dropdown/> : <Select/>, { ...props }) }
        {
          error && errorLabel &&
          cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
