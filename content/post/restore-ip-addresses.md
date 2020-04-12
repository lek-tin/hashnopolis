---
title: "Restore Ip Addresses"
description: "Some description ..."
authors: ["lek-tin", "dfs", "backtracking"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-10-01T23:44:18-07:00
draft: false
archive: false
---
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

### Example

```
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
```

### Solution

```python
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        results = []
        self.backtrack(results, s, 0, "", 0)
        return results

    def backtrack(self, results, s, start, partial, segment_count):
        # pruning for performance improvement
        if (4 - segment_count) * 3 < len(s) - start or (4 - segment_count) > len(s) - start:
            return
        # base case goal
        if start == len(s) and segment_count == 4:
            results.append(partial[:-1])
            return

        # taking 1, 2 or 3 digits from start
        for i in range(start, start + 3):
            # constraint
            if i < len(s) and self.isValid(s[start:i + 1]):
                # select the current choice
                partial += s[start:i + 1] + '.'
                self.backtrack(results, s, i + 1, partial, segment_count + 1)
                # un-select the current choice. 2 because '.' takes 1 index too
                partial = partial[:-(i - start + 2)]

    def isValid(self, s):
        # leading 0 - including standalone 0
        if not len(s) or (s[0] == "0" and len(s)>1):
            return False
        return int(s) < 256
```
