---
title: "Permutation Sequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math"]
categories: ["algorithm"]
date: 2020-06-20T19:33:22-07:00
lastmod: 2020-06-20T19:33:22-07:00
draft: false
archive: false
---

The set `[1,2,3,...,n]` contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for `n = 3`:

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`

Given `n` and `k`, return the `kth` permutation sequence.

#### Note:

- Given n will be between `1` and `9` inclusive.
- Given k will be between `1` and `n!` inclusive.

### Example 1:

```
Input: n = 3, k = 3
Output: "213"
```

### Example 2:

```
Input: n = 4, k = 9
Output: "2314"
```

### Solution

Time: `O(n^2)` because we need to pop 1 element each iteration and each popping costs `n_i` time thus: `n + (n-1) + ... + 1 = n * (n-1) / 2 = n^2`  
Space: `O(n)`  
Java
```java
class Solution {
    public String getPermutation(int n, int k) {
        k -= 1;
        StringBuilder res = new StringBuilder("");
        int factorial = 1;
        List<Integer> arr = new ArrayList<>();

        for (int i = 1; i < n; i++) {
            factorial *= i;
        }
        for (int i = 1; i <= n; i++) {
            arr.add(i);
        }

        int index = 0;
        for (int i = n-1; i > 0; i--) {
            index = k / factorial;
            res.append(arr.get(index));
            arr.remove(index);
            k %= factorial;
            factorial /= i;
        }
        // arr only has 1 element left because the previous for loop pops n-1 elements.
        res.append(arr.get(0));

        return res.toString();
    }
}
```
