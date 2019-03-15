---
title: "Find K Closest Elements"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2019-03-14T16:00:58-08:00
draft: false
archive: false
---
Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

### Example 1:
```
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
```
### Example 2:
```
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
```
### Note:
- The value k is positive and will always be smaller than the length of the sorted array.
- Length of the given array is positive and will not exceed 104
- Absolute value of elements in the array and x will not exceed 104
### Solution:
Assume we are taking `arr[i] ~ arr[i + k -1]`. We can binary search `i`. We compare the distance between `x - arr[mid] and arr[mid - k] - x`. If `x - arr[mid] > arr[mid + k] - x`, it means `arr[mid + 1] ~ A[mid + k]` is better than `arr[mid] ~ arr[mid + k - 1]`, and we have `mid` smaller than the right `i`.
So assign left = mid + 1.
```java
// Time: O(log(N-K) + K)
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        Integer low = 0, high = arr.length - k;
        List<Integer> res = new ArrayList<>();

        while (low < high) {
            int mid = (low + high) / 2;
            if (x - arr[mid] > arr[mid + k] - x) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        for (int i = low; i < low + k; i++) res.add(arr[i]);

        return res;
    }
}
```
```python
class Solution:
    def findClosestElements(self, arr, k, x):
        """
        :type arr: List[int]
        :type k: int
        :type x: int
        :rtype: List[int]
        """
        low = 0
        high = len(arr) - k

        while low < high:
            mid = (low + high) // 2
            if x > (arr[mid] + arr[mid + k]) / 2:
                low = mid + 1
            else:
                high = mid

        return arr[low:low + k]
```

