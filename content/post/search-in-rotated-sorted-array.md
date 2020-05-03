---
title: "Search in Rotated Sorted Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2018-10-26T23:08:49-07:00
lastmod: 2019-09-22T23:08:49-07:00
draft: false
archive: false
---
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of `O(log n)`.

### Example 1

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

### Example 2

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### Solution (binary search)

Java
```java
class Solution {
    public int search(int[] nums, int target) {
        if (nums.length == 0) {
            return -1;
        }

        int left, right;
        left = 0;
        right = nums.length - 1;

        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                return mid;
            }

            if (nums[left] < nums[mid]) {
                if (nums[left] <= target && target <= nums[mid]) {
                    right = mid;
                } else {
                    left = mid;
                }
            } else {
                if (nums[mid] <= target && target <= nums[right]) {
                    left = mid;
                } else {
                    right = mid;
                }
            }
        }

        if (nums[left] == target) {
            return left;
        }
        if (nums[right] == target) {
            return right;
        }

        return -1;
    }
}
```

Python
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if nums == None or len(nums) == 0:
            return -1

        start, end = 0, len(nums) - 1
        while (start + 1) < end:
            mid = start + (end - start) // 2
            if nums[mid] == target:
                return mid
            # < because there are no duplicate numbers.
            if nums[start] < nums[mid]:
                # case 1
                if nums[start] <= target and target <= nums[mid]:
                    end = mid
                # case 2
                else:
                    start = mid
            else:
                # case 3
                if nums[mid] <= target and target <= nums[end]:
                    start = mid
                # case 4
                else:
                    end = mid

        if nums[start] == target:
            return start
        if nums[end] == target:
            return end

        return -1
```
4 scenarios when searching
![Search in Rotated Sorted Array](/img/post/search-in-rotated-sorted-array.jpg)