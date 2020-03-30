---
title: "Design Hashmap"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "ood"]
categories: ["algorithm"]
date: 2020-03-29T06:53:15-07:00
lastmod: 2020-03-29T06:53:15-07:00
draft: false
archive: false
---

Design a HashMap **without** using any **built-in** hash table libraries.

To be specific, your design should include these functions:

1. `put(key, value)`: Insert a `(key, value)` pair into the HashMap. If the value already exists in the HashMap, update the value.
2. `get(key)`: Returns the value to which the specified key is mapped, or `-1` if this map contains no mapping for the key.
3. `remove(key)`: Remove the mapping for the value key if this map contains the mapping for the key.

### Example

```
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)
```

#### Note

1. All keys and values will be in the range of `[0, 1000000]`.
2. The number of operations will be in the range of `[1, 10000]`.
3. Please do not use the **built-in** HashMap library.

### Solution

```python
class Node:
    def __init__(self, _key=None, _val=None, _next=None):
        self.key = _key
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

    def deleteByKey(self, key):
        curr = self.head

        while curr and curr.next:
            if curr.next.key == key:
                curr.next = curr.next.next
                return
            curr = curr.next

    def getByKey(self, key):
        curr = self.head.next
        while curr:
            if curr.key == key:
                return curr
            curr = curr.next

        return None

    def updateByKey(self, key, val):
        node = self.getByKey(key)
        if node:
            node.val = val
        else:
            self.head.next = Node(key, val, self.head.next)

class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.keyRange = 769
        self.buckets = [Bucket() for i in range(self.keyRange)]

    def _hash(self, key):
        return key % self.keyRange

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        bucketIndex = self._hash(key)
        self.buckets[bucketIndex].updateByKey(key, value)

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        bucketIndex = self._hash(key)
        node = self.buckets[bucketIndex].getByKey(key)
        return node.val if node != None else -1

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        bucketIndex = self._hash(key)
        self.buckets[bucketIndex].deleteByKey(key)

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
```