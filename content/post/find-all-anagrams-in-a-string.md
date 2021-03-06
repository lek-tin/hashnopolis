---
title: "Find All Anagrams in a String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "sliding-window"]
categories: ["algorithm"]
date: 2018-12-15T09:42:45-08:00
lastmod: 2020-05-23T18:00:45-08:00
draft: false
archive: false
---

Given a string `s` and a **non-empty** string `p`, find all the start indices of `p`'s anagrams in `s`.

Strings consists of lowercase English letters only and the length of both strings `s` and `p` will not be larger than 20,100.

The order of output does not matter.

### Example 1

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

### Example 2

```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

### Solution

Java
```java
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        HashMap<Character, Integer> s_map = new HashMap<>();
        HashMap<Character, Integer> p_map = new HashMap<>();
        int s_len = s.length();
        int p_len = p.length();
        List<Integer> res = new ArrayList<>();

        if (s_len < p_len) {
            return res;
        }

        for (char ch: p.toCharArray()) {
            p_map.put(ch, p_map.getOrDefault(ch, 0) + 1);
        }

        for (int i = 0; i < s_len; i++) {
            char ch = s.charAt(i);
            s_map.put(ch, s_map.getOrDefault(ch, 0) + 1);

            if (i < p_len-1) {
                continue;
            }

            if (i >= p_len) {
                char headChar = s.charAt(i-p_len);
                s_map.put(headChar, s_map.get(headChar)-1);
                if ( s_map.get(headChar) == 0) {
                    s_map.remove(headChar);
                }
            }

            if (!p_map.containsKey(ch)) {
                continue;
            }

            if (s_map.equals(p_map)) {
                res.add(i - p_len + 1);
            }

        }

        return res;
    }
}
```

Python
```python
from collections import Counter

class Solution:
    def findAnagrams(self, s: str, target: str) -> List[int]:
        res = []
        counter_target = Counter(target)
        counter_cur = Counter(s[:len(target)])

        if counter_cur == counter_target:
            res.append(0)

        for id in range(len(target), len(s)):
            startChar = s[id - len(target)]
            endChar = s[id]
            counter_cur[endChar] += 1
            counter_cur[startChar] -= 1
            if counter_cur[startChar] == 0:
                del counter_cur[startChar]  # required for comparison
            if counter_cur == counter_target:
                # id is the ending index, find the starting
                res.append(id - len(target) + 1)

        return res
```
