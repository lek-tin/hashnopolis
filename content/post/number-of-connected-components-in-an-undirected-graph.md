---
title: "Number of Connected Components in an Undirected Graph"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "graph", "dfs"]
categories: ["algorithm"]
date: 2019-03-07T11:40:26-08:00
draft: false
archive: false
---
Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

### Example 1
```
Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

Output: 2
```
### Example 2
```
Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1
```
#### Note
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, `[0, 1]` is the same as `[1, 0]` and thus will not appear together in `edges`.

### Solution:
```java
class Solution {
    public int countComponents(int n, int[][] edges) {
        HashSet<Integer> visited = new HashSet<>();
        List<List<Integer>> graph = new ArrayList<>();
        // Initialise graph
        for (int i = 0; i < n; i++) {
            graph.add(i, new ArrayList<>());
        }
        for (int i = 0; i < edges.length; i++) {
            graph.get(edges[i][0]).add(edges[i][1]);
            graph.get(edges[i][1]).add(edges[i][0]);
        }

        int res = 0;
        for (int i = 0; i < n; i++) {
            if (!visited.contains(i)) {
                dfs(i, graph, visited);
                res++;
            }
        }

        return res;
    }

    private void dfs(int n, List<List<Integer>> graph, HashSet<Integer> visited) {
        if (!visited.contains(n)) {
            visited.add(n);
            // Visit all n's neighbors
            for (int x: graph.get(n)) {
                // dfs visit each neoghbor's neighbors
                dfs(x, graph, visited);
            }
        }
    }
}
```