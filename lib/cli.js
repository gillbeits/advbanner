/**
 * Created by gillbeits on 17.02.16.
 */

"use strict";

// External lib.
var yargs    = require('yargs'),
    gulp = require('gulp'),
    util = require('gulp-util'),
    fs = require('fs'),
    info = require('./info')
;

// This is only executed when run via command line.
gulp._cli = function(options, done) {
  if (gulp._cli.options.version) {
    console.log(util.colors.green(info.version()));
  } else {
    // Run gulp.
    require('../gulpfile.js');
    gulp._tmp = require('tmp').dirSync();

    if (!fs.existsSync(gulp._cli.options.dest)) {
      fs.mkdirSync(gulp._cli.options.dest);
      util.log(util.colors.magenta(gulp._cli.options.dest + " created!"));
    }

    gulp.start.apply(gulp, ['default']);
  }
};

yargs
  .boolean([
    'version'
  ])
  .string([
    'dest'
  ])
  .alias({
    d: 'dest',
    v: 'version'
  })
  .describe({
    d: 'Место выгрузки готовых баннеров в ZIP',
    v: 'Показать версию ' + process.title
  })
  .default({
    dest: process.cwd()
  })
  .usage(util.colors.magenta(info.description()))
  .help('help', 'Отображение этой подсказки')
  .wrap(yargs.terminalWidth())
;

gulp._cli.options = yargs.argv;
gulp._cli.files = yargs.argv._;

module.exports = gulp._cli;
