import React from 'react';
import { mount } from 'enzyme';
import { Dropdown as FormsyDropdown } from '../src';
import Form from 'formsy-react';
import { Dropdown } from 'semantic-ui-react';

const validationError = 'Please select something';
const errorLabel = <div className="error-label" />;

const TestForm = () => {
  return (
    <Form>
      <FormsyDropdown
        label={<span>Clothing</span>}
        name="testInput"
        options={[
          { text: 'Hat', value: 'hat' },
          { text: 'Scarf', value: 'scarf' },
          { text: 'Jacket', value: 'jacket' },
          { text: 'T-Shirt', value: 't_shirt' },
          { text: 'Gloves', value: 'gloves' },
          { text: 'Watch', value: 'watch' },
          { text: 'Belt', value: 'belt' },
          { text: 'Pants', value: 'pants' },
          { text: 'Shoes', value: 'shoes' },
          { text: 'Socks', value: 'socks' },
        ]}
        required
        errorLabel={errorLabel}
        validationErrors={{
          isDefaultRequiredValue: validationError,
        }}
      />
    </Form>
  );
};

describe('<Dropdown/>', () => {
  let wrapper: any;
  let dropdown: any;

  beforeEach(() => {
    wrapper = mount(<TestForm />);
    dropdown = wrapper.find('FormsyDropdown');
  });

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  it("Renders Semantic-UI-React's <Checkbox/>", () => {
    expect(
      mount(<TestForm />)
        .find(FormsyDropdown)
        .find('Dropdown')
        .is(Dropdown)
    ).toBeTruthy();
  });

  describe('When value is invalid', () => {
    it("Doesn't show any errors initially", () => {
      expect(dropdown.props().isValid).toBeFalsy();
      expect(dropdown.find('.error-label')).toHaveLength(0);
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      expect(wrapper.find(errorLabel)).toBeTruthy();
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
    beforeEach(() => dropdown.props().setValue('hat'));

    it("Doesn't show any errors initially", () => {
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });

    it("Doesn't show error when form is submitted", () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });
  });
});