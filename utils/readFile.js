const fs = require('fs');

module.exports = (path, fileLocation) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileLocation, 'utf-8', (err, template) => {
      let response = { path, template };
      err ? reject(err) : resolve(response);
    });
  });
