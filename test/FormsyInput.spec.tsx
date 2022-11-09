import { fireEvent, render, RenderResult } from '@testing-library/react';
import Form from 'formsy-react';
import React from 'react';
import FormsyInput, { IFormsyInputProps } from '../src/FormsyInput';

const validValue = 'john.doe@test.com';
const invalidValue = 'Invalid Input';
const validationError = 'This is not a valid email';
const errorLabel = <div className="error-label" data-testid="error-label" />;

const TestForm = ({ value, instantValidation }: Partial<IFormsyInputProps>) => {
  return (
    <Form>
      <FormsyInput
        label={<span data-testid="label">Email</span>}
        name="testInput"
        validations="isEmail"
        required // without it "valid" scenario is pass without changes
        value={value}
        instantValidation={instantValidation}
        errorLabel={errorLabel}
        validationErrors={{
          isEmail: validationError,
        }}
      />
    </Form>
  );
};

describe('<Input/>', () => {
  let wrapper: RenderResult;
  let input: HTMLInputElement;

  beforeEach(() => {
    wrapper = render(<TestForm />);
    input = wrapper.container.querySelector('input') as HTMLInputElement;
  });

  const submitForm = () => {
    fireEvent.submit(
      wrapper.container.querySelector('form') as HTMLFormElement
    );
  };

  const changeInput = (value: string) =>
    fireEvent.change(input, { target: { value } });

  it("Renders Semantic-UI-React's <Input/>", () => {
    expect(wrapper.container.querySelector('.ui.input')).toBeInTheDocument();
  });

  describe('Layout structure', () => {
    it('should not render form label', () => {
      const formLabel = wrapper.container.querySelector('.field > label');
      expect(formLabel).not.toBeInTheDocument();
    });

    it('should render Semantic Form.Field', () => {
      expect(wrapper.container.querySelector('.field')).toBeInTheDocument();
    });

    it('should render given label', () => {
      expect(wrapper.getByTestId('label')).toBeInTheDocument();
    });
  });

  describe('When value is invalid', () => {
    beforeEach(() => {
      wrapper = render(<TestForm value={invalidValue} />);
      input = wrapper.container.querySelector('input') as HTMLInputElement;
    });

    it("Doesn't show any errors initially", () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it('Shows error text when form is submitted', () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
    });

    it('Shows error when user clicks away', () => {
      changeInput(invalidValue + 'addition');
      fireEvent.blur(input);

      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
    });

    it('Hides error when user clicks away', () => {
      changeInput(validValue);
      fireEvent.blur(input);

      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it('Shows error text passed to it', () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).toHaveTextContent(
        validationError
      );
    });
  });

  describe('When value is valid', () => {
    beforeEach(() => {
      wrapper = render(<TestForm value={validValue} />);
      input = wrapper.container.querySelector('input') as HTMLInputElement;
    });

    it("Doesn't show any errors initially", () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it("Doesn't show error when form is submitted", () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it("Doesn't show error when user clicks away", () => {
      changeInput(validValue);
      fireEvent.blur(input);

      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it('Shows an error when user clicks away', () => {
      changeInput(invalidValue);
      fireEvent.blur(input);

      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
    });
  });

  describe('instantValidation', () => {
    beforeEach(() => {
      wrapper = render(<TestForm instantValidation />);
      input = wrapper.container.querySelector('input') as HTMLInputElement;
    });

    it('Shows instant validation', () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();

      changeInput(invalidValue);

      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();

      changeInput(validValue);
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });
  });
});
