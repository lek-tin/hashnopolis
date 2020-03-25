---
title: "Two Sum Iii Data Structure Design Design"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "data-structure"]
categories: ["algorithm"]
date: 2019-08-20T01:18:01-07:00
draft: false
archive: false
---
Design and implement a TwoSum class. It should support the following operations: `add` and `find`.

add - Add the number to an internal data structure.
`find` - Find if there exists any pair of numbers which sum is equal to the value.

### Example 1
```
add(1); add(3); add(5);
find(4) -> true
find(7) -> false
```
### Example 2
```
add(3); add(1); add(2);
find(3) -> true
find(6) -> false
```

### Solution
```python
# Time: add is o(1), find is o(n)
# Space: `O(n)`
class TwoSum:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.nums = {}

    def add(self, number: int) -> None:
        """
        Add the number to an internal data structure..
        """
        try:
            self.nums[number] += 1
        except:
            self.nums[number] = 1

    def find(self, value: int) -> bool:
        """
        Find if there exists any pair of numbers which sum is equal to the value.
        """
        for num in self.nums:
            if value - num in self.nums:
                # Edge case
                # ["TwoSum","add","find"]
                # [[],[0],[0]]
                if value-num == num and self.nums[num]==1:
                    continue
                return True
        return False


# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)
```