---
title: "Subarray Sum Equals K"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "prefix-sum"]
categories: ["algorithm"]
date: 2019-09-26T15:33:32-07:00
lastmod: 2020-04-22T02:50:32-07:00
draft: false
archive: false
---
Given an array of integers and an integer `k`, you need to find the total number of continuous subarrays whose sum equals to `k`.  

### Example 1
<<<<<<< HEAD
=======

>>>>>>> dev
```
Input:nums = [1,1,1], k = 2
Output: 2
```

#### Note

1. The length of the array is in range `[1, 20,000]`.
2. The range of numbers in the array is `[-1000, 1000]` and the range of the integer `k` is `[-1e7, 1e7]`.

### Solution

Java
```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int len = nums.length;
        if (len == 0) {
            return 0;
        }

        int[] sums = new int[len];
        sums[0] = nums[0];

        for (int i = 1; i < len; i++) {
            sums[i] += sums[i-1] + nums[i];
        }

        HashMap<Integer, Integer> counter = new HashMap<Integer, Integer>();
        counter.put(0, 1);
        int res = 0;

        for (int s: sums) {
            System.out.println(s);
            if (counter.containsKey(s-k)) {
                res += counter.get(s-k);
            }
            counter.put(s, counter.getOrDefault(s, 0) + 1);
        }

        return res;
    }
}
```

Python
```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        N = len(nums)
        if not N or N == 0:
            return 0

        sums = [ nums[0] for i in range(N) ]
        for i in range(1, N):
            sums[i] = sums[i-1] + nums[i]

        # initialization: prefix sum = 0
        counter = { 0: 1 }
        res = 0
        for s in sums:
            if s - k in counter:
                res += counter[s-k]
            counter[s] = counter.get(s, 0) + 1

        return res
# input:   arr = [1,2,1,2,1,2], k = 3
# output:  5
# counter: {0: 1}
# counter: {0: 1, 1: 1}
# counter: {0: 1, 1: 1, 3: 1}
# counter: {0: 1, 1: 1, 3: 1, 4: 1}
# counter: {0: 1, 1: 1, 3: 1, 4: 1, 6: 1}
# counter: {0: 1, 1: 1, 3: 1, 4: 1, 6: 1, 7: 1}

# OR

# input:   arr = [1,2,-1,-2,1,2], k = 3
# output:  3
# counter: {0: 1}
# counter: {0: 1, 1: 1}
# counter: {0: 1, 1: 1, 3: 1}
# counter: {0: 1, 1: 1, 3: 1, 2: 1}
# counter: {0: 2, 1: 1, 3: 1, 2: 1}
# counter: {0: 2, 1: 2, 3: 1, 2: 1}
```
