/**
 * Created by gillbeits on 18.02.16.
 */

var gulp = require('gulp'),
    util = require('gulp-util'),
    fs = require('fs'),
    untildify = require('untildify')
;

module.exports = function (files, options, done) {
  // Run gulp.
  require('../gulpfile.js');

  options.dest = untildify(options.dest);
  files.forEach(function (file, i) {
    files[i] = untildify(file);
  });

  gulp._cli = gulp._cli || {};
  gulp._cli.files = files;
  gulp._cli.options = options;
  gulp._cli._done = done;
  gulp._tmp = require('tmp').dirSync();

  if (!fs.existsSync(options.dest)) {
    fs.mkdirSync(options.dest);
    util.log(util.colors.magenta(options.dest + " created!"));
  }

  gulp.start.apply(gulp, ['default']);

};