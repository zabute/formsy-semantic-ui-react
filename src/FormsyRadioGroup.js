import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { Decorator as Formsy } from 'formsy-react';

@Formsy()
export default class FormsyRadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    errorLabel: PropTypes.element,
    getErrorMessage: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    ),
  }

  state = { allowError: false }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFormSubmitted()) this.setState({ allowError: true });
  }

  handleChange(e, { value }) {
    this.props.setValue(value);
  }

  render() {
    const {
      children,
      getValue,
      errorLabel,
      isValid,
      getErrorMessage,
      className,
      style,
    } = this.props;

    const { allowError } = this.state;

    const clonedChildren = Children.map(children, radio => {
      return cloneElement(radio, {
        checked: radio.props.value === getValue(),
        onChange: ::this.handleChange,
      });
    });

    return (
      <div
        className={ className }
        style={ style }
      >
        { clonedChildren }
        {
          !isValid() && allowError && errorLabel &&
          cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
