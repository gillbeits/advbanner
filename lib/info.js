/**
 * Created by gillbeits on 18.02.16.
 */

'use strict';

// Project metadata.
var pkg = require('../package.json'),
    util = require('gulp-util')
;

// Display version.
exports.version = function version () {
  return "v" + pkg.version;
};

exports.description = function() {
  return util.colors.green(process.title + " " + this.version()) + "\n\n" + pkg.description + util.colors.green("Использование: advbanner [options] [files]");
};
