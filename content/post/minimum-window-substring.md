---
title: "Minimum Window Substring"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers", "sliding-window"]
categories: ["algorithm"]
date: 2019-03-16T16:05:09-08:00
draft: false
archive: false
---
Given a string `S` and a string `T`, find the minimum window in `S` which will contain all the characters in `T` in complexity `O(n)`.

### Example:
```
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
```
### Note:
- If there is no such window in S that covers all characters in T, return the empty string "".
- If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
### Solution:
```java
class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null || s.length() == 0 || t.length() == 0) {
            return "";
        }

        int[] counter = new int[128];
        for (char c: t.toCharArray()){
            counter[c]++;
        }
        int mixLen = Integer.MAX_VALUE;
        int left = 0, right = 0;
        int missing = t.length();
        String res = "";

        while (right < s.length()) {
            char c = s.charAt(right);
            if (counter[c] > 0)
                missing--;
            // For characters that are not in T, over time the counts will be negative.
            counter[c]--;
            // Move the right pointer.
            right++;
            // Found a valid range
            while (missing == 0) {
                if (right - left < mixLen) {
                    mixLen = right - left;
                    res = s.substring(left, right);
                }
                // Shrink the [left, right] window by using another two pointers: i and j.
                // Remember, the un-targeted characters should have a negative count.
                counter[s.charAt(left)]++;
                if (counter[s.charAt(left)] > 0)
                    // this would break the inner while loop;
                    missing++;
                left++;
            }
        }

        return res;
    }
}
```
```python
#Based on https://leetcode.com/problems/minimum-window-substring/discuss/26804/12-lines-Python
class Solution(object):
    def minWindow(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        need = collections.Counter(t)            #hash table to store char frequency
        missing = len(t)                         #total number of chars we care
        start, end = 0, 0
        i = 0
        for j, char in enumerate(s, 1):          #index j starts from 1
            if need[char] > 0:
                missing -= 1
            need[char] -= 1
            if missing == 0:                     #match all chars
                while i < j and need[s[i]] < 0:  #remove chars to find the real start
                    need[s[i]] += 1
                    i += 1
                need[s[i]] += 1                  #make sure the first appearing char satisfies need[char]>0
                missing += 1                     #we missed this first char, so add missing by 1
                if end == 0 or j-i < end-start:  #update window
                    start, end = i, j
                i += 1                           #update i to start+1 for next window
        return s[start:end]
```
### Hint
<https://www.youtube.com/watch?v=qzYhjk-nDGU>