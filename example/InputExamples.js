import React, { Component } from 'react';
import { Form } from 'formsy-react';
import { Container, Button, Label, Segment, Divider } from 'semantic-ui-react';
import { Input } from '../src';

// <TextArea/> has similar behavior and props

const styles = {
  root: {
    marginTop: 18,
  },

  customErrorLabel: {
    color: '#f00',
    textAling: 'center',
  },

  toolbar: {
    float: 'right',
  },
};

export default class InputExamples extends Component {
  state = { formData: null }

  onSubmit = (formData) => {
    this.setState({ formData });
  }

  render() {
    const { formData } = this.state;

    const errorLabel = <Label color="red" pointing="left"/>;

    // Shows errros with the <Label/> component
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
        errorLabel={ errorLabel }
        style={ styles.formElement }
      />
    );

    const inputWithDefaultValue = (
      <Input
        name="inputWithDefaultValue"
        placeholder="Email"
        defaultValue="john.doe@test.com"
        icon="mail"
        iconPosition="left"
        required
        validations="isEmail"
        validationErrors={{
          isEmail: 'This is not a valid email',
          isDefaultRequiredValue: 'Email is Required',
        }}
        errorLabel={ errorLabel }
        style={ styles.formElement }
      />
    );

    const inputWithCustomErrorLabel = (
      <Input
        name="inputWithCustomErrorLabel"
        placeholder="Some Value"
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

    return (
      <Container style={ styles.root }>
        <Form
          noValidate
          onSubmit={ this.onSubmit }
          ref={ref => this.form = ref }
        >
          <Segment>
            <h5> Input With Error Label </h5>
            { inputWithLabel }
          </Segment>

          <Segment>
            <h5> Input With Custorm Error Label </h5>
            { inputWithCustomErrorLabel }
          </Segment>

          <Segment>
            <h5> Input With Default Value </h5>
            { inputWithDefaultValue }
          </Segment>

          <Divider/>

          <Button
            content="Submit"
            style={ styles.formElement }
            color="orange"
          />
          <Button
            type="button"
            onClick={ () => this.form.reset({
              inputWithDefaultValue: 'john.doe@test.com',
            })}
            content="Reset"
            color="black"
          />
        </Form>

        <Segment>
          <h5> Form Data </h5>
          { JSON.stringify(formData) }
        </Segment>

      </Container>
    );
  }
}
