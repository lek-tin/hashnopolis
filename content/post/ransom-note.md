---
title: "Ransom Note"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-05-03T03:37:48-07:00
lastmod: 2020-05-03T03:37:48-07:00
draft: false
archive: false
---

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.  

Each letter in the magazine string can only be used once in your ransom note.  

#### Note:

You may assume that both strings contain only lowercase letters.

### Example

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

### Solution

Java
```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> rnCounter = new HashMap<Character, Integer>();
        HashMap<Character, Integer> magCounter = new HashMap<Character, Integer>();

        for (Character c: ransomNote.toCharArray()) {
            rnCounter.put(c, rnCounter.getOrDefault(c, 0)+1);
        }
        for (Character c: magazine.toCharArray()) {
            magCounter.put(c, magCounter.getOrDefault(c, 0)+1);
        }

        Iterator<Map.Entry<Character, Integer>> it = rnCounter.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<Character, Integer> entry = it.next();
            if ( !magCounter.containsKey(entry.getKey()) ) {
                return false;
            }
            if ( magCounter.get(entry.getKey()) < entry.getValue() ) {
                return false;
            }
        }

        return true;
    }
}
```
