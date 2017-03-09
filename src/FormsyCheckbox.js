import React, { Component, PropTypes, cloneElement } from 'react';
import { Decorator as formsy } from 'formsy-react';
import { Checkbox, Radio } from 'semantic-ui-react';

@formsy()
export default class FormsyCheckbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf(['checkbox', 'radio']),
    defaultChecked: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    required: PropTypes.bool,
    rootClassName: PropTypes.string,
    rootStyle: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    getErrorMessage: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
  }

  static defaultProps = {
    as: 'checkbox',
  }

  componentDidMount() {
    if (this.props.defaultChecked) this.props.setValue(true);
  }

  handleChange(e, input) {
    this.props.setValue(input.checked);
    this.setState({ allowErrors: true });
  }

  render() {
    const {
      as,
      isValid,
      isPristine,
      errorLabel,
      getErrorMessage,
      rootClassName,
      rootStyle,
      className,
      style,
      getValue,
      defaultChecked, // eslint-disable-line
      setValidations, // eslint-disable-line
      setValue, // eslint-disable-line
      resetValue, // eslint-disable-line
      hasValue, // eslint-disable-line
      getErrorMessages, // eslint-disable-line
      isFormDisabled, // eslint-disable-line
      isFormSubmitted, // eslint-disable-line
      isRequired, // eslint-disable-line
      showRequired, // eslint-disable-line
      showError, // eslint-disable-line
      isValidValue, // eslint-disable-line
      validations, // eslint-disable-line
      validationError, // eslint-disable-line
      validationErrors, // eslint-disable-line
      ...otherProps,
    } = this.props;

    const props = {
      checked: getValue(),
      onChange: ::this.handleChange,
      className: className,
      style: style,
      ...otherProps,
    };

    return (
      <div className={ rootClassName } style={ rootStyle }>
        { cloneElement(as === 'checkbox' ? <Checkbox/> : <Radio/>, { ...props }) }
        {
          !isValid() && !isPristine() && errorLabel &&
            cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
