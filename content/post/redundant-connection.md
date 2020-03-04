---
title: "Redundant Connection"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "union-find"]
categories: ["algorithm"]
date: 2020-03-02T15:48:06-08:00
lastmod: 2020-03-02T15:48:06-08:00
draft: false
archive: false
---
In this problem, a tree is an *undirected* graph that is connected and has no cycles.  

The given input is a graph that started as a tree with N nodes (with distinct values `1, 2, ..., N`), with one additional edge added. The added edge has two different vertices chosen from `1 to N`, and was not an edge that already existed.  

The resulting graph is given as a **2D-array** of edges. Each element of edges is a pair `[u, v]` with `u < v`, that represents an *undirected* edge connecting nodes `u` and `v`.  

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given **2D-array**. The answer edge `[u, v]` should be in the same format, with `u < v`.  

### Example 1

```
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3
```

### Example 2

```
Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3
```

### Note
1. The size of the input **2D-array** will be between 3 and 1000.
2. Every integer represented in the **2D-array** will be between 1 and N, where N is the size of the input array.

### Solution (union-find with rank)

```python
class Solution:
    root = []
    rank = []
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        # we skip 0 index
        N = len(edges)+1
        self.root = [i for i in range(N)]
        self.rank = [0 for i in range(N)]
        for connec in edges:
            x, y = connec
            if not self.union(x, y):
                return connec

        return []

    def find(self, x):
        if self.root[x] != x:
            self.root[x] = self.find(self.root[x])
        return self.root[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x == root_y:
            return False

        if self.rank[root_x] > self.rank[root_y]:
            self.root[root_y] = root_x
        elif self.rank[root_x] < self.rank[root_y]:
            self.root[root_x] = root_y
        else:
            self.root[root_x] = root_y
            self.rank[root_y] += 1

        return True
```
**Improvement**: we can make it more efficient by using path compression
```python
def find(x, roots):
    while root[x] != x:
        roots[x] = roots[roots[x]]
        x = roots[x]
    return node
```
