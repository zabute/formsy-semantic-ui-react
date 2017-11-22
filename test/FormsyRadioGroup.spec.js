import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import { RadioGroup } from '../src';
import Form from 'formsy-react';
import { Radio } from 'semantic-ui-react';

const validationError = 'Vaidation Error';
const errorLabel = <div className="error-label"/>;

const mountTestForm = (defaultSelected) => {
  const TestForm = () => {
    return (
      <Form>
        <RadioGroup
          name="radioGroup"
          required
          defaultSelected={ defaultSelected }
          errorLabel={ errorLabel }
          validationErrors = {{
            isDefaultRequiredValue: validationError,
          }}
        >
          <Radio label="One" value="one"/>
          <Radio label="Two" value="two"/>
          <Radio label="Three" value="three"/>
        </RadioGroup>
      </Form>
    );
  };
  return mount(<TestForm/>);
};

describe('<RadioGroup/>', () => {
  let wrapper;
  let radioGroup;

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  beforeEach(() => {
    wrapper = mountTestForm();
    radioGroup = wrapper.find('FormsyRadioGroup');
  });

  it('Renders Radio Buttons', () => {
    assert.equal(wrapper.find(Radio).length, 3);
  });

  it('Should show a selected radio when defualtSelected is specified', () => {
    wrapper = mountTestForm('two');
    assert.isTrue(wrapper.find('FormGroup').childAt(0).childAt(1).find('Radio').props().checked);
  });

  context('When value is valid', () => {
    it('Should not show erros when form is submitted', () => {
      radioGroup.props().setValue('two');
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 0);
    });
  });

  context('When value is Invalid', () => {
    it('Should show erros when form is submitted', () => {
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 1);
    });
  });
});
