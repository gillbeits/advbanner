/**
 * Created by gillbeits on 17.02.16.
 */

var through2    = require('through2'),
    AdmZip      = require('adm-zip'),
    path        = require('path'),
    fs          = require('fs')
;

module.exports = function (gulp, $) {
  "use strict";

  gulp.task('compress', function() {
    //console.log(gulp._cli.options.dest);
    //return;

    return gulp.src(gulp._tmp.name + '/**/index.html')
      .pipe(through2.obj(function (file, enc, cb) {

        var self = this,
            zip = new AdmZip()
        ;

        zip.addLocalFile(file.path);
        self.push(new $.util.File({
          path: path.basename(path.dirname(file.path)) + '-optimized.zip',
          contents: zip.toBuffer()
        }));

        cb();
      }))
      .pipe(gulp.dest(gulp._cli.options.dest))
      .pipe($.fn(function (file) {
        $.util.log($.util.colors.magenta("Файл " + $.util.colors.green(file.path) + " сохранен"))
      }))
    ;
  });
};
