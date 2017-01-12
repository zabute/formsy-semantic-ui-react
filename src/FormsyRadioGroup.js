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
    children: PropTypes.node,
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
    } = this.props;

    const { allowError } = this.state;

    const clonedChildren = Children.map(children, radio => {
      return cloneElement(radio, {
        checked: radio.props.value === getValue(),
        onChange: ::this.handleChange,
      });
    });

    return (
      <div>
        { clonedChildren }
        {
          !isValid() && allowError && errorLabel &&
          cloneElement(errorLabel, { children: getErrorMessage() })
        }
      </div>
    );
  }
}
