---
title: "Insert Delete Getrandom O1 Duplicates Allowed"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm", "ood", "hashmap"]
date: 2020-03-21T22:09:46-07:00
lastmod: 2020-03-21T22:09:46-07:00
draft: false
archive: false
---

Design a data structure that supports all following operations in **average** `O(1)` time.  

**Note**: Duplicate elements are allowed.  
1. `insert(val)`: Inserts an item val to the collection.
2. `remove(val)`: Removes an item val from the collection if present.
3. `getRandom`: Returns a random element from current collection of elements. The probability of each element being returned is **linearly related** to the number of same value the collection contains.

### Example

```
// Init an empty collection.
RandomizedCollection collection = new RandomizedCollection();

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
collection.insert(1);

// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
collection.insert(1);

// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
collection.insert(2);

// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
collection.getRandom();

// Removes 1 from the collection, returns true. Collection now contains [1,2].
collection.remove(1);

// getRandom should return 1 and 2 both equally likely.
collection.getRandom();
```

### Solution

```python
from collections import defaultdict
import random

class RandomizedCollection:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.indexMap = defaultdict(set)
        self.vals = []

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        """
        res = True

        if val in self.indexMap:
            res = False

        index = len(self.vals)
        self.indexMap[val].add(index)
        self.vals.append(val)

        return res

    def remove(self, val: int) -> bool:
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        """
        if not self.indexMap[val]:
            return False

        lastVal = self.vals[-1]
        # get the index to remove from indexMap
        # pop() is random but we don't care which val to pop thus it is ok to get a random index
        removeIndex = self.indexMap[val].pop()
        # delete val from indexMap if there is 1 val left in vals
        if len(self.indexMap[val]) == 0 :
            del self.indexMap[val]
        # replace removeIndex index with lastVal
        self.vals[removeIndex] = lastVal
        self.indexMap[lastVal].add(removeIndex)
        self.indexMap[lastVal].remove(len(self.vals)-1)
        self.vals.pop()

        return True

    def getRandom(self) -> int:
        """
        Get a random element from the collection.
        """
        size = len(self.vals)
        index = random.randint(0,size-1)
        return self.vals[index]

# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```