import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as Formsy } from 'formsy-react';
import { Dropdown, Select } from 'semantic-ui-react';

@Formsy()
export default class FormsyDropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf(['dropdown', 'select']),
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
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

  handleChange(e, input) {
    this.props.setValue(input.value);
  }

  render() {
    const {
      as,
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
      rootClassName,
      rootStyle,
      className,
      style,
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

    const props = {
      onChange: ::this.handleChange,
      error: error,
      className: className,
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
