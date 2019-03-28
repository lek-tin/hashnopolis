---
title: "Linked List Cycle II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "linked-list", "slow-fast-pointers", "two-pointers"]
categories: ["algorithm"]
date: 2018-10-21T23:08:30-07:00
draft: false
archive: false
---
Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

## Note:
Do not modify the linked list.

## Follow up:
Can you solve it without using extra space?

## Solution:
```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        if (head == null) return null;

        ListNode slow = head;
        ListNode fast = head;
        boolean hasCycle = false;

        while (slow.next != null && fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (!hasCycle) {
            return null;
        }

        slow = head;

        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}
```
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head == None:
            return None
        slow = head
        fast = head
        hasCycle = False
        while fast.next != None and fast.next.next != None:
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                hasCycle = True
                break
        if not hasCycle:
            return None
        slow = head
        while slow != fast:
            # move x steps further
            fast = fast.next
            slow = slow.next
        return slow
```
