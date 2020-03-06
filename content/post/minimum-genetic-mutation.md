---
title: "Minimum Genetic Mutation"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2020-03-05T23:18:26-08:00
lastmod: 2020-03-05T23:18:26-08:00
draft: false
archive: false
---
A gene string can be represented by an 8-character long string, with choices from `"A"`, `"C"`, `"G"`, `"T"`.  

Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

For example, `"AACCGGTT"` -> `"AACCGGTA"` is 1 mutation.  

Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.  

Now, given `3` things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return `-1`.  

### Note

1. Starting point is assumed to be valid, so it might not be included in the bank.
2. If multiple mutations are needed, all mutations during in the sequence must be valid.
3. You may assume start and end string is not the same.

### Example 1

```
start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]

return: 1
```

### Example 2

```
start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

return: 2
```

### Example 3

```
start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

return: 3
```


### Solution

add each tuple(mutated string, level) to q  
```python
from collections import deque

class Solution:
    def minMutation(self, start: str, end: str, bank: List[str]) -> int:
        l1, l2 = len(start), len(end)

        if not start or not end or l1==0 or l2==0 or l1!=l2:
            return -1

        lookup = {}
        for s in bank:
            # false meaning this string hasn't been visited before
            lookup[s] = False

        q = deque([ (start, 0) ])

        while q:
            curr, level = q.popleft()

            if curr == end:
                return level

            for i in range(l1):
                for c in ["A", "C", "G", "T"]:
                    if c == curr[i]:
                        continue

                    mutatedStr = curr[:i] + c + curr[i+1:]
                    if mutatedStr in lookup and not lookup[mutatedStr]:
                        q.append( (mutatedStr, level+1) )
                        lookup[mutatedStr] = True

        return -1
```