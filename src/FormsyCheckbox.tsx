import { FormsyInjectedProps, withFormsy } from 'formsy-react';
import React, { cloneElement, Component, createElement } from 'react';
import {
  Checkbox,
  Form,
  Radio,
  StrictFormFieldProps,
  StrictRadioProps,
} from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

type CheckboxRadioValueType = boolean | number | string;

export interface IFormsyCheckboxProps
  extends FormsyInjectedProps<CheckboxRadioValueType>,
    Pick<
      StrictFormFieldProps,
      'as' | 'className' | 'error' | 'width' | 'inline' | 'disabled'
    >,
    Omit<StrictRadioProps, 'value' | 'name' | 'onChange'> {
  inputClassName?: string;
  passRequiredToField?: boolean;
  inputAs?:
    | typeof Form.Checkbox
    | typeof Form.Radio
    | typeof Checkbox
    | typeof Radio;
  defaultChecked?: boolean;
  errorLabel?: React.ReactElement;
  label?: string | React.ReactNode;

  onChange?(
    event: React.FormEvent<HTMLInputElement>,
    data: Omit<StrictRadioProps, 'value'> & { value: CheckboxRadioValueType }
  ): void;
}

class FormsyCheckbox extends Component<IFormsyCheckboxProps> {
  componentDidMount() {
    const { defaultChecked, setValue } = this.props;
    setValue(!!defaultChecked, false);
  }

  handleChange = (
    e: React.FormEvent<HTMLInputElement>,
    data: Omit<StrictRadioProps, 'value' | 'checked'> & {
      value: CheckboxRadioValueType;
      checked: boolean;
    }
  ) => {
    const { checked } = data;
    this.props.setValue(checked);
    if (this.props.onChange) {
      this.props.onChange(e, data);
    }
  };

  render() {
    const {
      inputAs = Checkbox,
      required,
      isValid,
      isPristine,
      errorLabel,
      errorMessage,
      value,
      // Form.Field props
      as,
      width,
      className,
      disabled,
      inline,
      passRequiredToField,
    } = this.props;

    const error = !isPristine && !isValid;

    const checkboxProps: Record<string, any> = {
      ...filterSuirElementProps(this.props),
      label: this.props.label,
      checked: !!value,
      onChange: this.handleChange,
    };

    if (inputAs === Checkbox || inputAs === Radio) {
      checkboxProps.error = undefined;
    }

    return (
      <Form.Field
        as={as}
        className={className}
        required={required && passRequiredToField}
        error={error}
        width={width}
        inline={inline}
        disabled={disabled}
      >
        {createElement(inputAs as any, { ...checkboxProps })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyCheckbox);
