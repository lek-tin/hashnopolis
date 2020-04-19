---
title: "Perform String Shifts"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-04-14T00:02:18-07:00
lastmod: 2020-04-14T00:02:18-07:00
draft: false
archive: false
---

You are given a string `s` containing lowercase English letters, and a matrix shift, where `shift[i] = [direction, amount]`:

- `direction` can be `0` (for left shift) or `1` (for right shift).
- `amount` is the amount by which string s is to be shifted.
- A left shift by `1` means remove the first character of `s` and append it to the end.
- Similarly, a right shift by `1` means remove the last character of `s` and add it to the beginning.
- Return the final string after all operations.

### Example 1

```
Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
```

### Example 2

```
Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
```

#### Constraints

1. `1 <= s.length <= 100`
2. s only contains lower case English letters.
3. `1 <= shift.length <= 100`
4. `shift[i].length == 2`
5. `0 <= shift[i][0] <= 1`
6. `0 <= shift[i][1] <= 100`

### Solution

```python
class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        offset = 0
        N = len(s)

        for sh in shift:
            offset += sh[1] if sh[0] > 0 else -sh[1]
            offset %= N

        res = ""
        for i in range(len(s)):
            res += s[(-offset+i)%N]

        return res
```
