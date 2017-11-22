import React, { Component } from 'react';
import Form from 'formsy-react';
import { Container, Button, Label, Segment, Radio, Checkbox } from 'semantic-ui-react';
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

export default class RadioGroupExamples extends Component {
  onValidSubmit = (formData) => alert(JSON.stringify(formData)) // eslint-disable-line

  render() {
    const errorLabel = <Label color="red" pointing="left"/>;

    const radioGroup = (
      <RadioGroup
        name="radioGroup"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={ errorLabel }
        style={ styles.radioGroup }
      >
        <Radio label="one" value="one" style={ styles.radio }/>
        <Radio label="two" value="two" style={ styles.radio }/>
        <Radio label="three" value="three" style={ styles.radio }/>
      </RadioGroup>
    );


    const checkboxes = (
      <RadioGroup
        name="checkboxes"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Please select one of these',
        }}
        errorLabel={ errorLabel }
        style={ styles.radioGroup }
      >
        <Checkbox label="one" value="one" style={ styles.radio }/>
        <Checkbox label="two" value="two" style={ styles.radio }/>
        <Checkbox label="three" value="three" style={ styles.radio }/>
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
        errorLabel={ errorLabel }
        style={ styles.radioGroup }
      >
        <Checkbox label="one" value="one" style={ styles.radio }/>
        <Radio toggle label="two" value="two" style={ styles.radio }/>
        <Radio slider label="three" value="three" style={ styles.radio }/>
        <Radio label="four" value="four" style={ styles.radio }/>
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
        errorLabel={ errorLabel }
        style={ styles.radioGroup }
      >
        <Checkbox label="one" value="one" style={ styles.radio }/>
        <Checkbox label="two" value="two" style={ styles.radio }/>
        <Checkbox label="three" value="three" style={ styles.radio }/>
      </RadioGroup>
    );


    return (
      <Container style={ styles.root }>
        <Form
          noValidate
          onValidSubmit={ this.onValidSubmit }
          ref={ref => this.form = ref }
        >
          <Segment>
            <h5> RadioGroup </h5>
            { radioGroup }
          </Segment>

          <Segment>
            <h5> Checkboxes </h5>
            { checkboxes }
          </Segment>

          <Segment>
            <h5> All Variations </h5>
            { allVariations }
          </Segment>

          <Segment>
            <h5> Default Selected </h5>
            { defaultSelected }
          </Segment>

          <Button
            content="Submit"
            style={ styles.formElement }
            color="orange"
          />
          <Button
            type="button"
            onClick={ () => this.form.reset({
              defaultSelected: 'two',
            })}
            content="Reset"
            color="black"
          />
        </Form>

      </Container>
    );
  }
}
