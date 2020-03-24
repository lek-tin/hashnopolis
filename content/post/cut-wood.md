---
title: "Cut Wood"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2020-03-20T02:58:08-07:00
lastmod: 2020-03-20T02:58:08-07:00
draft: false
archive: false
---
Given an int array wood representing the length of `n` pieces of wood and an `int k`. It is required to cut these pieces of wood such that more or equal to `k` pieces of the same length len are cut. What is the longest len you can get?  

### Example 1

```
Input: wood = [5, 9, 7], k = 3
Output: 5
Explanation: 
5 -> 5
9 -> 5 + 4
7 -> 5 + 2
```

### Example 2

```
Input: wood = [5, 9, 7], k = 4
Output: 4
Explanation: 
5 -> 4 + 1
9 -> 4 * 2 + 1
7 -> 4 + 3
```

### Example 3

```
Input: wood = [1, 2, 3], k = 7
Output: 0
Explanation: We cannot make it.
```

### Example 4

```
Input: wood = [232, 124, 456], k = 7
Output: 114
Explanation: We can cut it into 7 pieces if any piece is 114 long, however we can't cut it into 7 pieces if any piece is 115 long.
```

**Related problems:** https://leetcode.com/problems/koko-eating-bananas/

### Solution

```python
class Solution:
	def longestWood(self, woods: List[int], K: int) -> int:
		sort(woods)

		lo, hi = 1, woods[-1]

		while lo <= hi:
			mid = lo + (hi - lo)//2
			count = self.getCount(woods, mid)
			if count >= K:
				lo = mid + 1
			else:
				hi = mid - 1

		return hi

	def getCount(self, arr, l):
		count = 0

		for num in arr:
			count += num // l

		return count
```