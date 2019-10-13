---
title: "Best Meeting Point"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sort", "java", "manhattan-distance"]
categories: ["algorithm"]
date: 2019-02-21T10:15:51-08:00
lastmod: 2019-09-15T22:39:51-08:00
draft: false
archive: false
---
A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values `0` or `1`, where each `1` marks the home of someone in the group. The distance is calculated using Manhattan Distance, where `distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|`.

### Example:
```
Input:

1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 6
```
###Explanation:
Given three people living at (0,0), (0,4), and (2,2): The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.

### Solution:
```java
// Time Complexity : O(m*n)
class Solution {
    public int minTotalDistance(int[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }

        int rows = grid.length;
        int cols = grid[0].length;

        List<Integer> ys = new ArrayList<>();
        List<Integer> xs = new ArrayList<>();
        // Find all members' position
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    ys.add(i);
                    xs.add(j);
                }
            }
        }
        // Sort positions so we can find most beneficial point
        Collections.sort(ys);
        Collections.sort(xs);

        // middle position will always beneficial
        // for all group members but it will be
        // sorted which we have alredy done
        int pos = ys.size() / 2;
        int y = ys.get(pos);
        int x = xs.get(pos);

        int distance = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    distance += Math.abs(y - i) + Math.abs(x - j);
                }
            }
        }

        return distance;
    }
}
```