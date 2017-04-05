# formsy-semantic-ui-react [![Build Status](https://travis-ci.org/zabute/formsy-semantic-ui-react.svg?branch=master)](https://travis-ci.org/zabute/formsy-semantic-ui-react) [![npm version](https://badge.fury.io/js/formsy-semantic-ui-react.svg)](https://badge.fury.io/js/formsy-semantic-ui-react)


Quicky create  [formsy-react](https://github.com/christianalfoni/formsy-react) forms with [Semantic-Ui-React's](https://github.com/Semantic-Org/Semantic-UI-React) Form Components.

## Installation

```
npm install (or yarn add) formsy-semantic-ui-react
```

You will also need formsy-react

```
npm install (or yarn add) formsy-react
```

## Usage
```js
// ES6 imports
import { Form, Input, TextArea, Checkbox,
  Radio, RadioGroup, Dropdown, Select } from 'formsy-semantic-ui-react';

// ES5
var Input = require('formsy-semantic-ui-react').Input;
/** and so on for the rest of the Components **/

const App = props => {
  return (
    <Form onValidSubmit={ onValidSubmit } loading={ props.isLoading }>
      <Form.Input
        name="email"
        label="Email"
        validations={isEmail}
        validationErrors={{ isEmail: 'Not a valid email' }}
      />
    </Form>
  )
}
```

## Props
These props give you more control over behavior/markup

| Prop | Description | Type | Default | Available on | Required |
| ------ | ----------- |
| ```errorLabel```| Used to Show input errors next to inputs. Any ```children``` get replaced by ```getErrorMessage()```  | ```string``` or ```class/func``` | ``none`` | All except ```Form``` | No
| ```InstantValidation```   | Whether or not to show Validation Errors as soon as user starts interacting with input | ```bool```| ```false```| ```Input``` | No

## Examples
Go to the [example](/example) folder to see some examples of how the components are used.
For more information on building and validating ```formsy-react``` forms, take a look at [Formsy-React's Dcoumentaion](https://github.com/christianalfoni/formsy-react/blob/master/API.md)

To run the example app, clone this repo and run:
```
npm/yarn install
npm/yarn run example-app
```
Then go to ```localhost:8080```

## Tests
Tests are done using Mocha, chai, sinon, and enzyme on jsdom.
To run the tests,
```
npm/yarn install
npm/yarn run test // or npm run test:watch
```

License: [MIT](/LICENSE)
