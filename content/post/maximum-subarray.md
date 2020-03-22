---
title: "Maximum Subarray"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "kadanes-algorithm", "prefix-sum"]
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
        prefixSum, minSum, maxSum = 0, 0, -math.inf

        for i, num in enumerate(nums):
            # prefixSum[n+1] = prefixSum[n] + nums[n+1]
            prefixSum += num
            # maxSum = prefixSum[n+1] - min{prefixSum[0-->n]}
            maxSum = max(prefixSum-minSum, maxSum)
            # Update minSum now we have min{prefixSum[0-->n+1]}
            # we only care when minSum is negative because so want to drop any negative preSum
            minSum = min(prefixSum, minSum)

        return maxSum
```
![Prefix Sum Maximum Subarray](/img/post/prefix-sum-maximum-subarray.jpeg)

Need to return the max subarray
```python
import math

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        preSums, minSum, maxSum = 0, 0, -math.inf

        start, left, right = 0, 0, 0

        for i, num in enumerate(nums):
            preSums += num
            if maxSum < preSums:
                maxSum = preSums
                left = start
                right = i
            if preSums < 0:
                preSums = 0
                start = i+1

        return nums[left:right+1]
```

### Solution (Kadane's Algorithm)

![kadane's algorithm example](/img/post/kadanes-algorithm-example.png)
```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        localMaxSum = globalMaxSum = nums[0]

        for i in range(1, n):
            # restart if previous local max sum is negative
            localMaxSum = max(localMaxSum+nums[i], nums[i])
            globalMaxSum = max(globalMaxSum, localMaxSum)

        return globalMaxSum
```
