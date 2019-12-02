---
title: "Longest Repeating Substring"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2019-11-30T08:08:34-08:00
lastmod: 2019-11-30T08:08:34-08:00
draft: true
archive: false
---
Given a string `S`, find out the length of the longest repeating `substring(s)`. Return `0` if no repeating substring exists.

### Example 1:
```
Input: "abcd"
Output: 0
Explanation: There is no repeating substring.
```

### Example 2:
```
Input: "abbaba"
Output: 2
Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.
```

### Example 3:
```
Input: "aabcaabdaab"
Output: 3
Explanation: The longest repeating substring is "aab", which occurs 3 times.
```

### Example 4:
```
Input: "aaaaa"
Output: 4
Explanation: The longest repeating substring is "aaaa", which occurs twice.
```

### Note:
1. The string `S` consists of only lowercase English letters from `'a' - 'z'`.
2. `1 <= S.length <= 1500`