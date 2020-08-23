import { FormsyInjectedProps, withFormsy } from 'formsy-react';
import React, { cloneElement, Component, createElement } from 'react';
import {
  Dropdown,
  Form,
  Select,
  StrictDropdownProps,
  StrictFormFieldProps,
} from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

type FormsyDropdownValue = StrictDropdownProps['value'];

export interface IFormsyDropdownProps
  extends FormsyInjectedProps<FormsyDropdownValue>,
    Pick<
      StrictFormFieldProps,
      'as' | 'className' | 'error' | 'width' | 'inline' | 'disabled'
    >,
    Omit<StrictDropdownProps, 'error' | 'value'> {
  id?: string;
  inputClassName?: string;
  passRequiredToField?: boolean;
  inputAs?:
    | typeof Dropdown
    | typeof Select
    | typeof Form.Dropdown
    | typeof Form.Select;
  label?: string | React.ReactNode;
  errorLabel?: React.ReactElement;
}

class FormsyDropdown extends Component<IFormsyDropdownProps> {
  static defaultProps = {
    inputAs: Dropdown,
    passRequiredToField: true,
  };

  state = { allowError: false };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    if (defaultValue) setValue(defaultValue);
  }

  componentDidUpdate(prevProps: IFormsyDropdownProps) {
    if (
      prevProps.isFormSubmitted !== this.props.isFormSubmitted &&
      this.props.isFormSubmitted
    ) {
      this.showError();
    }
  }

  handleChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: StrictDropdownProps & { value: FormsyDropdownValue }
  ) => {
    const { multiple, value, setValue, onChange } = this.props;

    if (
      multiple &&
      Array.isArray(value) &&
      Array.isArray(data.value) &&
      value.length > data.value.length
    ) {
      this.showError();
    }

    setValue(data.value);

    if (onChange) {
      onChange(e, data);
    }
  };

  handleBlur = (
    e: React.KeyboardEvent<HTMLElement>,
    data: StrictDropdownProps
  ) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e, data);
    }
  };

  handleClose = () => this.showError();

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      inputAs,
      id,
      required,
      label,
      value,
      defaultValue,
      multiple,
      errorLabel,
      errorMessage,
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

    const shortHandMode = inputAs === Form.Dropdown || inputAs === Form.Select;
    const error = !isPristine && !isValid && this.state.allowError;

    const dropdownProps = {
      ...filterSuirElementProps(this.props),
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onClose: this.handleClose,
      value: value || defaultValue || (multiple && []) || '',
      error: !disabled && error,
      id,
    };

    const dropdownNode = shortHandMode
      ? createElement(inputAs as any, dropdownProps).props.control
      : inputAs;

    return (
      <Form.Field
        as={as}
        className={className}
        required={required && passRequiredToField}
        error={!disabled && error}
        width={width}
        inline={inline}
        disabled={disabled}
      >
        {shortHandMode && label && <label htmlFor={id}> {label} </label>}
        {createElement(dropdownNode, { ...dropdownProps })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyDropdown);
