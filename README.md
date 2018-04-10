# formsy-semantic-ui-react [![Build Status](https://travis-ci.org/zabute/formsy-semantic-ui-react.svg?branch=master)](https://travis-ci.org/zabute/formsy-semantic-ui-react) [![npm version](https://badge.fury.io/js/formsy-semantic-ui-react.svg)](https://badge.fury.io/js/formsy-semantic-ui-react)


Quicky create  [formsy-react](https://github.com/formsy/formsy-react) forms with [Semantic-Ui-React's](https://github.com/Semantic-Org/Semantic-UI-React) Form Components.

## Installation

```
npm install (or yarn add) formsy-semantic-ui-react
```

You will also need formsy-react

```
npm install (or yarn add) formsy-react
```

## Usage
```jsx
// ES6
import {
  Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select,
} from 'formsy-semantic-ui-react';
```
```jsx
// ES5
var Form = require('formsy-semantic-ui-react').Form;
/** and so on for the rest of the Components **/
```
```jsx
const App = (props) => {
  const errorLabel = <Label color="red" pointing/>

  return (
    <Form
      onValidSubmit={ props.onValidSubmit }
      loading={ props.isLoading }
    >
      <Form.Input
        name="email"
        label="Email"
        validations="isEmail"
        validationErrors={{ isEmail: 'Email not valid' }}
        errorLabel={ errorLabel }
      />
    </Form>
  )
}
```

## Props
This library defines a couple of (non-required) props for more control over behavior/markup:

- ```errorLabel``` (type: ```Node``` default: ```none```)

  Used to Show validation errors next to the inputs. Any ```children``` get replaced by ```getErrorMessage()```

```jsx
  <Checkbox
    errorLabel={ <Label color="red" pointing="left"/> }/>
  />
```

- ```instantValidation``` (type: ```bool``` default: ```false```)

  Whether or not to show validation errors as soon as user starts typing. Only available on ```Input``` and ```Form.Input```

```jsx
  <Input
    instantValidation
  />
```

## Examples
Go to the [example](/example) folder to see more examples of how the components are used.
To run the example app:
```
npm/yarn install
npm/yarn run example-app
```
Then go to ```localhost:8080```

For more information on building and validating ```formsy-react``` forms, take a look at [Formsy-React's Dcoumentaion](https://github.com/formsy/formsy-react/blob/master/API.md)

## Tests
Tests are done using Mocha, chai, sinon, and enzyme on jsdom.
To run the tests,
```
npm/yarn install
npm/yarn run test (or test:watch)
```

License: [MIT](/LICENSE)
