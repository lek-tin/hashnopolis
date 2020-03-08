---
title: "Number of Islands Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "union-find", "connected-components"]
categories: ["algorithm"]
date: 2020-03-06T20:24:47-08:00
lastmod: 2020-03-06T20:24:47-08:00
draft: false
archive: false
---
A `2d` grid map of `m` rows and `n` columns is initially filled with water. We may perform an addLand operation which turns the water at position `(row, col)` into a land. Given a list of positions to operate, count the number of islands after each addLand operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Example

```
Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
Output: [1,1,2,3]
```

**Explanation:**  
Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).  
```
0 0 0
0 0 0
0 0 0
```
Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.
```
1 0 0
0 0 0   Number of islands = 1
0 0 0
```
Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.
```
1 1 0
0 0 0   Number of islands = 1
0 0 0
```
Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.
```
1 1 0
0 0 1   Number of islands = 2
0 0 0
```
Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.
```
1 1 0
0 0 1   Number of islands = 3
0 1 0
```

#### Follow up

Can you do it in time complexity `O(k log mn)`, where `k` is the length of the positions?

### Solution

Time: `O(m*n + L)`, `L` is the number of operations. Union operation takes essentially constant time when UnionFind is implemented with both path compression and union by rank.
Space: `O(m*n)`  
```python
class Solution:
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        if m==0 or n==0 or len(positions)==0:
            return 0

        lookup = {}
        counts = []
        dirs = [ [0, 1], [0, -1], [1, 0], [-1, 0] ]
        count = 0

        for position in positions:
            x, y = position
            curr = (x, y)
            if self.node_id(curr, n) in lookup:
                # skip same coordinate. Update count with the previous count
                counts.append(counts[-1])
                count = counts[-1]
                continue
            count += 1
            lookup[self.node_id(curr, n)] = self.node_id(curr, n)
            for dir in dirs:
                neighbor= (x+dir[0], y+dir[1])
                if 0 <= neighbor[0] < m and 0 <= neighbor[1] < n and self.node_id(neighbor, n) in lookup:
                    if self.find(lookup, self.node_id(curr, n)) != self.find(lookup, self.node_id(neighbor, n)):
                        # Merge different islands, amortised time: O(log*k) ~= O(1)
                        self.union(lookup, self.node_id(curr, n), self.node_id(neighbor, n))
                        count -= 1
            counts.append(count)

        return counts

    def node_id(self, coor, n):
        return coor[0]*n + coor[1]

    def find(self, lookup, x):
        if lookup[x] != x:
            # path compression
            lookup[x] = self.find(lookup, lookup[x])
        return lookup[x]

    def union(self, lookup, x, y):
        x_root, y_root = self.find(lookup, x), self.find(lookup, y)
        lookup[min(x_root, y_root)] = max(x_root, y_root)
```