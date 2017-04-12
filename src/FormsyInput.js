import React, { Component, createElement, cloneElement } from 'react';
import { Decorator as formsy } from 'formsy-react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { filterSuirElementProps } from './utils';
import PropTypes from 'prop-types';

@formsy()
export default class FormsyInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf([
      Input, TextArea, Form.Input, Form.TextArea,
    ]),
    errorLabel: PropTypes.element,
    instantValidation: PropTypes.bool,
    defaultValue: PropTypes.string,
    onBlur: PropTypes.func,
    isValid: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  static defaultProps = { as: Input }

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

  handleChange = (e, { value }) => {
    this.setState({ value });
    this.setInputValue(value);
    if (this.props.instantValidation) this.showError();
  }

  handleBlur = () => {
    this.showError();
    if (this.props.onBlur) this.props.onBlur();
  }

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      as,
      defaultValue,
      isValid,
      isPristine,
      getErrorMessage,
      errorLabel,
    } = this.props;

    const { allowError, value } = this.state;
    const error = !isPristine() && !isValid() && allowError;

    const inputProps = {
      value: value || isPristine() && defaultValue || '',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      error,
      ...filterSuirElementProps(this.props),
    };

    return (
      <Form.Field>
        { createElement(as, { ...inputProps }) }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}
