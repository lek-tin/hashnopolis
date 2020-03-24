---
title: "Minimum Window Substring"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers", "sliding-window"]
categories: ["algorithm"]
date: 2019-03-16T16:05:09-08:00
lastmod: 2020-03-14T16:05:09-08:00
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

When `T` contains no duplicate characters
```python
import math

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s:
            return ""
        if not t:
            return s[0]

        lookup = set(list(t))
        K = len(lookup)
        N = len(s)
        start, end = 0, 0
        temp = {}
        maxLen = math.inf

        while end < N:
            while end < N and len(temp) != K:
                if s[end] in lookup:
                    try:
                        temp[end] += 1
                    except:
                        temp[end] = 1
                end += 1

            while len(temp) == K:
                if s[start] in lookup:
                    temp[start] -= 1
                    if temp[start] == 0:
                        del temp[start]
                start += 1

            if end-start < maxLen:
                #update window
                maxLen = end - start
                res = s[start-1:end]

        return res
```

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
from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = collections.Counter(t)            #hash table to store char frequency
        missing = len(t)                         #total number of chars we care
        start, end = 0, 0
        i = 0

        for j, char in enumerate(s, 1):          # index j starts from 1
            if need[char] > 0:                   # only characters in t can be possibly >0
                missing -= 1
            need[char] -= 1
            print("j:", j, "- missing:", missing, "-", need)
            if missing == 0:                     # match all chars
                # If 'a' is in t, and the count for 'a' is less than 0, then it is not optimal. 
                while i < j and need[s[i]] < 0:  # remove chars to find the real start
                    need[s[i]] += 1
                    i += 1
                print(s[i], need[s[i]])
                need[s[i]] += 1                  # make sure the first appearing char satisfies need[char]>0
                missing += 1                     # we skip this as a first char, so add missing by 1
                print(i, need)
                if end == 0 or j-i < end-start:  # update window
                    start, end = i, j
                i += 1                           # update i to i+1 for next window because we increased missing by 1
            print("------------")
        return s[start:end]
# Output:
#
# j: 1 - missing: 2 - Counter({'B': 1, 'C': 1, 'A': 0})
# ------------
# j: 2 - missing: 2 - Counter({'B': 1, 'C': 1, 'A': 0, 'D': -1})
# ------------
# j: 3 - missing: 2 - Counter({'B': 1, 'C': 1, 'A': 0, 'D': -1, 'O': -1})
# ------------
# j: 4 - missing: 1 - Counter({'C': 1, 'A': 0, 'B': 0, 'D': -1, 'O': -1})
# ------------
# j: 5 - missing: 1 - Counter({'C': 1, 'A': 0, 'B': 0, 'D': -1, 'O': -1, 'E': -1})
# ------------
# j: 6 - missing: 0 - Counter({'A': 0, 'B': 0, 'C': 0, 'D': -1, 'O': -1, 'E': -1})
# A 0
# 0 Counter({'A': 1, 'B': 0, 'C': 0, 'D': -1, 'O': -1, 'E': -1})
# ------------
# j: 7 - missing: 1 - Counter({'A': 1, 'B': 0, 'C': 0, 'D': -1, 'E': -1, 'O': -2})
# ------------
# j: 8 - missing: 1 - Counter({'A': 1, 'B': 0, 'C': 0, 'E': -1, 'D': -2, 'O': -2})
# ------------
# j: 9 - missing: 1 - Counter({'A': 1, 'B': 0, 'C': 0, 'D': -2, 'O': -2, 'E': -2})
# ------------
# j: 10 - missing: 1 - Counter({'A': 1, 'C': 0, 'B': -1, 'D': -2, 'O': -2, 'E': -2})
# ------------
# j: 11 - missing: 0 - Counter({'A': 0, 'C': 0, 'B': -1, 'D': -2, 'O': -2, 'E': -2})
# C 0
# 5 Counter({'C': 1, 'A': 0, 'B': 0, 'D': -1, 'O': -1, 'E': -1})
# ------------
# j: 12 - missing: 1 - Counter({'C': 1, 'A': 0, 'B': 0, 'D': -1, 'O': -1, 'E': -1, 'N': -1})
# ------------
# j: 13 - missing: 0 - Counter({'A': 0, 'B': 0, 'C': 0, 'D': -1, 'O': -1, 'E': -1, 'N': -1})
# B 0
# 9 Counter({'B': 1, 'A': 0, 'C': 0, 'D': 0, 'O': 0, 'E': 0, 'N': -1})
# ------------
```

#### Hint
<https://www.youtube.com/watch?v=qzYhjk-nDGU>