const fs = require('fs');
const path = require('path');

function mkdirRecursive(root, chunks, mode, callback) {
  var chunk = chunks.shift();
  if (!chunk) {
    return callback(null);
  }
  var root = path.join(root, chunk);

  return fs.exists(root, function(exists) {
    if (exists === true) {
      // already done
      return mkdirRecursive(root, chunks, mode, callback);
    }
    return fs.mkdir(root, mode, function(err) {
      if (err && err.code !== 'EEXIST') return callback(err);

      return mkdirRecursive(root, chunks, mode, callback); // let's magic
    });
  });
}

module.exports = function mkDirAndFile(root, mode, callback) {
  const sep = path.sep;

  if (typeof mode === 'function') {
    var callback = mode;
    var mode = null;
  }
  if (typeof root !== 'string') {
    throw new Error('missing root');
  } else if (typeof callback !== 'function') {
    throw new Error('missing callback');
  }

  var chunks = root.split(sep);
  var chunk;
  if (path.isAbsolute(root) === true) {
    // build from absolute path
    chunk = chunks.shift(); // remove "/" or C:/
    if (!chunk) {
      // add "/"
      chunk = path.sep;
    }
  } else {
    chunk = path.resolve(); // build with relative path
  }

  return mkdirRecursive(chunk, chunks, mode, callback);
};
