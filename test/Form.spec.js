import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import { spy } from 'sinon';
import Form from '../src/Form';
import { Form as SemanticUIForm } from 'semantic-ui-react';
import FormsyInput from '../src/FormsyInput';
import FormsyTextArea from '../src/FormsyTextArea';
import FormsyCheckbox from '../src/FormsyCheckbox';
import FormsyDropdown from '../src/FormsyDropdown';
import FormsySelect from '../src/FormsySelect';

describe('<Form/>', () => {
  it('Renders Semantic-UI-React\'s Form', () => {
    const wrapper = mount(<Form> <Form.Input name="input"/> </Form>);
    assert.isDefined(wrapper.find(SemanticUIForm));
  });

  context('When using shorthands', () => {
    const mountForm = (formElement) => {
      const TestForm = () => <Form> { formElement } </Form>;
      return mount(<TestForm/>);
    };

    it('should render <Form.Input/> as <FormsyInput/>', () => {
      const wrapper = mountForm(<Form.Input name="input"/>);
      const input = wrapper.find(FormsyInput);
      assert.equal(input.length, 1);
      assert.isTrue(input.is(FormsyInput));
    });

    it('should render <Form.TextArea/> as <FormsyTextArea/>', () => {
      const wrapper = mountForm(<Form.TextArea name="formInput"/>);
      const textArea = wrapper.find(FormsyTextArea);
      assert.equal(textArea.length, 1);
      assert.isTrue(textArea.is(FormsyTextArea));
    });

    it('should render <Form.Checkbox/> as <FormsyCheckbox/>', () => {
      const wrapper = mountForm(<Form.Checkbox name="formInput"/>);
      const checkbox = wrapper.find(FormsyCheckbox);
      assert.equal(checkbox.length, 1);
      assert.isTrue(checkbox.is(FormsyCheckbox));
    });

    it('should render <FormsyCheckbox/> as <Form.Radio/>', () => {
      const wrapper = mountForm(<Form.Radio name="formInput"/>);
      const radio = wrapper.find('FormRadio');
      assert.equal(radio.length, 1);
      assert.isTrue(radio.is(SemanticUIForm.Radio));
    });

    it('should render <Form.Dropdown/> as <FormsyDropdown/>', () => {
      const wrapper = mountForm(<Form.Dropdown name="formInput" options={[]}/>);
      const dropdown = wrapper.find(FormsyDropdown);
      assert.equal(dropdown.length, 1);
      assert.isTrue(dropdown.is(FormsyDropdown));
    });

    it('should render <Form.Select/> as <FormsySelect/>', () => {
      const wrapper = mountForm(<Form.Select name="formInput" options={[]}/>);
      const select = wrapper.find(FormsySelect);
      assert.equal(select.length, 1);
      assert.isTrue(select.is(FormsySelect));
    });
  });

  context('When Submitting', () => {
    let wrapper;
    let input;
    let isValid = false;
    const onValidSubmit = spy();
    const onInvalidSubmit = spy();
    const onSubmit = spy();
    const validValue = 'john.doe@test.com';
    const invalidValue = 'Invalid Input';
    const validationError = 'This is not a valid email';
    const errorLabel = <div className="error-label"/>;

    const TestForm = () => { // eslint-disable-line
      return (
        <Form
          onValidSubmit={ onValidSubmit }
          onInvalidSubmit={ onInvalidSubmit }
          onSubmit={ onSubmit }
          onValid={ () => isValid = true }
          onInvalid={ () => isValid = false }
        >
          <FormsyInput
            name="testInput"
            validations="isEmail"
            errorLabel={ errorLabel }
            validationErrors = {{
              isEmail: validationError,
            }}
          />
        </Form>
      );
    };

    const submitForm = () => {
      wrapper.find('Formsy').simulate('submit');
    };

    const validateSubmitCall = (formData) => {
      assert.ok(onSubmit.calledWith(formData));
      assert.isFunction(onSubmit.args[0][1]);
      assert.isFunction(onSubmit.args[0][2]);
    };

    beforeEach(() => {
      wrapper = mount(<TestForm/>);
      input = wrapper.find('FormsyInput');
    });

    context('When form is Valid', () => {
      it('should call onSubmit and onValidSubmit when submitted', () => {
        input.props().setValue(validValue);
        assert.isTrue(isValid);
        submitForm();
        assert.equal(onSubmit.callCount, 1);
        assert.equal(onValidSubmit.callCount, 1);
        validateSubmitCall({ testInput: validValue });
      });

      it('should not call onInvalidSubmit when submitted', () => {
        input.props().setValue(validValue);
        assert.isTrue(isValid);
        submitForm();
        assert.equal(onSubmit.callCount, 2);
        assert.equal(onInvalidSubmit.callCount, 0);
        validateSubmitCall({ testInput: validValue });
      });
    });

    context('When form is Invalid', () => {
      beforeEach(() => input.props().setValue(invalidValue));
      it('should call onSubmit and onInvalidSubmit when submitted', () => {
        assert.isFalse(isValid);
        submitForm();
        assert.equal(onSubmit.callCount, 3);
        assert.equal(onValidSubmit.callCount, 2);
        validateSubmitCall({ testInput: invalidValue });
      });

      it('should call onValidSubmit when submitted', () => {
        assert.isFalse(isValid);
        submitForm();
        assert.equal(onSubmit.callCount, 4);
        assert.equal(onValidSubmit.callCount, 2);
        validateSubmitCall({ testInput: invalidValue });
      });
    });
  });
});
