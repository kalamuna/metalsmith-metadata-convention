# Metalsmith Metadata Convention Plugin [![NPM version](https://img.shields.io/npm/v/metalsmith-metadata-convention.svg)](https://www.npmjs.org/package/metalsmith-metadata-convention)

[![Build Status](https://img.shields.io/travis/RobLoach/metalsmith-metadata-convention/master.svg)](https://travis-ci.org/RobLoach/metalsmith-metadata-convention)
[![Dependency Status](https://david-dm.org/RobLoach/metalsmith-metadata-convention.png)](https://david-dm.org/RobLoach/metalsmith-metadata-convention)

> [Metalsmith](http://metalsmith.io) plugin to allow defining [Metadata](https://github.com/segmentio/metalsmith-metadata) by using file conventions.

## Installation

    npm install --save metalsmith-metadata-convention

### CLI

If you are using the command-line version of Metalsmith, you can install via npm, and then add the `metalsmith-metadata-convention` key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-metadata-convention": {}
  }
}
```

### JavaScript

If you are using the JS Api for Metalsmith, then you can require the module and add it to your `.use()` directives:

```js
var metadata = require('metalsmith-metadata-convention');

metalsmith.use(metadata());
```

## Usage

Each metadata object is constructed through files named `<name>.metadata`. All files with the `.metadata` extension are merged into Metalsmith's metadata object.

### Example

#### src/authors.metadata
``` yaml
---
Stephen King:
  birthdate: 1947
J. K. Rowling:
  birthdate: 1965
William Shakespeare:
  birthdate: 1564
Nora Roberts:
  birthdate: 1950
---

This is a list of authors that are loaded into Metalsmith metadata at:
  metalsmith.metadata().authors
```

## License

MIT
