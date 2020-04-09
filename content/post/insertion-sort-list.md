---
title: "Insertion Sort List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "sorting"]
categories: ["algorithm"]
date: 2020-04-08T07:21:58-07:00
lastmod: 2020-04-08T07:21:58-07:00
draft: false
archive: false
---
Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.  

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

### Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        if not head: return head

        dummy = ListNode(0)
        dummy.next = head
        cur, sorted_tail = head.next, head

        while cur:
            prev = dummy
            while prev.next.val < cur.val:
                prev = prev.next
            if prev == sorted_tail:
                cur, sorted_tail = cur.next, cur
            else:
                cur.next, prev.next, sorted_tail.next = prev.next, cur, cur.next
                cur = sorted_tail.next

        return dummy.next
```
