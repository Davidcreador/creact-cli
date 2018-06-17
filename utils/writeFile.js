const fs = require('fs');

module.exports = function(file, template) {
  let splitted = file.split('.');
  let testExtension = '.spec.';
  let path = splitted[0];
  let extension = splitted[1];
  let testFile = path + testExtension + extension;

  // TODO: Refactor this part
  fs.writeFile(file, template, 'utf8', function(err) {
    if (err) return console.log(err);
    console.log('New file created: ', file);
    fs.writeFile(testFile, template, 'utf8', function(err) {
      if (err) return console.log(err);
      console.log('New test file created: ', testFile);
    });
  });
};
