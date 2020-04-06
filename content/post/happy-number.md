---
title: "Happy Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math"]
categories: ["algorithm"]
date: 2018-10-25T23:44:12-07:00
date: 2002-04-02T01:44:12-07:00
draft: false
archive: false
---
Write an algorithm to determine if a number is "happy".  

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals `1` (where it will stay), or it loops endlessly in a cycle which does not include `1`. Those numbers for which this process ends in 1 are happy numbers.  

### Example

```
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

### Solution (int to str)

```python
class Solution:
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        tried = set()
        currentNum = n
        while currentNum not in tried:
            tried.add(currentNum)
            sum = 0
            for num in [int(d) for d in str(currentNum)]:
                sum += num**2
            if sum == 1:
                return True
            currentNum = sum

        return False
```

### Solution (mod operation)

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        tried = set()
        while True:
            newN = 0
            while n:
                temp = n % 10
                n //= 10
                newN += temp * temp
            if newN == 1:
                return True
            if newN in tried:
                return False
            tried.add(newN)
            n = newN
```
