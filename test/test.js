'use strict';

let collapseDateTime = require('../lib/collapse-date-time');
let expect           = require('chai').expect;

describe('Collapse Date/Time', () => {
    it('should collapse an ISO 8601 Extended timestamp down to a vCard usable format', () => {
        let dateTime  = '2015-07-05T21:17:05Z';
        let collapsed = collapseDateTime(dateTime);
        let expected  = '20150705T211705Z';

        expect(collapsed).to.equal(expected);
    });
});
