import * as React from 'react';
import Formsy from 'formsy-react';
import {
  Container,
  Button,
  Label,
  Segment,
  Divider,
  Message,
} from 'semantic-ui-react';
import { Input } from '../src';

const styles = {
  root: {
    marginTop: 18,
    // padding: '0 24px 24px 24px',
  },

  customErrorLabel: {
    color: '#f00',
    textAlign: 'center',
  },
};

export default class InputExamples extends React.Component {
  public state = {
    result: null,
  };
  private formRef = React.createRef<Formsy>();
  onValidSubmit = (formData) =>
    this.setState({ result: JSON.stringify(formData, null, 2) });

  render() {
    const errorLabel = <Label color="red" pointing="left" />;

    // Shows errros with the <Label/> component
    const inputWithLabel = (
      <Input
        name="inputWithLabel"
        placeholder="Your primary email"
        icon="mail"
        label="Email"
        required
        validations="isEmail"
        validationErrors={{
          isEmail: 'This is not a valid email',
          isDefaultRequiredValue: 'Email is Required',
        }}
        errorLabel={errorLabel}
      />
    );

    const instantValidation = (
      <Input
        instantValidation
        name="inputWithLabel2"
        placeholder="Your primary email"
        label="Email"
        icon="mail"
        required
        validations="isEmail"
        validationErrors={{
          isEmail: 'This is not a valid email',
          isDefaultRequiredValue: 'Email is Required',
        }}
        errorLabel={errorLabel}
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
        errorLabel={errorLabel}
      />
    );

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
        errorLabel={<div style={styles.customErrorLabel as any} />}
      />
    );

    return (
      <Container style={styles.root}>
        <Formsy
          noValidate
          onValidSubmit={this.onValidSubmit}
          ref={this.formRef}
        >
          <Segment>
            <h5> Input With Error Label </h5>
            {inputWithLabel}
          </Segment>

          <Segment>
            <h5> Instant Validation </h5>
            {instantValidation}
          </Segment>

          <Segment>
            <h5> Input With Custorm Error Label </h5>
            {inputWithCustomErrorLabel}
          </Segment>

          <Segment>
            <h5> Input With Default Value </h5>
            {inputWithDefaultValue}
          </Segment>

          <Divider />

          <Button content="Submit" color="orange" />
          <Button
            type="button"
            onClick={() =>
              this.formRef.current?.reset({
                inputWithDefaultValue: 'john.doe@test.com',
              })
            }
            content="Reset"
            color="black"
          />
        </Formsy>
        {!!this.state.result && (
          <Message>
            <pre>{this.state.result}</pre>
          </Message>
        )}
      </Container>
    );
  }
}
