import React, { Component } from 'react';
import Form from 'formsy-react';
import { Container, Button, Label, Segment } from 'semantic-ui-react';
import { Checkbox } from '../src';

// <Radio/> has similar behavior and props

const styles = {
  root: {
    marginTop: 18,
  },
};

export default class CheckboxExamples extends Component {
  onValidSubmit = (formData) => alert(JSON.stringify(formData));   // eslint-disable-line

  render() {
    const errorLabel = <Label color="red" pointing="left"/>;

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
          onValidSubmit={ this.onValidSubmit }
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
      </Container>
    );
  }
}
