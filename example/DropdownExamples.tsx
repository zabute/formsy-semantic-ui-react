import Formsy from 'formsy-react';
import * as React from 'react';
import { Button, Container, Label, Message, Segment } from 'semantic-ui-react';
import { Dropdown, Select } from '../src';

const styles = {
  root: {
    marginTop: 18,
  },
};

const options = [
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
];

export default class CheckboxExamples extends React.Component {
  public state = {
    result: null,
  };
  private formRef = React.createRef<Formsy>();
  onValidSubmit = (formData) =>
    this.setState({ result: JSON.stringify(formData, null, 2) });

  render() {
    const errorLabel = <Label color="red" pointing="left" />;

    const dropdownSingle = (
      <Dropdown
        name="dropdownSingle"
        placeholder="Select Product"
        search
        selection
        required
        validationErrors={{
          isDefaultRequiredValue: 'You need to select a product',
        }}
        errorLabel={errorLabel}
        options={options}
      />
    );

    const singleSelectWithDefaultValue = (
      <Dropdown
        name="singleSelectWithDefaultValue"
        placeholder="Select Product"
        search
        selection
        defaultValue="gloves"
        required
        validationErrors={{
          isDefaultRequiredValue: 'You need to select a product',
        }}
        errorLabel={errorLabel}
        options={options}
      />
    );

    const dropdownMultiple = (
      <Dropdown
        name="dropdownMultiple"
        placeholder="Select Product"
        multiple
        search
        selection
        validations={{
          customValidation: (values, value) => !(!value || value.length < 4),
        }}
        validationErrors={{
          customValidation: 'You need to select at least FOUR products',
        }}
        errorLabel={errorLabel}
        options={options}
      />
    );

    const multipleWithDefaultValues = (
      <Dropdown
        name="multipleWithDefaultValues"
        placeholder="Select Product"
        multiple
        search
        selection
        defaultValue={['scarf', 'jacket']}
        validations={{
          customValidation: (values, value) => !(!value || value.length < 2),
        }}
        validationErrors={{
          customValidation: 'You need to select at least TWO products',
        }}
        errorLabel={errorLabel}
        options={options}
      />
    );

    const asSelect = (
      <Select
        name="as-select"
        id="as-select"
        options={options}
        required
        validationErrors={{
          isDefaultRequiredValue: 'You need to select a product',
        }}
        errorLabel={errorLabel}
        compact={true}
        basic={true}
        defaultValue={options[0].value}
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
            <h5>Single-select</h5>
            {dropdownSingle}
          </Segment>

          <Segment>
            <h5>Single-select with default value</h5>
            {singleSelectWithDefaultValue}
          </Segment>

          <Segment>
            <h5>As Select</h5>
            {asSelect}
          </Segment>

          <Segment>
            <h5> Multi-select (Four selections minimum)</h5>
            {dropdownMultiple}
          </Segment>

          <Segment>
            <h5> Multi-select with default values (Two selections minimum) </h5>
            {multipleWithDefaultValues}
          </Segment>

          <Button content="Submit" color="orange" />
          <Button
            type="button"
            onClick={() =>
              this.formRef.current?.reset({
                singleSelectWithDefaultValue: 'gloves',
                multipleWithDefaultValues: ['scarf', 'jacket'],
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
