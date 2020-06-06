---
title: "Random Pick With Weight"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2020-06-05T23:36:24-07:00
lastmod: 2020-06-05T23:36:24-07:00
draft: false
archive: false
---

Given an array `w` of positive integers, where `w[i]` describes the weight of index `i`, write a function `pickIndex` which randomly picks an index in proportion to its weight.  

#### Note:

1. `1 <= w.length <= 10000`
2. `1 <= w[i] <= 10^5`
3. `pickIndex` will be called at most `10000` times.

### Example 1:

```
Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
```

### Example 2:

```
Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
```

#### Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.

### Solution

Time: `O(n)`  
Java
```java
class Solution {
    double[] probs;
    public Solution(int[] w) {
        double total=0, sum = 0;
        probs = new double[w.length];

        for (int i: w) {
            total += i;
        }
        for (int i = 0; i < w.length; i++) {
            sum += w[i];
            probs[i] = (sum * 1.0) / total;
        }

        for (double i: probs) {
            System.out.println(i);
        }
    }

    public int pickIndex() {
        Random rand = new Random();
        double prob = rand.nextDouble();

        for (int i = 0; i < probs.length; i++) {
            if (prob < probs[i]) {
                return i;
            }
        }

        return probs.length - 1;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(w);
 * int param_1 = obj.pickIndex();
 */
```

### Solution (binary search)

Time: `O(logN)`  
Java
```java
```