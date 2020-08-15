import Formsy from 'formsy-react';
import * as React from 'react';
import { Button, Container, Label, Message, Segment } from 'semantic-ui-react';
import { Checkbox } from '../src';

// <Radio/> has similar behavior and props

const styles = {
  root: {
    marginTop: 18,
  },
};

export default class CheckboxExamples extends React.Component {
  public state = {
    result: null,
  };

  private formRef = React.createRef<Formsy>();

  onValidSubmit = (formData) =>
    this.setState({ result: JSON.stringify(formData, null, 2) });

  render() {
    const errorLabel = <Label color="red" pointing="left" />;

    const requiredCheckbox = (
      <Checkbox
        name="checkbox"
        label="I agree to everything"
        required
        validations="isTrue"
        validationErrors={{
          isTrue: 'This is non-negotiable',
          isDefaultRequiredValue: "You'll have to check this box",
        }}
        errorLabel={errorLabel}
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
          isTrue: "You'll have to check this box",
          isDefaultRequiredValue: "You'll have to check this box",
        }}
        errorLabel={errorLabel}
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
            <h5> Required Checkbox</h5>
            {requiredCheckbox}
          </Segment>

          <Segment>
            <h5> Default Checked </h5>
            {defaultChecked}
          </Segment>

          <Button content="Submit" color="orange" />
          <Button
            type="button"
            onClick={() =>
              this.formRef.current?.reset({
                defaultChecked: true,
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
