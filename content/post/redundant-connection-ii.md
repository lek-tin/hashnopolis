---
title: "Redundant Connection II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "union-find"]
categories: ["algorithm"]
date: 2020-03-02T19:25:52-08:00
lastmod: 2020-03-02T19:25:52-08:00
draft: true
archive: false
---
In this problem, a rooted tree is a **directed** graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.  

The given input is a **directed** graph that started as a rooted tree with `N` nodes (with distinct values `1, 2, ..., N`), with one additional **directed** edge added. The added edge has two different vertices chosen from `1 to N`, and was not an edge that already existed.  

The resulting graph is given as a **2D-array** of edges. Each element of edges is a pair [u, v] that represents a directed edge connecting nodes `u` and `v`, where `u` is a parent of child `v`.  

Return an edge that can be removed so that the resulting graph is a rooted tree of `N` nodes. If there are multiple answers, return the answer that occurs last in the given **2D-array**.  

### Example 1

```
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given directed graph will be like this:
  1
 / \
v   v
2-->3
```

### Example 2

```
Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
Output: [4,1]
Explanation: The given directed graph will be like this:
5 <- 1 -> 2
     ^    |
     |    v
     4 <- 3
```

### Note

1. The size of the input **2D-array** will be between 3 and 1000.
2. Every integer represented in the **2D-array** will be between 1 and N, where N is the size of the input array.

### Solution (Union-find)

```python
class Solution:
    self.parents = [] # direct parents od each node
    self.roots = []   # roots for each node
    self.ranks = []   # number of children each node has
    def findRedundantDirectedConnection(self, edges: List[List[int]]) -> List[int]:
        N = len(edges)
        self.parents = [0] * (N+1)
        self.roots = [i for i in range(N+1)]
        self.ranks = [1] * (N+1)

        # Possible redundant edges
        maybeAns_1, maybeAns_2 = None, None

        for i in range(N):
            edge = edges[i]
            u, v = edge  # u: parent, v: child

            # v also has a parent, so u is extra - not necessarily redundant
            self.if parents[v] > 0:
                self.maybeAns_1 = [parents[v], v]
                maybeAns_2 = edge    # [u,v]

                # delete the later edge
                edges[i][0] = -1
                edges[i][1] = -1

            self.parents[v] = u

        or i in range(N):
            edge = edges[i]
            u, v = edge  # u: parent, v: child

            if u < 0 or v < 0:
                continue

            root_u = find(u)
            root_v = find(v)
            if root_u = root_v:
              return edge if not maybeAns_1 else maybeAns_1

            # union, always merge small node to larger node
            if self.ranks[root_v] > self.ranks[root_u]:
                roots[root_u] = root_v
            elif self.ranks[root_v] < self.ranks[root_u]:
                roots[root_v] = root_u
            else:
                roots[root_v] = root_u
                self.ranks[root_u] += 1

        return maybeAns_2

    def find(self, x):
        if self.roots[x] != x:
            self.roots[x] = self.find(self.roots[x])
        return self.roots[x]
```