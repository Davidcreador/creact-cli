const path = require('path');

// utils
const createDir = require('../utils/createDir');
const templatesPath = path.join(__dirname, '..', 'templates/');

function getExtension(extension, outputDir, fileName) {
  if (extension === '.ts') {
    return createDir(outputDir, fileName, templatesPath + 'component-ts.js');
  }
  return createDir(outputDir, fileName, templatesPath + 'component-js.js');
}

module.exports = function(cmd) {
  const { component, service, interface, extension, folder } = cmd;
  let fileName;

  if (component) {
    fileName = component + extension;
  }
  if (service) {
    fileName = service + extension;
  }
  if (interface) {
    fileName = interface + extension;
  }

  getExtension(extension, folder, fileName);
};
