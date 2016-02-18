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
gulp._cli = function() {

  gulp._cli.options = yargs.argv;
  gulp._cli.files = yargs.argv._;

  if (gulp._cli.options.version) {
    console.log(util.colors.green(info.version()));
  } else {
    require('./advbanner')(gulp._cli.files, gulp._cli.options);
  }
};

yargs
  .demand(1)
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

module.exports = gulp._cli;
