import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Form, Dropdown, Select } from 'semantic-ui-react';
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
    inputAs: PropTypes.oneOf([
      Dropdown, Select, Form.Dropdown, Form.Select,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),
    required: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    errorLabel: PropTypes.element,
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    getValue: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    isFormSubmitted: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  static defaultProps = {
    inputAs: Dropdown,
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
    const { multiple, getValue, setValue, onChange } = this.props;
    const { value } = data;
    if (multiple && getValue() && getValue().length > value.length) this.showError();
    setValue(value);
    if (onChange) onChange(e, data);
  }

  handleBlur = (e, data) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(e, data);
  }

  handleClose = () => this.showError();

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      inputAs,
      id,
      required,
      label,
      getValue,
      defaultValue,
      multiple,
      errorLabel,
      getErrorMessage,
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

    const shortHandMode = (inputAs === Form.Dropdown || inputAs === Form.Select);
    const error = !isPristine() && !isValid() && this.state.allowError;

    const dropdownProps = {
      ...filterSuirElementProps(this.props),
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onClose: this.handleClose,
      value: getValue() || defaultValue || multiple && [] || '',
      error: !disabled && error,
      id,
    };

    const dropdownNode = shortHandMode ? createElement(inputAs, dropdownProps).props.control : inputAs;

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
        { createElement(dropdownNode, { ...dropdownProps }) }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyDropdown);
