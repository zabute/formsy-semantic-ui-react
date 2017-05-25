import React from 'react';
import { Select } from 'semantic-ui-react';
import FormsyDropdown from './FormsyDropdown';
export default (props) => <FormsyDropdown as={Select} { ...props }/>;
