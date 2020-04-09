---
title: "Sort List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "sorting"]
categories: ["algorithm"]
date: 2020-04-08T04:17:30-07:00
lastmod: 2020-04-08T04:17:30-07:00
draft: false
archive: false
---

Sort a linked list in O(n log n) time using **constant** space complexity.

### Example 1

```
Input: 4->2->1->3
Output: 1->2->3->4
```

### Example 2

```
Input: -1->5->3->4->0
Output: -1->0->3->4->5
```

### Solution (merge sort - top down)

Time: `O(NlogN)`  
Space: `O(logN)`  
Doesn't satisfy the requirement
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        mid = slow.next
        slow.next = None

        return self.merge(self.sortList(head), self.sortList(mid))

    def merge(self, l1, l2):
        dummy = ListNode(0)
        curr = dummy

        while l1 and l2:
            if l1.val > l2.val:
                l1, l2 = l2, l1
            curr.next = l1
            l1 = l1.next
            curr = curr.next

        if l1:
            curr.next = l1
        if l2:
            curr.next = l2

        return dummy.next

```

### Solution (merge sort - top down)

Time: `O(NlogN)`  
Space: `O(1)`  
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        N = 0
        curr = head

        while curr:
            N += 1
            curr = curr.next

        dummy = ListNode(0)
        dummy.next = head
        left, right, tail = ListNode(0), ListNode(0), ListNode(0)
        i = 1
        while i < N:
            curr = dummy.next
            tail = dummy
            while curr:
                left = curr
                right = self.split(left, i)
                curr = self.split(right, i)
                merged = self.merge(left, right)
                tail.next = merged[0]
                tail = merged[1]
            i <<= 1

        return dummy.next

    def split(self, head, firstN):
        # split the list into the first N and the rest
        while firstN > 1 and head:
            firstN -= 1
            head = head.next

        head_of_the_rest = head.next if head else None
        # cut the list
        if head:
            head.next = None
        return head_of_the_rest

    def merge(self, l1, l2):
        dummy = ListNode(0)
        tail = dummy

        while l1 and l2:
            if l1.val > l2.val:
                l1, l2 = l2, l1
            tail.next = l1
            l1 = l1.next
            tail = tail.next

        tail.next = l1 if l1 else l2
        while tail.next:
            tail = tail.next

        return dummy.next, tail
```