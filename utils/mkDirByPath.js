const path = require('path');
const writeFile = require('./writeFile');
const mkDirAndFile = require('../lib/mkDirAndFile');

module.exports = function mkDirByPath(targetDir, filename, templatePath) {
  const baseDir = process.cwd();
  const curDir = path.resolve(baseDir, targetDir);
  const output = curDir + '/' + filename;

  return new Promise((resolve, reject) => {
    mkDirAndFile(curDir, err => {
      if (err) reject(err);
      console.log(`Directory ${curDir} created!`);
      resolve(output);
    });
  });
};
