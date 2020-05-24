---
title: "Single Element in a Sorted Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2020-05-12T00:06:01-07:00
lastmod: 2020-05-12T00:06:01-07:00
draft: false
archive: false
---

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

### Example 1:

```
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
```

### Example 2:

```
Input: [3,3,7,7,10,11,11]
Output: 10
```

#### Note:

- Your solution should run in `O(log n)` time and `O(1)` space.

### Solution

Java
```java
class Solution {
    public int singleNonDuplicate(int[] nums) {
        int left = 0, right = nums.length-1;

        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            // System.out.println("index: " + mid + "    value: " + nums[mid]);
            // 1 <= mid <= n-2
            if (nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) {
                return nums[mid];
            } else if (nums[mid] == nums[mid+1]) {
                if (mid % 2 == 0) {
                    left = mid + 2;
                } else {
                    right = mid - 1;
                }
            } else if (nums[mid] == nums[mid-1]) {
                if (mid % 2 == 0) {
                    right = mid - 2;
                } else {
                    left = mid + 1;
                }
            }
        }

        // System.out.println("left: " + left + "    right: " + right);
        return nums[left];
    }
}
```
