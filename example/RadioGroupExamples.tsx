import Formsy from 'formsy-react';
import * as React from 'react';
import {
  Container,
  Button,
  Label,
  Segment,
  Radio,
  Checkbox,
  Message,
} from 'semantic-ui-react';
import { RadioGroup, Form } from '../src';

const styles = {
  root: {
    marginTop: 18,
  },

  radioGroup: {
    display: 'flex',
    marginBottom: 18,
  },
};

export default class RadioGroupExamples extends React.Component {
  public state = {
    result: null,
  };
  private formRef = React.createRef<Formsy>();
  onValidSubmit = (formData) =>
    this.setState({ result: JSON.stringify(formData, null, 2) });

  render() {
    const errorLabel = <Label color="red" pointing="left" />;

    const radioGroup = (
      <RadioGroup
        name="radioGroup"
        required
        label="Label"
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={errorLabel}
        style={styles.radioGroup}
      >
        <Radio label="one" value="one" />
        <Radio label="two" value="two" />
        <Radio label="three" value="three" />
      </RadioGroup>
    );

    const disabledRadioGroup = (
      <RadioGroup
        name="radioGroup"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={errorLabel}
        style={styles.radioGroup}
      >
        <Radio label="one" value="one" />
        <Radio label="two" value="two" />
        <Radio label="three" value="three" />
      </RadioGroup>
    );

    const checkboxes = (
      <RadioGroup
        name="checkboxes"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={errorLabel}
        style={styles.radioGroup}
      >
        <Checkbox label="one" value="one" />
        <Checkbox label="two" value="two" />
        <Checkbox label="three" value="three" />
      </RadioGroup>
    );

    // Use All variations
    const allVariations = (
      <RadioGroup
        name="allVariations"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={errorLabel}
        style={styles.radioGroup}
      >
        <Checkbox label="one" value="one" />
        <Radio toggle label="two" value="two" />
        <Radio slider label="three" value="three" />
        <Radio label="four" value="four" />
      </RadioGroup>
    );

    const defaultSelected = (
      <RadioGroup
        name="defaultSelected"
        required
        defaultSelected="two"
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={errorLabel}
        style={styles.radioGroup}
      >
        <Checkbox label="one" value="one" />
        <Checkbox label="two" value="two" />
        <Checkbox label="three" value="three" />
      </RadioGroup>
    );

    return (
      <Container style={styles.root}>
        <Form onValidSubmit={this.onValidSubmit} ref={this.formRef}>
          <Segment>
            <h5> RadioGroup </h5>
            {radioGroup}

            <h5>Grouped</h5>
            <RadioGroup
              name="radioGroup"
              required
              inline={false}
              label="Label"
              validationErrors={{
                isDefaultRequiredValue: 'Please select one of these',
              }}
              errorLabel={errorLabel}
              style={styles.radioGroup}
            >
              <Radio label="one" value="one" />
              <Radio label="two" value="two" />
              <Radio label="three" value="three" />
            </RadioGroup>

            <h5>Disabled</h5>
            <RadioGroup
              name="radioGroup"
              required
              disabled={true}
              label="Label"
              validationErrors={{
                isDefaultRequiredValue: 'Please select one of these',
              }}
              errorLabel={errorLabel}
              style={styles.radioGroup}
            >
              <Radio label="one" value="one" />
              <Radio label="two" value="two" />
              <Radio label="three" value="three" />
            </RadioGroup>
          </Segment>

          <Segment>
            <h5> Checkboxes </h5>
            {checkboxes}
          </Segment>

          <Segment>
            <h5> All Variations </h5>
            {allVariations}
          </Segment>

          <Segment>
            <h5> Default Selected </h5>
            {defaultSelected}
          </Segment>

          <Button content="Submit" color="orange" />
          <Button
            type="button"
            onClick={() =>
              this.formRef.current?.reset({
                defaultSelected: 'two',
              })
            }
            content="Reset"
            color="black"
          />
        </Form>
        {!!this.state.result && (
          <Message>
            <pre>{this.state.result}</pre>
          </Message>
        )}
      </Container>
    );
  }
}
