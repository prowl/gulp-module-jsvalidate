'use strict';

var jsvalidate = require('gulp-jsvalidate');

// store a reference to our parameters in local variables
var gulp = null;
var config = null;

/**
 * Adds the jsvalidate task to the gulp instance
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration options
 */
function jsValidateSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('jsvalidate', false, ['soften'], jsValidateTask);
}

/**
 * Runs the jsvalidate task
 */
function jsValidateTask() {
  return gulp.src(config.src)
    .pipe(jsvalidate());
}

module.exports = jsValidateSetup;
