import React from 'react';
import { Select } from 'semantic-ui-react';
import FormsyDropdown, { IFormsyDropdownProps } from './FormsyDropdown';

export default (props: IFormsyDropdownProps) => (
  <FormsyDropdown inputAs={Select} {...props} />
);
