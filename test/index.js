process.env.NODE_ENV = 'test';

require('babel-register')();
require('./helpers.unit.js');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const exposedProperties = ['window', 'navigator', 'document'];

// raf polyfill for react 16
global.requestAnimationFrame = function requestAnimationFrame(callback) {
  setTimeout(callback, 0);
};

// configure Enzyme
Enzyme.configure({ adapter: new Adapter() });

global.window = new JSDOM('').window;
global.document = global.window.document;

Object.keys(global.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = global.window[property];
  }
});

global.navigator = { userAgent: 'node.js' };
documentRef = document;
