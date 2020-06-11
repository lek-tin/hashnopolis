---
title: "Is Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "string"]
categories: ["algorithm"]
date: 2020-06-09T00:07:08-07:00
lastmod: 2020-06-09T00:07:08-07:00
draft: false
archive: false
---

Given a string `s` and a string `t`, check if `s` is subsequence of `t`.  

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).  

**Follow up:**
If there are lots of incoming `S`, say `S1, S2, ... , Sk` where `k >= 1B`, and you want to check one by one to see if `T` has its subsequence. In this scenario, how would you change your code?  

**Credits:**
Special thanks to @pbrother for adding this problem and creating all test cases.  

### Example 1:

```
Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
```

#### Constraints:

1. `0 <= s.length <= 100`
2. `0 <= t.length <= 10^4`
3. Both strings consists only of lowercase characters.

### Solution (iterating over s)

Time: `O(n)`  
Space: `O(n)`  

Java
```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s == null || s.length() == 0) return true;
        if (t.length() < s.length()) return false;

        HashMap<Character, Integer> lookup_s = new HashMap<Character, Integer>();
        HashMap<Character, Integer> lookup_t = new HashMap<Character, Integer>();

        for (char c: s.toCharArray()) {
            lookup_s.put(c, lookup_s.getOrDefault(c, 0)+1);
        }
        for (char c: t.toCharArray()) {
            lookup_t.put(c, lookup_t.getOrDefault(c, 0)+1);
        }

        int i = 0, count = 0;
        for (char c: s.toCharArray()) {
            if (!lookup_t.containsKey(c)) {
                return false;
            }

            while (i < t.length() && t.charAt(i) != c) {

                i++;
            }

            if (i >= t.length()) break;

            if (t.charAt(i) == c) count++;

            i++;
        }

        return count == s.length();
    }
}
```

### Solution (iterating over t)

Time: `O(n)`  
Space: `O(1)`  

Java
```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s == null || s.length() == 0) { return true; }
        int j = 0;
        for (char c: t.toCharArray()) {
            if (c == s.charAt(j)) { j++; }
            if (j == s.length()) { return true; }
        }
        return false;
    }
}
```
