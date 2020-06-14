---
title: "Insert Delete Getrandom O1"
description: "Some description ..."
authors: ["lek-tin"]
categories: ["algorithm", "ood", "hashmap"]
date: 2020-03-21T23:42:31-07:00
lastmod: 2020-06-12T02:42:31-07:00
draft: false
archive: false
---

Design a data structure that supports all following operations in average `O(1)` time.

1. `insert(val)`: Inserts an item val to the set if not already present.
2. `remove(val)`: Removes an item val from the set if present.
3. `getRandom`: Returns a random element from current set of elements. Each element must have the same probability of being returned.

### Example

```
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
```

### Solution

Java
```java
class RandomizedSet {
    ArrayList<Integer> nums;
    HashMap<Integer, Integer> indexMap;

    /** Initialize your data structure here. */
    public RandomizedSet() {
        nums = new ArrayList<Integer>();
        indexMap = new HashMap<Integer, Integer>();
    }

    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    public boolean insert(int val) {
        if (indexMap.containsKey(val)) return false;

        indexMap.put(val, nums.size());
        nums.add(val);
        return true;
    }

    /** Removes a value from the set. Returns true if the set contained the specified element. */
    public boolean remove(int val) {
        if (!indexMap.containsKey(val)) return false;

        int pos = indexMap.get(val);

        if (pos < nums.size() - 1) {
            int last = nums.get(nums.size()-1);
            indexMap.put(last, pos);
            nums.set(pos, last);
        }

        nums.remove(nums.size()-1);
        indexMap.remove(val);
        return true;
    }

    /** Get a random element from the set. */
    public int getRandom() {
        Random rand = new Random(); //instance of random class
        return nums.get(rand.nextInt(nums.size()));
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```

Python
```python
from random import choice

class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.indexMap = {}
        self.vals = []

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        """
        if val in self.indexMap:
            return False

        index = len(self.vals)
        self.indexMap[val] = index
        self.vals.append(val)

        return True

    def remove(self, val: int) -> bool:
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        """
        if val not in self.indexMap:
            return False

        lastVal = self.vals[-1]
        # get the index to remove from indexMap
        removeIndex = self.indexMap[val]
        # replace removeIndex index with lastVal
        self.vals[removeIndex] = lastVal
        self.indexMap[lastVal] = removeIndex
        self.vals.pop()
        # delete val from indexMap
        # need to delete at last because of edge case like: {0: 0} [0] where removeIndex = lastIndex
        del self.indexMap[val]
        return True

    def getRandom(self) -> int:
        """
        Get a random element from the collection.
        """
        return choice(self.vals)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```
