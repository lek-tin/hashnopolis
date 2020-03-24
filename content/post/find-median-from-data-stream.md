---
title: "Find Median From Data Stream"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "heap"]
categories: ["algorithm"]
date: 2019-03-11T13:34:41-07:00
draft: false
archive: false
---
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

### Example
`[2,3,4]`, the median is `3`  
`[2,3]`, the median is `(2 + 3) / 2 = 2.5`  

Design a data structure that supports the following two operations:  
1. `void addNum(int num)` - Add a integer number from the data stream to the data structure.  
2. `double findMedian()` - Return the median of all elements so far.

### Example:
```
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

### Follow up:
1. If all integer numbers from the stream are between `0` and `100`, how would you optimize it?
2. If `99%` of all integer numbers from the stream are between `0` and `100`, how would you optimize it?

### Solution:
```java
// addNum: O(logn)
// getMedian: O(1)
class MedianFinder {
    private PriorityQueue<Integer> smaller = new PriorityQueue<Integer>();
    private PriorityQueue<Integer> bigger = new PriorityQueue<Integer>();

    /** initialize your data structure here. */
    public MedianFinder() {
    }

    public void addNum(int num) {
        bigger.offer(num);
        // Convert the max{smaller} to negative, so that it is at the top of the heap.
        smaller.offer(-bigger.poll());
        if (bigger.size() < smaller.size()) {
            // reverse the negativity
            bigger.offer(-smaller.poll());
        }
    }

    public double findMedian() {
        if (bigger.size() > smaller.size()) {
            return bigger.peek();
        }o
        return (bigger.peek() - smaller.peek()) / 2.0;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
```
Python version
```python
from heapq import *

class MedianFinder:
    def __init__(self):
        """
        initialize your data structure here.
        """
        # Higher half
        self.bigger = []
        # Lower half
        self.smaller = []

    def addNum(self, num: int) -> None:
        heappush(self.bigger, num)
        heappush(self.smaller, -heappop(self.bigger))
        if len(self.bigger) < len(self.smaller):
            heappush(self.bigger, -heappop(self.smaller))

    def findMedian(self) -> float:
        if len(self.smaller) < len(self.bigger):
            return self.bigger[0]
        else:
            return (self.bigger[0] - self.smaller[0]) / 2.0

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
```