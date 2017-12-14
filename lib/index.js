'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const log = require('logalot');
const pkg = require('../package.json');
 require('.');

const url = `https://github.com/punktDe/jpegoptim-bin/blob/master/vendor/freebsd/jpegoptim?raw=true`;

const bin = new BinWrapper()
    .src(`${url}`)
    .dest(path.resolve(__dirname, '../vendor/freebsd'))
    .use('jpegoptim');

bin.run(err => {
    if (err) {
        log.error(err.stack);
        return;
    }

    log.success('jpegoptim built successfully');
});

module.exports = bin;