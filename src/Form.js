import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import { Form as SemanticUIForm } from 'semantic-ui-react';
import FormsyInput from './FormsyInput';
import FormsyTextArea from './FormsyTextArea';
import FormsyCheckbox from './FormsyCheckbox';
import FormsyDropdown from './FormsyDropdown';
import FormsySelect from './FormsySelect';
import FormsyRadioGroup from './FormsyRadioGroup';

export default class Form extends Component {
  static propTypes = {
    as: PropTypes.any,
    children: PropTypes.node,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    as: 'div',
  };

  static Input = props => <FormsyInput inputAs={SemanticUIForm.Input} {...props} />;
  static TextArea = props => <FormsyTextArea inputAs={SemanticUIForm.TextArea} {...props} />;
  static Select = props => <FormsySelect inputAs={SemanticUIForm.Select} {...props} />;
  static RadioGroup = props => <FormsyRadioGroup formRadioGroup {...props} />;
  static Dropdown = props => <FormsyDropdown inputAs={SemanticUIForm.Dropdown} {...props} />;
  static Checkbox = FormsyCheckbox;
  static Button = SemanticUIForm.Button;
  static Radio = SemanticUIForm.Radio;
  static Field = SemanticUIForm.Field;
  static Group = SemanticUIForm.Group;

  updateInputsWithError = errors =>
    this.formsyForm.updateInputsWithError(errors);
  reset = mapping => this.formsyForm.reset(mapping);
  submit = (event) => this.formsyForm.submit(event);

  render() {
    const { children, onSubmit } = this.props;

    const {
      mapping, // eslint-disable-line
      validationErrors, // eslint-disable-line
      onValid, // eslint-disable-line
      onValidSubmit, // eslint-disable-line
      onInvalid, // eslint-disable-line
      onInvalidSubmit, // eslint-disable-line
      onChange, // eslint-disable-line
      reset, // eslint-disable-line
      preventExternalInvalidation, // eslint-disable-line
      onSuccess, // eslint-disable-line
      onError, // eslint-disable-line
      ...nonFormsyReactFormProps,
    } = this.props;

    const {
      as,
      error, // eslint-disable-line
      inverted, // eslint-disable-line
      loading, // eslint-disable-line
      reply, // eslint-disable-line
      size, // eslint-disable-line
      success, // eslint-disable-line
      warning, // eslint-disable-line
      width, // eslint-disable-line
      ...nonSemanticUIFormProps,
    } = this.props;

    return (
      <Formsy
        noValidate
        ref={ref => (this.formsyForm = ref)}
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
