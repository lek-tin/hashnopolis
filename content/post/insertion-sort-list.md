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

#### Algorithm of Insertion Sort

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
        curr = head
        prev, curr_next = ListNode(0), ListNode(0)

        while curr:
            curr_next = curr.next
            prev = dummy
            while prev.next and prev.next.val < curr.val:
                prev = prev.next
            curr.next = prev.next
            prev.next = curr
            curr = curr_next

        return dummy.next
```
