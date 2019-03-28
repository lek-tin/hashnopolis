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
            // distinct count needs to be <= k
            /*
            *  k = 3, left = 0
            *  {1, 1, 1, 3, 4, 5}
            */
            while (countMap.size() > k) {
                // Removes the leftmost character
                char leftChar = s.charAt(left);
                countMap.put(leftChar, countMap.get(leftChar) - 1);
                // If leftChar is no longer one of the distinct numbers, remove it.
                if (countMap.get(leftChar) == 0) {
                    countMap.remove(leftChar);
                }
                // Leftbound moves right by 1 step.
                left++;
            }
            // Compare previous max = {1, 1, 1, 3, 4}.length and {3, 4, 5}.length
            max = Math.max(max, i - left + 1);
        }
        return max;
    }

}
```
