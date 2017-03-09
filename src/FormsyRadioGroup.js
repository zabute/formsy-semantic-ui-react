import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { Decorator as formsy } from 'formsy-react';

@formsy()
export default class FormsyRadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isValid: PropTypes.func.isRequired,
    isPristine: PropTypes.func.isRequired,
    defaultSelected: PropTypes.string,
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

  componentDidMount() {
    if (this.props.defaultSelected) this.props.setValue(this.props.defaultSelected);
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
      isPristine,
      getErrorMessage,
      className,
      style,
    } = this.props;

    const clonedChildren = Children.map(children, radio => {
      return cloneElement(radio, {
        checked: getValue() === radio.props.value,
        onChange: ::this.handleChange,
      });
    });

    return (
      <div className={ className } style={ style }>
        { clonedChildren }
        {
          !isValid() && !isPristine() && errorLabel &&
          cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
