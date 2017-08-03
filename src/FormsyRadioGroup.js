import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Decorator as formsy } from 'formsy-react';
import { Form } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

@formsy()
export default class FormsyRadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    formRadioGroup: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    defaultSelected: PropTypes.string,
    errorLabel: PropTypes.element,
    getErrorMessage: PropTypes.func.isRequired,
    children: PropTypes.node,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  static defaultProps = {
    rootElement: Form.Field,
  }

  componentDidMount() {
    const { defaultSelected, setValue } = this.props;
    if (defaultSelected) setValue(defaultSelected);
  }

  handleChange = (e, input) => {
    this.props.setValue(input.value);
    if (this.props.onChange) this.props.onChange();
  }

  render() {
    const {
      as,
      label,
      required,
      formRadioGroup,
      defaultSelected, // eslint-disable-line
      children,
      getValue,
      errorLabel,
      isValid,
      isPristine,
      getErrorMessage,
    } = this.props;

    const error = !isPristine() && !isValid();
    const formFieldProps = { required, label, error };

    return (
      <Form.Group as={as} {...filterSuirElementProps(this.props)}>
        { label && <Form.Field { ...formFieldProps }/> }
        {
          Children.map(children, radio => {
            const props = {
              checked: getValue() === radio.props.value,
              onChange: this.handleChange,
            }; if (formRadioGroup) props.error = error;
            return <Form.Field> { cloneElement(radio, { ...props }) } </Form.Field>;
          })
        }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Group>
    );
  }
}
