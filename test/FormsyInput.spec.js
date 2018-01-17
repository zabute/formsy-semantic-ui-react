import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import FormsyInput from '../src/FormsyInput';
import { Input } from 'semantic-ui-react';
import Form from 'formsy-react';

const validValue = 'john.doe@test.com';
const invalidValue = 'Invalid Input';
const validationError = 'This is not a valid email';
const errorLabel = <div className="error-label"/>;

const TestForm = () => {
  return (
    <Form>
      <FormsyInput
        label={<span>Email</span>}
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

describe('<Input/>', () => {
  let wrapper;
  let input;

  beforeEach(() => {
    wrapper = mount(<TestForm/>);
    input = wrapper.find('FormsyInput');
  });

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  it('Renders Semantic-UI-React\'s <Input/>', () => {
    assert.ok(mount(<TestForm/>).find(FormsyInput).find('Input').is(Input));
  });

  context('When value is invalid', () => {
    beforeEach(() => input.props().setValue(invalidValue));

    it('Doesn\'t show any errors initially', () => {
      assert.notOk(input.props().isValid());
      assert.equal(wrapper.find('.error-label').length, 0);
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 1);
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      assert.ok(wrapper.find(errorLabel));
    });

    it('Shows error when user clicks away', () => {
      input.find('Input').props().onBlur();
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 1);
    });

    it('Shows error text passed to it', () => {
      submitForm();
      assert.equal(wrapper.find('.error-label').props().children, validationError);
    });
  });

  context('When value is valid', () => {
    beforeEach(() => input.props().setValue(validValue));

    it('Doesn\'t show any errors initially', () => {
      assert.ok(input.props().isValid());
      assert.equal(wrapper.find('.error-label').length, 0);
    });

    it('Doesn\'t show error when form is submitted', () => {
      submitForm();
      assert.ok(input.props().isValid());
      assert.equal(wrapper.find('.error-label').length, 0);
    });

    it('Doesn\'t show error when user clicks away', () => {
      input.find('Input').props().onBlur();
      assert.equal(wrapper.find('.error-label').length, 0);
    });
  });
});
