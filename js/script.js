'use strict';

const a = {
  primitive: 'string',
  boolean: true,
  boolean: 'true___',
  array: [1, 4, 'str'],
  obj: {
    objInner: {
      name: 'vasya',
      age: 18
    }
  }
}

const b = {...a, boolean: 0};
// b.array = [...a.array];
// b.obj = {...a.obj};
// b.obj.objInner = {...a.obj.objInner};
