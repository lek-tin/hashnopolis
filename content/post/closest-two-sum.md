---
title: "Closest Two Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2019-03-16T18:25:42-07:00
draft: false
archive: false
---
Given an array `nums` of `n` integers, find two integers in `nums` such that the sum is closest to a given number, target.  
Return the difference between the sum of the two integers and the target.

### Example
```
Given array nums = [-1, 2, 1, -4], and target = 4.

The minimum difference is 1. (4 - (2 + 1) = 1).
```
### Challenge: Do it in O(nlogn) time complexity.

### Solution
```java
public class Solution {
    /*
     * @param nums: an integer array
     * @param target: An integer
     * @return: the difference between the sum and the target
     */
    public int twoSumClosest(int[] nums, int target) {
        if (nums == null && nums.length < 2) {
            return -1;
        }

        Arrays.sort(nums);

        int left = 0, right = nums.length - 1;
        int diff = Integer.MAX_VALUE;
        while (left < right) {
            if (nums[left] + nums[right] < target) {
                diff = Math.min(diff, target - nums[left] - nums[right]);
                left++;
            } else {
                diff = Math.min(diff, nums[left] + nums[right] - target);
                right--;
            }
        }

        return diff;
    }
}
```