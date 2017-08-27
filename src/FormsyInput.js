import React, { Component, createElement, cloneElement } from 'react';
import { Decorator as formsy } from 'formsy-react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { filterSuirElementProps } from './utils';
import PropTypes from 'prop-types';

@formsy()
export default class FormsyInput extends Component {
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
    label: PropTypes.string,
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

  state = { allowError: false, value: null };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    if (defaultValue) setValue(defaultValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.showError();
    this.setState({ value: this.props.getValue() });
  }

  setInputValue = debounce(value => this.props.setValue(value), 100);

  handleChange = (e, data) => {
    const { value } = data;
    this.setState({ value });
    this.setInputValue(value);
    if (this.props.onChange) this.props.onChange(e, data);
    if (this.props.instantValidation) this.showError();
  }

  handleBlur = () => {
    this.showError();
    if (this.props.onBlur) this.props.onBlur();
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

    const { allowError, value } = this.state;
    const error = !isPristine() && !isValid() && allowError;

    const inputProps = {
      ...filterSuirElementProps(this.props),
      value: value || isPristine() && defaultValue || '',
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
