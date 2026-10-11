import type { InjectedProps } from 'formsy-react';
import Formsy from 'formsy-react';
import type { FormsyComponent } from './types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { Component, ComponentProps } from 'react';
import { Form as SemanticUIForm, StrictFormProps } from 'semantic-ui-react';
import FormsyCheckbox, { type CheckboxRadioValueType, type IFormsyCheckboxProps } from './FormsyCheckbox';
import FormsyDropdown, { IFormsyDropdownProps } from './FormsyDropdown';
import FormsyInput, { IFormsyInputProps } from './FormsyInput';
import FormsyRadioGroup, { IFormsyRadioGroupProps } from './FormsyRadioGroup';
import FormsySelect from './FormsySelect';
import FormsyTextArea from './FormsyTextArea';

type IFormProps = Partial<ComponentProps<typeof Formsy>> & Omit<StrictFormProps, 'onSubmit'>;

class Form extends Component<IFormProps & { forwardedRef: any }> {
  static Button = SemanticUIForm.Button;
  static Radio = SemanticUIForm.Radio;
  static Field = SemanticUIForm.Field;
  static Group = SemanticUIForm.Group;
  static Checkbox: FormsyComponent<IFormsyCheckboxProps, CheckboxRadioValueType> = FormsyCheckbox;

  static Input = (props: Omit<IFormsyInputProps, keyof InjectedProps<any>>) => (
    <FormsyInput inputAs={SemanticUIForm.Input} {...props} />
  );

  static TextArea = (props: Omit<IFormsyInputProps<React.TextareaHTMLAttributes<any>>, keyof InjectedProps<any>>) => (
    <FormsyTextArea inputAs={SemanticUIForm.TextArea} {...props} />
  );

  static Select = (props: Omit<IFormsyDropdownProps, keyof InjectedProps<any>>) => (
    <FormsySelect inputAs={SemanticUIForm.Select} {...(props as any)} />
  );

  static RadioGroup = (props: Omit<IFormsyRadioGroupProps, keyof InjectedProps<any>>) => (
    <FormsyRadioGroup {...(props as any)} />
  );

  static Dropdown = (props: Omit<IFormsyDropdownProps, keyof InjectedProps<any>>) => (
    <FormsyDropdown inputAs={SemanticUIForm.Dropdown} {...(props as any)} />
  );

  render() {
    const { children } = this.props;

    const {
      mapping,
      validationErrors,
      onValid,
      onValidSubmit,
      onInvalid,
      onInvalidSubmit,
      onChange,
      preventExternalInvalidation,
      onError,
      onSubmit,
      forwardedRef,
      ...nonFormsyReactFormProps
    } = this.props;

    const {
      as = 'div',
      error,
      inverted,
      loading,
      reply,
      size,
      success,
      warning,
      widths,
      forwardedRef: _forwardedRef,
      className,
      ...nonSemanticUIFormProps
    } = this.props;

    return (
      <Formsy noValidate ref={forwardedRef} onSubmit={onSubmit} {...nonSemanticUIFormProps}>
        <SemanticUIForm as={as} {...nonFormsyReactFormProps}>
          {children}
        </SemanticUIForm>
      </Formsy>
    );
  }
}

const FormComponent = hoistNonReactStatics(
  React.forwardRef<Formsy, IFormProps>((props: IFormProps, ref) => <Form {...props} forwardedRef={ref} />),
  Form
);

/**
 * Only the static sub-components are re-exported. Intersecting with `typeof Form` instead
 * would preserve the class's *construct* signature, which makes JSX treat `Form` as a class
 * component whose props include the internal `forwardedRef` prop — surfacing as a required
 * prop for every consumer.
 */
type FormStatics = Pick<
  typeof Form,
  'Button' | 'Radio' | 'Field' | 'Group' | 'Checkbox' | 'Input' | 'TextArea' | 'Select' | 'RadioGroup' | 'Dropdown'
>;

export default FormComponent as React.ForwardRefExoticComponent<IFormProps & React.RefAttributes<Formsy>> & FormStatics;
