---
title: "Critical Connections"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "connected-components"]
categories: ["algorithm"]
date: 2020-03-01T10:01:11-08:00
lastmod: 2020-03-01T10:01:11-08:00
draft: false
archive: false
---
Given an underected connected graph with n nodes labeled `1..n`. A bridge (cut edge) is defined as an edge which, when removed, makes the graph disconnected (or more precisely, increases the number of connected components in the graph). Equivalently, an edge is a bridge if and only if it is not contained in any cycle. The task is to find all bridges in the given graph. Output an empty list if there are no bridges.

### Input

1. `n`, an int representing the total number of nodes.
2. edges, a list of pairs of integers representing the nodes connected by an edge.

### Example 1

![critical connections example 1](/img/post/critical-connections-example-1.png)
```
Input: n = 5, edges = [[1, 2], [1, 3], [3, 4], [1, 4], [4, 5]]


Output: [[1, 2], [4, 5]]
Explanation:
There are 2 bridges:
1. Between node 1 and 2
2. Between node 4 and 5
If we remove these edges, then the graph will be disconnected.
If we remove any of the remaining edges, the graph will remain connected.
```

### Example 2

![critical connections example 2](/img/post/critical-connections-example-2.png)
```
Input: n = 6, edges = [[1, 2], [1, 3], [2, 3], [2, 4], [2, 5], [4, 6], [5, 6]]


Output: []
Explanation:
We can remove any edge, the graph will remain connected.
```

### Example 3

![critical connections example 3](/img/post/critical-connections-example-3.png)
```
Input: n = 9, edges = [[1, 2], [1, 3], [2, 3], [3, 4], [3, 6], [4, 5], [6, 7], [6, 9], [7, 8], [8, 9]]


Output: [[3, 4], [3, 6], [4, 5]]
```

### Solution

```java
// Constraints:
// 1 <= n <= 10^5
// n-1 <= connections.length <= 10^5
// connections[i][0] != connections[i][1]
// There are no repeated connections.

// Steps:
// Remove a connection
// find the connected components
// if number of connected components>1 add the connection into the result
// add the connection back
// do step 1–4 for each connection.


package leetcode.contests.contest_154;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.*;

public class FindingCriticalPoint {
    class Graph {
        int v;
        /**
         * This set will be working as adjacency list.
         */
        HashSet<Integer>[] connections;

        /**
         * Create a data_structure.graph data structure
         */
        Graph(int v) {
            this.v = v;
            connections = new HashSet[v];
            for (int i = 0; i < v; i++) {
                connections[i] = new HashSet<>();
            }
        }

        void addConnection(int u, int v) {
            connections[u].add(v);
            connections[v].add(u);
        }

        void removeConnection(int u, int v) {
            connections[u].remove(v);
            connections[v].remove(u);
        }
    }

    private FindingCriticalPoint findingCriticalPoint;

    private List<List<Integer>> connections;

    @BeforeEach
    public void init() {
        findingCriticalPoint = new FindingCriticalPoint();
        connections=createDummyData();
    }

    private List<List<Integer>> createDummyData() {
        List<List<Integer>> connections = new ArrayList<>();
        List<Integer> con1 = new ArrayList<>();
        con1.add(0);
        con1.add(1);
        connections.add(con1);

        List<Integer> con2 = new ArrayList<>();
        con2.add(1);
        con2.add(2);
        connections.add(con2);

        List<Integer> con3 = new ArrayList<>();
        con3.add(2);
        con3.add(0);
        connections.add(con3);

        List<Integer> con4 = new ArrayList<>();
        con4.add(1);
        con4.add(3);
        connections.add(con4);
        return connections;

    }

    @Test
    public void firstTest() {
        Assertions.assertEquals(1,findingCriticalPoint.criticalConnections(4, connections).size());
    }

    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        List<List<Integer>> result = new ArrayList<>();
        Graph graph = new Graph(n);
        for (List<Integer> connection : connections) {
            graph.addConnection(connection.get(0), connection.get(1));
        }
        System.out.println(graph.connections);
        for (List<Integer> connection : connections) {
            graph.removeConnection(connection.get(0), connection.get(1));
            int numberOfConnectedComponents = getConnectedComponents(graph, n);
            System.out.println("Number of components: "+numberOfConnectedComponents);
            if (numberOfConnectedComponents > 1)
                result.add(connection);
            graph.addConnection(connection.get(0), connection.get(1));
        }
        return result;

    }

    private int getConnectedComponents(Graph graph, int n) {
        int numComponents = 0;
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if(!visited[i]){
                queue.add(i);
                numComponents++;
            }
            while (!queue.isEmpty()){
                Integer node=queue.poll();
                if(!visited[node]){
                    HashSet<Integer> sets = graph.connections[node];
                    Iterator it = sets.iterator();
                    while (it.hasNext()) {
                        int data= (int) it.next();
                        if(!visited[data])
                            queue.add(data);
                    }
                }
                visited[node]=true;
            }
        }
        return numComponents;
    }
}
```