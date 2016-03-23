#!/usr/bin/env node

'use strict';

let collapseDateTime = require('./lib/collapse-date-time');

const ERROR = 1;

if (!process.argv[2]) {
    console.error('Please supply a timestamp as an argument.');
    process.exit(ERROR);
}

let dateTime  = process.argv[2];
let collapsed = collapseDateTime(dateTime);

console.log(collapsed);
