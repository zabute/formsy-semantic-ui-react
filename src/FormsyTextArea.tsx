import { InjectedProps } from 'formsy-react/dist/withFormsy';
import React from 'react';
import { TextArea } from 'semantic-ui-react';
import Input, { IFormsyInputProps } from './FormsyInput';

export default (
  props: Omit<
    IFormsyInputProps<React.TextareaHTMLAttributes<any>>,
    keyof InjectedProps<any>
  >
) => <Input inputAs={TextArea} {...props} />;
