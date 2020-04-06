---
title: "Design Hashset"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashset", "ood"]
categories: ["algorithm"]
date: 2020-03-26T04:15:15-07:00
lastmod: 2020-03-26T04:15:15-07:00
draft: false
archive: false
---

Design a HashSet without using any `built-in` hash table libraries.  

To be specific, your design should include these functions:

1. `add(value`): Insert a value into the HashSet. 
2. `contains(value)`: Return whether the value exists in the HashSet or not.
3. `remove(value)`: Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

### Example

```
MyHashSet hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)
```

#### Note

1. All values will be in the range of `[0, 1000000]`.
2. The number of operations will be in the range of `[1, 10000]`.
3. Please do not use the built-in HashSet library.

### Solution

```python
class Node:
    def __init__(self, _val=None, _next=None):
        self.val = _val
        self.next = _next

class Bucket:
    def __init__(self):
        self.head = Node()

    def display(self):
        curr = self.head
        while curr:
            print(curr.val)
            curr = curr.next

    def deleteByVal(self, val):
        curr = self.head

        while curr and curr.next:
            if curr.next.val == val:
                curr.next = curr.next.next
                return
            curr = curr.next

    def containsVal(self, val):
        curr = self.head.next
        while curr:
            if curr.val == val:
                return True
            curr = curr.next

        return False

    def insertFront(self, val):
        if not self.containsVal(val):
            self.head.next = Node(val, self.head.next)

class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.keyRange = 769
        self.buckets = [Bucket() for i in range(self.keyRange)]

    def _hash(self, key):
        return key % self.keyRange

    def add(self, key: int) -> None:
        bucketIndex = self._hash(key)
        # print("bucketIndex:", bucketIndex)
        self.buckets[bucketIndex].insertFront(key)

    def remove(self, key: int) -> None:
        bucketIndex = self._hash(key)
        self.buckets[bucketIndex].deleteByVal(key)

    def contains(self, key: int) -> bool:
        """
        Returns true if this set contains the specified element
        """
        bucketIndex = self._hash(key)
        return self.buckets[bucketIndex].containsVal(key)


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
```