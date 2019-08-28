---
title: "Find a Local Minima in an Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2019-01-14T11:32:08-08:00
draft: false
archive: false
---
Given an array `arr[0 .. n-1]` of distinct integers, the task is to find a local minima in it. We say that an element `arr[x]` is a local minimum if it is less than or equal to both its neighbors.

For corner elements, we need to consider only one neighbor for comparison.
There can be more than one local minima in an array, we need to find any one of them.
### Examples
```
Input: arr[] = {9, 6, 3, 14, 5, 7, 4};
Output: Index of local minima is 2
The output prints index of 3 because it is smaller than both of its neighbors.
Note that indexes of elements 5 and 4 are also valid outputs.

Input: arr[] = {23, 8, 15, 2, 3};
Output: Index of local minima is 1

Input: arr[] = {1, 2, 3};
Output: Index of local minima is 0
```

### Solution
```python
# A binary search based function that
# returns index of a local minima.
# Time Complexity : O(Log n)
def localMinUtil(arr, low, high, n):

    # Find index of middle element
    mid = low + (high - low) // 2

    # Compare middle element with its
    # neighbours (if neighbours exist)
    if(mid == 0 or arr[mid - 1] > arr[mid] and
        mid == n - 1 or arr[mid] < arr[mid + 1]):
        return mid

    # If middle element is not minima and its left
    # neighbour is smaller than it, then left half
    # must have a local minima.
    elif(mid > 0 and arr[mid - 1] < arr[mid]):
        return localMinUtil(arr, low, mid - 1, n)

    # If middle element is not minima and its right
    # neighbour is smaller than it, then right half
    # must have a local minima.
    return localMinUtil(arr, mid + 1, high, n)

# A wrapper over recursive function localMinUtil()
def localMin(arr, n):
    return localMinUtil(arr, 0, n - 1, n)

# Driver code
arr = [4, 3, 1, 14, 16, 40]
n = len(arr)
print("Index of a local minima is ", localMin(arr, n))
```