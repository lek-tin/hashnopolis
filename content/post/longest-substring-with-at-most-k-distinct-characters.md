---
title: "Longest Substring With at Most K Distinct Characters"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "substring", "sliding-window"]
categories: ["algorithm"]
date: 2019-03-14T01:03:53-08:00
draft: false
archive: false
---
Given a string, find the length of the longest substring _T_ that contains at most _k_ distinct characters.

### Example 1:
```
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
```
### Example 2:
```
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
```
### Solution
```java
class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        Map<Character, Integer> countMap = new HashMap<>();
        int left = 0;
        int max = 0;

        for(int i = 0; i < s.length(); i++) {
            // character at the right pointer
            char c = s.charAt(i);
            countMap.put(c, countMap.getOrDefault(c, 0) + 1);
            // make sure map size is valid, no need to check left pointer less than s.length()
            // countMap.size() needs to be <= k
            while (countMap.size() > k) {
                char leftChar = s.charAt(left);
                countMap.put(leftChar, countMap.get(leftChar) - 1);

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
