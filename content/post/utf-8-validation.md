---
title: "Utf 8 Validation"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "ood", "bit-manipulation"]
categories: ["algorithm"]
date: 2020-03-25T23:37:58-07:00
lastmod: 2020-03-25T23:37:58-07:00
draft: false
archive: false
---

A character in UTF8 can be from **1 to 4** bytes long, subjected to the following rules:

1. For `1-byte` character, the first bit is a `0`, followed by its unicode code.
2. For `n-bytes` character, the first `n-bits` are all one's, the `n+1` bit is `0`, followed by `n-1` bytes with most significant `2` bits being `10`.

This is how the UTF-8 encoding would work:

```
   Char. number range  |        UTF-8 octet sequence
      (hexadecimal)    |              (binary)
   --------------------+---------------------------------------------
   0000 0000-0000 007F | 0xxxxxxx
   0000 0080-0000 07FF | 110xxxxx 10xxxxxx
   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

Given an array of integers representing the data, return whether it is a valid `utf-8 `encoding.

#### Note

1. The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.

### Example 1

```
data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.

Return true.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.
```

### Example 2

```
data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.

Return false.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid.
```

### Solution

```python
class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        if len(data) == 0:
            return False

        curr = 0

        while curr < len(data):
            firstByte = data[curr]
            N = 0
            while firstByte > 127:
                N += 1
                firstByte = (firstByte << 1) & 0xFF

            if N == 1 or N > 4:
                return False
            elif N == 0:
                curr += 1
            else:
                remainingBytes = data[curr+1:curr+N]
                # mask_1 = 192 = 1100 0000
                mask_1 = (1<<7) + (1<<6)
                # mask_2 = 128 = 1000 0000
                mask_2 = 1<<7
                remainingBytesValid = all(byte&mask_1==mask_2 for byte in remainingBytes)
                if (curr+N) > len(data) or not remainingBytesValid:
                    return False
                curr += N

        return curr == len(data)
```
