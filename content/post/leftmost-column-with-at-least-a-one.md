---
title: "Leftmost Column With at Least a One"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "facebook"]
categories: ["algorithm"]
date: 2020-04-21T20:42:19-07:00
lastmod: 2020-04-21T20:42:19-07:00
draft: true
archive: false
---

(This problem is an interactive problem.)

A binary matrix means that all elements are `0` or `1`. For each individual row of the matrix, this row is sorted in **non-decreasing** order.

Given a **row-sorted** binary matrix `binaryMatrix`, return leftmost column index(0-indexed) with at least a `1` in it. If such index doesn't exist, return `-1`.

**You can't access the Binary Matrix directly.**  You may only access the matrix using a `BinaryMatrix` interface:

1. `BinaryMatrix.get(x, y)` returns the element of the matrix at index `(x, y)` (0-indexed).
2. `BinaryMatrix.dimensions()` returns a list of 2 elements `[m, n]`, which means the matrix is `m * n`.
3. Submissions making more than `1000` calls to `BinaryMatrix.get` will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix `mat` as input in the following four examples. You will not have access the binary matrix directly.

### Example 1

![leftmost column with at least a one example 1](/img/post/leftmost-column-with-at-least-a-one-example-1.png)
```
Input: mat = [[0,0],[1,1]]
Output: 0
```

### Example 2

![leftmost column with at least a one example 2](/img/post/leftmost-column-with-at-least-a-one-example-2.png)
```
Input: mat = [[0,0],[0,1]]
Output: 1
```

### Example 3

![leftmost column with at least a one example 3](/img/post/leftmost-column-with-at-least-a-one-example-3.png)
```
Input: mat = [[0,0],[0,0]]
Output: -1
```

### Example 4

![leftmost column with at least a one example 4](/img/post/leftmost-column-with-at-least-a-one-example-4.png)
```
Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1
```

#### Constraints:

1. `m == mat.length`
2. `n == mat[i].length`
3. `1 <= m, n <= 100`
4. `mat[i][j]` is either 0 or 1.
5. `mat[i]` is sorted in a non-decreasing way.

### Solution

```java
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface BinaryMatrix {
 *     public int get(int x, int y) {}
 *     public List<Integer> dimensions {}
 * };
 */

class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        int N = binaryMatrix.dimensions().get(0);
        int M = binaryMatrix.dimensions().get(1);

        int leftmost = M;
        int left = 0;
        int right = M;
        for (int row = 0; row < N; row++) {
            left = 0;
            while (left < right) {
                int mid = left + (right - left)/2;
                if(binaryMatrix.get(row, mid) == 1){
                    right = mid;
                } else {
                    left = mid+1;
                }
            }
            // left = right = bestLeft
            // thus we can assign left to leftmost at the end of each iteration
            leftmost = left;
        }

        return leftmost == M ? -1 : leftmost;
    }
}
```
