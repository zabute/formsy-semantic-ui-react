import React, { Component, PropTypes, createElement, cloneElement } from 'react';
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
    errorLabel: PropTypes.element,
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    getValue: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    isFormSubmitted: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
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

  handleChange = (e, { value }) => {
    const { multiple, getValue, setValue } = this.props;
    if (multiple && getValue() && getValue().length > value.length) this.showError();
    setValue(value);
  }

  showError = () => this.setState({ allowError: true });
  handleClose = () => this.showError();

  render() {
    const {
      as,
      getValue,
      defaultValue,
      multiple,
      errorLabel,
      getErrorMessage,
      isValid,
      isPristine,
    } = this.props;

    const error = !isPristine() && !isValid() && this.state.allowError;

    const dropdownProps = {
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onClose: this.handleClose,
      value: getValue() || defaultValue || multiple && [],
      error,
      ...filterSuirElementProps(this.props),
    };

    return (
      <Form.Field>
        { createElement(as, { ...dropdownProps }) }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}
