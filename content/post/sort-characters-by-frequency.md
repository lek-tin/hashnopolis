---
title: "Sort Characters by Frequency"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2020-05-22T20:46:31-07:00
lastmod: 2020-05-22T20:46:31-07:00
draft: false
archive: false
---

Given a string, sort it in decreasing order based on the frequency of characters.

### Example 1:

```
Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
```

### Example 2:

```
Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
```

### Example 3:

```
Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```

### Solution

Java
```java
class Solution {
    public String frequencySort(String s) {
        HashMap<Character, Integer> counter = new HashMap<Character, Integer>();
        HashMap<Integer, ArrayList<Character>> lookup = new HashMap<Integer, ArrayList<Character>>();

        for (char ch: s.toCharArray()) {
            counter.put(ch, counter.getOrDefault(ch, 0)+1);
        }

        for (Map.Entry<Character, Integer> entry: counter.entrySet()) {
            Character ch = entry.getKey();
            Integer count = entry.getValue();
            ArrayList<Character> list = lookup.getOrDefault(count, new ArrayList<Character>());
            list.add(ch);
            lookup.put(count, list);
        }

        StringBuilder res = new StringBuilder("");
        int N = s.length();

        for (int i = s.length(); i > 0; i--) {
            if (lookup.containsKey(i)) {
                for (char ch:lookup.get(i)) {
                    for (int j = 0; j < i; j++) {
                        res.append(ch);
                    }
                }
            }
        }

        return res.toString();
    }
}
```
