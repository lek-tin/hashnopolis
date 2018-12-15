---
title: "Course Schedule"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "graph", "topological-sort"]
categories: ["algorithm"]
date: 2018-12-09T23:29:18+08:00
draft: true
archive: false
---
There are a total of n courses you have to take, labeled from `0` to `n-1`.

Some courses may have prerequisites, for example to take course `0` you have to first take course `1`, which is expressed as a pair: `[0,1]`

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

**Example 1:**
```
Input: 2, [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
```
**Example 2:**
```
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```
**Note:**
1. The input prerequisites is a graph represented by **a list of edges**, not adjacency matrices. Read more about how a graph is represented.
2. You may assume that there are no duplicate edges in the input prerequisites.
**Solution:**
```python
# time: O(V + E)
# space: O(n)
class Solution:
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        self.graph = [[]] * numCourses

        for p in prerequisites:
            before = p[1]
            after = p[0]
            self.graph[before].append(after)

        v = [0] * numCourses

        for i in range(numCourses):
            if(self.dfs(i, v)): return False

        return True

    def dfs(self, cur, v):
        if(v[cur] == 1): return True
        if(v[cur] == 2): return False

        v[cur] = 1

        for t in self.graph[cur]:
            if(self.dfs(t, v)): return True

        v[cur] = 2

        return False
```