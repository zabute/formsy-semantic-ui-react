import React from 'react';
import { mount } from 'enzyme';
import { Checkbox as FormsyCheckbox } from '../src';
import Form from 'formsy-react';
import { Checkbox } from 'semantic-ui-react';

const validationError = 'Please check this';
const errorLabel = <div className="error-label" />;

const TestForm = ({ onSubmit, defaultChecked }: any = {}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormsyCheckbox
        name="testInput"
        validations="isTrue"
        errorLabel={errorLabel}
        defaultChecked={defaultChecked}
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
  let onSubmitSpy: jest.Mock;

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    wrapper = mount(<TestForm onSubmit={onSubmitSpy} />);
    checkbox = wrapper.find('FormsyCheckbox');
  });

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  const clickOnCheckbox = (checked: boolean) => {
    checkbox.find('input').simulate('change', { target: { checked } });
  };

  it("Renders Semantic-UI-React's <Checkbox/>", () => {
    expect(checkbox.find('Checkbox').is(Checkbox)).toBeTruthy();
  });

  it('should set a boolean value on checkbox without value / defaultChecked', () => {
    submitForm();

    expect(onSubmitSpy).toHaveBeenCalledWith(
      { testInput: false },
      expect.any(Function),
      expect.any(Function)
    );
  });

  it('should use defaultChecked as initial value', () => {
    const spy = jest.fn();
    const defaultChecked = true;
    wrapper = mount(
      <TestForm defaultChecked={defaultChecked} onSubmit={spy} />
    );
    submitForm();

    expect(spy).toHaveBeenCalledWith(
      { testInput: defaultChecked },
      expect.any(Function),
      expect.any(Function)
    );
  });

  describe('When value is invalid', () => {
    it("Doesn't show any errors initially", () => {
      expect(checkbox.prop('isValid')).toBeFalsy();
      expect(checkbox.find('Checkbox').prop('error')).toBeFalsy();
      expect(checkbox.find('.error-label')).toHaveLength(0);
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
      expect(wrapper.find('.error-label').text()).toBe(validationError);
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
      expect(wrapper.find('.error-label').text()).toBe(validationError);
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
      clickOnCheckbox(false);
      submitForm();

      expect(wrapper.find('.error-label')).toHaveLength(1);
      expect(wrapper.find('.error-label').text()).toBe(validationError);
    });
  });
});
