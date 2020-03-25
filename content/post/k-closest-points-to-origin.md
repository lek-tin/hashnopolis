---
title: "K Closest Points to Origin"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "quick-select"]
categories: ["algorithm"]
date: 2019-03-03T23:24:48-08:00
draft: false
archive: false
---
We have a list of **points** on the plane. Find the `K` closest points to the origin `(0, 0)`.

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)


### Example 1
```
Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
```

### Example 2
```
Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
```

#### Note
1. `1 <= K <= points.length <= 10000`
2. `-10000 < points[i][0] < 10000`
3. `-10000 < points[i][1] < 10000`

### Solution
The advantage: high efficiency
The disadvantage: neither an online solution nor a stable one. And the K elements closest are not sorted in ascending order.
Average time complexity: `O(n)` if we don’t need the sorted output, otherwise O(n+kLogk)

```java
class Solution {
    public int[][] kClosest(int[][] points, int K) {
        int len = points.length, l = 0, r = len - 1;

        while (l < r) {
            int mid = helper(points, l, r);
            if (mid == K) break;
            if (mid > K) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return Arrays.copyOfRange(points, 0, K);
    }

    private int helper(int[][] points, int l, int r) {
        int[] pivot = points[l];
        while (l < r) {
            while (l < r && compare(points[r], pivot) >= 0) r--;
            points[l] = points[r];

            while (l < r && compare(points[l], pivot) <= 0) l++;
            points[r] = points[l];
        }
        points[l] = pivot;

        return l;
    }

    private int compare(int[] p1, int[] p2) {
        return p1[0]*p1[0] + p1[1]*p1[1] - p2[0]*p2[0] - p2[1]*p2[1];
    }
}
```
Python version
```python
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        l, r = 0, len(points)-1
        while l < r:
            mid = self.select(points, l, r)
            if k == mid:
                break
            if mid > k:
                r = mid - 1
            else:
                l = mid + 1

        return points[0:k]

    def select(self, points, l, r):
        #   1   2 10 4 5 "6" 7 9 1 2 8
        # pivot
        pivot = points[l]
        while l < r:
            #   1 2 10 4 5 "6" 7 9 1 2 8
            #   l                    r
            while l < r and self.compare(points[r], pivot) >= 0:
                r -= 1
            #   2 2 10 4 5 "6" 7 9 1 2 8
            #   l                    r
            points[l] = points[r]
            while l < r and self.compare(points[l], pivot) <= 0:
                l += 1
            #   2 2 10 4 5 "6" 7 9 1 10 8
            #        l               r
            points[r] = points[l]
        #   2 2  1  4 5 "6" 7 9 1 10 8
        #        l                 r
        # inset pivot back into the list
        points[l] = pivot

        return l

    def compare(self, p1, p2):
        return p1[0]*p1[0] + p1[1]*p1[1] - p2[0]*p2[0] - p2[1]*p2[1]
```
Python:
```python
# time: O(nlogk)
# space: O(k)

import heapq
class Solution:
    def dist(self, point):
        return point[0]*point[0] + point[1]*point[1]

    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        q = []

        for i in range(len(points)):
            heapq.heappush(q, (-self.dist(points[i]), points[i]) )
            if i >= k:
                heapq.heappop(q)

        res = []
        for p in q:
            res.append(p[1])

        return res
```