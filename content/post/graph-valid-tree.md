---
title: "Graph Valid Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "graph"]
categories: ["algorithm"]
date: 2019-03-06T23:46:04-08:00
draft: false
archive: false
---
Given `n` nodes labeled from `0` to `n-1` and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

###Example 1:
```
Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true
```
### Example 2
```
Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
```
###Note:
you can assume that no duplicate edges will appear in edges. Since all edges are undirected, `[0,1]` is the same as `[1,0]` and thus will not appear together in edges.
### Solution
A valid tree has (n - 1) edges and all vertices are connected. depth first search:
```java
class Solution {
    public boolean validTree(int n, int[][] edges) {
        List<List<Integer>> graph = new ArrayList<>();
        HashSet<Integer> visited = new HashSet<>();

        // Create a list to store each vertice's neighbors
        for (int i =0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        // add each vertice's neighbors to itself. Both ways 1 <=> 2
        for (int i = 0; i < edges.length; i++) {
            graph.get(edges[i][0]).add(edges[i][1]);
            graph.get(edges[i][1]).add(edges[i][0]);
        }

        // n nodes labeled from 0 to n-1
        visited.add(0);

        boolean res = dfs(graph, visited, 0, -1);
        if (res == false) return false;
        if (n != visited.size()) return false;
        return true;
    }

    private boolean dfs(List<List<Integer>> graph, HashSet<Integer> visited, int node, int parent) {
        List<Integer> neighbors = graph.get(node);
        for (int n: neighbors) {
            if (n == parent) continue;
            // A loop detected -> not a valid tree -> exit
            if (visited.contains(n)) return false;
            visited.add(n);
            boolean res = dfs(graph, visited, n, node);
            if (res == false) return false;
        }
        return true;
    }
}
```
Union-find
```java