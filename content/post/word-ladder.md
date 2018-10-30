---
title: "Word Ladder"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-10-27T01:05:07-07:00
draft: true
archive: false
---
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
**Note:**
- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.
**Example 1:**
```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5
```
**Explanation:** As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
**Example 2:**
```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0
```
**Explanation:** The endWord "cog" is not in wordList, therefore no possible transformation.
**Solution:**
```python
q.push(start)
step = 0
while q is not empty:
  ++step
  size = q.size
  while size-- > 0:
    node = q.pop()
    new_nodes = expand(node)
    if goal in new_nodes:
      return step+1
    q.append(new_nodes)
return NOT_FOUND
```