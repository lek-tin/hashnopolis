---
title: "Strobogrammatic Number II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2019-10-02T23:49:15-07:00
lastmod: 2019-10-02T23:49:15-07:00
draft: false
archive: false
---
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).   

Find all strobogrammatic numbers that are of `length = n`.

### Example:
```
Input:  n = 2
Output: ["11","69","88","96"]
```

### Solution
```python
# Time:  O(n^2 * 5^(n/2))
# Space: O(n)
class Solution:
    def findStrobogrammatic(self, n: int) -> List[str]:
        stroboPairs = { "0": "0", "1": "1", "6": "9", "8": "8", "9": "6" }
        return self.build(stroboPairs, n, n)

    def build(self, stroboPairs, curr, n):
        if curr == 0:
            return [""]
        if curr == 1:
            return list("018")
        prev = self.build(stroboPairs, curr-2, n)
        results = []
        for num in prev:
            for key, val in stroboPairs.items():
                # prevent leading zero
                # curr != n => zero allowed
                # else no leading zeros
                if curr != n or key != "0":
                    results.append(key + num + val)
        return results
```