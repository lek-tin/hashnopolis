---
title: "Trapping Rain Water"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "divide-and-conquer", "two-pointers"]
categories: ["algorithm"]
date: 2019-01-26T23:39:49-08:00
draft: false
archive: false
---
Given n non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it is able to trap after raining.

![Fig. Trapping Rain Water](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)
The above elevation map is represented by array `[0,1,0,2,1,0,1,3,2,1,2,1]`. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

### Example:
```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

### Solution:
```java
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int res = 0;
        int left = 0;
        int right = n - 1;
        int leftHeight = 0;
        int rightHeight = 0;

        while(left <= right){
            if(height[left] <= height[right]){
                if(height[left] >= leftHeight) {
                    leftHeight = height[left];
                }
                else {
                    res += leftHeight - height[left];
                }
                left++;
            }
            else{
                if(height[right] >= rightHeight) {
                    rightHeight = height[right];
                }
                else {
                    res += rightHeight - height[right];
                }
                right--;
            }
        }
        return res;
    }
}
```