'use strict'

const path = require('path')
const async = require('async')
const extend = require('extend')

module.exports = function () {
  return function (files, metalsmith, done) {
    const metadata = metalsmith.metadata()

    /**
     * Process a file, saving it as metadata if needed.
     *
     * @param {string} file The file of which is being processed.
     * @param {string} filename The name of the given file.
     * @param {function} callback The callback to call when the function is finished.
     */
    function processFile(file, filename, callback) {
      // Check if it matches the convention.
      if (path.extname(filename) === '.metadata') {
        // Find the name of the metadata.
        const name = path.basename(filename, '.metadata')

        // Recursively merge the meta data.
        const newMetadata = {}
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
