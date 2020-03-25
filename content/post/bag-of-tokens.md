---
title: "Bag of Tokens"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy"]
categories: ["algorithm"]
date: 2020-03-09T00:04:04-07:00
lastmod: 2020-03-09T00:04:04-07:00
draft: false
archive: false
---
You have an initial power `P`, an initial score of `0` points, and a bag of tokens.  

Each token can be used at most once, has a value `token[i]`, and has potentially two ways to use it.  

1. If we have at least `token[i]` power, we may play the token face up, losing `token[i]` power, and gaining `1` point.
2. If we have at least `1` point, we may play the token face down, gaining `token[i]` power, and losing `1` point.
3. Return the largest number of points we can have after playing any number of tokens.

### Example 1

```
Input: tokens = [100], P = 50
Output: 0
```

### Example 2

```
Input: tokens = [100,200], P = 150
Output: 1
```

### Example 3

```
Input: tokens = [100,200,300,400], P = 200
Output: 2
```

##### Note
1. `tokens.length <= 1000`
2. `0 <= tokens[i] < 10000`
3. `0 <= P < 10000`

### Solution (greedy)

```python
class Solution:
    def bagOfTokensScore(self, tokens: List[int], P: int) -> int:
        tokens.sort()
        maxPoints, points = 0, 0
        left, right = 0, len(tokens)-1
        while left<=right:
            if P >= tokens[left]:
                points += 1
                P -= tokens[left]
                left += 1
                # we may have achieved maxPoints before
                maxPoints = max(maxPoints, points)
            elif points > 0:
                points -= 1
                P += tokens[right]
                right -= 1
            # cannot proceed futher
            else:
                break

        return maxPoints
```