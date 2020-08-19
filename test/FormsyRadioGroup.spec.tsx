import React from 'react';
import { mount } from 'enzyme';
import { RadioGroup } from '../src';
import Form from 'formsy-react';
import { Radio } from 'semantic-ui-react';

const validationError = 'Vaidation Error';
const errorLabel = <div className="error-label" />;

const mountTestForm = (defaultSelected?: string) => {
  const TestForm = () => {
    return (
      <Form>
        <RadioGroup
          name="radioGroup"
          required
          defaultSelected={defaultSelected}
          errorLabel={errorLabel}
          validationErrors={{
            isDefaultRequiredValue: validationError,
          }}
        >
          <Radio label="One" value="one" />
          <Radio label="Two" value="two" />
          <Radio label="Three" value="three" />
        </RadioGroup>
      </Form>
    );
  };
  return mount(<TestForm />);
};

describe('<RadioGroup/>', () => {
  let wrapper: any;
  let radioGroup: any;

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  beforeEach(() => {
    wrapper = mountTestForm();
    radioGroup = wrapper.find('FormsyRadioGroup');
  });

  it('Renders Radio Buttons', () => {
    expect(wrapper.find(Radio)).toHaveLength(3);
  });

  it('Should show a selected radio when defaultSelected is specified', () => {
    wrapper = mountTestForm('two');
    expect(
      wrapper
        .find('FormGroup')
        .childAt(0)
        .childAt(1)
        .find('Radio')
        .props().checked
    ).toBeTruthy();
  });

  describe('When value is valid', () => {
    it('Should not show errors when form is submitted', () => {
      radioGroup.props().setValue('two');
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(0);
    });
  });

  describe('When value is Invalid', () => {
    it('Should show errors when form is submitted', () => {
      submitForm();
      expect(wrapper.find('.error-label')).toHaveLength(1);
    });
  });
});
