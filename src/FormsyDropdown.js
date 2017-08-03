import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Decorator as formsy } from 'formsy-react';
import { Form, Dropdown, Select } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

@formsy()
export default class FormsyDropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf([
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
    label: PropTypes.string,
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
    as: Dropdown,
    rootElement: Form.Field,
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

  showError = () => this.setState({ allowError: true });
  handleClose = () => this.showError();

  render() {
    const {
      as,
      required,
      label,
      getValue,
      defaultValue,
      multiple,
      errorLabel,
      getErrorMessage,
      isValid,
      isPristine,
    } = this.props;

    const shortHandMode = (as === Form.Dropdown || as === Form.Select);
    const error = !isPristine() && !isValid() && this.state.allowError;

    const dropdownProps = {
      ...filterSuirElementProps(this.props),
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onClose: this.handleClose,
      value: getValue() || defaultValue || multiple && [] || '',
      error,
    };

    const dropdownNode = shortHandMode ? createElement(as).props.control : as;

    return (
      <Form.Field required={ required } error={ error }>
        { shortHandMode && <label> { label } </label> }
        { createElement(dropdownNode, { ...dropdownProps }) }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}
