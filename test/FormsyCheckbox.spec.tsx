import React from 'react';
import { mount } from 'enzyme';
import { Checkbox as FormsyCheckbox } from '../src';
import Form from 'formsy-react';
import { Checkbox } from 'semantic-ui-react';

const validationError = 'Please check this';
const errorLabel = <div className="error-label" />;

const TestForm = () => {
  return (
    <Form>
      <FormsyCheckbox
        name="testInput"
        validations="isTrue"
        errorLabel={errorLabel}
        validationErrors={{
          isTrue: validationError,
        }}
      />
    </Form>
  );
};

describe('<Checkbox/>', () => {
  let wrapper: any;
  let checkbox: any;

  beforeEach(() => {
    wrapper = mount(<TestForm />);
    checkbox = wrapper.find('FormsyCheckbox');
  });

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  it("Renders Semantic-UI-React's <Checkbox/>", () => {
    expect(
      mount(<TestForm />)
        .find(FormsyCheckbox)
        .find('Checkbox')
        .is(Checkbox)
    ).toBeTruthy();
  });

  describe('When value is invalid', () => {
    it("Doesn't show any errors initially", () => {
      expect(checkbox.props().isValid).toBeFalsy();
      expect(checkbox.find('Checkbox').props().error).toBeFalsy();
      expect(checkbox.find('.error-label')).toHaveLength(0);
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
      expect(wrapper.find('.error-label').props().children).toBe(
        validationError
      );
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
      expect(wrapper.find('.error-label').props().children).toBe(
        validationError
      );
    });
  });

  describe('When value is valid', () => {
    beforeEach(() =>
      checkbox.find('input').simulate('change', { target: { checked: true } })
    );

    it("Doesn't show any errors initially", () => {
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it("Doesn't show error when form is submitted", () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it('Shows error when unchecked', () => {
      checkbox.props().setValue(true);
      expect(wrapper.find('.error-label')).toHaveLength(0);
      checkbox.props().setValue(false);
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
      expect(wrapper.find('.error-label').props().children).toBe(
        validationError
      );
    });
  });
});
