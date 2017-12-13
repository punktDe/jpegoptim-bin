'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/imagemin/jpegoptim-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}freebsd/jpegoptim`, 'darwin')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'jpegoptim');
