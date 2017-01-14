import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as Formsy } from 'formsy-react';
import { TextArea } from 'semantic-ui-react';
import debounce from 'lodash.debounce';

@Formsy()
export default class FormsyInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isValid: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
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

  state = { allowError: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.setState({ allowError: true });
  }

  setInputValue = debounce(value => this.props.setValue(value), 400);

  handleChange(e, input) {
    this.setInputValue(input.value);
  }

  handleBlur() {
    this.setState({ allowError: true });
    if (this.props.onBlur) this.props.onBlur();
  }

  render() {
    const {
      isValid,
      errorLabel,
      getErrorMessage,
      rootClassName,
      rootStyle,
      inputClassName,
      inputStyle,
      setValidations, // eslint-disable-line
      setValue, // eslint-disable-line
      resetValue, // eslint-disable-line
      getValue, // eslint-disable-line
      hasValue, // eslint-disable-line
      getErrorMessages, // eslint-disable-line
      isFormDisabled, // eslint-disable-line
      isPristine, // eslint-disable-line
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

    const error = !isValid() && allowError;

    return (
      <div
        className={ rootClassName }
        style={ rootStyle }
      >
        <TextArea
          error={ error }
          onBlur={::this.handleBlur}
          onChange={::this.handleChange}
          className={ inputClassName }
          style={ inputStyle }
          { ...otherProps }
        />

        {
          error && errorLabel &&
          cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
