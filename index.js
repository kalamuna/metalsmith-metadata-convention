'use strict'

var path = require('path')
var async = require('async')
var extend = require('extend')

module.exports = function () {
  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata()

    /**
     * Process a file, saving it as metadata if needed.
     */
    function processFile(file, filename, callback) {
      // Check if it matches the convention.
      if (path.extname(filename) === '.metadata') {
        // Find the name of the metadata.
        var name = path.basename(filename, '.metadata')

        // Recursively merge the meta data.
        var newMetadata = {}
        newMetadata[name] = file
        extend(true, metadata, newMetadata)

        // Remove the file since we've now processed it.
        delete files[filename]
      }

      callback()
    }

    async.forEachOf(files, processFile, done)
  }
}
