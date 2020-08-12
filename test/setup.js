process.env.NODE_ENV = 'test';

require('./helpers.unit.js');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { JSDOM } = require('jsdom');
// raf polyfill for react 16
global.requestAnimationFrame = function requestAnimationFrame(callback) {
  setTimeout(callback, 0);
};

// configure Enzyme
Enzyme.configure({ adapter: new Adapter() });

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
