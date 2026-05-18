import type { InjectedProps } from 'formsy-react';
import React from 'react';
import { Radio } from 'semantic-ui-react';
import Checkbox, { type IFormsyCheckboxProps } from './FormsyCheckbox';

export default (props: Omit<IFormsyCheckboxProps, keyof InjectedProps<any>>) => <Checkbox inputAs={Radio} {...props} />;
