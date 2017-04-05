import React from 'react';
import Input from './FormsyInput';
import { TextArea } from 'semantic-ui-react';
export default (props) => <Input as={ TextArea } { ...props }/>;
