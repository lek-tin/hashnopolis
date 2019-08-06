---
title: "House Robber"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-10-25T23:45:32-07:00
draft: false
archive: false
---
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it **will automatically contact the police if two adjacent houses were broken into on the same night.**

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

### Example 1
```
Input: [1,2,3,1]
Output: 4
```
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
### Example 2
```
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
```
### Solution
```python
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # f(0) = nums[0]
        # f(1) = max(num[0], num[1])
        # f(k) = max( f(k-2) + nums[k], f(k-1) )
        # 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        prev, res = 0, 0

        for num in nums:
            # This represents the maximum value accumulated until nums[i-2]
            temp = prev
            # This represents the maximum value accumulated until nums[i-1]
            prev = res
            # get the bigger one
            res = max(temp + num, prev)

        return res
```
```java
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        // h[0] = nums[0]
        // h[1] = max(nums[0], nums[1])
        // h[i] = max(h[i-2] + nums[i], h[i-1])
        int[] h = new int[nums.length];
        for (int i = 0; i< nums.length; i++) {
            if (i == 0) {
                h[0] = nums[0];
            } else if (i == 1) {
                h[1] = Math.max(nums[0], nums[1]);
            } else {
                h[i] = Math.max(h[i-2] + nums[i], h[i-1]);
            }
        }

        return h[h.length - 1];
    }
}
```