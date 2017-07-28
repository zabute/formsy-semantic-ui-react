import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Decorator as formsy } from 'formsy-react';
import { Form, Checkbox, Radio } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

@formsy()
export default class FormsyCheckbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf([Form.Checkbox, Form.Radio, Checkbox, Radio]),
    defaultChecked: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    required: PropTypes.bool,
    getErrorMessage: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    as: Checkbox,
  }

  componentDidMount() {
    const { defaultChecked, setValue } = this.props;
    if (defaultChecked) setValue(true);
  }

  handleChange = (e, { checked }) => {
    this.props.setValue(checked);
    if (this.props.onChange) this.props.onChange();
  }

  render() {
    const {
      as,
      required,
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
      getValue,
    } = this.props;

    const error = !isPristine() && !isValid();

    const checkboxProps = {
      ...filterSuirElementProps(this.props),
      checked: getValue(),
      onChange: ::this.handleChange,
    };

    if (as === Checkbox || as === Radio) delete checkboxProps.error;

    return (
      <Form.Field required={ required } error={ error }>
        { createElement(as, { ...checkboxProps }) }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}
