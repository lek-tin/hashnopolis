---
title: "Course Schedule"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "graph", "topological-sort"]
categories: ["algorithm"]
date: 2018-12-09T23:29:18+08:00
lastmod: 2020-06-13T22:30:18+08:00
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

##### Note

1. The input prerequisites is a graph represented by **a list of edges**, not adjacency matrices. Read more about how a graph is represented.
2. You may assume that there are no duplicate edges in the input prerequisites.

### Solution (cycle detection using dfs)

possible if no cycle in a directed graph  
Time: `O(V+E) ~ O(V^2)`  
Space: `O(V)`  

Java
```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        boolean[] visiting = new boolean[numCourses];
        boolean[] visited = new boolean[numCourses];

        ArrayList<ArrayList<Integer>> adj = new ArrayList<ArrayList<Integer>>();

        for (int i = 0; i < numCourses; i++) {
            adj.add(new ArrayList<Integer>());
        }

        for (int[] prereq: prerequisites) {
            int parent = prereq[0], child = prereq[1];
            adj.get(parent).add(child);
        }

        for (int i = 0; i < numCourses; i++) {
            if (hasCycle(adj, i, visited, visiting)) {
                return false;
            }
        }

        return true;
    }

    private boolean hasCycle(ArrayList<ArrayList<Integer>> adj, int parent, boolean[] visited, boolean[] visiting) {
        if (visiting[parent]) return true;
        if (visited[parent]) return false;

        visiting[parent] = true;

        for (int child: adj.get(parent)) {
            if (hasCycle(adj, child, visited, visiting)) {
                return true;
            }
        }

        visiting[parent] = false;
        visited[parent] = true;

        return false;
    }
}
```

Python
```python
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        self.adj = [ [] for _ in range(numCourses) ]

        for p in prerequisites:
            parent, child = p
            self.adj[parent].append(child)

        # mark starting nodes
        visiting = [ False for _ in range(numCourses) ]
        visited = [ False for _ in range(numCourses) ]

        for i in range(numCourses):
            if self.detectCycle(i, visiting, visited):
                return False

        return True

    # cycle exists: True
    # otherwise: False
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
        # unset parent as a prerequisite course
        visiting[parent] = False
        # mark node as visited
        visited[parent] = True
        return False
```

### Solution (topological sort)

time: `O(V + E)`  
space: `O(n)`  

Java
```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        if (numCourses <= 0 || prerequisites == null || prerequisites.length <=1) {
            return true;
        }

        List<List<Integer>> graph = new ArrayList<>(numCourses);
        int[] inDegrees = new int[numCourses];

        for (int i = 0; i < numCourses; i++) {
            graph.add(new LinkedList<Integer>());
        }

        for (int[] pair: prerequisites) {
            graph.get(pair[1]).add(pair[0]);
            inDegrees[pair[0]]++;
        }

        Queue<Integer> q = new LinkedList<Integer>();

        for (int i = 0; i < inDegrees.length; i++) {
            if (inDegrees[i] == 0) {
                q.add(i);
            }
        }

        int count = 0;

        while (!q.isEmpty()) {
            int course = q.poll();
            count++;
            for (int child: graph.get(course)) {
                inDegrees[child]--;
                if (inDegrees[child] == 0) {
                    q.add(child);
                }
            }
        }

        return count == numCourses;
    }
}
```

Python
```python
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

C++
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
