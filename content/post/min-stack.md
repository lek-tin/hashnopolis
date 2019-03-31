---
title: "Min Stack"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2018-10-14T23:55:15-07:00
draft: false
archive: false
---
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.
**Example:**
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```
**Solution:**
```python
class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.minStack = []

    def push(self, x):
        """
        :type x: int
        :rtype: void
        """
        self.stack.append(x)
        if len(self.minStack) == 0 or self.minStack[-1] >= x:
            self.minStack.append(x)

    def pop(self):
        """
        :rtype: void
        """
        pop = self.stack.pop()
        if pop == self.minStack[-1]:
            self.minStack.pop()

    def top(self):
        """
        :rtype: int
        """
        return self.stack[-1]

    def getMin(self):
        """
        :rtype: int
        """
        return self.minStack[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
```