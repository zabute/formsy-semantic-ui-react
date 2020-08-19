process.env.NODE_ENV = 'test';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// configure Enzyme
Enzyme.configure({ adapter: new Adapter() });
