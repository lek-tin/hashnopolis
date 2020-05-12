---
title: "Major Element"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-05-06T00:06:11-07:00
lastmod: 2020-05-06T00:06:11-07:00
draft: true
archive: false
---

### Solution

Java
```java
class Solution {
    public int majorityElement(int[] nums) {
        int maxCount = 1;
        int majorElement = nums[0];
        HashMap<Integer, Integer> counter = new HashMap<Integer, Integer>();

        for (int num: nums) {
            counter.put(num, counter.getOrDefault(num, 0)+1);

            if (counter.get(num) > maxCount) {
                maxCount = counter.get(num);
                majorElement = num;
            }
        }

        return majorElement;
    }
}
```