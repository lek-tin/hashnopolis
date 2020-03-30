---
title: "Design Circular Deque"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "ood", "deque", "double-linked-list", "linked-list"]
categories: ["algorithm"]
date: 2020-03-29T06:40:37-07:00
lastmod: 2020-03-29T06:40:37-07:00
draft: false
archive: false
---
Design your implementation of the circular double-ended queue (deque).  

Your implementation should support following operations:

MyCircularDeque(k): Constructor, set the size of the deque to be k.
- `insertFront()`: Adds an item at the front of Deque. Return true if the operation is successful.
- `insertLast()`: Adds an item at the rear of Deque. Return true if the operation is successful.
- `deleteFront()`: Deletes an item from the front of Deque. Return true if the operation is successful.
- `deleteLast()`: Deletes an item from the rear of Deque. Return true if the operation is successful.
- `getFront()`: Gets the front item from the Deque. If the deque is empty, return -1.
- `getRear()`: Gets the last item from Deque. If the deque is empty, return -1.
- `isEmpty()`: Checks whether Deque is empty or not.
- `isFull()`: Checks whether Deque is full or not.

### Example

```
MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
circularDeque.insertLast(1);			// return true
circularDeque.insertLast(2);			// return true
circularDeque.insertFront(3);			// return true
circularDeque.insertFront(4);			// return false, the queue is full
circularDeque.getRear();  			// return 2
circularDeque.isFull();				// return true
circularDeque.deleteLast();			// return true
circularDeque.insertFront(4);			// return true
circularDeque.getFront();			// return 4
```

#### Note

1. All values will be in the range of `[0, 1000]`.
2. The number of operations will be in the range of `[1, 1000]`.
3. Please do not use the built-in Deque library.

### Solution

```python
class MyCircularDeque:

    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        """
        self.size = 0
        self.cap = k
        self.head = 0
        self.deque = [None for _ in range(k)]

    def insertFront(self, value: int) -> bool:
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False
        self.head = (self.head - 1) % self.cap
        self.deque[self.head] = value
        self.size += 1

        return True

    def insertLast(self, value: int) -> bool:
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False

        tail = (self.head + self.size) % self.cap
        self.deque[tail] = value
        self.size += 1

        return True

    def deleteFront(self) -> bool:
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        self.head = (self.head + 1) % self.cap
        self.size -= 1

        return True


    def deleteLast(self) -> bool:
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        self.size -= 1

        return True

    def getFront(self) -> int:
        """
        Get the front item from the deque.
        """
        if self.isEmpty():
            return -1

        return self.deque[self.head]

    def getRear(self) -> int:
        """
        Get the last item from the deque.
        """
        if self.isEmpty():
            return -1

        tail = (self.head + self.size - 1) % self.cap
        return self.deque[tail]

    def isEmpty(self) -> bool:
        """
        Checks whether the circular deque is empty or not.
        """
        return self.size == 0

    def isFull(self) -> bool:
        """
        Checks whether the circular deque is full or not.
        """
        return self.size == self.cap


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()
```

### Solution (double linked list)

```python
```