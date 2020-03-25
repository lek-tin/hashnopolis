---
title: "Top K Frequent Words"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "heap"]
categories: ["algorithm"]
date: 2020-02-29T00:26:38-08:00
lastmod: 2020-02-29T00:26:38-08:00
draft: false
archive: false
---
Given a non-empty list of words, return the `k` most frequent elements.  

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.  

### Example 1

```
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
```

### Example 2

```
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
with the number of occurrence being `4, 3, 2 and 1` respectively.
```

#### Note

You may assume k is always valid, `1 ≤ k ≤` number of unique elements.
Input words contain only lowercase letters.

### Follow-up

Try to solve it in `O(n log k)` time and `O(n)` extra space.

### Solution
```python
from collections import Counter
import heapq

class Pair:
    def __init__(self, word, count):
        self.word = word
        self.count = count

Pair.__lt__ = lambda x, y: x.count > y.count or (x.count == y.count and x.word < y.word)

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        countMap = Counter(words)

        for word in words:
            try:
                countMap[word] += 1
            except:
                countMap[word] = 1

        q = []
        for word, count in countMap.items():
            heapq.heappush(q, Pair(word, count))

        res = []
        while k > 0:
            res.append(heapq.heappop(q).word)
            k -= 1

        return res
```
