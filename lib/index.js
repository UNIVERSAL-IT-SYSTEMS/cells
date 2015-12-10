'use strict';

exports.box = function (stdlib, foreign, heap) {
    'use asm';

    function uniqueCols (ptr) {
        ptr = ptr >>> 0;
        var u32 = new stdlib.Uint32Array(heap);
        return;
    }

    function uniqueRows (ptr) {
        ptr = ptr >>> 0;
        var data = new stdlib.Uint32Array(heap);
        return;
    }

    return {
        uniqueCols: uniqueCols,
        uniqueRows: uniqueRows
    };
}

exports.write = function (heap, offset, data) {
    var u32 = new Uint32Array(heap);
    var arr = data.split(' ').reduce(function (a, e) {
        if (e !== '') {
            a.push(e.split(''));
        }
        return a;
    }, []);
    var cols = arr[0].length;
    var rows = arr.length;
    arr.forEach(function (row, y) {
        row.forEach(function (e, x) {
            var num = isNaN(e) ? 0 : Number(e);
            u32[(x + y * cols) + 4] = num;
        });
    });
    // descriptor
    u32[0] = 1; // type
    u32[1] = cols;
    u32[2] = rows;
};

exports.read = function (heap, offset) {
    var u32 = new Uint32Array(heap);
    var data = '';
    var cols = u32[1];
    var rows = u32[2];
    var x, y;
    for (y = 0; y < rows; y++) {
        for (x = 0; x < cols; x++) {
            data += u32[(x + y * cols) + 4] || '.';
        }
        data += '\n';
    }
    return data;
};
