---
title: "Maximum Product Subarray"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-04T23:44:12-07:00
draft: false
archive: false
---
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

### Example 1

```
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```

### Example 2

```
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

### Solution

```python
# time: `O(n)`
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        res = currMax = currMin = nums[0]

        for i in range(1, n):
            newCurrMax = max( max(currMax * nums[i], currMin * nums[i]), nums[i] )
            newCurrMin = min( min(currMax * nums[i], currMin * nums[i]), nums[i] )
            currMax, currMin = newCurrMax, newCurrMin
            res = max(currMax, res)

        return res
```

### Solution (need to return the subarray)

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        res = prevMin = prevMax = nums[0]
        maxPos = 0
        minLens = [1 for _ in range(n)]
        maxLens = [1 for _ in range(n)]
        print(prevMin, prevMax)
        for i in range(1, n):
            num = nums[i]
            currMin, currMax = prevMin, prevMax
            if num > 0:
                if prevMax * num > num:
                    currMax *= num
                    maxLens[i] = maxLens[i-1] + 1
                else:
                    currMax = num

                if prevMin * num < num:
                    currMin *= num
                    minLens[i] = minLens[i-1] + 1
                else:
                    currMin = num
            else:
                if prevMin * num > num:
                    currMax = prevMin * num
                    maxLens[i] = minLens[i-1] + 1
                else:
                    currMax = num

                if prevMax * num < num:
                    currMin = prevMax * num
                    minLens[i] = maxLens[i-1] + 1
                else:
                    currMin = num

            prevMin, prevMax = currMin, currMax
            if prevMax > res:
                maxPos = i
                res = prevMax
            print(prevMin, prevMax)

        print(minLens)
        print(maxLens)
        maxLen = maxLens[maxPos]
        maxSubarr = nums[maxPos+1-maxLen:maxPos+1]
        print(maxSubarr)

        return res
```