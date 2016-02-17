/**
 * Created by gillbeits on 17.02.16.
 */

module.exports = function (gulp, $) {
  "use strict";

  var del = require('del');

  gulp.task('clean-all', function() {
    return del([
      'banners',
      'banners-src'
    ]);
  });
};
