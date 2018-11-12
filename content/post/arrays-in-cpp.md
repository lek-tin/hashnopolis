---
title: "Arrays in CPP"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["array", "cplusplus", "cpp"]
categories: ["programming-language"]
date: 2018-11-10T13:50:30-08:00
draft: false
archive: false
---
**To get the number of elements in an array in C++:**  
`sizeof(awesomeArray)` = total number of bytes allocated for `awesomeArray` array.
Divide it with the size of one element in the array will give you the number of elements in the array: `sizeof(awesomeArray)/sizeof(awesomeArray[0])`