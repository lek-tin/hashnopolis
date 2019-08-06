---
title: "String to Integer Atoi"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "atoi", "string", "integer"]
categories: ["algorithm"]
date: 2019-01-24T23:03:11-08:00
draft: false
archive: false
---
Implement `atoi` which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the `32-bit` signed integer range: `[−231,  231 − 1]`. If the numerical value is out of the range of representable values, `INT_MAX (231 − 1)` or `INT_MIN (−231)` is returned.
### Example 1
```
Input: "42"
Output: 42
```
### Example 2
```
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
Then take as many numerical digits as possible, which gets 42.
```
### Example 3
```
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
```
### Example 4
```
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical  digit or a +/- sign. Therefore no valid conversion could be performed.
```
### Example 5
```
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.
```
### Solution
```python
class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        str = str.strip()
        if str == "":
            return 0

        INT_MIN = -2147483648
        INT_MAX = 2147483647
        cur = 0
        isNegative = False

        while cur<len(str) and str[cur]==' ':
            cur += 1

        if len(str) == 0:
            return 0
        if str[cur] == '-':
            isNegative = True
            cur += 1
        elif str[cur] == '+':
            isNegative = False
            cur += 1

        solution = 0
        for i in range(cur, len(str)):
            if not str[i].isdigit():
                break
            else:
                solution *= 10
                solution += int(str[i])

        if isNegative:
            solution = -1 * solution

        if solution < INT_MIN:
            return INT_MIN
        elif solution > INT_MAX:
            return INT_MAX

        return solution
```