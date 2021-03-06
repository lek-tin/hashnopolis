---
title: "Search Insert Position"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2020-06-10T23:31:24-07:00
lastmod: 2020-06-10T23:31:24-07:00
draft: false
archive: false
---

Given a sorted array and a target value, return the **index** if the target is found. If not, return the index where it would be if it were inserted in order.  

You may assume no duplicates in the array.  

### Example 1:

```
Input: [1,3,5,6], 5
Output: 2
```

### Example 2:

```
Input: [1,3,5,6], 2
Output: 1
```

### Example 3:

```
Input: [1,3,5,6], 7
Output: 4
```

### Example 4:

```
Input: [1,3,5,6], 0
Output: 0
```

### Solution

Java
```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length - 1;

        while (left + 1 < right) {
            int mid = left + (right-left) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (nums[right] < target) {
            return right+1;
        }
        if (nums[left] < target) {
            return left+1;
        }
        return left;
    }
}
```
