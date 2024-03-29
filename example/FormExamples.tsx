import { Formsy } from 'formsy-react/dist/Formsy';
import * as React from 'react';
import { Input, Label, Message } from 'semantic-ui-react';
import { Form } from '../src';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

export default class FormExamples extends React.Component {
  public state = {
    result: null,
  };
  private formRef = React.createRef<Formsy>();

  onValidSubmit = (formData) =>
    this.setState({ result: JSON.stringify(formData, null, 2) });

  render() {
    return (
      <Form ref={this.formRef} onValidSubmit={this.onValidSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            required
            name="firstName"
            label="First name"
            placeholder="First name"
            validations="isWords"
            errorLabel={<Label color="red" pointing />}
            validationErrors={{
              isWords: 'No numbers or special characters allowed',
              isDefaultRequiredValue: 'First Name is Required',
            }}
          />
          <Form.Input
            name="lastName"
            label="Last name"
            placeholder="Last name"
            required
            validations="isWords"
            errorLabel={<Label color="red" pointing />}
            validationErrors={{
              isWords: 'No numbers or special characters allowed',
              isDefaultRequiredValue: 'Last Name is Required',
            }}
          />
          <Form.Select
            name="gender"
            label="Gender"
            options={options}
            placeholder="Gender"
            required
            errorLabel={<Label color="red" pointing />}
            validationErrors={{
              isDefaultRequiredValue: 'Gender is Required',
            }}
          />
        </Form.Group>

        <Form.Group inline>
          <Form.Input
            name="phonePrefix"
            width={2}
            inline
            label="Phone"
            placeholder="+1"
          />
          <Form.Input
            name="phone"
            width={4}
            inline
            label="-"
            placeholder="000-000-0000"
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            name="email"
            label="Email"
            required
            inputAs={
              <Input
                label="@gmail.com"
                labelPosition="right"
                placeholder="John"
              />
            }
          />
        </Form.Group>

        <Form.RadioGroup
          name="size"
          required
          label="Size"
          errorLabel={<Label color="red" pointing="left" />}
          validationErrors={{
            isDefaultRequiredValue: 'Size is Required',
          }}
        >
          <Form.Radio label="Small" value="sm" />
          <Form.Radio label="Medium" value="md" />
          <Form.Radio label="Large" value="lg" />
        </Form.RadioGroup>

        <Form.TextArea
          name="about"
          label="About"
          placeholder="Tell us more about you..."
          required
          errorLabel={<Label color="red" pointing />}
          validationErrors={{
            isDefaultRequiredValue: 'We need to know more about you',
          }}
        />

        <Form.Checkbox
          name="terms"
          label="I agree to the Terms and Conditions"
          validations="isTrue"
          errorLabel={<Label color="red" pointing="left" />}
          validationErrors={{
            isTrue: "You'll have to agree to the Terms and Conditions",
          }}
        />

        <Form.Group>
          <Form.Button content="Submit" color="green" />
          <Form.Button
            type="button"
            content="Reset"
            onClick={() => this.formRef.current?.reset()}
          />
        </Form.Group>
        {!!this.state.result && (
          <Message>
            <pre>{this.state.result}</pre>
          </Message>
        )}
      </Form>
    );
  }
}
