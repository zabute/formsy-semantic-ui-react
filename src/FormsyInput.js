import React, { Component, createElement, cloneElement } from 'react';
import { withFormsy } from 'formsy-react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';
import PropTypes from 'prop-types';

class FormsyInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    width: PropTypes.number,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    passRequiredToField: PropTypes.bool,
    inputAs: PropTypes.oneOf([
      Input, TextArea, Form.Input, Form.TextArea,
    ]),
    errorLabel: PropTypes.element,
    required: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    instantValidation: PropTypes.bool,
    defaultValue: PropTypes.string,
    onBlur: PropTypes.func,
    isValid: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    isPristine: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  static defaultProps = {
    inputAs: Input,
    passRequiredToField: true,
  }

  state = { allowError: false };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    if (defaultValue) setValue(defaultValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.showError();
  }

  handleChange = (e, data) => {
    const { value } = data;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(e, data);
    if (this.props.instantValidation) this.showError();
  }

  handleBlur = (e, data) => {
    this.showError();
    if (this.props.onBlur) this.props.onBlur(e, data);
  }

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      id,
      inputAs,
      inputClassName,
      required,
      label,
      defaultValue,
      getValue,
      isValid,
      isPristine,
      getErrorMessage,
      errorLabel,
      // Form.Field props
      as,
      width,
      className,
      disabled,
      inline,
      passRequiredToField,
    } = this.props;

    const { allowError } = this.state;
    const error = !isPristine() && !isValid() && allowError;

    const inputProps = {
      ...filterSuirElementProps(this.props),
      value: getValue() || isPristine() && defaultValue || '',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      className: inputClassName,
      error: !disabled && error,
      label,
      id,
    };

    const shortHandMode = (inputAs === Form.Input || inputAs === Form.TextArea);
    const inputNode = shortHandMode ? createElement(inputAs).props.control : inputAs;

    if (shortHandMode) {
      delete inputProps.label;
      if (inputAs === Form.TextArea) delete inputProps.error;
    }

    return (
      <Form.Field
        as={ as }
        className={ className }
        required={ required && passRequiredToField }
        error={ !disabled && error }
        width={ width }
        inline={ inline }
        disabled={disabled}
      >
        { shortHandMode && <label htmlFor={id}> { label } </label> }
        { createElement(inputNode, { ...inputProps }) }
        { !disabled && error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyInput);
