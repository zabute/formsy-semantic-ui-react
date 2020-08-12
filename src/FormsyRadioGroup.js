import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Form } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

class FormsyRadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    passRequiredToField: PropTypes.bool,
    disabled: PropTypes.bool,
    formRadioGroup: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.any,
    isValid: PropTypes.bool.isRequired,
    isPristine: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    defaultSelected: PropTypes.string,
    errorLabel: PropTypes.element,
    errorMessage: PropTypes.string,
    children: PropTypes.node,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    passRequiredToField: true,
  };

  componentDidMount() {
    const { defaultSelected, setValue } = this.props;
    if (defaultSelected) setValue(defaultSelected);
  }

  handleChange = (e, data) => {
    const { value } = data;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(e, data);
  };

  render() {
    const {
      as,
      label,
      required,
      formRadioGroup,
      defaultSelected, // eslint-disable-line
      children,
      value,
      errorLabel,
      isValid,
      isPristine,
      errorMessage,
      passRequiredToField,
      disabled,
    } = this.props;

    const error = !isPristine && !isValid;
    const formFieldProps = {
      required: required && passRequiredToField,
      error: !disabled && error,
      label,
    };

    return (
      <Form.Group as={as} {...filterSuirElementProps(this.props)}>
        {label && <Form.Field {...formFieldProps} />}
        {Children.map(children, (radio) => {
          const props = {
            checked: value === radio.props.value,
            onChange: this.handleChange,
          };
          if (formRadioGroup) props.error = error;
          return <Form.Field> {cloneElement(radio, { ...props })} </Form.Field>;
        })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Group>
    );
  }
}

export default withFormsy(FormsyRadioGroup);
