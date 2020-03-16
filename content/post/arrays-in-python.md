---
title: "Arrays in Python"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["array", "python"]
categories: ["programming-language"]
date: 2018-11-13T22:05:44-08:00
draft: false
archive: false
---
### Reverse an array
```python
arr = [1, 2, 3, 4, 5, 6, 7, 8]
reversedArray = arr[::-1]
# [8, 7, 6, 5, 4, 3, 2, 1]
arr[3:5] = arr[3:5][::-1]
```

### Slices with step

`s[i:j:k]` means "slice of s from i to j with step k". When i and j are absent, the whole sequence is assumed and thus `s[::k]` means "every k-th item" in the entire sequence.
```python
s = range(20)
# output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

# 3rd item from s:
s[::3]
# output: [0, 3, 6, 9, 12, 15, 18]

# 3rd item from s[2:]:
s[2:]
# output: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
s[2::3]
# output: [2, 5, 8, 11, 14, 17]

# 3rd item from s[5:12]:
s[5:12]
# output: [5, 6, 7, 8, 9, 10, 11]
s[5:12:3]
# output: [5, 8, 11]

# 3rd item from s[:10]:
s[:10]
# output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
s[:10:3]
# output: [0, 3, 6, 9]
```

### Clone a list

`newArr = oldArr[:]`