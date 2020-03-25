---
title: "Longest Substring With at Most Two Distinct Characters"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "substring", "sliding-window", "two-pointers"]
categories: ["algorithm"]
date: 2019-03-16T13:30:30-07:00
draft: false
archive: false
---
Given `a` string `s`, find the length of the longest substring `t` that contains at most `2` distinct characters.

### Example 1
```
Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
```
### Example 2
```
Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
```

### Solution
```java
class Solution {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        HashMap<Character, Integer> countMap = new HashMap<Character, Integer>();
        int left = 0;
        int max = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            countMap.put(c, countMap.getOrDefault(c, 0) + 1);

            while (countMap.size() > 2) {
                char leftChar = s.charAt(left);
                countMap.put(leftChar, countMap.getOrDefault(leftChar, 0) - 1);

                if (countMap.get(leftChar) == 0) {
                    countMap.remove(leftChar);
                }
                left++;
            }
            max = Math.max(max, i - left + 1);
        }

        return max;
    }
}
```

### Related
[Longest Substring With at Most K Distinct Characters](/post/longest-substring-with-at-most-k-distinct-characters/)