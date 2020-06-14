---
title: "Largest Divisible Subset"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-08-29T02:15:01-07:00
lastmod: 2020-06-13T02:15:01-07:00
draft: false
archive: false
---

Given a set of distinct positive integers, find the largest subset such that every pair `(Si, Sj)` of elements in this subset satisfies:  

```
Si % Sj = 0 or Sj % Si = 0.
```

If there are multiple solutions, return any subset is fine.  

### Example 1

```
Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
```

### Example 2

```
Input: [1,2,4,8]
Output: [1,2,4,8]
```

### Solution (dynamic programming - linear space)

Time: `O(n^2)`  
Space: `O(n)`  

Java
```java
class Solution {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        int N = nums.length;
        ArrayList<Integer> res = new ArrayList<Integer>();

        if (N == 0) return res;

        Arrays.sort(nums);
        int lastIndex = 0;
        int[] counts = new int[nums.length];
        int[] prevs = new int[nums.length];
        Arrays.fill(prevs, -1);

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] % nums[j] == 0 && counts[i] < counts[j] + 1) {
                    counts[i] = counts[j] + 1;
                    prevs[i] = j;
                }
            }

            if (counts[i] > counts[lastIndex]) {
                lastIndex = i;
            }
        }

        while (lastIndex != -1) {
            res.add(nums[lastIndex]);
            lastIndex = prevs[lastIndex];
        }

        return res;
    }
}
```

Python
```python
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        if not nums or len(nums) == 0:
            return []

        nums.sort()
        n = len(nums)
        counts = [1] * n
        prev = [-1] * n
        largestIndex = 0
        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0 and counts[i] < counts[j]+1:
                    counts[i] = counts[j] + 1
                    # Record the i's prev index j
                    prev[i] = j
            # update largestIndex with the index of largest count
            if counts[i] > counts[largestIndex]:
                largestIndex = i

        res = []
        # pick numbers at each prev index
        while largestIndex != -1:
            res.append(nums[largestIndex])
            largestIndex = prev[largestIndex]

        return res
```

#### Initialization:

![largest-divisible-subset-initialization](/img/post/largest-divisible-subset-initialization.jpg)

#### Final state

![largest-divisible-subset-final-states](/img/post/largest-divisible-subset-final-states.jpg)