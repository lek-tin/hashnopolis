---
title: "Bitwise and of Numbers Range"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bit-manipulation"]
categories: ["algorithm"]
date: 2020-03-31T01:24:56-07:00
lastmod: 2020-04-23T18:24:56-07:00
draft: false
archive: false
---
Given a range `[m, n]` where `0 <= m <= n <= 2147483647`, return the bitwise AND of all numbers in this range, inclusive.

### Example 1

```
Input: [5,7]
Output: 4
```

### Example 2

```
Input: [0,1]
Output: 0
```

### Solution

Java
```java
class Solution {
    public int rangeBitwiseAnd(int m, int n) {
        int shift = 0;

        while (m < n) {
            m >>= 1;
            n >>= 1;
            shift++;
            // System.out.println("m: " + String.format("%32s", Integer.toBinaryString(m)).replaceAll(" ", "0")); 
            // System.out.println("n: " + String.format("%32s", Integer.toBinaryString(n)).replaceAll(" ", "0"));
            // System.out.println(shift);
        }

        return m<<shift;
    }
}
```

Python
```python
class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        shift = 0

        while m < n:
            m = m >> 1
            n = n >> 1
            shift += 1

        m = m << shift

        return m
```
