(function () {
  'use strict';

  var chokidar = require('chokidar');
  var matter = require('gray-matter');
  var replace = require('replace-in-file');
  var moment = require('moment');
  var yaml = require('yamljs');

  const fs = require('fs')

  const getFileUpdatedDate = (path) => {
    const stats = fs.statSync(path)
    // last modified date
    return stats.mtime
  }

  // If you want to use something other than lastUpdate change this var
  var propertyName = 'lastmod';

  // Where is your content located?
  chokidar.watch('content/post/*.{md,html}').on('change', updateFrontMatter);

  function updateFrontMatter(path) {
    var regex = /^---[\s\S]*?---/;
    var fm = matter.read(path);
    console.log(fm.data[propertyName])
    fm.data[propertyName] = moment().format('MMMM-DD-YYYY');

    var output = '---\n' + yaml.stringify(fm.data) + '---';

    replace({
      files: path,
      replace: regex,
      with: output
    }, function (err, files) {
      if (err) return console.error(err);
      console.log('Modified files: ', files.join(', '));
    });
  }

})();