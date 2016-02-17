/**
 * Created by gillbeits on 17.02.16.
 */

module.exports = function (gulp, $) {
  "use strict";

  gulp.task('compress', function() {
    return gulp.src('banners-src/**/index.html')
      .pipe($.print())
      .pipe($.zip('banner.zip'))
      .pipe(gulp.dest('banners/'))
    ;
  });
};
