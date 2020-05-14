---
title: "Flood Fill"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "recursion", "dfs"]
categories: ["algorithm"]
date: 2020-05-11T23:23:16-07:00
lastmod: 2020-05-11T23:23:16-07:00
draft: false
archive: false
---

An image is represented by a `2-D` array of integers, each integer representing the pixel value of the image (from `0` to `65535`).  

Given a `coordinate (sr, sc)` representing the starting pixel (row and column) of the flood fill, and a pixel value `newColor`, "flood fill" the image.  

To perform a "flood fill", consider the starting pixel, plus any pixels connected **4-directionally** to the starting pixel of the same color as the starting pixel, plus any pixels **connected 4-directionally** to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the `newColor`.  

At the end, return the modified image.  

### Example 1:

```
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
```

#### Note:

- The length of image and `image[0]` will be in the range `[1, 50]`.
- The given starting pixel will satisfy `0 <= sr < image.length` and `0 <= sc < image[0].length`.
- The value of each color in `image[i][j]` and newColor will be an integer in `[0, 65535]`.

### Solution (DFS using a queue)

Java
```java
```

### Solution (DFS using recursion)

Java
```java
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if (image.length < 0 || image[0].length < 0 || sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
            return image;
        }

        dfs(image, sr, sc, image[sr][sc], newColor);

        // recover the real colors by flipping the sign
        for (int i = 0; i < image.length; i++) {
            for (int j = 0; j < image[0].length; j++) {
                if (image[i][j] < 0) {
                    image[i][j] = -image[i][j];
                }
            }
        }

        return image;
    }

    private void dfs(int[][] image, int row, int col, int oldColor, int newColor) {
        if (image.length < 0 || image[0].length < 0 || row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] < 0) {
            return;
        }

        // -newColor means this cell was visited
        image[row][col] = -newColor;

        int[][] dirs = {{0,1}, {0,-1}, {1,0}, {-1,0}};
        for (int[] dir: dirs) {
            int new_r = row + dir[0];
            int new_c = col + dir[1];
            if ( new_r >=0 && new_r < image.length && new_c >= 0 && new_c < image[0].length && image[new_r][new_c] == oldColor) {
                dfs(image, new_r, new_c, oldColor, newColor);
            }
        }
    }
}
```
