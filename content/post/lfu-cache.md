---
title: "LFU Cache"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "ood", "doubly-linked-list", "hashmap"]
categories: ["algorithm"]
date: 2020-03-31T22:20:28-07:00
lastmod: 2020-03-31T22:20:28-07:00
draft: false
archive: false
---
Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: `get` and `put`.  

1. `get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
2. `put(key, value)` - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the **least** recently used key would be evicted.  

Note that the number of times an item is used is the number of calls to the `get` and `put` functions for that item since it was inserted. This number is set to zero when the item is removed.  


#### Follow up
- Could you do both operations in `O(1)` time complexity?

### Example

```
LFUCache cache = new LFUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

#### Illustration
![doubly liked lists mapped to frequency 1](/img/post/doubly-liked-lists-mapped-to-frequency-1.png)
![doubly liked lists mapped to frequency 2](/img/post/doubly-liked-lists-mapped-to-frequency-2.png)

### Solution (`O(1)`)

```python
from collections import defaultdict

class Node:
    def __init__(self, _key=None, _val=None, _freq=0):
        self.key = _key
        self.val = _val
        self.freq = _freq
        self.prev = None
        self.next = None

    def __str__(self):
        temp = "(" + str(self.key) + ", " + str(self.val) + ", " + str(self.freq) + ")"
        if self.next:
          nextNode = self.next
          temp += " -> (" + str(nextNode.key) + ", " + str(nextNode.val) + ", " + str(nextNode.freq) + ")"

class DLL:
    def __init__(self):
        self.head = Node(None)
        self.tail = Node(None)
        self.head.next = self.tail
        self.tail.prev = self.head

    def append(self, node):
        node.prev = self.tail.prev
        node.next = self.tail
        node.prev.next = node
        node.next.prev = node

    def front(self):
        if self.isEmpty():
            return None

        return self.head.next

    def deleteFront(self,):
        front = self.front()
        self.delete(front)
        del front

    def delete(self, node):
        node.prev.next  = node.next
        node.next.prev = node.prev

    def isEmpty(self):
        return self.head.next == self.tail

    def __str__(self):
        if self.isEmpty():
          return "Empty DLL"
        else:
          return str(self.head.next)

class LFUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.min_freq = 0
        # key : Node
        self.key_to_node = {}
        # freq: DLL<Node>
        self.freq_to_nodes = defaultdict(DLL)

    def get(self, key: int) -> int:
        if key not in self.key_to_node:
            return -1
        # only update node, no new value
        self.updateFreq(key)
        return self.key_to_node[key].val

    def put(self, key: int, value: int) -> None:
        if self.capacity <= 0:
            return

        # key exists
        if key in self.key_to_node:
            self.updateFreq(key, value)
            return

        # key doesn't exist
        if self.size == self.capacity:
            self.evict()

        self.addNode(key, value)

        return

    def updateFreq(self, key, val=None):
        oldNode = self.key_to_node[key]
        self.freq_to_nodes[oldNode.freq].delete(oldNode)
        if self.freq_to_nodes[oldNode.freq].isEmpty():
            del self.freq_to_nodes[oldNode.freq]
            if self.min_freq == oldNode.freq:
                self.min_freq += 1

        newNode = Node(key, oldNode.val if val == None else val, oldNode.freq+1)
        self.key_to_node[key] = newNode
        newFreq = newNode.freq
        self.freq_to_nodes[newFreq].append(newNode)

    def evict(self):
        nodes_at_freq = self.freq_to_nodes[self.min_freq]
        node_to_delete = nodes_at_freq.front()
        del self.key_to_node[node_to_delete.key]
        nodes_at_freq.deleteFront()
        if nodes_at_freq.isEmpty():
            del self.freq_to_nodes[self.min_freq]
        self.size -= 1

    def addNode(self, key, val):
        self.min_freq = 1
        newNode = Node(key, val, self.min_freq)
        self.key_to_node[key] = newNode
        self.freq_to_nodes[self.min_freq].append(newNode)
        self.size += 1

# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
```
