---
title: "Sliding Window Maximum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "deque", "monotonic-queue", "sliding-window"]
categories: ["algorithm"]
date: 2019-03-08T23:26:00-08:00
lastmod: 2019-09-15T16:46:00-08:00
draft: false
archive: false
---
Given an array nums, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

### Example:
```
Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```
### Note:
You may assume `k` is always valid, `1 ≤ k ≤ input` array's size for non-empty array.

### Follow up:
Could you solve it in linear time?
### Solution:
Java version
```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return new int[0];
        }

        Deque<Integer> deque = new LinkedList<>();
        int[] res = new int[nums.length - k + 1];
        //  <--  [Deque]  <--
        //   head         tail
        for (int i = 0; i < nums.length; i++) {
            // Distance greater than k, remove at head
            if (!deque.isEmpty() && deque.peekFirst() == i - k) {
                deque.poll();
            }
            // remove at tail if the number is less than the new candidate: num[i]
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.removeLast();
            }
            // Add num[i] to deque
            deque.offerLast(i);
            // if the window size is valid, we store result for i
            if(i+1 >= k) {
                res[i - k +1] = nums[deque.peek()];
            }
        }

        return res;
    }
}
```
Python version
```python
from collections import deque
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if not nums or len(nums) == 0 or k == 0:
            return list([])

        maxArr = []
        # indexWindow is used to store indices, not the actual values. We can detect distance with lastIndex - firstIndex.
        indexWindow = deque([])
        for i in range(len(nums)):
            curr = nums[i]
            if len(indexWindow) > 0 and indexWindow[0] == i-k:
                indexWindow.popleft()
            # Remove all the element in deque that is smaller than the new number so that the head of the deque will always be the maximum.
            while len(indexWindow) > 0 and nums[indexWindow[-1]] < curr:
                indexWindow.pop()

            indexWindow.append(i)
            if i < k-1:
                continue
            maxArr.append(nums[indexWindow[0]])

        return maxArr
```
### Explanation:
```
Window position               <- Deque <-        Max
                             <head...tail>
---------------              -------------    -----
[1]  3  -1 -3  5  3  6  7     [1]               -
[1  3]  -1 -3  5  3  6  7     [3]               -
[1  3  -1] -3  5  3  6  7     [3, -1]           3
 1 [3  -1  -3] 5  3  6  7     [3, -1, -3]       3
 1  3 [-1  -3  5] 3  6  7     [5]               5
 1  3  -1 [-3  5  3] 6  7     [5, 3]            5
 1  3  -1  -3 [5  3  6] 7     [6]               6
 1  3  -1  -3  5 [3  6  7]    [7]               7
```
### Hints
1. How about using a data structure such as deque (double-ended queue)?
2. The queue size need not be the same as the window’s size.
3. Remove redundant elements and the queue should store only elements that need to be considered.