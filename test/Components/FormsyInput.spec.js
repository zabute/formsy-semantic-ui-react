import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Input from '../../src/FormsyInput';
import { Form } from 'formsy-react';

describe('<Input/>', () => {
  it('should reander', () => {
    const wrapper = shallow(<Form> <Input name="name"/> </Form>);
    assert.ok(wrapper);
  });
});
