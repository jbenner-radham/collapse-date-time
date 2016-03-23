'use strict';

module.exports = (dateTime) => {
    return dateTime.replace(/-/g, '').replace(/:/g, '');
};
