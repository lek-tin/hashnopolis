---
title: "Missing Words"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-11-06T17:03:07-08:00
draft: false
archive: false
---
Julia and Samantha are playing with strings. Julia has a string S, and Samantha has a string T which is a subsequence of string S. They are trying to find out what words are missing in `T`.
Help Julia and Samantha to solve the problem. List all the missing words in `T`, such that inserting them at the appropriate positions in `T`, in the same order, results in the string `S`.
Constraints
`1 <= |T| <= |S| <= 106`, where `|X|` denotes the length of string `X`.
The length of each word will be less than `15`.

### Function Parameter
You are given a function missingWords that takes the strings `S` and `T` as its arguments. Your solution should return an array of the missing words.

Sample Input:  
```
I am using hackerrank to improve programming
am hackerrank to improve
```
Sample Output:  
```
I
using
programming
```
Explanation:  
Missing words are:  
1. I
2. using
3. programming
### Solution
```python
def missingWords(s, t):
  missing = []
  a = s.split(" ")
  b = t.split(" ")
  j = 0
  for i in range(len(a)):
    if j >= len(b):
      missing.append(a[i])
    elif a[i] != b[j]:
      missing.append(a[i])
    else:
      j += 1
  print(missing)
  return missing

missingWords("I am using hackerrank to improve programming", "am hackerrank to improve")
# Output: ['I', 'using', 'programming']
```