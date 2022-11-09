import { fireEvent, render, RenderResult } from '@testing-library/react';
import Form from 'formsy-react';
import React from 'react';
import { Dropdown as FormsyDropdown } from '../src';

const validationError = 'Please select something';
const errorLabel = <div className="error-label" data-testid="error-label" />;

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

const TestForm = () => (
  <Form>
    <FormsyDropdown
      label={<span data-testid="label">Clothing</span>}
      name="testInput"
      options={options}
      required
      errorLabel={errorLabel}
      validationErrors={{
        isDefaultRequiredValue: validationError,
      }}
    />
  </Form>
);

describe('<Dropdown/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<TestForm />);
  });

  const submitForm = () => {
    fireEvent.submit(
      wrapper.container.querySelector('form') as HTMLFormElement
    );
  };

  const selectOptionAt = (index: number) => {
    fireEvent.click(wrapper.queryAllByRole('option')[index]);
  };

  it("Renders Semantic-UI-React's <Checkbox/>", () => {
    expect(wrapper.container.querySelector('.ui.dropdown')).toBeInTheDocument();
  });

  describe('When value is invalid', () => {
    it("Doesn't show any errors initially", () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
      expect(wrapper.queryByTestId('error-label')).toHaveTextContent(
        validationError
      );
    });
  });

  describe('When value is valid', () => {
    beforeEach(() => selectOptionAt(1));

    it("Doesn't show any errors initially", () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it("Doesn't show error when form is submitted", () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });
  });
});
