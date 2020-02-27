---
title: "Course Schedule"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "graph", "topological-sort"]
categories: ["algorithm"]
date: 2018-12-09T23:29:18+08:00
draft: false
archive: false
---
There are a total of n courses you have to take, labeled from `0` to `n-1`.

Some courses may have prerequisites, for example to take course `0` you have to first take course `1`, which is expressed as a pair: `[0,1]`

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

### Example 1
```
Input: 2, [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
```
### Example 2
```
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```
### Note
1. The input prerequisites is a graph represented by **a list of edges**, not adjacency matrices. Read more about how a graph is represented.
2. You may assume that there are no duplicate edges in the input prerequisites.
### Solution
```python
# time: O(Vertices + Edges)
# space: `O(n)`
class Solution:
    # @param {integer} numCourses
    # @param {integer[][]} prerequisites
    # @return {boolean}
    def canFinish(self, numCourses, prerequisites):
        degrees = [0] * numCourses
        children = [[] for x in range(numCourses)]
        for pair in prerequisites:
            after = pair[0]
            before = pair[1]
            # count how many time each course is regarded as a dependency
            degrees[after] += 1
            # append new child to the children list based on dependency as a key
            children[before].append(after)
        print(children)
        courses = set(range(numCourses))

        canTake = True
        while canTake and len(courses):
            canTake = False
            stack = []
            for course in courses:
                # course is a dependency itself
                if degrees[course] == 0:
                    # check all dependencies of "course"
                    # This is different from the traditional DFS algo, because here we are finding all
                    for child in children[course]:
                        # decrease the count for dependecies for child by 1
                        degrees[child] -= 1
                    stack.append(course)
                    canTake = True
                # if none of the courses is a dependency, the if branch above is never executed. Therefore, canTake will remain False.
            for course in stack:
                courses.remove(course)
        # if courses is an empty list, it means the student can take all of the courses.
        return len(courses) == 0
```
```cpp
class Solution {
public:
    bool canFinish(int numCourses, vector<pair<int, int>>& prerequisites) {
        graph = vector<vector<int>>(numCourses);

        for (const auto& p: prerequisites)
            graph[p.second].push_back(p.first);

        vector<int> v(numCourses, 0);

        for (int i = 0; i < numCourses; ++i)
            if(dfs(i, v)) return false;

        return true;

    }

private:
    vector<vector<int>> graph;
    bool dfs(int cur, vector<int>& v) {
        if(v[cur] == 1) return true;
        if(v[cur] == 2) return false;

        v[cur] = 1;

        for (const int t: graph[cur])
            if(dfs(t, v)) return true;

        v[cur] = 2;

        return false;
    }

};
```