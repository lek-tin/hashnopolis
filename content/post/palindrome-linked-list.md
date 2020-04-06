---
title: "Palindrome Linked List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "two-pointers"]
categories: ["algorithm"]
date: 2019-08-24T17:36:35-07:00
draft: false
archive: false
---
Given a singly linked list, determine if it is a palindrome.

### Example 1
```
Input: 1->2
Output: false
```
### Example 2
```
Input: 1->2->2->1
Output: true
```
### Follow up:
Could you do it in `O(n)` time and `O(1)` space?

### Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if not head:
            return True

        middle = self.findMedian(head)
        middle.next = self.reverse(middle.next)

        print(middle.val)
        # original ll: 1->2->3->4->3->2->1->None or 1->2->3->3->2->1
        #              s  f                         s  f
        #                 s     f                      s     f
        #                    s        f                    s       f
        #                       s            f
        #           middle is 4                  or  the first 3
        # new ll is:   1->2->3->4->1->2->3 or 1->2->3->3->2->1
        p1, p2 = head, middle.next
        while p1 and p2:
            if p1.val != p2.val:
                return False
            p1 = p1.next
            p2 = p2.next
        return True

    def findMedian(self, head):
        if not head:
            return None

        slow = head
        fast = head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def reverse(self, head):
        prev = None
        while head:
            nextNode = head.next
            head.next = prev
            prev = head
            head = nextNode

        return prev
```

