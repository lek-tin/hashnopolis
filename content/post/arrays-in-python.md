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

### Clone a list
`newArr = oldArr[:]`