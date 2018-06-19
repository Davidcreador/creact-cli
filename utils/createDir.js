const writeFile = require('./writeFile');
const readFile = require('./readFile');
const mkDirByPath = require('./mkDirByPath');

module.exports = function(dir, fileName, templatePath) {
  mkDirByPath(dir, fileName, templatePath)
    .then(path => readFile(path, templatePath))
    .then(responseObj => {
      // Replace our placeholders with real data (so far, just the component name)
      responseObj.template = responseObj.template.replace(
        /\[FILENAME\]/g,
        fileName.split('.')[0]
      );
      return responseObj;
    })
    .then(res => {
      writeFile(res.path, res.template);
    })
    .catch(err => console.log('Error creating directory and file', err));
};
