---
title: "Top K Frequent Elements"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2018-09-16T15:04:30-07:00
draft: false
archive: false
---
Given a non-empty array of integers, return the `k` most frequent elements.

For example,
Given `[1,1,1,2,2,3]` and `k = 2`, return `[1,2]`.
### Note
You may assume k is always valid, `1 ≤ k ≤ number` of unique elements.
Your algorithm's time complexity **must be better** than `O(n log n)`, where `n` is the array's size.
### Solution
```python
class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        freqMap = dict()
        for num in nums:
            if freqMap.get(num) == None:
                freqMap[num] = 1
            else:
                freqMap[num] = freqMap.get(num) + 1
        bucket = []
        topKCounts = sorted(list(freqMap.values()), reverse=True)[:k]

        print(topKCounts)
        for key, value in freqMap.items():
            if value in topKCounts:
                bucket.append(key)
        return bucket
```
```java
class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> freqMap = new HashMap<>();
        ArrayList res = new ArrayList<>();

        for (int num : nums) {
            int f = freqMap.getOrDefault(num, 0) + 1;
            freqMap.put(num, f);
        }
        // Frequency is at least one, so we use [1: nums.length] to store count for each num
        List<Integer>[] buckets = new ArrayList[nums.length + 1];

        for (int key: freqMap.keySet()) {
            int freq = freqMap.get(key);
            if (buckets[freq] == null) {
                buckets[freq] = new ArrayList<>();
            }
            buckets[freq].add(key);
        }

        for (int i = buckets.length - 1; i >= 0 && res.size() < k; i--) {
            if (buckets[i] != null)
                // No two elements have the same frequency.
                res.addAll(buckets[i]);
        }
        return res;
    }
}
```

### Going further
`topKCounts = quickSelected(...)` can improve the time complexity from `O(NlogN)` to `O(N)`