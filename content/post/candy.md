---
title: "Candy"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy"]
categories: ["algorithm"]
date: 2020-03-09T00:42:43-07:00
lastmod: 2020-03-09T00:42:43-07:00
draft: false
archive: false
---
There are `N` children standing in a line. Each child is assigned a rating value.  

You are giving candies to these children subjected to the following requirements:  

1. Each child must have at least one candy.
2. Children with a higher rating get more candies than their neighbors.
3. What is the minimum candies you must give?

### Example 1

```
Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
```

### Example 2

```
Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
```

### Solution (greedy bi-directional scans)

Time: `O(N)`  
Space: `O(N)`  
```python
class Solution:
    def candy(self, ratings: List[int]) -> int:
        if not ratings or len(ratings)==0:
            return 0

        total = 0
        leftToRight = [1] * len(ratings)
        rightToLeft = [1] * len(ratings)

        for i in range(1, len(ratings)):
            if ratings[i] > ratings[i-1]:
                leftToRight[i] = leftToRight[i-1]+1
        for i in range(len(ratings)-2, -1, -1):
            if ratings[i] > ratings[i+1]:
                rightToLeft[i] = rightToLeft[i+1]+1
        for i in range(len(ratings)):
            total += max(leftToRight[i], rightToLeft[i])

        return total
```
