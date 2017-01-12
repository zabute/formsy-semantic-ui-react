Lets you create [formsy-react](https://github.com/christianalfoni/formsy-react/blob/master/API.md#formnovalidate) forms with [Semantic-Ui-React](https://github.com/Semantic-Org/Semantic-UI-React) components.

## Installation

```
$ npm install formsy-semantic-ui-react --save
```

You will also need formsy-react

```
$ npm install formsy-react --save
```

## Usage

The Components:

```js
import { Input } from 'formsy-semantic-ui-react';
import { TextArea } from 'formsy-semantic-ui-react';
import { Checkbox } from 'formsy-semantic-ui-react';
import { Radio } from 'formsy-semantic-ui-react';
import { RadioGroup } from 'formsy-semantic-ui-react';
import { Dropdown } from 'formsy-semantic-ui-react';
import { Select } from 'formsy-semantic-ui-react';
```

You'll need to wrap them with Formsy.Form

```js
import { Form } from 'formsy-rect';
```

```jsx
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

### Errors

You need to pass an element through the ``` errorLabel ``` prop.

Example:

```jsx
<Checkbox
  ...
  errorLabel={ <Label basic color="orange" pointing="left"/> }
/>
```
You can also pass in a custom component and style it as you wish.

License: [MIT](/LICENSE)
