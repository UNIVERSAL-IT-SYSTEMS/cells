# cells

Matrix library in JavaScript

## Use

```js
var cells = require('cells.drom');
var heap = new ArrayBuffer(0x10000);
var stdlib = { Math: Math };
var mx = cells(stdlib, null, heap);
```

### mx.uniqueCols(mx, geometry)

Remove duplicate columns from the matrix.

### mx.uniqueRows(mx, geometry)

Remove duplicate rows from the matrix.
