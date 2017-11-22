import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Form, Checkbox, Radio } from 'semantic-ui-react';
import { filterSuirElementProps } from './utils';

class FormsyCheckbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    width: PropTypes.number,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    passRequiredToField: PropTypes.bool,
    inputAs: PropTypes.oneOf([Form.Checkbox, Form.Radio, Checkbox, Radio]),
    defaultChecked: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    required: PropTypes.bool,
    getErrorMessage: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    inputAs: Checkbox,
  }

  componentDidMount() {
    const { defaultChecked, setValue } = this.props;
    if (defaultChecked) setValue(true);
  }

  handleChange = (e, data) => {
    const { checked } = data;
    this.props.setValue(checked);
    if (this.props.onChange) this.props.onChange(e, data);
  }

  render() {
    const {
      inputAs,
      required,
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
      getValue,
      // Form.Field props
      as,
      width,
      className,
      disabled,
      inline,
      passRequiredToField,
    } = this.props;

    const error = !isPristine() && !isValid();

    const checkboxProps = {
      ...filterSuirElementProps(this.props),
      checked: getValue(),
      onChange: this.handleChange,
    };

    if (inputAs === Checkbox || inputAs === Radio) delete checkboxProps.error;

    return (
      <Form.Field
        as={ as }
        className={ className }
        required={ required && passRequiredToField }
        error={ error }
        width={ width }
        inline={ inline }
        disabled={disabled}
      >
        { createElement(inputAs, { ...checkboxProps }) }
        { error && errorLabel && cloneElement(errorLabel, {}, getErrorMessage()) }
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyCheckbox);
