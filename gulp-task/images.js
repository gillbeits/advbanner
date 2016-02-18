/**
 * Created by gillbeits on 15/04/15.
 */
module.exports = function (gulp, $) {
  "use strict";

  gulp.task('images', function() {
      return gulp.src([gulp._tmp.name + '/**/*.{gif,png,jpeg,jpg,swf}'], { read: true })
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
        .pipe(gulp.dest(gulp._tmp.name));
  });
};