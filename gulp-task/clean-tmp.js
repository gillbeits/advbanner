/**
 * Created by gillbeits on 17.02.16.
 */

module.exports = function (gulp, $) {
  "use strict";

  var del = require('del');

  gulp.task('clean-tmp', function() {
    return del([
      gulp._tmp.name
    ], { force: true }).then(function (files) {
      files.forEach(function (filePath) {
        $.util.log($.util.colors.magenta("Временная папка " + $.util.colors.green(filePath) + " удалена"))
      });
    })
    ;
  });
};
