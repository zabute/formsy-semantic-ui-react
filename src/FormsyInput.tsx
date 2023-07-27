import { FormsyInjectedProps, withFormsy } from 'formsy-react';
import React, {
  cloneElement,
  Component,
  createElement,
  InputHTMLAttributes,
  isValidElement,
} from 'react';
import {
  Form,
  Input,
  InputOnChangeData,
  StrictFormFieldProps,
  StrictInputProps,
} from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

type SemanticFormField = Pick<
  StrictFormFieldProps,
  'as' | 'className' | 'error' | 'width' | 'inline' | 'disabled'
>;
type SemanticInputProps = Omit<StrictInputProps, 'error'>;
export type IFormsyInputProps<
  HtmlBaseElement = InputHTMLAttributes<any>,
  InputValueType = any
> = FormsyInjectedProps<InputValueType> &
  SemanticFormField &
  SemanticInputProps &
  Omit<
    HtmlBaseElement,
    | keyof (SemanticFormField &
        SemanticInputProps &
        FormsyInjectedProps<InputValueType>)
    | 'onBlur'
    | 'rel'
    | 'rev'
    | 'content'
  > & {
    id?: string;
    inputClassName?: string;
    passRequiredToField?: boolean;
    inputAs?: React.ReactNode | React.ReactElement;
    errorLabel?: React.ReactElement;
    label?: string | React.ReactNode;
    instantValidation?: boolean;
    defaultValue?: InputValueType;

    onBlur?(
      event: React.ChangeEvent<HTMLInputElement>,
      data: StrictInputProps & { value: InputValueType }
    ): void;
  };

class FormsyInput extends Component<IFormsyInputProps> {
  static defaultProps = {
    inputAs: Input,
    passRequiredToField: true,
  };

  state = { allowError: false };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    if (defaultValue) setValue(defaultValue);
  }

  componentDidUpdate(prevProps: IFormsyInputProps) {
    if (
      prevProps.isFormSubmitted !== this.props.isFormSubmitted &&
      this.props.isFormSubmitted
    ) {
      this.showError();
    }
  }

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    const { value } = data;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(e, data);
    if (this.props.instantValidation) this.showError();
  };

  handleBlur = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    this.showError();
    if (this.props.onBlur) this.props.onBlur(e, data);
  };

  showError = () => this.setState({ allowError: true });

  render() {
    const {
      id,
      inputAs,
      inputClassName,
      required,
      label,
      defaultValue,
      value,
      isValid,
      isPristine,
      errorMessage,
      errorLabel,
      // Form.Field props
      as,
      width,
      className,
      disabled,
      inline,
      passRequiredToField,
    } = this.props;

    const { allowError } = this.state;
    const error = !isPristine && !isValid && allowError;

    const inputProps = {
      ...filterSuirElementProps(this.props),
      value: value || (isPristine && defaultValue) || '',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      className: inputClassName,
      error: !disabled && error,
      label,
      id,
    };

    const isFormField = inputAs === Form.Input || inputAs === Form.TextArea;
    const inputNode = isFormField
      ? (createElement(inputAs as any).props as any).control
      : inputAs;

    if (isFormField) {
      delete inputProps.label;
      if (inputAs === Form.TextArea) delete inputProps.error;
    }

    const inputElement =
      !isFormField && isValidElement(inputAs)
        ? cloneElement(inputAs, { ...inputProps, ...(inputAs as any).props })
        : createElement(inputNode, { ...inputProps });

    const shouldShowFormLabel = isFormField || isValidElement(inputAs);

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
        {shouldShowFormLabel && label && <label htmlFor={id}> {label} </label>}
        {inputElement}
        {!disabled &&
          error &&
          errorLabel &&
          cloneElement(errorLabel, {}, errorMessage)}
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyInput);
