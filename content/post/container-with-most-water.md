---
title: "Container With Most Water"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2019-01-26T23:38:02-08:00
draft: true
archive: false
---
Given `n` non-negative integers _a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>_ , where each represents a point at coordinate _(i, a<sub>i</sub>)_. n vertical lines are drawn such that the two endpoints of line `i` is at _(i, a<sub>i</sub>)_ and _(i, 0)_. Find two lines, which together with x-axis forms a container, such that the container contains the most water.

**Note:** You may not slant the container and n is at least `2`.

![Fig: Container With Most Water](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)
The above vertical lines are represented by array `[1,8,6,2,5,4,8,3,7]`. In this case, the max area of water (blue section) the container can contain is `49`.

**Example:**
```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```