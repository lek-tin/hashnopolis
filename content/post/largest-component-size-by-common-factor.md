---
title: "Largest Component Size by Common Factor"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "union-find"]
categories: ["algorithm"]
date: 2020-02-11T23:25:11-08:00
lastmod: 2020-02-11T23:25:11-08:00
draft: false
archive: false
---
Given a **non-empty** array of unique positive integers `A`, consider the following graph:  
1. There are `A.length` nodes, labelled `A[0]` to `A[A.length - 1]`;
2. There is an edge between `A[i]` and `A[j]` if and only if `A[i]` and `A[j]` share a common factor greater than `1`.

Return the size of the largest connected component in the graph.  

### Example 1:
```
Input: [4,6,15,35]
Output: 4
```

### Example 2:
```
Input: [20,50,9,63]
Output: 2
```

### Example 3:
```

Input: [2,3,6,7,4,12,21,39]
Output: 8
```

### Note:
1. `1 <= A.length <= 20000`
2. `1 <= A[i] <= 100000`

### Solution
```python

```