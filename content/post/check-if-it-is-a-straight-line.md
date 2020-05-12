---
title: "Check if It Is a Straight Line"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-05-08T01:36:07-07:00
lastmod: 2020-05-08T01:36:07-07:00
draft: false
archive: false
---

You are given an array coordinates, `coordinates[i] = [x, y]`, where `[x, y]` represents the coordinate of a point. Check if these points make a straight line in the XY plane.

### Example 1:

![check if it is a straight line example 1](/img/post/check-if-it-is-a-straight-line-example-1.jpg)
```
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
```

### Example 2:

![check if it is a straight line example 2](/img/post/check-if-it-is-a-straight-line-example-2.jpg)
```
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
```

#### Constraints:

1. `2 <= coordinates.length <= 1000`
2. `coordinates[i].length == 2`
3. `-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4`
4. coordinates contains no duplicate point.

### Solution

Java
```java
class Solution {
    public boolean checkStraightLine(int[][] coordinates) {
        double slope;
        int N = coordinates.length;

        if (coordinates[1][1] == coordinates[0][1]) {
            slope = 0;
        } else if (coordinates[1][0] == coordinates[0][0]) {
            slope = Double.MAX_VALUE;
        } else {
            int dy = coordinates[1][1] - coordinates[0][1];
            int dx = coordinates[1][0] - coordinates[0][0];
            slope = Math.abs(dy / (double)dx);
        }

        if (slope == 0) {
            for (int i = 1; i < N; i++) {
                if (coordinates[i][1] != coordinates[0][1]) {
                    return false;
                }
            }
        }

        if (slope == Integer.MAX_VALUE) {
            for (int i = 1; i < N; i++) {
                if (coordinates[i][0] != coordinates[0][0]) {
                    return false;
                }
            }
        }
        System.out.println(slope);
        for (int i = 1; i < N; i++) {
            int dy = coordinates[i][1] - coordinates[0][1];
            int dx = coordinates[i][0] - coordinates[0][0];
            if (coordinates[i][0] - coordinates[0][0] == 0) {
                return false;
            }
            if (Math.abs(dy / (double)dx) != slope) {
                return false;
            }
        }

        return true;
    }
}
```
