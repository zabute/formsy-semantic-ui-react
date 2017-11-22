import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import { Checkbox as FormsyCheckbox } from '../src';
import Form from 'formsy-react';
import { Checkbox } from 'semantic-ui-react';

const validationError = 'Please check this';
const errorLabel = <div className="error-label"/>;

const TestForm = () => {
  return (
    <Form>
      <FormsyCheckbox
        name="testInput"
        validations="isTrue"
        errorLabel={ errorLabel }
        validationErrors = {{
          isTrue: validationError,
        }}
      />
    </Form>
  );
};

describe('<Checkbox/>', () => {
  let wrapper;
  let checkbox;

  beforeEach(() => {
    wrapper = mount(<TestForm/>);
    checkbox = wrapper.find('FormsyCheckbox');
  });

  const submitForm = () => {
    wrapper.find(Form).simulate('submit');
  };

  it('Renders Semantic-UI-React\'s <Checkbox/>', () => {
    assert.ok(mount(<TestForm/>).find(FormsyCheckbox).find('Checkbox').is(Checkbox));
  });

  context('When value is invalid', () => {
    it('Doesn\'t show any errors initially', () => {
      assert.notOk(checkbox.props().isValid());
      assert.notOk(checkbox.find('Checkbox').props().error);
      assert.equal(checkbox.find('.error-label').length, 0);
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 1);
      assert.equal(
        wrapper.find('.error-label').props().children,
        validationError
      );
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 1);
      assert.equal(
        wrapper.find('.error-label').props().children,
        validationError
      );
    });
  });

  context('When value is valid', () => {
    beforeEach(() => checkbox.props().setValue(true));

    it('Doesn\'t show any errors initially', () => {
      assert.ok(checkbox.props().isValid());
      assert.equal(wrapper.find('.error-label').length, 0);
    });

    it('Doesn\'t show error when form is submitted', () => {
      submitForm();
      assert.ok(checkbox.props().isValid());
      assert.equal(wrapper.find('.error-label').length, 0);
    });

    it('Shows error when unchecked', () => {
      checkbox.props().setValue(true);
      assert.equal(wrapper.find('.error-label').length, 0);
      checkbox.props().setValue(false);
      submitForm();
      assert.equal(wrapper.find('.error-label').length, 1);
      assert.equal(wrapper.find('.error-label').props().children, validationError);
    });
  });
});
