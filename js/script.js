'use strict';

const a = {
  primitive: 'string',
  boolean: true,
  boolean: 'true___',
  array: [1, 4, 'str'],
  arrObj: [{name: 'vasya1',age: 18}, {name: 'vasya2',age: 28}, {name: 'vasya3',age: 58}],
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
const c = a.arrObj.map(obj => {
  if (obj.age === 28) {
    return {...obj, age: 69};
  }

  return obj;
});
