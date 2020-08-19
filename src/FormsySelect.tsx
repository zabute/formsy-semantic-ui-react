import { InjectedProps } from 'formsy-react/dist/withFormsy';
import React from 'react';
import { Select } from 'semantic-ui-react';
import FormsyDropdown, { IFormsyDropdownProps } from './FormsyDropdown';

export default (
  props: Omit<IFormsyDropdownProps, keyof InjectedProps<any>>
) => <FormsyDropdown inputAs={Select} {...props} />;
