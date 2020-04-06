---
title: "Smallest String With Swaps"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "union-find", "connected-components"]
categories: ["algorithm"]
date: 2020-04-01T21:23:13-07:00
lastmod: 2020-04-01T21:23:13-07:00
draft: false
archive: false
---

You are given a string `s`, and an array of pairs of indices in the string pairs where `pairs[i] = [a, b]` indicates `2 indices(0-indexed)` of the string.  

You can swap the characters at any pair of indices in the given `pairs` **any number of times**.  

Return the lexicographically smallest string that s can be changed to after using the swaps.  

### Example 1

```
Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
```

### Example 2

```
Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
```

### Example 3

```
Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
```

#### Constraints

1. `1 <= s.length <= 10^5`
2. `0 <= pairs.length <= 10^5`
3. `0 <= pairs[i][0], pairs[i][1] < s.length`
4. `s` only contains lower case English letters.

### Solution (dfs)

Time: `O(nlogn + k*(V+E))`  
Space: `O(n)`  
```c++
class Solution {
public:
  string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
    vector<vector<int>> g(s.length());
    for (const auto& e : pairs) {
      g[e[0]].push_back(e[1]);
      g[e[1]].push_back(e[0]);
    }

    unordered_set<int> seen;
    vector<int> idx;
    string tmp;
    function<void(int)> dfs = [&](int cur) {
      if (seen.count(cur)) return;
      seen.insert(cur);
      idx.push_back(cur);
      tmp += s[cur];
      for (int nxt : g[cur]) dfs(nxt);
    };

    for (int i = 0; i < s.length(); ++i) {
      if (seen.count(i)) continue;
      idx.clear();
      tmp.clear();
      dfs(i);
      sort(begin(tmp), end(tmp));
      sort(begin(idx), end(idx));
      for (int k = 0; k < idx.size(); ++k)
        s[idx[k]] = tmp[k];
    }
    return s;
  }
};
```

### Solution (union find using python)

Input: `"qdwyt", [[2,3],[3,2],[0,1],[4,0],[3,2]]`  
root 1: ['t', 'q', 'd']  
root 2: ['y', 'w']  
-------------------  
Time: `O(nlogn + V+E)`  
Space: `O(n)`  
```python
class UnionFind:
    def __init__(self, n):
        self.set = [ i for i in range(n) ]

    def find(self, x):
        if self.set[x] != x:
            # path compression
            self.set[x] = self.find(self.set[x])
        return self.set[x]

    def union(self, x, y):
        x_root, y_root = self.find(x), self.find(y)
        # if x_root == y_root:
        #     return False
        self.set[max(x_root, y_root)] = min(x_root, y_root)
        return True

class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]) -> str:
        union_find = UnionFind(len(s))

        for a, b in pairs:
            union_find.union(a, b)

        components = collections.defaultdict(list)
        for i in range(len(s)):
            root = union_find.find(i)
            components[root].append(s[i])
        for key, _ in components.items():
            components[key].sort(reverse=True)

        res = ""
        for i in range(len(s)):
            res += components[union_find.find(i)].pop()

        return res
```

### Solution (union find using C++)

```c++
class Solution {
public:
  string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
    int n = s.length();
    vector<int> roots(n);
    // initialization of path compression
    iota(begin(roots), end(roots), 0);

    function<int(int)> find = [&](int x) {
      return roots[x] == x ? x : roots[x] = find(roots[x]);
    };

    for (const auto& e : pairs)
      roots[find(e[0])] = find(e[1]); // union

    vector<vector<int>> idx(n);
    vector<string> ss(n);

    for (int i = 0; i < s.length(); ++i) {
      int id = find(i);
      idx[id].push_back(i); // already sorted
      ss[id].push_back(s[i]);
    }

    for (int i = 0; i < n; ++i) {
      sort(begin(ss[i]), end(ss[i]));
      for (int k = 0; k < idx[i].size(); ++k)
        s[idx[i][k]] = ss[i][k];
    }

    return s;
  }
};
```
