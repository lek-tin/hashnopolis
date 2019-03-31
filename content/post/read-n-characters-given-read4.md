---
title: "Read N Characters Given Read4"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "api"]
categories: ["algorithm"]
date: 2018-11-19T23:52:19-08:00
draft: false
archive: false
---
The API: `int read4(char *buf)` reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the `read4` API, implement the function `int read(char *buf, int n) `that reads n characters from the file.

**Example 1:**
```
Input: buf = "abc", n = 4
Output: "abc"
Explanation: The actual number of characters read is 3, which is "abc".
```
**Example 2:**
```
Input: buf = "abcde", n = 5
Output: "abcde"
```
**Note:**
The read function will only be called once for each test case.
**Solution:**
```python
# The read4 API is already defined for you.
# @param buf, a list of characters
# @return an integer
# def read4(buf):
# Read up to 4 chars into buf4 and copy to buf (which is modified in-place).
# Time - O(n)
# Space - O(n)
class Solution(object):
    def read(self, buf, n):
        """
        :type buf: Destination buffer (List[str])
        :type n: Maximum number of characters to read (int)
        :rtype: The numbaer of characters read (int)
        """
        total, count = 0, 4

        while count == 4 and total < n:

            buf4 = [""] * 4 # temporary buffer
            # If count is not 4, while will break from next iteration
            count = min(read4(buf4), n - total)
            buf[total:total+count] = buf4
            total += count

        return total
```