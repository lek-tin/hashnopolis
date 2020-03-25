---
title: "Shortest Subarray With Sum at Least K"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "presum", "deque", "sliding-window"]
categories: ["algorithm"]
date: 2020-03-10T04:14:10-07:00
lastmod: 2020-03-10T04:14:10-07:00
draft: false
archive: false
---

Return the length of the shortest, non-empty, contiguous subarray of A with sum at least `K`.  

If there is no non-empty subarray with sum at least `K`, return `-1`.  

### Example 1

```
Input: A = [1], K = 1
Output: 1
```

### Example 2

```
Input: A = [1,2], K = 4
Output: -1
```

### Example 3

```
Input: A = [2,-1,2], K = 3
Output: 3
```

##### Note

1. `1 <= A.length <= 50000`
2. `-10 ^ 5 <= A[i] <= 10 ^ 5`
3. `1 <= K <= 10 ^ 9`

### Solution (sliding window using pointers)

This version exceeds time limit
Time: `O(N)`   
Space: `O(N) = adding: O(N) + subtracting: O(N)`  
```python
class Solution:
    def shortestSubarray(self, nums: List[int], K: int) -> int:
        N = len(nums)
        # N+1 is impossible
        min_len = N + 1

        for i in range(N):
            curr_sum = nums[i]
            if curr_sum >= K:
                return 1
            for j in range(i+1, N):
                curr_sum += nums[j]
                if curr_sum >= K and j-i+1 < min_len:
                    min_len = j-i+1

        return min_len if (min_len < N + 1) else -1
```


### Solution (sliding window using deque)

Time: `O(N)`
Space: `O(N)`
```python
class Solution:
    def shortestSubarray(self, nums: List[int], K: int) -> int:
        N = len(nums)
        # culmulative presums
        all_presums = [0]
        for x in nums:
            all_presums.append(all_presums[-1] + x)
        # Want smallest (y - x) with (presum_y - presum_x) >= K
        # N+1 is impossible
        min_len = N + 1
        # opt(y) candidates, represented as indices of P
        monoq = collections.deque()
        for index, curr_sum in enumerate(all_presums):
            # Want opt(y) = largest x with Px <= Py - K
            # if curr_sum > , then start subtracting element from the start
            while monoq and curr_sum <= all_presums[monoq[-1]]:
                monoq.pop()

            while monoq and curr_sum - all_presums[monoq[0]] >= K:
                min_len = min(min_len, index - monoq.popleft())

            monoq.append(index)

        return min_len if ans < N+1 else -1
```