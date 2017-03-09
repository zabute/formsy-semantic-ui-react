import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import InputExamples from './InputExamples';
import CheckboxExamples from './CheckboxExamples';
import RadioGroupExamples from './RadioGroupExamples';
import DropdownExamples from './DropdownExamples';

const styles = {
  header: {
    backgroundColor: '#ddd',
    padding: 18,
  },
};

const tabs = {
  Inputs: <InputExamples/>,
  Checkbox: <CheckboxExamples/>,
  RadioGroup: <RadioGroupExamples/>,
  Dropdown: <DropdownExamples/>,
};

export default class App extends Component {
  state = { selectedTab: 'Inputs' }

  handleChangeTab = (e, { name }) => {
    this.setState({ selectedTab: name });
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <div>
        <header style={ styles.header }>
          <h3> formsy-semantic-ui-react </h3>
        </header>

        <Container style={{ marginTop: 24 }}>
          <Menu pointing secondary>
           <Menu.Item
             name="Inputs"
             active={selectedTab === 'Inputs'}
             onClick={this.handleChangeTab}
           />

          <Menu.Item
            name="Checkbox"
            active={selectedTab === 'Checkbox'}
            onClick={this.handleChangeTab}
          />

          <Menu.Item
            name="RadioGroup"
            active={selectedTab === 'RadioGroup'}
            onClick={this.handleChangeTab}
          />
          <Menu.Item
            name="Dropdown"
            active={selectedTab === 'Dropdown'}
            onClick={this.handleChangeTab}
          />
         </Menu>
          { tabs[selectedTab] }
        </Container>
      </div>
    );
  }
}
