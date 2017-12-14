'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');
const bin = require('.');

const url = `./vendor/freebsd/jpegoptim`;

bin.run(['--version'], err => {

    if (err) {
        module.exports = new BinWrapper()
            .src(`${url}`)
            .dest(path.resolve(__dirname, '../vendor'))
            .use('jpegoptim');
    }

	log.success('jpegoptim pre-build test passed successfully');
});
