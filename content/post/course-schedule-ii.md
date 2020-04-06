---
title: "Course Schedule II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "graph", "topological-sort"]
categories: ["algorithm"]
date: 2020-03-24T21:07:32-07:00
lastmod: 2020-03-24T21:07:32-07:00
draft: false
archive: false
---
There are a total of n courses you have to take, labeled from `0` to `n-1`.  

Some courses may have prerequisites, for example to take course `0` you have to first take course `1`, which is expressed as a pair: `[0,1]`  

Given the total number of courses and a list of prerequisite **pairs**, return the ordering of courses you should take to finish all courses.  

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.  

### Example 1

```
Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
```

### Example 2

```
Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
```

##### Note

1. The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
2. You may assume that there are no duplicate edges in the input prerequisites.

### Solution (topological sort using dfs)

possible if no cycle in a directed graph  
Time: `O(V+E) ~ O(V^2)`  
Space: `O(V)`  
```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        self.topo_order = []
        self.adj = [ [] for _ in range(numCourses) ]

        for p in prerequisites:
            child, parent = p
            self.adj[parent].append(child)

        # mark starting nodes
        visiting = [ False for _ in range(numCourses) ]
        visited = [ False for _ in range(numCourses) ]

        for i in range(numCourses):
            if self.detectCycle(i, visiting, visited):
                # if a cycle exists
                return []

        return reversed(self.topo_order)

    # cycle exists: True
    # otherwies: False
    def detectCycle(self, parent, visiting, visited):
        # cycle detected
        if visiting[parent]:
            return True
        # node already visited -> abort
        # no cycle detected -> return False
        if visited[parent]:
            return False

        # mark node as visiting
        visiting[parent] = True

        # traverse all children
        for child in self.adj[parent]:
            if self.detectCycle(child, visiting, visited):
                return True
        # unset parent as a prerequiste course
        visiting[parent] = False
        # mark node as visited
        visited[parent] = True
        # add parent to our solution array
        self.topo_order.append(parent)
        return False
```
