import React, {
  cloneElement,
  Component,
  createElement,
  isValidElement,
} from 'react';
import { withFormsy } from 'formsy-react';
import { Form, Input } from 'semantic-ui-react';
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
    inputAs: PropTypes.any,
    errorLabel: PropTypes.element,
    required: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    instantValidation: PropTypes.bool,
    defaultValue: PropTypes.string,
    onBlur: PropTypes.func,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    isValid: PropTypes.bool.isRequired,
    isPristine: PropTypes.bool.isRequired,
    isFormSubmitted: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    inputAs: Input,
    passRequiredToField: true,
  };

  state = { allowError: false };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    if (defaultValue) setValue(defaultValue);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.isFormSubmitted !== this.props.isFormSubmitted &&
      this.props.isFormSubmitted
    ) {
      this.showError();
    }
  }

  handleChange = (e, data) => {
    const { value } = data;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(e, data);
    if (this.props.instantValidation) this.showError();
  };

  handleBlur = (e, data) => {
    this.showError();
    if (this.props.onBlur) this.props.onBlur(e, data);
  };

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      id,
      inputAs,
      inputClassName,
      required,
      label,
      defaultValue,
      value,
      isValid,
      isPristine,
      errorMessage,
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
    const error = !isPristine && !isValid && allowError;

    const inputProps = {
      ...filterSuirElementProps(this.props),
      value: value || (isPristine && defaultValue) || '',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      className: inputClassName,
      error: !disabled && error,
      label,
      id,
    };

    const isFormField = inputAs === Form.Input || inputAs === Form.TextArea;
    const inputNode = isFormField
      ? createElement(inputAs).props.control
      : inputAs;

    if (isFormField) {
      delete inputProps.label;
      if (inputAs === Form.TextArea) delete inputProps.error;
    }

    const inputElement =
      !isFormField && isValidElement(inputAs)
        ? cloneElement(inputAs, { ...inputProps, ...inputAs.props })
        : createElement(inputNode, { ...inputProps });

    const shouldShowFormLabel = isFormField || isValidElement(inputAs);

    return (
      <Form.Field
        as={as}
        className={className}
        required={required && passRequiredToField}
        error={!disabled && error}
        width={width}
        inline={inline}
        disabled={disabled}
      >
        {shouldShowFormLabel && label && <label htmlFor={id}> {label} </label>}
        {inputElement}
        {!disabled &&
          error &&
          errorLabel &&
          cloneElement(errorLabel, {}, errorMessage)}
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyInput);
