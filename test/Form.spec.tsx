import { mount } from 'enzyme';
import * as React from 'react';
import { Form as SemanticUIForm, Input } from 'semantic-ui-react';
import Form from '../src/Form';
import FormsyCheckbox from '../src/FormsyCheckbox';
import FormsyDropdown from '../src/FormsyDropdown';
import FormsyInput from '../src/FormsyInput';
import FormsySelect from '../src/FormsySelect';
import FormsyTextArea from '../src/FormsyTextArea';

describe('<Form/>', () => {
  const mountForm = (formElement: any) => {
    const TestForm = () => <Form> {formElement} </Form>;
    return mount(<TestForm />);
  };

  it("Renders Semantic-UI-React's Form", () => {
    const wrapper = mount(
      <Form>
        <Form.Input name="input" />
      </Form>
    );
    expect(wrapper.find(SemanticUIForm)).toBeDefined();
  });

  it('should pass className only to Semantic Form', () => {
    const className = 'test';

    const wrapper = mount(
      <Form className={className}>
        <Form.Input name="input" />
      </Form>
    );

    expect(wrapper.find(SemanticUIForm).prop('className')).toContain(className);
    expect(wrapper.find('form').prop('className') || '').not.toContain(
      className
    );
  });

  describe('When using shorthands', () => {
    it('should render <Form.Input/> as <FormsyInput/>', () => {
      const wrapper = mountForm(<Form.Input name="input" />);
      const input = wrapper.find(FormsyInput);
      expect(input).toHaveLength(1);
      expect(input.is(FormsyInput)).toBeTruthy();
    });

    it('should render <Form.TextArea/> as <FormsyTextArea/>', () => {
      const wrapper = mountForm(<Form.TextArea rows={2} name="formInput" />);
      const textArea = wrapper.find(FormsyTextArea);
      expect(textArea).toHaveLength(1);
      expect(textArea.is(FormsyTextArea)).toBeTruthy();
    });

    it('should render <Form.Checkbox/> as <FormsyCheckbox/>', () => {
      const wrapper = mountForm(<Form.Checkbox name="formInput" />);
      const checkbox = wrapper.find(FormsyCheckbox);
      expect(checkbox).toHaveLength(1);
      expect(checkbox.is(FormsyCheckbox)).toBeTruthy();
    });

    it('should render <FormsyCheckbox/> as <Form.Radio/>', () => {
      const wrapper = mountForm(<Form.Radio name="formInput" />);
      const radio = wrapper.find('FormRadio');
      expect(radio).toHaveLength(1);
      expect(radio.is(SemanticUIForm.Radio)).toBeTruthy();
    });

    it('should render <Form.Dropdown/> as <FormsyDropdown/>', () => {
      const wrapper = mountForm(
        <Form.Dropdown name="formInput" options={[]} />
      );
      const dropdown = wrapper.find(FormsyDropdown);
      expect(dropdown).toHaveLength(1);
      expect(dropdown.is(FormsyDropdown)).toBeTruthy();
    });

    it('should render <Form.Select/> as <FormsySelect/>', () => {
      const wrapper = mountForm(<Form.Select name="formInput" options={[]} />);
      const select = wrapper.find(FormsySelect);
      expect(select).toHaveLength(1);
      expect(select.is(FormsySelect)).toBeTruthy();
    });

    describe('Layout structure', () => {
      it('should render label for a Input', () => {
        const wrapper = mountForm(
          <Form.Input name="input" label="input-label" />
        );
        const inputLabel = wrapper.find('label');
        expect(inputLabel).toHaveLength(1);
      });

      it('should not render label for a Input if none given', () => {
        const wrapper = mountForm(<Form.Input name="input" />);
        const inputLabel = wrapper.find('label');
        expect(inputLabel).toHaveLength(0);
      });

      it('should render label for a DropDown', () => {
        const wrapper = mountForm(
          <Form.Dropdown
            name="formInput"
            options={[]}
            label="drop-down-label"
          />
        );
        const inputLabel = wrapper.find('label');
        expect(inputLabel).toHaveLength(1);
      });

      it('should not render label for a DropDown', () => {
        const wrapper = mountForm(
          <Form.Dropdown name="formInput" options={[]} />
        );
        const inputLabel = wrapper.find('label');
        expect(inputLabel).toHaveLength(0);
      });
    });
  });

  describe('When using custom inputAs', () => {
    it('should allow render custom input', () => {
      const wrapper = mountForm(
        <Form.Input
          name="input"
          label="form field"
          inputAs={<Input label="prefix" />}
        />
      );

      const inputLabel = wrapper.find('.field > label');
      expect(inputLabel.text().trim()).toBe('form field');

      const prefixLabel = wrapper.find('.ui.label.label');
      expect(prefixLabel.text().trim()).toBe('prefix');
    });
  });

  describe('When Submitting', () => {
    let wrapper: any;
    let input: any;
    let isValid = false;
    const onValidSubmit = jest.fn();
    const onInvalidSubmit = jest.fn();
    const onSubmit = jest.fn();
    const validValue = 'john.doe@test.com';
    const invalidValue = 'Invalid Input';
    const validationError = 'This is not a valid email';
    const errorLabel = <div className="error-label" />;

    const TestForm = () => {
      // eslint-disable-line
      return (
        <Form
          onValidSubmit={onValidSubmit}
          onInvalidSubmit={onInvalidSubmit}
          onSubmit={onSubmit}
          onValid={() => (isValid = true)}
          onInvalid={() => (isValid = false)}
        >
          <FormsyInput
            name="testInput"
            validations="isEmail"
            errorLabel={errorLabel}
            validationErrors={{
              isEmail: validationError,
            }}
          />
        </Form>
      );
    };

    const submitForm = () => {
      wrapper.find('Formsy').simulate('submit');
    };

    const validateSubmitCall = (formData: any) => {
      expect(onSubmit).toHaveBeenCalledWith(
        formData,
        expect.any(Function),
        expect.any(Function)
      );
    };

    beforeEach(() => {
      wrapper = mount(<TestForm />);
      input = wrapper.find('FormsyInput');
    });

    describe('When form is Valid', () => {
      it('should call onSubmit and onValidSubmit when submitted', () => {
        input.props().setValue(validValue);
        expect(isValid).toBeTruthy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onValidSubmit).toHaveBeenCalledTimes(1);
        validateSubmitCall({ testInput: validValue });
      });

      it('should not call onInvalidSubmit when submitted', () => {
        input.props().setValue(validValue);
        expect(isValid).toBeTruthy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(2);
        expect(onInvalidSubmit).not.toBeCalled();
        validateSubmitCall({ testInput: validValue });
      });
    });

    describe('When form is Invalid', () => {
      beforeEach(() => input.props().setValue(invalidValue));
      it('should call onSubmit and onInvalidSubmit when submitted', () => {
        expect(isValid).toBeFalsy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(3);
        expect(onValidSubmit).toHaveBeenCalledTimes(2);
        validateSubmitCall({ testInput: invalidValue });
      });

      it('should call onValidSubmit when submitted', () => {
        expect(isValid).toBeFalsy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(4);
        expect(onValidSubmit).toHaveBeenCalledTimes(2);
        validateSubmitCall({ testInput: invalidValue });
      });
    });
  });
});
