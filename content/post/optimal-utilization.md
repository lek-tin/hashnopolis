---
title: "Optimal Utilization"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers", "binary-search"]
categories: ["algorithm"]
date: 2020-03-02T05:15:27-08:00
lastmod: 2020-03-02T05:15:27-08:00
draft: false
archive: false
---
Given 2 lists `a` and `b`. Each element is a `pair` of integers where the first integer represents the unique `id` and the second integer represents a value. Your task is to find an element from a and an element form b such that the sum of their values is less or equal to `target` and as close to `target` as possible. Return a list of ids of selected elements. If no `pair` is possible, return an empty list.  

### Example 1

```
Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7

Output: [[2, 1]]

Explanation:
There are only three combinations [1, 1], [2, 1], and [3, 1], which have a total sum of 4, 6 and 8, respectively.
Since 6 is the largest sum that does not exceed 7, [2, 1] is the optimal pair.
```

### Example 2

```
Input:
a = [[1, 3], [2, 5], [3, 7], [4, 10]]
b = [[1, 2], [2, 3], [3, 4], [4, 5]]
target = 10

Output: [[2, 4], [3, 2]]

Explanation:
There are two pairs possible. Element with id = 2 from the list `a` has a value 5, and element with id = 4 from the list `b` also has a value 5.
Combined, they add up to 10. Similarily, element with id = 3 from `a` has a value 7, and element with id = 2 from `b` has a value 3.
These also add up to 10. Therefore, the optimal pairs are [2, 4] and [3, 2].
```

### Example 3

```
Input:
a = [[1, 8], [2, 7], [3, 14]]
b = [[1, 5], [2, 10], [3, 14]]
target = 20

Output: [[3, 1]]
```

### Example 4

```
Input:
a = [[1, 8], [2, 15], [3, 9]]
b = [[1, 8], [2, 11], [3, 12]]
target = 20

Output: [[1, 3], [3, 2]]
```

### Solution (two pointers version 1)

```python
# Return type should be a list of tuples
import math

def optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList):
    # WRITE YOUR CODE HERE
    forwardRouteList.sort(key=lambda r: r[1])
    returnRouteList.sort(key=lambda r: r[1])

    left, right = 0, len(returnRouteList)-1
    sol, maxSum = [], -math.inf
    while left < len(forwardRouteList) and right >= 0:
        id_1, distance_1 = forwardRouteList[left]
        id_2, distance_2 = returnRouteList[right]
        currSum = distance_1 + distance_2

        if currSum > maxTravelDist:
            right -= 1
        else:
            if maxSum <= currSum:
                if maxSum < :
                    maxSum = currSum
                    sol.clear()
                sol.append( (id_1, id_2) )
                rIndex = right-1
                while rIndex >= 0 and returnRouteList[rIndex+1][1] == returnRouteList[rIndex][1]:
                    rIndex_id = returnRouteList[rIndex][0]
                    sol.append( (id_1, rIndex_id) )
                    rIndex -= 1

            left += 1

    return sol
```

### Solution (two pointers version 2)

```python
import math

def optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList):
    # WRITE YOUR CODE HERE
    forwardRouteList.sort(key=lambda r: r[1])
    returnRouteList.sort(key=lambda r: r[1])

    left, right = 0, len(returnRouteList)-1
    sol, diff = [], math.inf

    while left < len(forwardRouteList) and right >= 0:
        id_1, distance_1 = forwardRouteList[left]
        id_2, distance_2 = returnRouteList[right]
        newDiff = maxTravelDist - distance_1 - distance_2
        if newDiff == diff:
            sol.append( (id_1, id_2) )
        elif (distance_1 + distance_2 <= maxTravelDist) and (newDiff) < diff:
            sol.clear()
            sol.append( (id_1, id_2) )
            diff = newDiff
        if maxTravelDist > distance_1 + distance_2:
            left += 1
        else:
            right -= 1

    return sol
```

### Solution (binary search)

```python
import math

def binarySearch(arr, target):
    left, right = 0, len(arr)-1
    while left < right:
        mid = left + (right-left)//2
        curr = arr[mid][1]
        if curr == target:
            return mid
        elif curr < target:
            left = mid+1
        else:
            right = mid-1
    return right

def optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList):
    # WRITE YOUR CODE HERE
    forwardRouteList.sort(key=lambda r: r[1])
    returnRouteList.sort(key=lambda r: r[1])

    left, right = 0, len(returnRouteList)-1
    sol, diff = [], math.inf

    for i in range(len(returnRouteList)):
        id_2, distance_2 = returnRouteList[i]
        index_1 = binarySearch(forwardRouteList, maxTravelDist-distance_2)
        id_1, distance_1 = forwardRouteList[index_1]
        newDiff = maxTravelDist-distance_1-distance_2
        if newDiff == diff:
            sol.append( (id_1, id_2) )
        elif 0 <= newDiff < diff:
            sol.clear()
            diff = newDiff
            sol.append( (id_1, id_2) )

    return sol
```