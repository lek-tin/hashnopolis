---
title: "Verifying an Alien Dictionary"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2019-09-26T16:52:43-07:00
lastmod: 2019-09-26T16:52:43-07:00
draft: false
archive: false
---
In an alien language, surprisingly they also use english lowercase `letters`, but possibly in a different order. The order of the alphabet is some permutation of lowercase `letters`.  

Given a sequence of `words` written in the alien language, and the order of the alphabet, return true if and only if the given `words` are sorted lexicographicaly in this alien language.   

### Example 1:
```
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
```
### Example 2:
```
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
```
### Example 3:
```
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```

### Note:
1. `1 <= words.length <= 100`
2. `1 <= words[i].length <= 20`
3. `order.length == 26`
4. All characters in `words[i]` and order are english lowercase `letters`.

### Solution
```python
class Solution():
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        orders = {letter: i for i, letter in enumerate(order)}
        n = len(words)

        for i in range(n-1):
            word1 = words[i]
            word2 = words[i+1]

            for j in range(min(len(word1), len(word2))):
                letter1 = word1[j]
                letter2 = word2[j]
                # print(letter1, letter2)
                # print(orders[letter1], orders[letter2])
                # print('----------')
                if letter1 != letter2:
                    if orders[letter1] > orders[letter2]:
                        return False
                    break
                # apple > app is Falsy
                elif len(word1) > len(word2):
                    return False

        return True
```