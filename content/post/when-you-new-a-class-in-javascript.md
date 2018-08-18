---
title: "When You New a Class in JavaScript?"
authors: ["lek-tin"]
tags: ['tag-1', 'tag-2']
categories: ["javascript", "css"]
date: 2018-02-13T15:30:03+08:00
draft: false
archive: false
---

Here is an example of instantiating a class using the `new` operator:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const asian = new Person('Alice', 25);
console.log(asian);
```
As you can see from below, `asian` is not a class, it is instead, an `object`:
```javascript
[object Object] {
  age: 25,
  name: "Alice"
}
```
The values of `asian` are set by the `constructor` of the `Person` class.

