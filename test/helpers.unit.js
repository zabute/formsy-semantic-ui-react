import sinon from 'sinon';

sinon.stub(console, 'error').callsFake(warning => {
  if (typeof(warning) === 'string' && warning.indexOf('Warning: Failed prop type') > -1) {
    throw new Error(warning);
  }
});
