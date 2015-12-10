'use strict';

var matrix = require('../lib/');

var heap = new ArrayBuffer(0x10000);
var stdlib = { Math: Math };
var m = matrix(stdlib, null, heap);

describe('test', function () {
    it('uniqueCols', function (done) {
        m.uniqueCols(0,0);
        done();
    });
    it('uniqueRows', function (done) {
        m.uniqueRows(0,0);
        done();
    });
});
