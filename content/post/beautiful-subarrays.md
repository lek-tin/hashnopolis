---
title: "Beautiful Subarrays"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "subarray"]
categories: ["algorithm"]
date: 2019-10-19T15:06:26-07:00
lastmod: 2019-10-19T15:06:26-07:00
draft: false
archive: false
---
Find the **distinct** `subarrays` with `m` **odd** numbers

### Example 1:
```
Input : arr = {2, 5, 6, 9},  m = 2
Output : 2
Explanation: subarrays are [2, 5, 6, 9]
and [5, 6, 9]
```

### Example 2:
```
Input : arr = {2, 2, 5, 6, 9, 2, 11},  m = 2
Output : 8
Explanation: subarrays are [2, 2, 5, 6, 9],
[2, 5, 6, 9], [5, 6, 9], [2, 2, 5, 6, 9, 2],
[2, 5, 6, 9, 2], [5, 6, 9, 2], [6, 9, 2, 11]
and [9, 2, 11]
```

### Solution
python
```python
class Solution:
  def countSubarrays(a, n, m):
    count = 0
    prefix = [0 for _ in range(n)]
    odd = 0

    # traverse in the array
    for i in range(n):
        prefix[odd] += 1

        # if array element is odd
        if (a[i] & 1):
            odd += 1

        # when number of odd elements>=M
        if (odd >= m):
            count += prefix[odd - m]

    return count
```