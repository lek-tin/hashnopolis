---
title: "Flatten 2d Vector"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "iterator", "ood", "two-pointers"]
categories: ["algorithm"]
date: 2020-03-26T03:11:06-07:00
lastmod: 2020-03-26T03:11:06-07:00
draft: false
archive: false
---
Design and implement an iterator to flatten a 2d vector. It should support the following operations: `next` and `hasNext`.  

### Example

```
Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // return 1
iterator.next(); // return 2
iterator.next(); // return 3
iterator.hasNext(); // return true
iterator.hasNext(); // return true
iterator.next(); // return 4
iterator.hasNext(); // return false
```

### Notes

1. Please remember to RESET your class variables declared in Vector2D, as static/class variables are persisted across multiple test cases. Please see here for more details.
2. You may assume that next() call will always be valid, that is, there will be at least a next element in the 2d vector when next() is called.  

#### Follow up

1. As an added challenge, try to code it using only iterators in C++ or iterators in Java.

### Solution

```python
class Vector2D:

    def __init__(self, v: List[List[int]]):
        self.vec = v
        self.i = 0
        self.j = 0

    def check_and_move_inner_ptr(self):
        # i: outer, j: inner
        # while because there could be empty inner vector
        while self.i < len(self.vec) and self.j == len(self.vec[self.i]):
            self.i += 1
            self.j = 0

    def next(self) -> int:
        # i: outer, j: inner
        self.check_and_move_inner_ptr()
        res = self.vec[self.i][self.j]
        self.j += 1
        return res

    def hasNext(self) -> bool:
        self.check_and_move_inner_ptr()
        return self.i < len(self.vec)


# Your Vector2D object will be instantiated and called as such:
# obj = Vector2D(v)
# param_1 = obj.next()
# param_2 = obj.hasNext()
```
