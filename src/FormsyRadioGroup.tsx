import { FormsyInjectedProps, withFormsy } from 'formsy-react';
import React, { Children, cloneElement, Component } from 'react';
import {
  Form,
  RadioProps,
  StrictFormFieldProps,
  StrictRadioProps,
} from 'semantic-ui-react';
import { StrictFormGroupProps } from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';
import { CheckboxProps } from 'semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox';

type RadioGroupValueType = RadioProps['value'];

export interface IFormsyRadioGroupProps
  extends FormsyInjectedProps<RadioGroupValueType>,
    Pick<
      StrictFormFieldProps,
      'as' | 'className' | 'error' | 'width' | 'disabled'
    >,
    Omit<StrictRadioProps, 'error' | 'value' | 'name'>,
    Pick<StrictFormGroupProps, 'inline' | 'unstackable'> {
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
      name,
      value,
      errorLabel,
      isValid,
      isPristine,
      errorMessage,
      passRequiredToField,
      disabled,
      className,
      unstackable,
      inline = true,
      width,
    } = this.props;

    const error = !isPristine && !isValid;
    const formGroupProps = {
      as,
      className,
      unstackable,
      inline,
      grouped: !inline,
    };
    const labelProps = {
      required: required && passRequiredToField,
      error: !disabled && error,
      label,
      disabled,
    };

    const fieldProps = {
      disabled,
      width,
      error: !disabled && error,
    };

    return (
      <Form.Group {...formGroupProps}>
        {label && <Form.Field {...labelProps} />}
        {Children.map(children, (radio: any) => {
          if (!radio) {
            return null;
          }

          const props: RadioProps = {
            name,
            checked: value === radio.props.value,
            onChange: this.handleChange,
            disabled,
          };

          if (formRadioGroup) {
            props.error = error;
          }
          return (
            <Form.Field {...fieldProps}>
              {cloneElement(radio, { ...props })}
            </Form.Field>
          );
        })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Group>
    );
  }
}

export default withFormsy(FormsyRadioGroup);
