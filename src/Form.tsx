import Formsy from 'formsy-react';
import { FormsyProps } from 'formsy-react/dist/Formsy';
import { InjectedProps } from 'formsy-react/dist/withFormsy';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form as SemanticUIForm, FormProps } from 'semantic-ui-react';
import FormsyCheckbox from './FormsyCheckbox';
import FormsyDropdown, { IFormsyDropdownProps } from './FormsyDropdown';
import FormsyInput, { IFormsyInputProps } from './FormsyInput';
import FormsyRadioGroup, { IFormsyRadioGroupProps } from './FormsyRadioGroup';
import FormsySelect from './FormsySelect';
import FormsyTextArea from './FormsyTextArea';
import hoistNonReactStatics from 'hoist-non-react-statics';

interface IFormProps
  extends Partial<FormsyProps>,
    Omit<FormProps, 'onSubmit'> {}

class Form extends Component<IFormProps> {
  static propTypes = {
    as: PropTypes.any,
    children: PropTypes.node,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    as: 'div',
  };
  static Checkbox = FormsyCheckbox;
  static Button = SemanticUIForm.Button;
  static Radio = SemanticUIForm.Radio;
  static Field = SemanticUIForm.Field;
  static Group = SemanticUIForm.Group;

  static Input = (props: Omit<IFormsyInputProps, keyof InjectedProps<any>>) => (
    <FormsyInput inputAs={SemanticUIForm.Input} {...props} />
  );

  static TextArea = (
    props: Omit<IFormsyInputProps, keyof InjectedProps<any>>
  ) => <FormsyTextArea inputAs={SemanticUIForm.TextArea} {...(props as any)} />;

  static Select = (
    props: Omit<IFormsyDropdownProps, keyof InjectedProps<any>>
  ) => <FormsySelect inputAs={SemanticUIForm.Select} {...(props as any)} />;

  static RadioGroup = (
    props: Omit<IFormsyRadioGroupProps, keyof InjectedProps<any>>
  ) => <FormsyRadioGroup formRadioGroup {...(props as any)} />;

  static Dropdown = (
    props: Omit<IFormsyDropdownProps, keyof InjectedProps<any>>
  ) => <FormsyDropdown inputAs={SemanticUIForm.Dropdown} {...(props as any)} />;

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
      as,
      error,
      inverted,
      loading,
      reply,
      size,
      success,
      warning,
      widths,
      forwardedRef: _forwardedRef,
      ...nonSemanticUIFormProps
    } = this.props;

    return (
      <Formsy
        noValidate
        ref={forwardedRef}
        onSubmit={onSubmit}
        {...nonSemanticUIFormProps}
      >
        <SemanticUIForm as={as} {...nonFormsyReactFormProps}>
          {children}
        </SemanticUIForm>
      </Formsy>
    );
  }
}

export default hoistNonReactStatics(
  React.forwardRef((props: IFormProps, ref) => (
    <Form {...props} forwardedRef={ref} />
  )),
  Form
);
