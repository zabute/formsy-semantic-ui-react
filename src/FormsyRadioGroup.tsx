import { FormsyInjectedProps, withFormsy } from 'formsy-react';
import React, { Children, cloneElement, Component } from 'react';
import { Form, FormFieldProps, RadioProps } from 'semantic-ui-react';
import { CheckboxProps } from 'semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox';
import { filterSuirElementProps } from './utils';

type RadioGroupValueType = RadioProps['value'];

export interface IFormsyRadioGroupProps
  extends FormsyInjectedProps<RadioGroupValueType>,
    Pick<
      FormFieldProps,
      'as' | 'className' | 'error' | 'width' | 'inline' | 'disabled'
    >,
    Omit<RadioProps, 'error' | 'value' | 'name'> {
  id?: string;
  inputClassName?: string;
  passRequiredToField?: boolean;
  formRadioGroup?: boolean;
  defaultSelected?: string;
  label?: string | React.ReactNode;
  errorLabel?: React.ReactElement;
  children: React.ReactNode[];
}

class FormsyRadioGroup extends Component<IFormsyRadioGroupProps> {
  static defaultProps = {
    passRequiredToField: true,
  };

  componentDidMount() {
    const { defaultSelected, setValue } = this.props;
    if (defaultSelected) setValue(defaultSelected);
  }

  handleChange = (
    e: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    const { value } = data;
    this.props.setValue(value);

    if (this.props.onChange) {
      this.props.onChange(e, data);
    }
  };

  render() {
    const {
      as,
      label,
      required,
      formRadioGroup,
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
        {Children.map(children, (radio: any) => {
          if (!radio) {
            return null;
          }

          const props: RadioProps = {
            checked: value === radio.props.value,
            onChange: this.handleChange,
          };
          if (formRadioGroup) {
            props.error = error;
          }
          return <Form.Field> {cloneElement(radio, { ...props })} </Form.Field>;
        })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Group>
    );
  }
}

export default withFormsy(FormsyRadioGroup);
