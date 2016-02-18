/**
 * Created by gillbeits on 17.02.16.
 */

"use strict";

var
  taskPath          = './gulp-task/',
  gulp              = require('gulp'),
  plugins           = require('gulp-load-plugins')(),
  runSequence       = require('run-sequence')
  ;

// jshint ignore: start
var fs = require('fs');

require.extensions[".json"] = function (m) {
  m.exports = JSON.parse(fs.readFileSync(m.filename));
};

require('fs').readdirSync(taskPath).forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('default', function (cb) {
  runSequence('unzip', 'images', 'image-base64', 'compress', 'clean-tmp', cb);
});