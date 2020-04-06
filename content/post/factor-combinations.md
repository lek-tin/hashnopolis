---
title: "Factor Combinations"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "backtracking", "dfs"]
categories: ["algorithm"]
date: 2019-02-17T14:18:45-08:00
draft: true
archive: false
---
Numbers can be regarded as product of its factors. For example,
```
8 = 2 x 2 x 2;
  = 2 x 4.
```
Write a function that takes an integer `n` and return all possible combinations of its factors.

#### Note
- You may assume that n is always positive.
- Factors should be greater than 1 and less than n.
### Example 1
```
Input: 1
Output: []
Example 2:

Input: 37
Output:[]
```
### Example 3
```
Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
```
### Example 4
```
Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
```
### Solution:
```java
// Time: O(NlogN)
class Solution {
    public List<List<Integer>> getFactors(int n) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        helper(n, 2, list, result);

        return result;
    }

    public void helper(
            int n,                      // target number to be factorized
            int start,                  // the smallest factor. Also serves to prevent duplicates like [2,2,3] and [2,3,2]
            List<Integer> list,         // factors accumulated till n
            List<List<Integer>> result  // result
    ) {
        if (n == 1) {
            // Candidate exists
            if (list.size() > 1) {
                result.add(new ArrayList<Integer>(list));
            }
            return;
        }
        // if i > sqrt(n) and i doesnt count for a factor. Then
        for (int i = start; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                list.add(i);
                helper(n / i, i, list, result);
                list.remove(list.size() - 1);
            }
        }
        // Add the previous n / i to the list. For example, to factorize 64 = [2, 2, 2] + factorize(8)
        list.add(n);
        helper(1, n, list, result);
        list.remove(list.size() - 1);
    }
}
```
[Hint](https://www.cnblogs.com/grandyang/p/5332722.html)