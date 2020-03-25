---
title: "Intersection of Two Arrays"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search", "hashset"]
categories: ["algorithm"]
date: 2018-11-28T23:56:14-08:00
lastmod: 2018-11-28T23:56:14-08:00
draft: false
archive: false
---
Given two arrays, write a function to compute their intersection.

### Example 1
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```
### Example 2
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```
#### Note

- Each element in the result must be unique.
- The result can be in any order.

### Solution

Use binary search when one of the lists is very long and the other is short
```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if len(nums1) < len(nums2):
            return self.intersection(nums2, nums1)

        nums1.sort()
        res = []

        for target in set(nums2):
            left, right = 0, len(nums1)-1
            while left <= right:
                mid = left + (right-left)//2
                if nums1[mid] == target:
                    res.append(target)
                    break
                elif nums1[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1

        return res
```

### Solution (hashset)

#### Python

```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        lookup = {}
        res = set()
        for num in nums1:
            lookup[num] = 1

        for num in nums2:
            if num in lookup:
                res.add(num)

        return res
```

#### Java

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {

        if (nums1.length < nums2.length) {
            return intersection(nums2, nums1);
        }

        List<Integer> intersection = new ArrayList<>();
        HashMap<Integer, Integer> map1 = new HashMap<>();
        HashMap<Integer, Integer> map2 = new HashMap<>();

        for (int num: nums1) {
            if (map1.get(num) == null) {
                map1.put(num, 1);
            } else {
                map1.put(num, map1.get(num)+1);
            }
        }

        for (int num: nums2) {
            if (map2.get(num) == null) {
                map2.put(num, 1);
            } else {
                map2.put(num, map2.get(num)+1);
            }
        }

        for (Map.Entry<Integer, Integer> entry: map1.entrySet()) {
            int numOfElements1 = entry.getValue();
            int numOfElements2 = map2.get(entry.getKey()) == null ? 0 : map2.get(entry.getKey());

            if (Math.min(numOfElements1, numOfElements2) > 0) {
                intersection.add(entry.getKey());
            }

        }

        int[] res = new int[intersection.size()];
        for (int i = 0; i < intersection.size(); i++) {
            res[i] = intersection.get(i);
        }

        return res;
    }
}
```
