import React, { Component } from 'react';
import { Form } from 'formsy-react';
import { Container, Button, Label, Segment } from 'semantic-ui-react';
import { Checkbox } from '../src';

// <Radio/> has similar behavior and props

const styles = {
  root: {
    marginTop: 18,
  },

  customErrorLabel: {
    color: '#f00',
    textAling: 'center',
  },
};

export default class CheckboxExamples extends Component {
  state = { formData: null }

  onSubmit = (formData) => {
    this.setState({ formData });
  }

  render() {
    const errorLabel = <Label color="red" pointing="left"/>;

    const { formData } = this.state;

    const requiredCheckbox = (
      <Checkbox
        name="checkbox"
        label="I agree to everything"
        required
        validations="isTrue"
        validationErrors={{
          isTrue: 'This is non-negotiable',
          isDefaultRequiredValue: 'You\'ll have to check this box',
        }}
        errorLabel={ errorLabel }
        style={ styles.formElement }
      />
    );

    const defaultChecked = (
      <Checkbox
        name="defaultChecked"
        label="Remember Me"
        required
        defaultChecked
        validations="isTrue"
        validationErrors={{
          isTrue: 'You\'ll have to check this box',
          isDefaultRequiredValue: 'You\'ll have to check this box',
        }}
        errorLabel={ errorLabel }
        style={ styles.formElement }
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
            <h5> Required Checkbox</h5>
            { requiredCheckbox }
          </Segment>

          <Segment>
            <h5> Default Checked </h5>
            { defaultChecked }
          </Segment>

          <Button
            content="Submit"
            style={ styles.formElement }
            color="orange"
          />
          <Button
            type="button"
            onClick={ () => this.form.reset({
              defaultChecked: true,
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
