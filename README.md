# formsy-semantic-ui-react  [![Build Status](https://travis-ci.org/zabute/formsy-semantic-ui-react.svg?branch=master)](https://travis-ci.org/zabute/formsy-semantic-ui-react) [![npm version](https://badge.fury.io/js/formsy-semantic-ui-react.svg)](https://badge.fury.io/js/formsy-semantic-ui-react)

Quicky create  [formsy-react](https://github.com/christianalfoni/formsy-react) forms with [Semantic-Ui-React's](https://github.com/Semantic-Org/Semantic-UI-React) form components.

## Installation

```npm i formsy-semantic-ui-react```
or
```yarn add formsy-semantic-ui-react```

You will also need formsy-react

```npm install formsy-react```

## Usage

Using ES6 imports:
```js
import {
  Input,
  TextArea,
  Checkbox,
  Radio,
  RadioGroup,
  Dropdown,
  Select
} from 'formsy-semantic-ui-react';
```

ES5:
```js
var Input = require('formsy-semantic-ui-react').Input;
```

## Validation

For more information on validation, take a look at [Formsy-React's Dcoumentaion](https://github.com/christianalfoni/formsy-react/blob/master/API.md)

```jsx
import { Form } from 'formsy-react';
import { Input } from 'formsy-semantic-ui-react';

<Form
  noValidate
  onValidSubmit={ onSubmit }
  onInvalidSubmit={ onInvalidSubmit }
>
  <Input
    name="email"
    placeholder="Email"
    icon="at"
    iconPosition="left"
    required
    validations="isEmail"
    validationErrors={{
      isEmail: 'This is not a valid Email',
      isDefaultRequiredValue: 'Email is required',
    }}
  />
  </Form>
```

### Displaying Error Messages

You can quickly display error messages by passing a component to the ``` errorLabel ``` prop.
Example: You can display Semaintic-UI-React's ``` <Label/> ``` compnent:
```jsx
<Checkbox
  ...
  errorLabel={ <Label basic color="orange" pointing="left"/> }
/>
```
You can also pass in a custom component with the desired styles.


## Examples
Go to the [example](/example) folder to see more examples of how the components are used.
To see the validation in action, clone this repo and run:
```
npm install
npm run example-app
```
Then go to ```localhost:8080```


## Tests
Tests are done using Mocha, chai and enzyme on jsdom.
To run the tests,
```
npm install
npm run test // or npm run test:watch
```

License: [MIT](/LICENSE)
