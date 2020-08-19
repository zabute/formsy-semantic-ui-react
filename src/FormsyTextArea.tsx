import { InjectedProps } from 'formsy-react/dist/withFormsy';
import React from 'react';
import { Form } from 'semantic-ui-react';
import Input, { IFormsyInputProps } from './FormsyInput';

export default (props: Omit<IFormsyInputProps, keyof InjectedProps<any>>) => (
  <Input inputAs={Form.TextArea} {...props} />
);
