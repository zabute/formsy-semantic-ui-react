import { fireEvent, render, RenderResult } from '@testing-library/react';
import * as React from 'react';
import { Input } from 'semantic-ui-react';
import Form from '../src/Form';
import FormsyInput from '../src/FormsyInput';

describe('<Form/>', () => {
  const renderForm = (formElement: any) => {
    const TestForm = () => <Form> {formElement} </Form>;
    return render(<TestForm />);
  };

  it("Renders Semantic-UI-React's Form", () => {
    const { container } = render(
      <Form data-testid="form">
        <Form.Input name="input" />
      </Form>
    );

    expect(container.querySelector('.ui.form')).toBeDefined();
  });

  it('should pass className only to Semantic Form', () => {
    const className = 'test';

    const { container } = render(
      <Form className={className}>
        <Form.Input name="input" />
      </Form>
    );

    expect(container.querySelector('form')).not.toHaveClass(className);

    expect(container.querySelector('.ui.form')).toHaveClass(className);
  });

  describe('When using shorthands', () => {
    it('should render <Form.Input/> as <FormsyInput/>', () => {
      const { container } = renderForm(<Form.Input name="input" />);
      const input = container.querySelectorAll('.ui.input');
      expect(input).toHaveLength(1);
    });

    it('should render <Form.TextArea/> as <FormsyTextArea/>', () => {
      const { container } = renderForm(
        <Form.TextArea rows={2} name="formInput" />
      );

      const textArea = container.querySelectorAll('textarea');
      expect(textArea).toHaveLength(1);
    });

    it('should render <Form.Checkbox/> as <FormsyCheckbox/>', () => {
      const { container } = renderForm(<Form.Checkbox name="formInput" />);

      const checkbox = container.querySelectorAll('input[type=checkbox]');
      const semanticCheckbox = container.querySelectorAll('.ui.checkbox');
      expect(checkbox).toHaveLength(1);
      expect(semanticCheckbox).toHaveLength(1);
    });

    it('should render <FormsyCheckbox/> as <Form.Radio/>', () => {
      const { container } = renderForm(<Form.Radio name="formInput" />);

      const radio = container.querySelectorAll('input[type=radio]');
      const semanticRadio = container.querySelectorAll('.ui.radio');
      expect(radio).toHaveLength(1);
      expect(semanticRadio).toHaveLength(1);
    });

    it('should render <Form.Dropdown/> as <FormsyDropdown/>', () => {
      const { container } = renderForm(
        <Form.Dropdown name="formInput" options={[]} />
      );

      const dropdown = container.querySelectorAll('.ui.dropdown');
      expect(dropdown).toHaveLength(1);
    });

    it('should render <Form.Select/> as <FormsySelect/>', () => {
      const { container } = renderForm(
        <Form.Select name="formInput" options={[]} />
      );

      const select = container.querySelectorAll('.ui.selection.dropdown');
      expect(select).toHaveLength(1);
    });

    describe('Layout structure', () => {
      it('should render label for a Input', () => {
        const { container } = renderForm(
          <Form.Input name="input" label="input-label" />
        );

        const inputLabel = container.querySelectorAll('label');
        expect(inputLabel).toHaveLength(1);
      });

      it('should not render label for a Input if none given', () => {
        const { container } = renderForm(<Form.Input name="input" />);

        const inputLabel = container.querySelectorAll('label');
        expect(inputLabel).toHaveLength(0);
      });

      it('should render label for a DropDown', () => {
        const { container } = renderForm(
          <Form.Dropdown
            name="formInput"
            options={[]}
            label="drop-down-label"
          />
        );

        const inputLabel = container.querySelectorAll('label');
        expect(inputLabel).toHaveLength(1);
      });

      it('should not render label for a DropDown', () => {
        const { container } = renderForm(
          <Form.Dropdown name="formInput" options={[]} />
        );

        const inputLabel = container.querySelectorAll('label');
        expect(inputLabel).toHaveLength(0);
      });
    });
  });

  describe('When using custom inputAs', () => {
    it('should allow render custom input', () => {
      const label = 'form field';
      const { container } = renderForm(
        <Form.Input
          name="input"
          label={label}
          inputAs={<Input label="prefix" />}
        />
      );

      const inputLabel = container.querySelector('.field > label');
      expect(inputLabel).toHaveTextContent(label);

      const prefixLabel = container.querySelector('.ui.label.label');
      expect(prefixLabel).toHaveTextContent('prefix');
    });
  });

  describe('When Submitting', () => {
    let wrapper: RenderResult;
    let input: HTMLElement;
    let isValid = false;
    const onValidSubmit = jest.fn();
    const onInvalidSubmit = jest.fn();
    const onSubmit = jest.fn();
    const validValue = 'john.doe@test.com';
    const invalidValue = 'Invalid Input';
    const validationError = 'This is not a valid email';
    const errorLabel = <div className="error-label" />;

    const TestForm = () => {
      // eslint-disable-line
      return (
        <Form
          onValidSubmit={onValidSubmit}
          onInvalidSubmit={onInvalidSubmit}
          onSubmit={onSubmit}
          onValid={() => (isValid = true)}
          onInvalid={() => (isValid = false)}
        >
          <FormsyInput
            name="testInput"
            validations="isEmail"
            errorLabel={errorLabel}
            validationErrors={{
              isEmail: validationError,
            }}
          />
        </Form>
      );
    };

    const submitForm = () => {
      return fireEvent.submit(
        wrapper.container.querySelector('form') as HTMLFormElement
      );
    };

    const changeInput = (value: string) => {
      return fireEvent.change(input, { target: { value } });
    };

    const validateSubmitCall = (formData: any) => {
      expect(onSubmit).toHaveBeenCalledWith(
        formData,
        expect.any(Function),
        expect.any(Function)
      );
    };

    beforeEach(() => {
      wrapper = render(<TestForm />);
      input = wrapper.container.querySelector('input') as any;
    });

    describe('When form is Valid', () => {
      beforeEach(() => changeInput(validValue));

      it('should call onSubmit and onValidSubmit when submitted', () => {
        expect(isValid).toBeTruthy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onValidSubmit).toHaveBeenCalledTimes(1);
        validateSubmitCall({ testInput: validValue });
      });

      it('should not call onInvalidSubmit when submitted', () => {
        expect(isValid).toBeTruthy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(2);
        expect(onInvalidSubmit).not.toBeCalled();
        validateSubmitCall({ testInput: validValue });
      });
    });

    describe('When form is Invalid', () => {
      beforeEach(() => changeInput(invalidValue));

      it('should call onSubmit and onInvalidSubmit when submitted', () => {
        expect(isValid).toBeFalsy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(3);
        expect(onValidSubmit).toHaveBeenCalledTimes(2);
        validateSubmitCall({ testInput: invalidValue });
      });

      it('should call onValidSubmit when submitted', () => {
        expect(isValid).toBeFalsy();

        submitForm();
        expect(onSubmit).toHaveBeenCalledTimes(4);
        expect(onValidSubmit).toHaveBeenCalledTimes(2);
        validateSubmitCall({ testInput: invalidValue });
      });
    });
  });
});
