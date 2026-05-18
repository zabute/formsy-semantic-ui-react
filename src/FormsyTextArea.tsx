import type { InjectedProps } from 'formsy-react';
import React from 'react';
import { TextArea } from 'semantic-ui-react';
import Input, { type IFormsyInputProps } from './FormsyInput';

export default (props: Omit<IFormsyInputProps<React.TextareaHTMLAttributes<any>>, keyof InjectedProps<any>>) => (
  <Input inputAs={TextArea} {...props} />
);
