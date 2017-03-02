import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as Formsy } from 'formsy-react';
import { Input, TextArea } from 'semantic-ui-react';
import debounce from 'lodash.debounce';

@Formsy()
export default class FormsyInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isValid: PropTypes.func.isRequired,
    as: PropTypes.oneOf(['input', 'textarea']),
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    errorLabel: PropTypes.element,
    onBlur: PropTypes.func,
    rootClassName: PropTypes.string,
    rootStyle: PropTypes.object,
    inputClassName: PropTypes.string,
    inputStyle: PropTypes.object,
    getErrorMessage: PropTypes.func.isRequired,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  static defaultProps = {
    as: 'input',
    defaultValue: '',
  }

  state = { allowError: false };

  componentDidMount() {
    this.props.setValue(this.props.defaultValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.setState({ allowError: true });
  }

  setInputValue = debounce(value => this.props.setValue(value));

  handleChange(e, { value }) {
    this.setInputValue(value);
  }

  handleBlur() {
    this.setState({ allowError: true });
    if (this.props.onBlur) this.props.onBlur();
  }

  render() {
    const {
      as,
      isValid,
      errorLabel,
      getErrorMessage,
      rootClassName,
      rootStyle,
      inputClassName,
      inputStyle,
      getValue,
      defaultValue,
      isPristine,
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
      error: error,
      onBlur: ::this.handleBlur,
      onChange: ::this.handleChange,
      className: inputClassName,
      value: getValue() || isPristine() && defaultValue || '',
      style: inputStyle,
      ...otherProps,
    };

    return (
      <div className={ rootClassName } style={ rootStyle }>
        { cloneElement(as === 'input' ? <Input/> : <TextArea/>, { ...props }) }
        {error && errorLabel && cloneElement(errorLabel, { children: getErrorMessage() }) }
      </div>
    );
  }
}
