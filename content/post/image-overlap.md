---
title: "Image Overlap"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-03-20T02:27:12-07:00
lastmod: 2020-03-20T02:27:12-07:00
draft: true
archive: false
---
Two images `A` and `B` are given, represented as binary, square matrices of the same size.  (A binary matrix has only `0`s and `1`s as values.)  

We translate one image however we choose (sliding it **left**, **right**, **up**, or **down** any number of units), and place it on top of the other image. After, the overlap of this translation is the number of positions that have a `1` in both images.  

(Note also that a translation does not include any kind of rotation.)  

What is the largest possible overlap?  

### Example 1

```
Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.
```

#### Notes

1. `1 <= A.length = A[0].length = B.length = B[0].length <= 30`
2. `0 <= A[i][j], B[i][j] <= 1`