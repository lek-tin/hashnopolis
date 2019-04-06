---
title: "Playing with Node.js Event Loop"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["nodejs", "javascript"]
categories: ["programming"]
date: 2019-04-04T09:37:24-07:00
draft: false
archive: false
---
`setImmediate/clearImmediate` - will execute code at the end of the current event loop cycle  
`process.nextTick` - used to schedule a callback function to be invoked in the next iteration of the Event Loop  
```javascript
function cb(msg){
  console.log(msg);
}
setImmediate(cb, 'setImmediate');
process.nextTick(cb, 'process.nextTick: 1');
process.nextTick(cb, 'process.nextTick: 2');
process.nextTick(cb, 'process.nextTick: 3');
console.log('Processed in the first iteration');
process.nextTick(cb, 'process.nextTick: 4');
process.nextTick(cb, 'process.nextTick: 5');
```
Output:
```
Processed in the first iteration
process.nextTick: 1
process.nextTick: 2
process.nextTick: 3
process.nextTick: 4
process.nextTick: 5
setImmediate
```