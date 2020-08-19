import { InjectedProps } from 'formsy-react/dist/withFormsy';
import React from 'react';
import { Radio } from 'semantic-ui-react';
import Checkbox, { IFormsyCheckboxProps } from './FormsyCheckbox';

export default (
  props: Omit<IFormsyCheckboxProps, keyof InjectedProps<any>>
) => <Checkbox inputAs={Radio} {...props} />;
