---
title: "Power of Two"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bit-manipulation"]
categories: ["algorithm"]
date: 2018-09-15T12:56:41-07:00
lastmod: 2020-06-08T23:15:41-07:00
draft: false
archive: false
---

Given an integer, write a function to determine if it is a power of two.

### Example 1

```
Input: 1
Output: true
Explanation: 2**0 = 1
```

### Example 2

```
Input: 16
Output: true
Explanation: 2**4 = 16
```

### Example 3

```
Input: 218
Output: false
```

### Solution

Java
```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        if (n <= 0) return false;

        return (n & n-1) == 0;
    }
}
```

Python
```python
class Solution:
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 0:
            return False
        if n & (n - 1) == 0:
            return True
        return False
```
