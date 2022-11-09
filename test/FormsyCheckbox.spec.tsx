import { fireEvent, render, RenderResult } from '@testing-library/react';
import Form from 'formsy-react';
import React from 'react';
import { Checkbox as FormsyCheckbox } from '../src';

const validationError = 'Please check this';
const errorLabel = <div className="error-label" data-testid="error-label" />;
const labelText = 'this is checkbox label';

const TestForm = ({ onSubmit, defaultChecked }: any = {}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormsyCheckbox
        name="testInput"
        validations="isTrue"
        label={labelText}
        errorLabel={errorLabel}
        defaultChecked={defaultChecked}
        validationErrors={{
          isTrue: validationError,
        }}
      />
    </Form>
  );
};

describe('<Checkbox/>', () => {
  let wrapper: RenderResult;
  let checkbox: any;
  let onSubmitSpy: jest.Mock;

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    wrapper = render(<TestForm onSubmit={onSubmitSpy} />);
    checkbox = wrapper.getByRole('checkbox');
  });

  const submitForm = () => {
    return fireEvent.submit(
      wrapper.container.querySelector('form') as HTMLFormElement
    );
  };

  const clickOnCheckbox = (checked: boolean) => {
    fireEvent.click(checkbox, { target: { checked } });
  };

  it("Renders Semantic-UI-React's <Checkbox/>", () => {
    const semanticCheckbox = wrapper.container.querySelectorAll('.ui.checkbox');
    expect(semanticCheckbox).toHaveLength(1);
  });

  it('should render given label', () => {
    expect(wrapper.container.querySelector('input + label')).toHaveTextContent(
      labelText
    );
  });

  it('should set a boolean value on checkbox without value / defaultChecked', () => {
    submitForm();

    expect(onSubmitSpy).toHaveBeenCalledWith(
      { testInput: false },
      expect.any(Function),
      expect.any(Function)
    );
  });

  it('should use defaultChecked as initial value', () => {
    const spy = jest.fn();
    const defaultChecked = true;
    wrapper = render(
      <TestForm defaultChecked={defaultChecked} onSubmit={spy} />
    );
    submitForm();

    expect(spy).toHaveBeenCalledWith(
      { testInput: defaultChecked },
      expect.any(Function),
      expect.any(Function)
    );
  });

  describe('When value is invalid', () => {
    it("Doesn't show any errors initially", () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it('Shows the errorLabel component passed to it', () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
      expect(wrapper.queryByTestId('error-label')).toHaveTextContent(
        validationError
      );
    });

    it('Shows error text when form is submitted', () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();

      submitForm();
      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
      expect(wrapper.queryByTestId('error-label')).toHaveTextContent(
        validationError
      );
    });
  });

  describe('When value is valid', () => {
    beforeEach(() => clickOnCheckbox(true));

    it("Doesn't show any errors initially", () => {
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it("Doesn't show error when form is submitted", () => {
      submitForm();
      expect(wrapper.queryByTestId('error-label')).not.toBeInTheDocument();
    });

    it('Shows error when unchecked', () => {
      clickOnCheckbox(false);
      submitForm();

      expect(wrapper.queryByTestId('error-label')).toBeInTheDocument();
      expect(wrapper.queryByTestId('error-label')).toHaveTextContent(
        validationError
      );
    });
  });
});
