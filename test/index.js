var assert = require('assert')
var assertDir = require('assert-dir-equal')
var Metalsmith = require('metalsmith')
var metadata = require('../')

/* global it */
it('should match metadata from file conventions', function (done) {
  var metalsmith = new Metalsmith('test/fixtures/basic')
  metalsmith
    .use(metadata())
    .build(function (err) {
      if (err) {
        return done(err)
      }

      // Ensure the metadata was loaded correctly.
      var metadata = metalsmith.metadata()
      var someMetaData = metadata.someMetaData || {}
      var othermeta = metadata.othermeta || {}

      // Check if the property is correct.
      assert.equal('bar', someMetaData.foo || false)
      assert.equal('foo', othermeta.kung || false)

      // Check whether the files were build just file.
      assertDir('test/fixtures/basic/build', 'test/fixtures/basic/expected')

      done()
    })
})
