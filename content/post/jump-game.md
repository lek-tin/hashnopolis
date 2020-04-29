---
title: "Jump Game"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-04-25T08:23:15-07:00
lastmod: 2020-04-25T08:23:15-07:00
draft: false
archive: false
---

Given an array of **non-negative** integers, you are initially positioned at the first index of the array.  

Each element in the array represents your maximum jump length at that position.  

Determine if you are able to reach the last index.  

### Example 1

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### Example 2

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

### Solution (dynamic programming)

```java
class Solution {
    public boolean canJump(int[] nums) {
        if (nums.length <= 1) {
            return true;
        }

        int N = nums.length;
        int[] dp = new int[N];

        dp[0] = nums[0];

        for (int i = 1; i < N; i++) {
            // impossible, abort
            if (dp[i-1] < i) {
                return false;
            }
            // possible, abort
            if (dp[i-1] >= N-1) {
                return true;
            }
            // principle of optimality, continue
            dp[i] = Math.max(dp[i-1], nums[i]+i);
        }

        return false;
    }
}
```
