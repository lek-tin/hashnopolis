---
title: "Add and Search Word Data Structure Design"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "trie", "dfs"]
categories: ["algorithm"]
date: 2018-11-08T22:37:27-08:00
lastmod: 2019-11-08T22:37:27-08:00
draft: false
archive: false
---
Design a data structure that supports the following two operations:
```
void addWord(word)
bool search(word)
```
`search(word)` can search a literal word or a regular expression string containing only letters `a-z` or `.. A` . means it can represent any one letter.

### Example
```
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```

#### Note
You may assume that all words are consist of lowercase letters `a-z`.

### Solution
```python

```