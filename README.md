## formsy-semantic-ui-react

Lets you quicky create and validate [formsy-react](https://github.com/christianalfoni/formsy-react) forms built with [Semantic-Ui-React](https://github.com/Semantic-Org/Semantic-UI-React) components.

## Installation

```
npm install formsy-semantic-ui-react --save
```

You will also need formsy-react

```
npm install formsy-react --save
```

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

## Validation

For more information on validation, take a look at [Formsy-React's Dcoumentaion](https://github.com/christianalfoni/formsy-react/blob/master/API.md)

```jsx
import { Form } from 'formsy-react';

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

To display error messages, pass an element through the ``` errorLabel ``` prop.

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
To see the validation in action clone this repo and run
```
npm install
```
then
```
npm run example-app
```

## Tests
Tests are done using Mocha, chai and enzyme on jsdom.

To run the tests,
```
npm install
```
then

``` npm run test ``` or ``` npm run test:watch ``` for single-run or watch-mode, respectively.


License: [MIT](/LICENSE)
