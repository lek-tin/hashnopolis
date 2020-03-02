---
title: "Repair Broken Edges of a Graph"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "minimum-spanning-tree"]
categories: ["algorithm"]
date: 2020-02-29T16:49:10-08:00
lastmod: 2020-02-29T16:49:10-08:00
draft: false
archive: false
---
There's an undirected connected graph with n nodes labeled `1..n`. But some of the edges has been broken disconnecting the graph. Find the minimum cost to repair the edges so that all the nodes are once again accessible from each other.  

#### Input
- n, an int representing the total number of nodes.
- edges, a list of integer pair representing the nodes connected by an edge.
- edgesToRepair, a list where each element is a triplet representing the pair of nodes between which an edge is currently broken and the cost of repearing that edge respectively (e.g. [1, 2, 12] means to repear an edge between nodes 1 and 2, the cost would be 12).

### Example 1

```
Input: n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
Output: 20
Explanation:
There are 3 connected components due to broken edges: [1], [2, 3] and [4, 5].
We can connect these components into a single component by repearing the edges between nodes 1 and 2, and nodes 1 and 5 at a minimum cost 12 + 8 = 20.
```

### Example 2

```
Input: n = 6, edges = [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], edgesToRepair = [[1, 6, 410], [2, 4, 800]]
Output: 410
```

### Example 3

```
Input: n = 6, edges = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], edgesToRepair = [[1, 5, 110], [2, 4, 84], [3, 4, 79]]
Output: 79
```

### Solution (Prim's)

```python
from collections import defaultdict
import heapq

class Solution:
    def __init__(self):
        pass

    def minCostForRepair(self, n, edges, edgesToRepair):
        graph=defaultdict(list)
        addedEdges=set()
        for edge in edgesToRepair:
            graph[edge[0]].append((edge[2], edge[1]))
            graph[edge[1]].append((edge[2], edge[0]))
            addedEdges.add((edge[0], edge[1]))
            addedEdges.add((edge[1], edge[0]))
        for edge in edges:
            if tuple(edge) not in addedEdges:
                graph[edge[0]].append((0, edge[1]))
                graph[edge[1]].append((0, edge[0]))

        res=0
        priorityQueue=[(0, 1)]
        heapq.heapify(priorityQueue)
        visited=set()

        while priorityQueue:
            minCost, node=heapq.heappop(priorityQueue)
            if node not in visited:
                visited.add(node)
                res+=minCost
                for cost, connectedNode in graph[node]:
                    if connectedNode not in visited:
                        heapq.heappush(priorityQueue, (cost, connectedNode))

        return res


s=Solution()

print(s.minCostForRepair(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], [[1, 2, 12], [3, 4, 30], [1, 5, 8]]))
print(s.minCostForRepair(6, [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], [[1, 6, 410], [2, 4, 800]]))
print(s.minCostForRepair(6, [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], [[1, 5, 110], [2, 4, 84], [3, 4, 79]]))
```

### Solution (Kruskal's + Union-Find)

We first find a minimum spannig tree using Kruskal's algorithm that contain ok edges and broken edges. We set existing edges to have 0 cost, while the broken edges have their repair cost.
```java
public class Main {
    public static void main(String[] args) {
        int n = 6;
        int[][] edges = {{1, 4}, {4, 5}, {2, 3}};
        int[][] newEdges = {{1, 2, 5}, {1, 3, 10}, {1, 6, 2}, {5, 6, 5}};
        System.out.println(minCost(n, edges, newEdges));
    }

    public static int minCost(int n, int[][] edges, int[][] newEdges) {
        UF uf = new UF(n + 1); // + 1 because nodes are 1-based
        for (int[] edge : edges) {
            uf.union(edge[0], edge[1]);
        }

        Queue<int[]> pq = new PriorityQueue<>(newEdges.length, (e1, e2) -> Integer.compare(e1[2], e2[2]));
        pq.addAll(Arrays.asList(newEdges));

        int totalCost = 0;
        // 2 because nodes are 1-based and we have 1 unused component at index 0
        while (!pq.isEmpty() && uf.count != 2) {
            int[] edge = pq.poll();
            if (!uf.connected(edge[0], edge[1])) {
                uf.union(edge[0], edge[1]);
                totalCost += edge[2];
            }
        }
        return totalCost;
    }
}

class UF {
    private int[] parent;  // parent[i] = parent of i
    private byte[] rank;   // rank[i] = rank of subtree rooted at i (never more than 31)
    public int count;      // number of connected components

    public UF(int n) {
        if (n < 0) throw new IllegalArgumentException();
        parent = new int[n];
        rank = new byte[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        count = n;
    }

    public int find(int p) {
        while (p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }

    public void union(int p, int q) {
        int pr = find(p);
        int qr = find(q);
        if (pr == qr) return;
        if (rank[pr] < rank[qr]) {
            parent[pr] = qr;
        } else {
            parent[qr] = pr;
            if (rank[pr] == rank[qr]) rank[pr]++;
        }
        count--;
    }

    public boolean connected(int p, int q) {
        return find(p) == find(q);
    }
}
```