---
title: "Lexicographical Numbers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "trie"]
categories: ["algorithm"]
date: 2020-02-16T01:09:58-08:00
lastmod: 2020-02-16T01:09:58-08:00
draft: false
archive: false
---
Given an integer n, return 1 - n in lexicographical order.  

For example, given 13, return: `[1,10,11,12,13,2,3,4,5,6,7,8,9]`.  

Please optimize your algorithm to use less time and space. The input size may be as large as `5,000,000`.  

### Solution
```python
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        res = [0 for i in range(n)]

        curr = 1

        for i in range(n):
            res[i] = curr
            # lower digits
            if curr * 10 <= n:
                curr *= 10
            # higher digits
            else:
                # if curr is greater than n, we reverse it by /10
                if curr >= n:
                    curr //= 10
                curr += 1
                # if curr becomes X00000, we need to get rid of the trailing 0's
                while curr % 10 == 0:
                    curr //= 10

        return res
# Input: n = 50
# Output: [1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,24,25,26,27,28,29,3,30,31,32,33,34,35,36,37,38,39,4,40,41,42,43,44,45,46,47,48,49,5,50,6,7,8,9]
```
Recursion
```python
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        res = [0 for i in range(n)]
        for i in range(10):
            self.helper(i, n, res)
        return res

    def helper(self, curr, n, res):
        if curr > n:
            return

        res.append(curr)

        for i in range(10):
            if curr*10 + i <= n:
                self.helper(curr*10+i, n, res)
            else:
                break
```