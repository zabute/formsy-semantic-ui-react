import React, { cloneElement, Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { Checkbox, Form, Radio } from 'semantic-ui-react';
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
    value: PropTypes.any,
    isValid: PropTypes.bool.isRequired,
    isPristine: PropTypes.bool.isRequired,
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    errorLabel: PropTypes.element,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    inputAs: Checkbox,
  };

  componentDidMount() {
    const { defaultChecked, setValue } = this.props;
    if (defaultChecked) setValue(true);
  }

  handleChange = (e, data) => {
    const { checked } = data;
    this.props.setValue(checked);
    if (this.props.onChange) this.props.onChange(e, data);
  };

  render() {
    const {
      inputAs,
      required,
      isValid,
      isPristine,
      errorLabel,
      errorMessage,
      value,
      // Form.Field props
      as,
      width,
      className,
      disabled,
      inline,
      passRequiredToField,
    } = this.props;

    const error = !isPristine && !isValid;

    const checkboxProps = {
      ...filterSuirElementProps(this.props),
      checked: !!value,
      onChange: this.handleChange,
    };

    if (inputAs === Checkbox || inputAs === Radio) delete checkboxProps.error;

    return (
      <Form.Field
        as={as}
        className={className}
        required={required && passRequiredToField}
        error={error}
        width={width}
        inline={inline}
        disabled={disabled}
      >
        {createElement(inputAs, { ...checkboxProps })}
        {error && errorLabel && cloneElement(errorLabel, {}, errorMessage)}
      </Form.Field>
    );
  }
}

export default withFormsy(FormsyCheckbox);
