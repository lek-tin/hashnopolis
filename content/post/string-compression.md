---
title: "String Compression"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "string", "two-pointers"]
categories: ["algorithm"]
date: 2020-03-14T23:17:08-07:00
lastmod: 2020-03-14T23:17:08-07:00
draft: false
archive: false
---
Given an array of characters, compress it **in-place**.  

The length after compression must always be smaller than or equal to the original array.  

Every element of the array should be a character (not int) of length 1.  

After you are done modifying the input array **in-place**, return the new length of the array.  

#### Follow up

Could you solve it using only `O(1)` extra space?

### Example 1

```
Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
```

### Example 2

```
Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.
```

### Example 3

```
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.
```

##### Note

1. All characters have an `ASCII` value in `[35, 126]`.
2. `1 <= len(chars) <= 1000`.

### Solution

Time: `O(n)`  
Space: `O(1)`  
```python
class Solution:
    def compress(self, chars: List[str]) -> int:
        N = len(chars)
        if not chars or N == 0:
            return []

        curr, start, end = 0, 0, 0

        while end < N:
            while end < N and chars[end] == chars[start]:
                end += 1
            if end - start == 1:
                chars[curr] = chars[start]
                curr += 1
            else:
                chars[curr] = chars[start]
                distance = len(str(end-start))
                chars[curr+1:curr+1+distance] = list(str(end-start))
                curr += distance + 1
            start = end

        return len(chars[:curr])
```