---
title: "Generalized Abbreviation"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "backtracking"]
categories: ["algorithm"]
date: 2020-03-09T17:26:30-07:00
lastmod: 2020-03-09T17:26:30-07:00
draft: false
archive: false
---
Write a function to generate the generalized abbreviations of a word.  

##### Note

The order of the output does not matter.

### Example

```
Input: "word"
Output:
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
```

### Example

```python
class Solution:
    def generateAbbreviations(self, word: str) -> List[str]:
        results = []

        self.backtrack(results, word, "", 0, 0)

        return results

    def backtrack(self, results, word, curr, start, count):
        print(curr, start, count)
        # "" 0 0
        # "" 1 1
        # "" 2 2
        # "" 3 3
        # "" 4 4
        # ------------
        # 3d 4 0
        # ------------
        # 2r 3 0
        # 2r 4 1
        # ------------
        # 2rd 4 0
        # ------------
        # 1o 2 0
        # 1o 3 1
        # 1o 4 2
        # ------------
        # 1o1d 4 0
        # ------------
        # 1or 3 0
        # 1or 4 1
        # ------------
        # 1ord 4 0
        # ------------
        # w 1 0
        # w 2 1
        # w 3 2
        # w 4 3
        # ------------
        # w2d 4 0
        # ------------
        # w1r 3 0
        # w1r 4 1
        # ------------
        # w1rd 4 0
        # ------------
        # wo 2 0
        # wo 3 1
        # wo 4 2
        # ------------
        # wo1d 4 0
        # ------------
        # wor 3 0
        # wor 4 1
        # ------------
        # word 4 0
        # ------------
        if start == len(word):
            if count > 0:
                curr += str(count)
            # curr could be "4" or "abcd"
            results.append(curr)
            print("------------")
        else:
            self.backtrack(results, word, curr, start+1, count+1)
            if count > 0:
                curr += str(count) + word[start]
            else:
                curr += word[start]
            self.backtrack(results, word, curr, start+1, 0)
```
