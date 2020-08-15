import React from 'react';
import Checkbox, { IFormsyCheckboxProps } from './FormsyCheckbox';
import { Radio } from 'semantic-ui-react';

export default (props: IFormsyCheckboxProps) => (
  <Checkbox inputAs={Radio} {...props} />
);
