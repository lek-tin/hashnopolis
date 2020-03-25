---
title: "House Robber II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "divide-and-conquer", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-02-21T19:39:05-08:00
draft: false
archive: false
---
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night.**

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

### Example 1
```
Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```
### Example 2
```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
```
### Solution:
```java
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        if (nums.length == 1) {
            return nums[0];
        }

        int[] arr1 = Arrays.copyOfRange(nums, 0, nums.length-1);
        int[] arr2 = Arrays.copyOfRange(nums, 1, nums.length);
        return Math.max(helper(arr1), helper(arr2));
    }

    public int helper(int[] nums) {
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