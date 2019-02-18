---
title: "Factor Combinations"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "backtracking", "dfs"]
categories: ["algorithm"]
date: 2019-02-17T14:18:45-08:00
draft: true
archive: false
---
Numbers can be regarded as product of its factors. For example,
```
8 = 2 x 2 x 2;
  = 2 x 4.
```
Write a function that takes an integer `n` and return all possible combinations of its factors.

### Note:
- You may assume that n is always positive.
- Factors should be greater than 1 and less than n.
### Example 1:
```
Input: 1
Output: []
Example 2:

Input: 37
Output:[]
```
### Example 3:
```
Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
```
### Example 4:
```
Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
```
### Solution:
```java
// Time: O(NlogN)

```