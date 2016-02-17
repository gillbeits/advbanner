/**
 * Created by gillbeits on 17.02.16.
 */

"use strict";

// External lib.
var nopt = require('nopt');
var gulp = require('gulp');

// This is only executed when run via command line.
gulp._cli = function(options, done) {
  // Run gulp.
  require(process.cwd() + '/gulpfile.js');
  process.nextTick(function() {
    gulp.start.apply(gulp, ['default']);
  });
};

var parsed = nopt({}, {}, process.argv, 2);
gulp._cli.files = parsed.argv.remain;
gulp._cli.options = parsed;
delete parsed.argv;

module.exports = gulp._cli;
