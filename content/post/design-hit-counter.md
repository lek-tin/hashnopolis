---
title: "Design Hit Counter"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "ood", "deque"]
categories: ["algorithm"]
date: 2020-03-21T19:18:12-07:00
lastmod: 2020-03-21T19:18:12-07:00
draft: false
archive: false
---
Design a hit counter which counts the number of hits received in the past `5` minutes.  

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at `1`.  

It is possible that several hits arrive roughly at the same time.  

### Example

```
HitCounter counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301);
```

### Follow up

What if the number of hits per second could be very large? Does your design scale?

### Solution

We use a variable `count` to keep track of the total hits in the last 300 seconds of `timestamp`
```python
from collections import deque

class HitCounter:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.window = 300
        self.dq = deque()
        self.count = 0

    def hit(self, timestamp: int) -> None:
        """
        Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        # pre-update deque besed on new timestamp
        self.pop(timestamp)
        if self.dq and timestamp == self.dq[-1][0]:
            self.dq[-1][1] += 1
        else:
            self.dq.append( [timestamp, 1] )
        self.count += 1

    def getHits(self, timestamp: int) -> int:
        """
        Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        self.pop(timestamp)
        return self.count

    def pop(self, timestamp):
        while self.dq and self.dq[0][0] <= timestamp-self.window:
            self.count -= self.dq.popleft()[1]

# Your HitCounter object will be instantiated and called as such:
# obj = HitCounter()
# obj.hit(timestamp)
# param_2 = obj.getHits(timestamp)
```

### Solution (more elegant)

total hits = length of the deque
```python
from collections import deque

class HitCounter:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.window = 300
        self.dq = deque()

    def hit(self, timestamp: int) -> None:
        """
        Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        # pre-update deque besed on new timestamp
        self.pop(timestamp)
        self.dq.append(timestamp)

    def getHits(self, timestamp: int) -> int:
        """
        Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        self.pop(timestamp)
        return len(self.dq)

    def pop(self, timestamp):
        while self.dq and self.dq[0] <= timestamp-self.window:
            self.dq.popleft()

# Your HitCounter object will be instantiated and called as such:
# obj = HitCounter()
# obj.hit(timestamp)
# param_2 = obj.getHits(timestamp)
```