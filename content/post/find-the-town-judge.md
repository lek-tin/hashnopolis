---
title: "Find the Town Judge"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "graph"]
categories: ["algorithm"]
date: 2020-05-10T00:11:26-07:00
lastmod: 2020-05-10T00:11:26-07:00
draft: false
archive: false
---

In a town, there are N people labelled from `1` to `N`. There is a rumor that one of these people is secretly the town judge.  

If the town judge exists, then:

- The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties 1 and 2.
- You are given `trust`, an array of pairs `trust[i]` = [a, b] representing that the person labelled `a` trusts the person labelled `b`.

If the town judge exists and can be identified, return the label of the town judge. Otherwise, return `-1`.  

#### Example 1:

```
Input: N = 2, trust = [[1,2]]
Output: 2
```

#### Example 2:

```
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
```

#### Example 3:

```
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

#### Example 4:

```
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
```

#### Example 5:

```
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
```

#### Note:

- `1 <= N <= 1000`
- `trust.length <= 10000`
- `trust[i]` are all different
- `trust[i][0] != trust[i][1]`
- `1 <= trust[i][0]`, `trust[i][1] <= N`

### Solution (hashset)

Java
```java
class Solution {
    public int findJudge(int N, int[][] trust) {
        HashMap<Integer, HashSet<Integer>> lookup = new HashMap<Integer, HashSet<Integer>>();
        for (int i = 0; i < trust.length; i++) {
            int from = trust[i][0];
            int to = trust[i][1];
            if (lookup.get(from) == null) {
                lookup.put(from, new HashSet<Integer>());
            }
            lookup.get(from).add(to);
        }

        int missingCount = 0;
        int judge = -1;
        for (int i = 1; i <= N; i++) {
            if (lookup.get(i) == null) {
                if (missingCount == 1) return -1;
                missingCount++;
                judge = i;
                continue;
            }
        }

        for (Map.Entry<Integer, HashSet<Integer>> entry: lookup.entrySet()) {
            HashSet<Integer> values = entry.getValue();
            if (!values.contains(judge)) return -1;
        }

        return judge;
    }
}
```

### Solution (indegrees)

Java
```java
public int findJudge(int N, int[][] trust) {
    // early stop
    if (trust.length < N - 1) {
        return -1;
    }

    int[] indegrees = new int[N + 1];
    int[] outdegrees = new int[N + 1];

    for (int[] relation : trust) {
        int from = relation[0];
        int to = relation[1];
        outdegrees[from]++;
        indegrees[to]++;
    }

    for (int i = 1; i <= N; i++) {
        if (indegrees[i] == N - 1 && outdegrees[i] == 0) {
            return i;
        }
    }
    return -1;
}
```
