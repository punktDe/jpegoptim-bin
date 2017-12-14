'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://github.com/punktDe/jpegoptim-bin/blob/master/vendor/freebsd/jpegoptim?raw=true`;

module.exports = new BinWrapper()
	.src(`${url}`)
	.dest(path.resolve(__dirname, '../vendor'))
	.use('jpegoptim');
