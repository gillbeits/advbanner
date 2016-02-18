/**
 * Created by gillbeits on 18.02.16.
 */

var advbanner = require('../lib/advbanner');
advbanner([ '~/Downloads/Pekar.zip' ], { dest: '~/Downloads/banners' }, function () {
  console.log(arguments);
});