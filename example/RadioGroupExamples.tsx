import * as React from 'react';
import Formsy from 'formsy-react';
import {
  Container,
  Button,
  Label,
  Segment,
  Radio,
  Checkbox,
  Message,
} from 'semantic-ui-react';
import { RadioGroup } from '../src';

const styles = {
  root: {
    marginTop: 18,
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
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={errorLabel}
        style={styles.radioGroup}
      >
        <Radio label="one" value="one" style={styles.radio} />
        <Radio label="two" value="two" style={styles.radio} />
        <Radio label="three" value="three" style={styles.radio} />
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
        <Checkbox label="one" value="one" style={styles.radio} />
        <Checkbox label="two" value="two" style={styles.radio} />
        <Checkbox label="three" value="three" style={styles.radio} />
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
        <Checkbox label="one" value="one" style={styles.radio} />
        <Radio toggle label="two" value="two" style={styles.radio} />
        <Radio slider label="three" value="three" style={styles.radio} />
        <Radio label="four" value="four" style={styles.radio} />
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
        <Checkbox label="one" value="one" style={styles.radio} />
        <Checkbox label="two" value="two" style={styles.radio} />
        <Checkbox label="three" value="three" style={styles.radio} />
      </RadioGroup>
    );

    return (
      <Container style={styles.root}>
        <Formsy
          noValidate={true}
          onValidSubmit={this.onValidSubmit}
          ref={this.formRef}
        >
          <Segment>
            <h5> RadioGroup </h5>
            {radioGroup}
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
