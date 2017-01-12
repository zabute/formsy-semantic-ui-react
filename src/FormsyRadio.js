import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as Formsy } from 'formsy-react';
import { Radio } from 'semantic-ui-react';

@Formsy()
export default class FormsyCheckbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    required: PropTypes.bool,
    getErrorMessage: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
  }

  handleChange(e, input) {
    this.props.setValue(input.checked);
    this.setState({ allowErrors: true });
  }

  render() {
    const {
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
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

    return (
      <div>
        <Radio
          checked={this.props.getValue()}
          onChange={::this.handleChange}
          { ...otherProps }
        />

        {
          !isValid() && !isPristine() && errorLabel &&
            cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
