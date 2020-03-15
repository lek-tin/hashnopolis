---
title: "Count and Say"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-11-03T16:07:54-07:00
draft: false
archive: false
---
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.  1
2.  11
3.  21
4.  1211
5.  111221
1 is read off as `"one 1"` or `11`.
11 is read off as `"two 1s"` or `21`.
21 is read off as `"one 2`, then one `1"` or `1211`.

Given an integer `n` where `1 ≤ n ≤ 30`, generate the `n`<sup>th</sup> term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

### Example 1
```
Input: 1
Output: "1"
Explanation: This is the base case.
```
### Example 2
```
Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
```
### Solution 1
```python
class Solution:
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        i = 1
        res = "1"
        while i < n:
            c = res[0]
            temp = ""
            count = 0
            for j in range(len(res) + 1):
                if j != len(res) and res[j] == c:
                    count += 1
                else:
                    # Iteration finished or encountered different number than "c"
                    temp += str(count)
                    temp += c
                    if j != len(res):
                        c = res[j]
                        count = 1
            res = temp
            i += 1
        return res
```

### Solution 2

```python
import time
class Solution:
    def countAndSay(self, n: int) -> str:
        digits = "1"

        if n == 1:
            return digits

        for i in range(n-1):
            start = 0
            count = 1
            N = len(digits)
            newDigits = ""
            while start < N:
                i = start + 1
                while i < N and digits[i] == digits[i-1]:
                    count += 1
                    i += 1
                newDigits += str(count) + str(digits[start])
                count = 1 
                start = i
                i += 1
            digits = newDigits

        return digits
```