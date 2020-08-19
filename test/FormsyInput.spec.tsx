import React from 'react';
import { mount } from 'enzyme';
import FormsyInput, { IFormsyInputProps } from '../src/FormsyInput';
import { Input } from 'semantic-ui-react';
import Form from 'formsy-react';

const validValue = 'john.doe@test.com';
const invalidValue = 'Invalid Input';
const validationError = 'This is not a valid email';
const errorLabel = <div className="error-label" />;

const TestForm = ({ value, instantValidation }: Partial<IFormsyInputProps>) => {
  return (
    <Form>
      <FormsyInput
        label={<span>Email</span>}
        name="testInput"
        validations="isEmail"
        required // without it "valid" scenario is pass without changes
        value={value}
        instantValidation={instantValidation}
        errorLabel={errorLabel}
        validationErrors={{
          isEmail: validationError,
        }}
      />
    </Form>
  );
};

describe('<Input/>', () => {
  let wrapper: any;
  let input: any;

  beforeEach(() => {
    wrapper = mount(<TestForm />);
    input = wrapper.find('FormsyInput');
  });

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  it("Renders Semantic-UI-React's <Input/>", () => {
    expect(
      mount(<TestForm />)
        .find(FormsyInput)
        .find('Input')
        .is(Input)
    ).toBeTruthy();
  });

  describe('Layout structure', () => {
    it('should not render form label', () => {
      const formLabel = wrapper.find('.field > label');
      expect(formLabel).toHaveLength(0);
    });
  });

  describe('When value is invalid', () => {
    beforeEach(() => {
      wrapper = mount(<TestForm value={invalidValue} />);
      input = wrapper.find('FormsyInput');
    });

    it("Doesn't show any errors initially", () => {
      expect(input.props().isValid).toBeFalsy();
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      expect(wrapper.find(errorLabel)).toBeTruthy();
    });

    it('Shows error when user clicks away', () => {
      input
        .find('input')
        .simulate('change', { target: { value: invalidValue } }); // changes the pristine
      input.find('input').simulate('blur');

      expect(wrapper.find('.error-label')).toHaveLength(1);
    });

    it('Hides error when user clicks away', () => {
      input.find('input').simulate('change', { target: { value: validValue } }); // changes the pristine
      input.find('input').simulate('blur');

      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it('Shows error text passed to it', () => {
      submitForm();
      expect(wrapper.find('.error-label').props().children).toBe(
        validationError
      );
    });
  });

  describe('When value is valid', () => {
    beforeEach(() => {
      wrapper = mount(<TestForm value={validValue} />);
      input = wrapper.find('FormsyInput');
    });

    it("Doesn't show any errors initially", () => {
      expect(input.props().isValid).toBeTruthy();
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it("Doesn't show error when form is submitted", () => {
      submitForm();
      expect(input.props().isValid).toBeTruthy();
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it("Doesn't show error when user clicks away", () => {
      input.find('input').simulate('change', { target: { value: validValue } }); // changes the pristine
      input.find('input').simulate('blur');
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it('Shows an error when user clicks away', () => {
      input
        .find('input')
        .simulate('change', { target: { value: invalidValue } }); // changes the pristine
      input.find('input').simulate('blur');
      expect(wrapper.find('.error-label')).toHaveLength(1);
    });
  });

  describe('instantValidation', () => {
    beforeEach(() => {
      wrapper = mount(<TestForm instantValidation />);
      input = wrapper.find('FormsyInput');
    });

    it('Shows instant validation', () => {
      expect(wrapper.find('.error-label')).toHaveLength(0);

      input
        .find('input')
        .simulate('change', { target: { value: invalidValue } }); // changes the pristine
      expect(wrapper.find('.error-label')).toHaveLength(1);

      input.find('input').simulate('change', { target: { value: validValue } }); // changes the pristine
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });
  });
});
