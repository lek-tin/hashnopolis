---
title: "Number of Square Sums in a Range"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search", "two-pointers"]
categories: ["algorithm"]
date: 2020-02-29T22:31:48-08:00
lastmod: 2020-02-29T22:31:48-08:00
draft: true
archive: false
---
Given two arrays `a` and `b`, a valid of pair consists of 1 number from `a` and 1 number from `b` that satisfies `lowerBound <= pair[0]^2 + pair[1]^2 <= upperBound`. Return the number of such valid pairs.

### Solution
sort a, then binary search on a  
or  
sort both a and b. Use two pointers on a and b separately.