---
title: "Intersection of Two Arrays II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashset"]
categories: ["algorithm"]
date: 2019-02-18T23:55:24-08:00
lastmod: 2019-02-18T23:55:24-08:00
draft: false
archive: false
---
Given two arrays, write a function to compute their intersection.

### Example 1:
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```
### Example 2:
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```
### Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
### Follow up:
1. What if the given array is already sorted? How would you optimize your algorithm?
2. What if nums1's size is small compared to nums2's size? Which algorithm is better?
3. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
### Solution:
Java
```java
// Time: O(m+n)
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {

        if (nums1.length < nums2.length) {
            return intersect(nums2, nums1);
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

            int overlapped = Math.min(numOfElements1, numOfElements2);

            for (int i = 0; i < overlapped; i++) {
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
Python
```python
from collections import Counter

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        counter = Counter(nums1)

        res = []
        for num in nums2:
            if counter[num] > 0:
                res.append(num)
                counter[num] -= 1

        return res
```