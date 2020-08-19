import React from 'react';
import Input, { IFormsyInputProps } from './FormsyInput';
import { Form } from 'semantic-ui-react';

export default (props: IFormsyInputProps) => (
  <Input inputAs={Form.TextArea} {...props} />
);
