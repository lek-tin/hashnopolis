---
title: "Read N Characters Given Read4"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stream"]
categories: ["algorithm"]
date: 2018-11-19T23:52:19-08:00
lastmod: 2019-10-03T15:52:19-08:00
draft: false
archive: false
---
The API: `int read4(char *buf)` reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the `read4` API, implement the function `int read(char *buf, int n) `that reads n characters from the file.

### Example 1
```
Input: buf = "abc", n = 4
Output: "abc"
Explanation: The actual number of characters read is 3, which is "abc".
```
### Example 2
```
Input: buf = "abcde", n = 5
Output: "abcde"
```
#### Note
The read function will only be called once for each test case.
### Solution
```python
"""
The read4 API is already defined for you.

    @param buf, a list of characters
    @return an integer
    def read4(buf):

# Below is an example of how the read4 API can be called.
file = File("abcdefghijk") # File is "abcdefghijk", initially file pointer (fp) points to 'a'
buf = [' '] * 4 # Create buffer with enough space to store characters
read4(buf) # read4 returns 4. Now buf = ['a','b','c','d'], fp points to 'e'
read4(buf) # read4 returns 4. Now buf = ['e','f','g','h'], fp points to 'i'
read4(buf) # read4 returns 3. Now buf = ['i','j','k',...], fp points to end of file
"""
"""
The read4 API is already defined for you.

    @param buf, a list of characters
    @return an integer
    def read4(buf):

# Below is an example of how the read4 API can be called.
file = File("abcdefghijk") # File is "abcdefghijk", initially file pointer (fp) points to 'a'
buf = [' '] * 4 # Create buffer with enough space to store characters
read4(buf) # read4 returns 4. Now buf = ['a','b','c','d'], fp points to 'e'
read4(buf) # read4 returns 4. Now buf = ['e','f','g','h'], fp points to 'i'
read4(buf) # read4 returns 3. Now buf = ['i','j','k',...], fp points to end of file
"""
class Solution:
    def read(self, buf, n):
        """
        :type buf: Destination buffer (List[str])
        :type n: Number of characters to read (int)
        :rtype: The number of actual characters read (int)
        """
        curr, size = 0, 4
        while curr < n:
            tempBuf = ["" for _ in range(size)]
            # n can be longer than the file size
            # take the min to decide whether to stop
            #           "abc", 3
            #                           "abcdef", 5
            chunk = min(read4(tempBuf), n-curr)
            # If chunk == 0, file has been read completely
            if chunk == 0:
                break
            print(chunk)
            buf[curr: curr+chunk] = tempBuf
            curr += chunk

        return curr
```