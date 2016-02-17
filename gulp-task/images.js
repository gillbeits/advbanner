/**
 * Created by gillbeits on 15/04/15.
 */
module.exports = function (gulp, $) {
  "use strict";

  gulp.task('images', function() {
      return gulp.src(['banners-src/**/*.{gif,png,jpeg,jpg,swf}'], { read: true })
        .pipe($.plumber())
        .pipe($.image({
          pngquant: true,
          optipng: false,
          zopflipng: true,
          advpng: true,
          jpegRecompress: true,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        }))
        .pipe(gulp.dest('banners-src/'));
  });
};