---
title: "Odd Even Linked List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list"]
categories: ["algorithm"]
date: 2020-05-16T05:27:11-07:00
lastmod: 2020-05-16T05:27:11-07:00
draft: false
archive: false
---

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.  

You should try to do it in place. The program should run in `O(1)` space complexity and `O(nodes)` time complexity.  

### Example 1:

```
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
```

### Example 2:

```
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
```

#### Note:

1. The relative order inside both the even and odd groups should remain as it was in the input.
2. The first node is considered odd, the second node even and so on ...

### Solution

Java
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if (head == null) {
            return null;
        }

        if (head.next == null) {
            return head;
        }

        ListNode dummy1 = new ListNode(0);
        dummy1.next = head;
        ListNode curr1 = dummy1.next;
        ListNode tail1 = dummy1.next;

        ListNode dummy2 = new ListNode(0);
        dummy2.next = head.next;
        ListNode curr2 = dummy2.next;

        while (curr1 != null) {
            if (curr1.next != null) {
                curr1.next = curr1.next.next;
            }
            tail1 = curr1;
            curr1 = curr1.next;
            if (curr2 != null && curr2.next != null) {
                curr2.next = curr2.next.next;
            }
            if (curr2 != null) {
                curr2 = curr2.next;
            }
        }

        tail1.next = dummy2.next;

        return dummy1.next;
    }
}
```
