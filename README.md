collapse-date-time
==================
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![Build Status][BUILD BADGE]][BUILD PAGE]

Collapses ISO 8601 Extended timestamps down to a vCard usable format.

Install
-------
### Locally
```sh
$ npm install collapse-date-time
```

### Globally (for CLI usage)
```sh
$ npm install --global collapse-date-time
```

Usage
-----
### API
```js
var collapseDateTime = require('collapse-date-time');

var dateTime  = '2015-07-05T21:17:05Z';
var collapsed = collapseDateTime(dateTime); // > '20150705T211705Z'
```

### CLI
```sh
$ collapse-date-time 2015-07-05T21:17:05Z # > 20150705T211705Z
```

Testing
-------
```sh
$ npm test
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[BUILD BADGE]: https://img.shields.io/travis/jbenner-radham/collapse-date-time.svg?style=flat-square
[BUILD PAGE]: https://travis-ci.org/jbenner-radham/collapse-date-time
[LICENSE BADGE]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[LICENSE PAGE]: https://github.com/jbenner-radham/collapse-date-time/blob/master/LICENSE
[NPM PAGE]: https://www.npmjs.com/package/collapse-date-time
[NPM VERSION BADGE]: https://img.shields.io/npm/v/collapse-date-time.svg?style=flat-square
