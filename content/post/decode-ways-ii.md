---
title: "Decode Ways II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-02-25T02:24:42-08:00
lastmod: 2020-02-25T02:24:42-08:00
draft: false
archive: false
---
A message containing letters from A-Z is being encoded to numbers using the following mapping way:  
```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```
Beyond that, now the encoded string can also contain the character `'*'`, which can be treated as one of the numbers from `1` to `9`.  

Given the encoded message containing digits and the character `'*'`, return the total number of ways to decode it.  

Also, since the answer may be very large, you should return the output mod `10^9 + 7`.  

### Example 1:
```
Input: "*"
Output: 9
Explanation: The encoded message can be decoded to the string: `"A", "B", "C", "D", "E", "F", "G", "H", "I"`.
```
### Example 2:
```
Input: "1*"
Output: 9 + 9 = 18
```

### Note:
1. The length of the input string will fit in range `[1, 105]`.
2. The input string will only contain the character `'*'` and digits `'0' - '9'`.

### Hint
`dp[i]` is used to store the number of decodings possible by considering the characters in the given string s upto the `(i−1)​`th index only(including it).  
```
‘*’ later:
	?*
		1. ? == '1'; dp[i] = (dp[i] + 9 * dp[i - 2]) % MOD;
		2. ? == '2'; dp[i] = (dp[i] + 6 * dp[i - 2]) % MOD;
		3. ? == '*'; dp[i] = (dp[i] + 15 * dp[i - 2]) % MOD;
		4. else, it make 0 contributions to the result.
'*' start:
	*?
		1. ? <= '6'; (dp[i] + 2 * dp[i - 2]) % MOD  
		2. ? > '6'; (dp[i] + 1 * dp[i - 2]) % MOD 
```

### Solution
Python version
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        N = len(s)
        
        if not s or N == 0:
            return 0
    
        dp = [0] * (N+1)
        dp[0] = 1
        dp[1] = 9 if s[0] == "*" else 1 if s[0] != "0" else 0
        MOD = 1000000007
        
        for i in range(2, N+1):
            # 1*
            # 2*
            # **
            if s[i-1] == '*':
                dp[i] = 9 * dp[i-1];
                if s[i-2] == "1":
                    dp[i] = (dp[i] + 9 * dp[i - 2]) % MOD
                elif s[i-2] == "2":
                    dp[i] = (dp[i] + 6 * dp[i - 2]) % MOD
                elif s[i-2] == "*":
                    dp[i] = (dp[i] + 15 * dp[i - 2]) % MOD
            # * (0-9)
            else:
                dp[i] = dp[i - 1] if s[i - 1] != '0' else 0
                if s[i-2] == "1" or (s[i-2] == "2" and s[i-1] <= "6"):
                    dp[i] = (dp[i] + dp[i - 2]) % MOD
                elif s[i-2] == "*":
                    dp[i] = ( dp[i] + (2 if s[i-1] <= '6' else 1) * dp[i - 2] ) % MOD
        
        return dp[N]
```