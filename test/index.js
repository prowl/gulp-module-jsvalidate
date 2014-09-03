'use strict';

var should = require('should');// jshint ignore:line

var jsvalidate = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {// jshint ignore:line
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

jsvalidate(gulpMock, configMock);

describe('Gulp Module JSValidate', function() {
  it('Should return a function', function() {
    jsvalidate.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
