'use strict';

var m = require('../lib/')();

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
