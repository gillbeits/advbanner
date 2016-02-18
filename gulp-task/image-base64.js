/**
 * Created by gillbeits on 17.02.16.
 */

module.exports = function (gulp, $) {
  "use strict";

  var encode      = require('gulp-base64/lib/encode'),
      path        = require('path'),
      through2    = require('through2'),
      del         = require('del')
  ;

  gulp.task('image-base64', function() {

    return gulp.src(gulp._tmp.name + '/**/index.html')
      .pipe(through2.obj(function (file, enc, cb) {
        var self = this,
            match,
            re = /<img[^>]*?is="gwd-image" source="([^"]*?)"[^>]*>/g,
            content = file.contents.toString(),
            dirPath = path.dirname(file.path)
        ;

        while (match = re.exec(content)) {
          encode.image(dirPath + '/' + match[1], { maxImageSize: 204800 }, function (err, src) {
            if (err) {
              throw new Error(err);
            } else {
              file.contents = new Buffer( file.contents.toString().replace(match[0], match[0].replace(match[1], src)) );
              del([dirPath + '/' + match[1]]);
            }
          });
        }
        this.push(file);
        cb();
      }))
      .pipe(gulp.dest(gulp._tmp.name))
    ;
  });
};