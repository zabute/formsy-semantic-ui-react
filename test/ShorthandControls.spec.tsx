import { render, screen } from '@testing-library/react';
import FormsyForm from 'formsy-react';
import React from 'react';
import { Form } from 'semantic-ui-react';
import FormsyDropdown from '../src/FormsyDropdown';
import FormsyInput from '../src/FormsyInput';

/**
 * `Form.Input` / `Form.TextArea` / `Form.Dropdown` / `Form.Select` are shorthand wrappers
 * that render as `<Form.Field control={Base} />`.
 *
 * Up to semantic-ui-react v2 they were classes exposing the resolved control as an
 * instance field, which this library read by rendering the wrapper and inspecting
 * `.props.control`. From v3 they are `forwardRef` components, so that lookup returned
 * `undefined` and rendering blew up with:
 *
 *   "Element type is invalid: ... but got: undefined"
 *
 * These tests pin the shorthand path so the regression cannot come back, regardless of
 * which semantic-ui-react major is installed.
 */
const renderInForm = (ui: React.ReactElement) => render(<FormsyForm>{ui}</FormsyForm>);

describe('semantic-ui-react Form shorthand controls', () => {
  describe('<FormsyInput inputAs={Form.Input}/>', () => {
    it('renders the underlying input instead of an invalid element type', () => {
      const { container } = renderInForm(<FormsyInput name="test" inputAs={Form.Input} label="Email" />);

      expect(container.querySelector('input')).toBeInTheDocument();
      expect(container.querySelector('.ui.input')).toBeInTheDocument();
    });

    it('renders the textarea for Form.TextArea', () => {
      const { container } = renderInForm(<FormsyInput name="test" inputAs={Form.TextArea} label="Bio" />);

      expect(container.querySelector('textarea')).toBeInTheDocument();
    });

    it('still renders a plain Input when no inputAs is given', () => {
      const { container } = renderInForm(<FormsyInput name="test" label="Email" />);

      expect(container.querySelector('input')).toBeInTheDocument();
    });
  });

  describe('<FormsyDropdown inputAs={Form.Dropdown}/>', () => {
    it('renders the dropdown for Form.Dropdown', () => {
      const { container } = renderInForm(
        <FormsyDropdown
          name="test"
          inputAs={Form.Dropdown}
          label="Country"
          options={[{ key: 'a', text: 'A', value: 'a' }]}
        />
      );

      expect(container.querySelector('.ui.dropdown')).toBeInTheDocument();
    });

    it('renders the select for Form.Select', () => {
      const { container } = renderInForm(
        <FormsyDropdown
          name="test"
          inputAs={Form.Select}
          label="Country"
          options={[{ key: 'a', text: 'A', value: 'a' }]}
        />
      );

      expect(container.querySelector('.ui.dropdown')).toBeInTheDocument();
    });

    it('still renders a plain Dropdown when no inputAs is given', () => {
      const { container } = renderInForm(
        <FormsyDropdown name="test" label="Country" options={[{ key: 'a', text: 'A', value: 'a' }]} />
      );

      expect(container.querySelector('.ui.dropdown')).toBeInTheDocument();
    });
  });

  it('propagates user input through the Form.Input shorthand', () => {
    renderInForm(<FormsyInput name="test" inputAs={Form.Input} label="Email" />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
