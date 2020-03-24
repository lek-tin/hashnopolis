---
title: "Evaluate Division"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "dfs", "floyd-warshall", "dynamic-programming", "union-find"]
categories: ["algorithm"]
date: 2020-03-21T21:57:58-07:00
lastmod: 2020-03-21T21:57:58-07:00
draft: false
archive: false
---
Equations are given in the format `A / B = k`, where `A` and `B` are variables represented as strings, and `k` is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return `-1.0`.  

### Example

```
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].
```

The input is: `vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>`.  

According to the example above:  

```
equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
```

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

### Solution (dfs)
```python
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        def check(numer, denom, lookup, visited):
            if numer in lookup and denom in lookup[numer]:
                return (True, lookup[numer][denom])

            for k, v in lookup[numer].items():
                if k not in visited:
                    visited.add(k)
                    tmp = check(k, denom, lookup, visited)
                    if tmp[0]:
                        return (True, v * tmp[1])

            return (False, 0)

        lookup = collections.defaultdict(dict)
        for i, e in enumerate(equations):
            a, b = e
            lookup[a][b] = values[i]
            if values[i]:
                lookup[b][a] = 1.0 / values[i]
        # equations: [["a","b"],["b","c"]]
        # values: [2.0,3.0]
        # lookup: {'a': {'b': 2.0}, 'b': {'a': 0.5, 'c': 3.0}, 'c': {'b': 0.3333333333333333}}
        # queries: [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

        result = []
        for q in queries:
            visited = set()
            tmp = check(q[0], q[1], lookup, visited)
            result.append(tmp[1] if tmp[0] else -1)

        return result
```

### Solution (bfs)

```java
class Solution {
public:
    vector<double> calcEquation(vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries) {
        vector<double> res;
        unordered_map<string, unordered_map<string, double>> g;
        for (int i = 0; i < equations.size(); ++i) {
            g[equations[i].first].emplace(equations[i].second, values[i]);
            g[equations[i].first].emplace(equations[i].first, 1.0);
            g[equations[i].second].emplace(equations[i].first, 1.0 / values[i]);
            g[equations[i].second].emplace(equations[i].second, 1.0);
        }
        for (auto query : queries) {
            if (!g.count(query.first) || !g.count(query.second)) {
                res.push_back(-1.0);
                continue;
            }
            queue<pair<string, double>> q;
            unordered_set<string> visited{query.first};
            bool found = false;
            q.push({query.first, 1.0});
            while (!q.empty() && !found) {
                for (int i = q.size(); i > 0; --i) {
                    auto t = q.front(); q.pop();
                    if (t.first == query.second) {
                        found = true;
                        res.push_back(t.second);
                        break;
                    }
                    for (auto a : g[t.first]) {
                        if (visited.count(a.first)) continue;
                        visited.insert(a.first);
                        a.second *= t.second;
                        q.push(a);
                    }
                }
            }
            if (!found) res.push_back(-1.0);
        }
        return res;
    }
};
```

### Solution (Floyd-Warshall)

```python
from collections import defaultdict

class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        G = defaultdict(dict)
        for edge, val in zip(equations, values):
            s, e = edge
            G[s][e], G[e][s] = val, 1/val
            G[s][s], G[e][e] = 1, 1

        # Floyd-Warshall
        for mid in G.keys():
            for s in G[mid]:
                for e in G[mid]:
                    G[s][e] = G[s][mid] * G[mid][e]

        return [G[s].get(e, -1.0) for s, e in queries]
```

### Solution (union-find)

```python
```
