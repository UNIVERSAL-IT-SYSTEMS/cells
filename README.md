# Matrix

Matrix library in JavaScript

## Use

```js
var matrix = require('matrix.drom');
var heap = new ArrayBuffer(0x10000);
var stdlib = { Math: Math };
var m = matrix(stdlib, null, heap);
```

### mx.uniqueCols(mx, geometry)

Remove duplicate columns from the matrix.

### mx.uniqueRows(mx, geometry)

Remove duplicate rows from the matrix.
