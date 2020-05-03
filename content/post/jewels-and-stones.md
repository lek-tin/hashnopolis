---
title: "Jewels and Stones"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "char-map"]
categories: ["algorithm"]
date: 2020-05-02T04:38:56-07:00
lastmod: 2020-05-02T04:38:56-07:00
draft: false
archive: false
---

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have. Each character in `S` is a type of stone you have. You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

### Example 1:

```
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

### Example 2:

```
Input: J = "z", S = "ZZ"
Output: 0
```

#### Note:

1. S and J will consist of letters and have length at most 1.
2. The characters in J are distinct.

### Solution

```java
class Solution {
    public int numJewelsInStones(String J, String S) {
        boolean[] lookup = new boolean[52];
        for (int i = 0; i < J.length(); i++) {
            char c = J.charAt(i);
            int index = 0;
            if (c >= 'a') {
                index = 26 + c - 'a';
            } else {
                index = c - 'A';
            }
            lookup[index] = true;
        }

        int count = 0;

        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            int index = 0;
            if (c >= 'a') {
                index = 26 + c - 'a';
            } else {
                index = c - 'A';
            }
            if (lookup[index] == true) count++;
        }

        return count;
    }
}
```
