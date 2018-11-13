---
title: "LRU Cache"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "cache", "dll", "linked-list", "hashmap"]
categories: ["algorithm"]
date: 2018-11-11T15:33:09-08:00
draft: false
archive: false
---
Design and implement a data structure for [Least Recently Used (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU) cache. It should support the following operations: `get` and `put`.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return `-1`.
`put(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in `O(1)` time complexity?

**Example:**
```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```
**Solution:**
```python
# Dictionary stores keys with values of nodes.  Nodes form
# double linked list containing key, value pairs. DLL is in
# order of use with least recent at head and most recent at tail.
# Time - O(1) to set and get: hashmap and linked-list
# Space - O(n)
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

# Dynamic Link Library / Double linked list, used for insertion and deletion
class DLL:
    # head <--> key_1 <--> key_2 <--> key_3 <--> ... <-->tail
    def __init__(self):
        self.head = Node(None, None)  # least recently used, remove at head
        self.tail = Node(None, None)  # most recently used, add and update at tail
        self.head.next = self.tail
        self.tail.prev = self.head

    # tail is always a placeholder
    def appendToTail(self, node):
        node.prev = self.tail.prev
        self.tail.prev.next = node
        node.next = self.tail
        self.tail.prev = node

    # head is  always a placeholder
    def removeAtHead(self):
        node = self.head.next
        node.next.prev = self.head
        self.head.next = self.head.next.next
        key = node.key
        del node
        return key

    def update(self, node):
        node.prev.next = node.next      # take out from existing position
        node.next.prev = node.prev
        self.appendToTail(node)               # put back at tail

class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.queue = DLL()
        self.map = {}

    def get(self, key):
        """
        :rtype: int
        """
        if key not in self.map:
            return -1
        node = self.map[key]
        self.queue.update(node)
        return node.value


    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: nothing
        """
        # Key exists, so we update value and move node to tail
        if key in self.map:
            node = self.map[key]
            node.value = value
            self.queue.update(node)
            return
        else:
          # new key
          node = Node(key, value)
          self.map[key] = node
          self.queue.appendToTail(node)

        if self.capacity == 0:
            # cache is full, remove oldest
            removed_key = self.queue.removeAtHead()
            del self.map[removed_key]
        else:
            # decrement capacity
            self.capacity -= 1
```