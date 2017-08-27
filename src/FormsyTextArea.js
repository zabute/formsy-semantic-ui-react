import React from 'react';
import Input from './FormsyInput';
import { Form } from 'semantic-ui-react';
export default (props) => <Input inputAs={ Form.TextArea } { ...props }/>;
