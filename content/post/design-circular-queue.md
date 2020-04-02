---
title: "Design Circular Queue"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "ood", "queue", "doubly-linked-list", "linked-list"]
categories: ["algorithm"]
date: 2020-03-25T23:29:21-07:00
lastmod: 2020-03-25T23:29:21-07:00
draft: false
archive: false
---

Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on **FIFO (First In First Out)** principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".  

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.  

Your implementation should support following operations:  

1.` MyCircularQueue(k)`: Constructor, set the size of the queue to be k.
2. `Front`: Get the front item from the queue. If the queue is empty, return -1.
3. `Rear`: Get the last item from the queue. If the queue is empty, return -1.
4. `enQueue(value)`: Insert an element into the circular queue. Return true if the operation is successful.
5. `deQueue()`: Delete an element from the circular queue. Return true if the operation is successful.
6. `isEmpty()`: Checks whether the circular queue is empty or not.
7. `isFull()`: Checks whether the circular queue is full or not.


### Example

```
MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
circularQueue.enQueue(1);  // return true
circularQueue.enQueue(2);  // return true
circularQueue.enQueue(3);  // return true
circularQueue.enQueue(4);  // return false, the queue is full
circularQueue.Rear();  // return 3
circularQueue.isFull();  // return true
circularQueue.deQueue();  // return true
circularQueue.enQueue(4);  // return true
circularQueue.Rear();  // return 4
```

#### Note

1. All values will be in the range of `[0, 1000]`.
2. The number of operations will be in the range of `[1, 1000]`.
3. Please do not use the built-in Queue library.


### Solution (array)

```python
class MyCircularQueue:

    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the queue to be k.
        """
        self.cap = k
        self.size = 0
        self.head = 0
        self.queue = [None for _ in range(k)]

    def enQueue(self, value: int) -> bool:
        """
        Insert an element into the circular queue. Return true if the operation is successful.
        """
        if self.isFull():
            return False
        newTail = (self.head + self.size) % self.cap
        self.queue[newTail] = value
        self.size += 1
        return True

    def deQueue(self) -> bool:
        """
        Delete an element from the circular queue. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        self.queue[self.head] = None
        self.size -= 1
        self.head = (self.head + 1 ) % self.cap

        return True

    def Front(self) -> int:
        """
        Get the front item from the queue.
        """
        if self.isEmpty():
            return -1
        return self.queue[self.head]

    def Rear(self) -> int:
        """
        Get the last item from the queue.
        """
        if self.isEmpty():
            return -1
        tail = (self.head + self.size - 1) % self.cap
        return self.queue[tail]

    def isEmpty(self) -> bool:
        """
        Checks whether the circular queue is empty or not.
        """
        return self.size == 0

    def isFull(self) -> bool:
        """
        Checks whether the circular queue is full or not.
        """
        return self.size == self.cap


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
```

### Solution (linked list)

```python
```