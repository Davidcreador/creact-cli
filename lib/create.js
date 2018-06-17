const CURR_DIR = process.cwd();
const fs = require('fs');
const path = require('path');

// utils
const createDir = require('../utils/createDir');
const templatesPath = path.join(__dirname, '..', 'templates/');

module.exports = function(cmd) {
  const extension = cmd.extension;
  const outputDir = cmd.folder;
  let fileName;

  // Check if componentName is provided
  if (!cmd.component) {
    console.log(`Sorry, you need to specify a name for your component like this: creact gen -c [name]`);
    process.exit(0);
  }

  if (cmd.component) {
    fileName = cmd.component + extension;
  }
  if (cmd.service) {
    fileName = cmd.service + extension;
  }
  if (cmd.interface) {
    fileName = cmd.interface + extension;
  }

  if (extension === '.ts') {
    return createDir(outputDir, fileName, templatesPath + 'component-ts.js');
  } else {
    createDir(outputDir, fileName, templatesPath + 'component-js.js');
  }
};
