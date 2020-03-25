---
title: "Russian Doll Envelopes"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "binary-search"]
categories: ["algorithm"]
date: 2019-09-10T00:37:14-07:00
draft: false
archive: false
---
You have a number of envelopes with widths and heights given as a pair of integers `(w, h)`. One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

#### Note
Rotation is not allowed.

### Example:
```
Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

### Solution
```python
from bisect import bisect_left
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        n = len(envelopes)
        # Sort widths in ascending order, if widths are the same, sort heights in descending order
        # In this way, we know for certainty that each width on a higher order can contain that on a lower order
        ascendHeights = [pair[1] for pair in sorted(envelopes, key=lambda x: (x[0], -x[1]))]

        heightSet = [None for _ in range(n)]
        most = 0
        for height in ascendHeights:
            # Only consider [0, most)
            # Find out the new position to inset current height
            pos = bisect_left(heightSet, height, 0, most)
            # Update heightSet at the new position with height
            heightSet[pos] = height
            # If pos == most, it means the 
            if pos == most:
                most += 1

        return most
```