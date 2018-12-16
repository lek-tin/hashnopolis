---
title: "Alien Dictionary"
description: "Some description ..."
authors: ["lek-tin"]

tags: ["leetcode"]
categories: ["database"]
date: 2018-12-08T23:57:13+08:00
draft: false
archive: false
---
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of **non-empty** words from the dictionary, where **words are sorted lexicographically by the rules of this new language**. Derive the order of letters in this language.

**Example 1:**
```
Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
```
**Example 2:**
```
Input:
[
  "z",
  "x"
]

Output: "zx"
```
**Example 3:**
```
Input:
[
  "z",
  "x",
  "z"
]

Output: ""
```
**Explanation:** The order is invalid, so return "".

**Note:**
1. You may assume all letters are in lowercase.
2. You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
3. If the order is invalid, return an empty string.
4. There may be multiple valid order of letters, return any one of them is fine.

**Solution:**
```java
class Solution {
    public String alienOrder(String[] words) {
        // construct the graph
        // -1: unvisited
        // List of 26 linked lists
        List<Character>[] graph = new List[26];
        // how many incoming connection to any vertex
        int[] indegree = new int[26];
        Arrays.fill(indegree, -1);
        // Mark all the letters as 0
        // 0: visited
        for (String word: words) {
            for (char c: word.toCharArray()) {
                indegree[c - 'a'] = 0;
            }
        }

        // Iterate each row
        for (int i = 1; i < words.length; i++) {
            // Iterate each char in each row
            for (int j = 0; j < words[i - 1].length() && j < words[i].length(); j++) {
                // from: char above, to: char below
                char from = words[i - 1].charAt(j);
                char to = words[i].charAt(j);
                // from > ...
                //   to > ...
                if (from != to) {
                    // entry from is empty
                    if (graph[from - 'a'] == null) {
                        graph[from - 'a'] = new LinkedList();
                    }
                    // add new lower ordered element to entry from
                    graph[from - 'a'].add(to);
                    indegree[to - 'a']++;
                    break;
                }
            }
        }

        // topology sort
        StringBuilder sb = new StringBuilder();
        Queue<Character> queue = new LinkedList();
        for (char c = 'a'; c <= 'z'; c++) {
            // Iterate each visited entry
            if (indegree[c - 'a'] == 0) {
                queue.offer(c);
            }
        }
        int count = 0;
        // Count the total number of letters appeared
        for (int i: indegree) {
            count += i != -1 ? 1 : 0;
        }
        while (!queue.isEmpty()) {
            char c = queue.poll();
            sb.append(c);
            count--;
            if (graph[c - 'a'] == null) {
                continue;
            }
            for (char neighbour: graph[c - 'a']) {
                indegree[neighbour - 'a']--;
                if (indegree[neighbour - 'a'] == 0) {
                    queue.offer(neighbour);
                }
            }
        }
        // if count == 0, means a valid order is possible, thud return the order.
        return count == 0 ? sb.toString() : "";
    }
}
```
