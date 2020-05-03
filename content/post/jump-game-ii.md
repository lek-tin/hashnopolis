---
title: "Jump Game II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-04-28T23:14:20-07:00
lastmod: 2020-04-28T23:14:20-07:00
draft: false
archive: false
---

Given an array of **non-negative** integers, you are initially positioned at the first index of the array.  

Each element in the array represents your maximum jump length at that position.  

Your goal is to reach the last index in the minimum number of jumps.  

Example:

```
Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

#### Note:

- You can assume that you can **always** reach the last index.

### Solution

Java
```java
class Solution {
    public int jump(int[] nums) {
            int start, end, count;
            start = 0;
            end = 1;
            count = 0;

            while (end < nums.length) {
                int maxPos = 0;
                for (int i = start; i < end; i++) {
                    maxPos = Math.max(maxPos, nums[i]+i);
                }
                start = end;
                end = maxPos + 1;
                count++;
            }

            return count;
    }
}
```