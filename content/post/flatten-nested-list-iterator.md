---
title: "Flatten Nested List Iterator"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack", "iterator"]
categories: ["algorithm"]
date: 2018-11-13T20:03:07-08:00
lastmod: 2020-03-14T20:03:07-08:00
draft: false
archive: false
---
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

### Example 1
```
Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: `[1,1,2,1,1]`.
```
### Example 2
```
Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: `[1,4,6]`.
```
### Solution (preprocessing recursively)

```python
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger(object):
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """

class NestedIterator(object):
    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        print(arr[::-1])
        self.flat = []
        def flatten(nested):
            for n in nested:
                if n.isInteger():
                    self.flat.append(n.getInteger())
                else:
                    flatten(n.getList())
        flatten(nestedList)
        self.flat = self.flat[::-1]

    def next(self):
        """
        :rtype: int
        """
        return self.flat.pop()

    def hasNext(self):
        """
        :rtype: bool
        """
        # equivalent to len(self.flat) > 0
        return bool(self.flat)

# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
```

### Solution (stack)

```python
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """

class NestedIterator(object):
    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        self.stack = []
        self.flatten(nestedList)

    def next(self):
        """
        :rtype: int
        """
        return self.stack.pop().getInteger() if self.hasNext() else None

    def hasNext(self):
        """
        :rtype: bool
        """
        while self.stack:
            if self.stack[-1].isInteger():
                return True
            else:
                # a nestedList need to be flatten and its root-level items need to be placed on top of the stack
                tempList = self.stack.pop().getList()
                self.flatten(tempList)

        return False

    def flatten(self, nestedList):
        for i in range(len(nestedList)-1, -1, -1):
            # push each NestedInteger into stack, it may be an integer or nestedList
            self.stack.append(nestedList[i])

# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
```

### Solution (stack + iterator)

![Hint](https://www.programcreek.com/2014/05/leetcode-flatten-nested-list-iterator-java/)
```python
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """

class NestedIterator(object):
    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        self.stack = [iter(nestedList)]
        self.curr = None

    def next(self):
        """
        :rtype: int
        """
        result = self.curr
        self.curr = None
        return result

    def hasNext(self):
        """
        :rtype: bool
        """
        while self.stack and self.curr == None:
            top = self.stack[-1]
            top_next = next(top, None)
            if top_next == None:
                self.stack.pop()
                continue
            else:
                if top_next.isInteger():
                    self.curr = top_next.getInteger()
                    return True
                else:
                    self.stack.append( iter(top_next.getList()) )

        return False

# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
```