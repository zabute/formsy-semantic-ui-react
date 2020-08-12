import React, { cloneElement, Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Dropdown, Form, Select } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

class FormsyDropdown extends Component {
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
    inputAs: PropTypes.oneOf([Dropdown, Select, Form.Dropdown, Form.Select]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
    ]),
    required: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    errorLabel: PropTypes.element,
    isValid: PropTypes.bool.isRequired,
    isPristine: PropTypes.bool.isRequired,
    isFormSubmitted: PropTypes.bool.isRequired,
    setValue: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    value: PropTypes.any,
    multiple: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    inputAs: Dropdown,
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
    const { multiple, value, setValue, onChange } = this.props;

    if (multiple && value && value.length > data.value.length) {
      this.showError();
    }
    setValue(data.value);
    if (onChange) {
      onChange(e, data);
    }
  };

  handleBlur = (e, data) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(e, data);
  };

  handleClose = () => this.showError();

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      inputAs,
      id,
      required,
      label,
      value,
      defaultValue,
      multiple,
      errorLabel,
      errorMessage,
      isValid,
      isPristine,
      // Form.Field props
      as,
      width,
      className,
      disabled,
      inline,
      passRequiredToField,
    } = this.props;

    const shortHandMode = inputAs === Form.Dropdown || inputAs === Form.Select;
    const error = !isPristine && !isValid && this.state.allowError;

    const dropdownProps = {
      ...filterSuirElementProps(this.props),
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onClose: this.handleClose,
      value: value || defaultValue || (multiple && []) || '',
      error: !disabled && error,
      id,
    };

    const dropdownNode = shortHandMode
      ? createElement(inputAs, dropdownProps).props.control
      : inputAs;

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
        {shortHandMode && label && <label htmlFor={id}> {label} </label>}
        {createElement(dropdownNode, { ...dropdownProps })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyDropdown);
