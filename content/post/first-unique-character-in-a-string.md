---
title: "First Unique Character in a String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-03-15T01:00:21-07:00
lastmod: 2020-03-15T01:00:21-07:00
draft: false
archive: false
---
Given a string, find the first **non-repeating** character in it and return it's index. If it doesn't exist, return `-1`.

### Example 1

```
s = "leetcode"
return 0.
```

### Example 2

```
s = "loveleetcode",
return 2.
```

### Solution

```python
from collections import Counter

class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = Counter(list(s))

        for i in range(len(s)):
            if counter[s[i]] == 1:
                return i

        return -1
```