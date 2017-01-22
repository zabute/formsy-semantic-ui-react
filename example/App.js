import React, { Component } from 'react';
import { Form } from 'formsy-react';
import { Button, Label, Divider } from 'semantic-ui-react';
import { Input, Checkbox, Radio, RadioGroup, Dropdown } from '../src/';

const styles = {
  header: {
    backgroundColor: '#ddd',
    padding: 18,
  },

  content: {
    padding: 50,
  },

  formElement: {
    marginBottom: 18,
  },

  customErrorLabel: {
    color: '#f00',
    textAling: 'center',
  },

  radioGroup: {
    display: 'flex',
    marginBottom: 18,
  },

  radio: {
    marginLeft: 4,
    marginRight: 12,
  },
};

export default class App extends Component {
  render() {
    const el = <Label color="red" pointing="left"/>;

    const inputWithLabel = (
      <Input
        name="inputWithLabel"
        placeholder="Email"
        icon="mail"
        iconPosition="left"
        required
        validations="isEmail"
        validationErrors={{
          isEmail: 'This is not a valid email',
          isDefaultRequiredValue: 'Email is Required',
        }}
        errorLabel={ el }
        style={ styles.formElement }
      />
    );

    // <TextArea/> has similar behavior and props
    const inputWithCustomErrorLabel = (
      <Input
        name="inputWithCustomErrorLabel"
        placeholder="Password"
        icon="lock"
        iconPosition="left"
        required
        validations="minLength:8"
        validationErrors={{
          minLength: 'Minimin of 8 characters',
          isDefaultRequiredValue: 'Password is Required',
        }}
        errorLabel={ <div style={ styles.customErrorLabel }/> }
        rootStyle={ styles.formElement }
      />
    );

    const checkbox = (
      <Checkbox
        name="xxx"
        label="I agree to everything"
        required
        validations="isTrue"
        validationErrors={{
          isTrue: 'This is non-negotiable',
          isDefaultRequiredValue: 'You\'ll have to check this box',
        }}
        errorLabel={ el }
        style={ styles.formElement }
      />
    );

    const radioGroup = (
      <RadioGroup
        name="radioGroup"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={ el }
        style={ styles.radioGroup }
      >
        <Radio name="one" label="one" value="one" style={ styles.radio }/>
        <Radio name="one" label="two" value="two" style={ styles.radio }/>
        <Radio name="one" label="three" value="three" style={ styles.radio }/>
      </RadioGroup>
    );

    // <Select/> has similar props and behavior
    const dropdown = (
      <Dropdown
        name="dropdown"
        placeholder="Select Product"
        required
        selection
        validationErrors={{
          isDefaultRequiredValue: 'You need to select a product',
        }}
        errorLabel={ el }
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
      />
    );

    return (
      <div>
        <header style={ styles.header }>
          <h3> formsy-semantic-ui-react </h3>
        </header>

        <div style={ styles.content}>

          <Form
            noValidate
            ref={(ref) => this.form = ref }
          >
            { inputWithLabel }
            { inputWithCustomErrorLabel }
            { checkbox }
            { radioGroup }
            { dropdown }

            <Divider/>
            <Button
              content="Submit"
              style={ styles.formElement }
              color="orange"
            />
            <Button
              type="button"
              onClick={ () => this.form.reset() }
              content="Reset"
              color="black"
            />
          </Form>
        </div>
     </div>
  );
  }
}
