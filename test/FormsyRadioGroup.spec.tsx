import { fireEvent, render, RenderResult } from '@testing-library/react';
import Form from 'formsy-react';
import React from 'react';
import { Radio } from 'semantic-ui-react';
import { RadioGroup } from '../src';

const validationError = 'Validation Error';
const errorLabel = <div className="error-label" data-testid="error-label" />;

const renderTestForm = (defaultSelected?: string) => {
  const TestForm = () => {
    return (
      <Form>
        <RadioGroup
          name="radioGroup"
          required
          defaultSelected={defaultSelected}
          errorLabel={errorLabel}
          validationErrors={{
            isDefaultRequiredValue: validationError,
          }}
        >
          <Radio label="One" value="one" />
          <Radio label="Two" value="two" />
          <Radio label="Three" value="three" />
        </RadioGroup>
      </Form>
    );
  };
  return render(<TestForm />);
};

describe('<RadioGroup/>', () => {
  let wrapper: RenderResult;

  const submitForm = () => {
    fireEvent.submit(
      wrapper.container.querySelector('form') as HTMLFormElement
    );
  };

  const clickOnRadioWith = (value: string) => {
    fireEvent.click(
      wrapper.container.querySelector(
        `input[type=radio][value=${value}]`
      ) as any
    );
  };

  beforeEach(() => {
    wrapper = renderTestForm();
  });

  it('Renders Radio Buttons', () => {
    expect(
      wrapper.container.querySelectorAll('input[type=radio]')
    ).toHaveLength(3);
  });

  it('Should show a selected radio when defaultSelected is specified', () => {
    wrapper = renderTestForm('two');
    expect(
      wrapper.container.querySelectorAll('input[type=radio]')[1]
    ).toBeChecked();
  });

  describe('When value is valid', () => {
    it('Should not show errors when form is submitted', () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();

      clickOnRadioWith('two');
      submitForm();
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });
  });

  describe('When value is Invalid', () => {
    it('Should show errors when form is submitted', () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
    });
  });
});
