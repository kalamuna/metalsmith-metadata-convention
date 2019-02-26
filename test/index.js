const assert = require('assert')
const assertDir = require('assert-dir-equal')
const Metalsmith = require('metalsmith')
const metadata = require('..')

/* global it */
it('should match metadata from file conventions', done => {
  const metalsmith = new Metalsmith('test/fixtures/basic')
  metalsmith
    .use(metadata())
    .build(err => {
      if (err) {
        return done(err)
      }

      // Ensure the metadata was loaded correctly.
      const metadata = metalsmith.metadata()
      const someMetaData = metadata.someMetaData || {}
      const othermeta = metadata.othermeta || {}

      // Check if the property is correct.
      assert.strictEqual('bar', someMetaData.foo || false)
      assert.strictEqual('foo', othermeta.kung || false)

      // Check whether the files were build just file.
      assertDir('test/fixtures/basic/build', 'test/fixtures/basic/expected')

      done()
    })
})
