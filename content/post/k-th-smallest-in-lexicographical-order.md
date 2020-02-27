---
title: "K Th Smallest in Lexicographical Order"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "trie"]
categories: ["algorithm"]
date: 2020-02-13T13:15:02-08:00
lastmod: 2020-02-13T13:15:02-08:00
draft: false
archive: false
---
Given integers `n` and `k`, find the lexicographically k-th smallest integer in the range from `1` to `n`.  

**Note**: `1 ≤ k ≤ n ≤ 10^9`.

### Example
```
Input:
n: 13   k: 2

Output:
10

Explanation:
The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
```

### Solution
```python
class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        if n < k or k < 1:
            return 0

        if n < 10:
            return k

        curr = 1
        k -= 1
        while k > 0:
            leap, prev, next = 0, curr, curr+1
            while prev <= n:
                # update leap
                leap += min(n+1, next) - prev
                prev *= 10
                next *= 10

            if leap <= k:
                curr += 1
                print(leap, "<= k; curr =", curr)
                k -= leap
            else:
                curr *= 10
                print(leap, "> k; curr =", curr)
                k -= 1

        return curr
# Input: n=1300, k=50
# order: [1,10,100,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,101,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,102,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,103,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,104,1040,1041,1042]
# Output:
# 412 > k; curr = 10
# 111 > k; curr = 100
# 11 <= k; curr = 101
# 11 <= k; curr = 102
# 11 <= k; curr = 103
# 11 <= k; curr = 104
# 11 > k; curr = 1040
# 1 <= k; curr = 1041
# 1 <= k; curr = 1042
```