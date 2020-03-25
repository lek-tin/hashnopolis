---
title: "Kth Largest Element in a Stream"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "priority-queue", "stream"]
categories: ["algorithm"]
date: 2019-03-09T02:08:26-08:00
draft: false
archive: false
---
Design a class to find the `kth` largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your `KthLargest` class will have a constructor which accepts an integer `k` and an integer array nums, which contains initial elements from the stream. For each call to the method `KthLargest.add`, return the element representing the kth largest element in the stream.

### Example:
```
int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
```
#### Note
You may assume that nums' `length ≥ k-1` and `k ≥ 1`.

### Solution:
Java
```java
class KthLargest {
    private PriorityQueue<Integer> pQueue = null;
    private int k = 0;

    public KthLargest(int k, int[] nums) {
        pQueue = new PriorityQueue<Integer>(k+1);
        this.k = k;
        for (int num: nums) {
            add(num);
        }
    }

    public int add(int val) {
        pQueue.offer(val);
        if (pQueue.size() > k) {
            pQueue.poll();
        }

        return pQueue.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */
```
Python
```python
import queue as Q

class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.heap = []
        self.k = k
        self.q = Q.PriorityQueue()
        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        self.q.put(val)
        if self.q.qsize() > self.k:
            self.q.get()
        ans = self.q.get()
        self.q.put(ans)
        return ans

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
```