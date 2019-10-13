---
title: "Maximum Subarray"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "kadanes-algorithm"]
categories: ["algorithm"]
date: 2019-02-20T22:30:14-08:00
lastmod: 2019-10-11T17:30:14-08:00
draft: false
archive: false
---
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

### Example:
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
### Follow up:
If you have figured out the `O(n)` solution, try coding another solution using the divide and conquer approach, which is more subtle.

### Solution:
Dynamic Programming
```java
class Solution {
    public int maxSubArray(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int[] mem = new int[nums.length];
        mem[0] = nums[0];
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            mem[i] = mem[i-1] > 0 ? mem[i-1] + nums[i] : nums[i];
            max = Math.max(mem[i], max);
        }

        return max;
    }
}
```
prefix sum
```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        total, minSum, maxSum = 0, 0, nums[0]-1

        for i, num in enumerate(nums):
            # prefixSum[n+1] = prefixSum[n] + nums[n+1]
            total += num
            # maxSum = prefixSum[n+1] - min{prefixSum[0-->n]}
            maxSum = max(total-minSum, maxSum)
            # Update minSum now we have min{prefixSum[0-->n+1]}
            minSum = min(total, minSum)

        return maxSum
```
Kadane's Algorithm (Python)
```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        localMaxSum = globalMaxSum = nums[0]

        for i in range(1, n):
            localMaxSum = max(localMaxSum+nums[i], nums[i])
            if localMaxSum > globalMaxSum:
                globalMaxSum = localMaxSum

        return globalMaxSum
```