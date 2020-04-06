---
title: "Expressive Words"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "encoding"]
categories: ["algorithm"]
date: 2020-03-22T17:23:09-07:00
lastmod: 2020-03-22T17:23:09-07:00
draft: false
archive: false
---
Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".  

For some given string `S`, a query word is stretchy if it can be made to be equal to `S` by any number of applications of the following extension operation: choose a group consisting of characters `c`, and add some number of characters c to the group so that the size of the group is 3 or more.  

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If `S = "helllllooo"`, then the query word "hello" would be stretchy because of these two extension operations: `query = "hello" -> "hellooo" -> "helllllooo" = S`.  

Given a list of query words, return the number of words that are stretchy.  

### Example

```
Input:
S = "heeellooo"
words = ["hello", "hi", "helo"]
Output: 1
Explanation:
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
```

##### Notes

1. `0 <= len(S) <= 100.`
2. `0 <= len(words) <= 100.`
3. `0 <= len(words[i]) <= 100.`
4. `S` and all words in words consist only of lowercase letters

### Solution

```python
from itertools import groupby

class Solution:
    def expressiveWords(self, S: str, words: List[str]) -> int:
        def RLE(S):
            return zip( *[(key, len(list(group))) for key, group in groupby(S)] )
        # input: "heeellooo"
        # ('h', 'e', 'l', 'o') (1, 3, 2, 3)
        R, count = RLE(S)
        print(R, count)
        ans = 0
        for word in words:
            R2, count2 = RLE(word)
            print(R2, count2)
            if R2 != R: continue
            # If c1 < c2, then we can't make the ith group of word equal to the ith word of S by adding characters.
            # If c1 >= 3, then we can add letters to the ith group of word to match the ith group of S, as the latter is extended.
            # Else, if c1 < 3, then we must have c2 == c1 for the ith groups of word and S to match.
            ans += all( c1 >= max(c2, 3) or c1 == c2 for c1, c2 in zip(count, count2) )

        return ans
```