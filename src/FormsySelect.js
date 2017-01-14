import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as Formsy } from 'formsy-react';
import { Select } from 'semantic-ui-react';

@Formsy()
export default class FormsySelect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
    rootClassName: PropTypes.string,
    rootStyle: PropTypes.object,
    selectClassName: PropTypes.string,
    selectStyle: PropTypes.object,
    getErrorMessage: PropTypes.func.isRequired,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  handleChange(e, input) {
    this.props.setValue(input.value);
  }

  render() {
    const {
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
      rootClassName,
      rootStyle,
      selectClassName,
      selectStyle,
      setValidations, // eslint-disable-line
      setValue, // eslint-disable-line
      resetValue, // eslint-disable-line
      getValue, // eslint-disable-line
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

    const error = !isValid() && !isPristine();

    return (
      <div
        className={ rootClassName }
        style={ rootStyle }
      >
        <Select
          onChange={ ::this.handleChange }
          error={ error }
          className={ selectClassName }
          style={ selectStyle }
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
