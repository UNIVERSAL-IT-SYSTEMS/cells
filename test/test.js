'use strict';

var matrix = require('../lib/');

var stdlib = {
    Math: Math,
    Uint32Array: Uint32Array
};

var heap = new ArrayBuffer(0x10000);
var m = matrix.box(stdlib, null, heap);
var hu32 = new Uint32Array(heap);

describe('test', function () {
    it('uniqueCols', function (done) {
        matrix.write(heap, 0,
            '...1111...1....\
             ...1111...1.2..\
             ...1111...1.2..\
             ..3333....1....\
             ..3333....111..\
             ...............'
        );
        m.uniqueCols(0);
        console.log(matrix.read(heap, 0));
        done();
    });
    it('uniqueRows', function (done) {
        m.uniqueRows(0);
        done();
    });
});
