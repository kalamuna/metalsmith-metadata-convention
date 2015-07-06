'use strict'

var path = require('path')

module.exports = function (opts) {
  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata()
    for (var file in files) {
      // Check if it matches the convention.
      if (path.extname(file) === '.metadata') {
        // Load in the metadata.
        metadata[path.basename(file, '.metadata')] = files[file]
        // Remove the file since we've processed it.
        delete files[file]
      }
    }

    done()
  }
}
