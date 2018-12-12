---
title: "Binary Numbers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["binary-number", "number-representation"]
categories: ["computing"]
date: 2018-11-18T14:15:35-08:00
draft: false
archive: false
---
For a 8-bit number, there are two ways to represent number:  
`unsigned` values `0` to `255`  
`signed` values range from `-128 (-2^8 = 10000000)` to `127 (2^8 - 1)`  
```cpp
signed -128 = 10000000
signed -127 = 10000001
signed -1 = 11111111
signed 0 = 00000000
signed 127 = 01111111
signed 127 + (-127) = 10000001 + 01111111 = 0
```

If a number is assigned with value that is too big for it to hold, overflowing would happen,
`2^32 = 4,294,967,296` is the largest unsigned 32 bit value. He's however using signed values, their maximum is 2^31-1 = 2,147,483,647, when you exceed that with for example 10,000,000,000, then it will go to the smallest possible value (-2^31) and count on from there. 

This is what happens:

0 -> 2^31-1 (10,000,000,000 - 2^31-1 = 7,852,516,353 remaining) => overflow
-2^31 -> 2^31-1 (7,852,516,353 - (2^31-1 + 2^31) = 3,557,549,056 remaining) => overflow
-2^31 -> 1410065408 (3,557,549,056 - (2^31 + 1410065408) = 0 remaining)