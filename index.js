'use strict'

var path = require('path')
var async = require('async')

module.exports = function (opts) {
  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata()

    /**
     * Process a file, saving it as metadata if needed.
     */
    function processFile (file, filename, callback) {
      // Check if it matches the convention.
      if (path.extname(filename) === '.metadata') {
        // Find the name of the metadata.
        var name = path.basename(filename, '.metadata')

        // Save the meta data.
        metadata[name] = file

        // Remove the file since we've now processed it.
        delete files[filename]
      }

      callback()
    }

    async.forEachOf(files, processFile, done)
  }
}
