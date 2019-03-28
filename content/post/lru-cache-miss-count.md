---
title: "LRU Cache Miss Count"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "lru-cache"]
categories: ["algorithm"]
date: 2019-03-26T22:51:52-07:00
draft: false
archive: false
---
### Solution:
```java
public class CacheMiss {
    public int missCount(int[] array, int size) {
        if (array == null) return 0;
        List<Integer> cache = new LinkedList<>();
        int count = 0;
        for (int i = 0; i < array.length; i++) {
            if (cache.contains(array[i])) {
                cache.remove(new Integer(array[i]));
            } else {
                count++;
                if (size == cache.size())
                    cache.remove(0);
            }
            cache.add(array[i]);
        }
        return count;
    }
}
```