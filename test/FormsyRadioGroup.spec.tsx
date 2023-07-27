import { fireEvent, render, RenderResult } from '@testing-library/react';
import Form from 'formsy-react';
import React from 'react';
import { Radio } from 'semantic-ui-react';
import { RadioGroup } from '../src';
import { IFormsyRadioGroupProps } from '../src/FormsyRadioGroup';

const validationError = 'Validation Error';
const errorLabel = <div className="error-label" data-testid="error-label" />;

const renderTestForm = (override: Partial<IFormsyRadioGroupProps> = {}) => {
  const TestForm = () => (
    <Form>
      <RadioGroup
        name="radioGroup"
        required
        errorLabel={errorLabel}
        validationErrors={{
          isDefaultRequiredValue: validationError,
        }}
        {...override}
      >
        <Radio label="One" value="one" />
        <Radio label="Two" value="two" />
        <Radio label="Three" value="three" />
      </RadioGroup>
    </Form>
  );
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
    wrapper = renderTestForm({ defaultSelected: 'two' });
    expect(
      wrapper.container.querySelectorAll('input[type=radio]')[1]
    ).toBeChecked();
  });

  it('should pass name attribute to Input, bug #138', () => {
    wrapper = renderTestForm({ defaultSelected: 'two' });
    expect(
      wrapper.container.querySelectorAll(`input[name='radioGroup']`)
    ).toHaveLength(3);
  });

  it('should apply disabled properly', () => {
    wrapper = renderTestForm({ defaultSelected: 'two', disabled: true });
    expect(wrapper.container.querySelectorAll(`input[disabled]`)).toHaveLength(
      3
    );
  });

  describe('Label', () => {
    it('should not render a the label field element if label is not given', () => {
      wrapper = renderTestForm({ required: true, label: null });
      expect(wrapper.container.querySelectorAll('.field')).toHaveLength(3);
    });

    it('should support required field', () => {
      wrapper = renderTestForm({ required: true, label: 'LABEL' });
      const labelField = wrapper.container.querySelector('.field:first-child');
      expect(labelField).toHaveClass('required');
      expect(labelField).toHaveTextContent('LABEL');
    });

    it('should apply disabled on the label as well', () => {
      wrapper = renderTestForm({
        defaultSelected: 'two',
        label: 'LABEL',
        disabled: true,
      });
      const labelField = wrapper.container.querySelector('.field:first-child');
      expect(labelField).toHaveClass('disabled');
      expect(labelField).toHaveTextContent('LABEL');
    });

    it('should show error', () => {
      wrapper = renderTestForm({
        label: 'LABEL',
        required: true,
      });

      submitForm();

      const labelField = wrapper.container.querySelector('.field:first-child');

      expect(labelField).toHaveClass('error');
      expect(labelField).toHaveTextContent('LABEL');
    });
  });

  describe('Field', () => {
    it('should show error', () => {
      wrapper = renderTestForm({
        required: true,
      });

      submitForm();

      const fields = wrapper.container.querySelectorAll('.field');

      expect(fields).toHaveLength(3);
      Array.from(fields).forEach((field) => expect(field).toHaveClass('error'));
    });

    it('should pass down width prop', () => {
      wrapper = renderTestForm({
        width: 10,
      });

      const fields = wrapper.container.querySelectorAll('.field');

      expect(fields).toHaveLength(3);
      Array.from(fields).forEach((field) => expect(field).toHaveClass('ten'));
    });

    it('should not apply disabled on the field it self, prevent double disable', () => {
      wrapper = renderTestForm({
        disabled: true,
      });

      const fields = wrapper.container.querySelectorAll('.field');

      expect(fields).toHaveLength(3);
      Array.from(fields).forEach((field) =>
        expect(field).not.toHaveClass('disabled')
      );
    });
  });

  describe('Field.Group', () => {
    it('should not pass name attribute to form.group element div, bug #138', () => {
      wrapper = renderTestForm({ defaultSelected: 'two' });
      expect(wrapper.container.querySelector('.fields')).not.toHaveAttribute(
        'name'
      );
    });

    it('should be inline by default', () => {
      wrapper = renderTestForm({ defaultSelected: 'two' });
      expect(wrapper.container.querySelector('.fields')).toHaveClass('inline');
    });

    it('should be grouped when inline=false', () => {
      wrapper = renderTestForm({ inline: false });
      expect(wrapper.container.querySelector('.fields')).not.toHaveClass(
        'inline'
      );
      expect(wrapper.container.querySelector('.fields')).toHaveClass('grouped');
    });
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
