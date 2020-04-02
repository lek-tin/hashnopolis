---
title: "Single Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bit-manipulation"]
categories: ["algorithm"]
date: 2018-09-14T11:53:00+08:00
lastmod: 2020-04-01T01:53:00+08:00
draft: false
archive: false
---
## Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### Example 1

```
Input: [2,2,1]
Output: 1
```

### Example 2

```
Input: [4,1,2,1,2]
Output: 4
```

### Solution

```java
// Java
class Solution {
    public int singleNumber(int[] nums) {
        int result=0;
        for(int num : nums) {
            result=result^num;
        }
        return result;
    }
}
```

### Solution

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        singleNum = nums[0]

        for i in range(1, len(nums)):
            singleNum ^= nums[i]

        return singleNum
```