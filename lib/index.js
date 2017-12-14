'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/punktDe/jpegoptim-bin/master/vendor/freebsd/jpegoptim`;

module.exports = new BinWrapper()
    .src(`${url}`)
    .dest(path.resolve(__dirname, '../vendor'))
    .use('jpegoptim');