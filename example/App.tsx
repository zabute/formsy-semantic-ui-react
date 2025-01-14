import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import FormExamples from './FormExamples';
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
  Form: <FormExamples />,
  Input: <InputExamples />,
  Checkbox: <CheckboxExamples />,
  RadioGroup: <RadioGroupExamples />,
  Dropdown: <DropdownExamples />,
};

export default class App extends React.Component {
  state = {
    selectedTab:
      new URLSearchParams(window.location.search).get('tab') || 'Form',
  };

  handleChangeTab = (_e, { name }) => {
    this.setState({ selectedTab: name }, () =>
      history.pushState(
        null,
        '',
        '?' + new URLSearchParams({ tab: name }).toString()
      )
    );
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <div>
        <header style={styles.header}>
          <h3> formsy-semantic-ui-react </h3>
        </header>

        <Container style={{ marginTop: 24 }}>
          <Menu pointing secondary>
            {Object.keys(tabs).map((key) => (
              <Menu.Item
                name={key}
                key={key}
                active={selectedTab === key}
                onClick={this.handleChangeTab}
              />
            ))}
          </Menu>
          {tabs[selectedTab]}
        </Container>
      </div>
    );
  }
}
