---
title: "Largest Rectangle in Histogram"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack", "java"]
categories: ["algorithm"]
date: 2019-02-25T23:58:00-08:00
draft: false
archive: false
---
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![question](https://assets.leetcode.com/uploads/2018/10/12/histogram.png)  
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

![solution](https://assets.leetcode.com/uploads/2018/10/12/histogram_area.png)  
The largest rectangle is shown in the shaded area, which has area = 10 unit.

### Example:
```
Input: [2,1,5,6,2,3]
Output: 10
```
### Solution:
```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        if (heights == null || heights.length == 0) return 0;

        Stack<Integer> stack = new Stack<Integer>();
        int maxArea = 0;

        for (int i = 0; i <= heights.length; i++) {
            int h  = i == heights.length ? 0 : heights[i];
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int start = stack.isEmpty() ? -1 : stack.peek();
                int area = height * (i - start - 1);
                maxArea = Math.max(maxArea, area);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
```