---
title: "Longest Increasing Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "recursion", "memoization", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-12-19T10:47:57-08:00
lastmod: 2020-04-26T02:47:57-08:00
draft: false
archive: false
---
Given an unsorted array of integers, find the length of longest increasing subsequence.

### Example:
```
Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
```
#### Note
- There may be more than one LIS combination, it is only necessary for you to return the length.
- Your algorithm should run in `O(n2)` complexity.
Follow up: Could you improve it to `O(n log n)` time complexity?

### Solution (Bottom-up)

Python
```python
# Time: O(n^2)
# Iterative
class Solution:
    def lengthOfLIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        size = len(nums)
        if size == 0:
            return 0

        counts = [1] * size

        for i in range(1, len(nums)):
            # memoization
            for j in range(i):
                if nums[j] < nums[i]:
                    counts[i] = max(counts[i], counts[j] + 1)

        maxCount = max(counts)
        return maxCount
```

Java 1
```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int N = nums.length;
        int[] counts = new int[N];
        int longest = 1;
        Arrays.fill(counts, 1);

        for (int i = 1; i < N; i++) {
            for (int j = 0; j < i; j++) {
                // Sub problems for nums[0:i]
                if (nums[j] < nums[i]) {
                    counts[i] = Math.max(counts[i], counts[j] + 1);
                }
                if (count > longest) {
                    longest = count;
                }
            }
        }

        return longest;
    }
}
```

Java 2
```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int N = nums.length;
        int longest = 1;
        int[] counts = new int[N];
        counts[0] = 1;

        for (int i = 1; i < N; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i] && counts[i] < counts[j]) {
                    counts[i] = counts[j];
                }
            }
            counts[i]++;
            if (counts[i] > longest) {
                longest = counts[i];
            }
        }

        return longest;
    }
}
```
