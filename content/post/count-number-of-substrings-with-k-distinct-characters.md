---
title: "Count Number of Substrings With K Distinct Characters"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "substring"]
categories: ["algorithm"]
date: 2019-01-30T00:56:00-08:00
draft: false
archive: false
---
Given a string, find the length of the longest substring T that contains at most k distinct characters.

### Example 1
```
Input: s = "eceba", k = 2
Output: 5
Explanation: "ec", "ce", "eb", "ba" and "ece" k distinct characters.
```
### Example 2
```
Input: s = "aa", k = 1
Output: 2
Explanation: "a" and "aa" have k distinct characters.
```

```java
import java.util.Arrays; 
  
public class CountKSubStr 
{ 
    // Function to count number of substrings 
    // with exactly k unique characters 
    int countkDist(String str, int k) { 
        // Initialize result 
        int res = 0; 
  
        int n = str.length(); 
  
        // To store count of characters from 'a' to 'z' 
        int count[] = new int[26]; 
  
        // Consider all substrings beginning with 
        // str[i] 
        for (int i = 0; i < n; i++) { 
            int distinctChars = 0; 
  
            // Initializing count array with 0 
            Arrays.fill(count, 0); 
  
            // Consider all substrings between str[i..j] 
            for (int j=i; j<n; j++) { 
            	char c = str.charAt(j);

                // If this is a new character for this 
                // substring, increment distinctChars. 
                if (count[c - 'a'] == 0) 
                    distinctChars++; 
  
                // Increment count of current character 
                count[c - 'a']++; 
  
                // If distinct character count becomes k, 
                // then increment result. 
                if (distinctChars == k) 
                    res++; 
            } 
        } 
  
        return res; 
    } 
} 
```