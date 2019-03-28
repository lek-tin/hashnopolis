---
title: "Insert Into a Cyclic Sorted List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list"]
categories: ["algorithm"]
date: 2019-03-26T20:15:43-07:00
draft: false
archive: false
---
Given a node from a cyclic linked list which is sorted in ascending order, write a function to insert a value into the list such that it remains a cyclic sorted list. The given node can be a reference to any single node in the list, and may not be necessarily the smallest value in the cyclic list.  

If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the cyclic list should remain sorted.  

If the list is empty (i.e., given node is `null`), you should create a new single cyclic list and return the reference to that single node. Otherwise, you should return the original given node.   

The following example may help you understand the problem better:   

![example_1_before_65p](https://assets.leetcode.com/uploads/2019/01/19/example_1_before_65p.jpg)  
In the figure above, there is a cyclic sorted list of three elements. You are given a reference to the node with value 3, and we need to insert 2 into the list.


![example_1_after_65p](https://assets.leetcode.com/uploads/2019/01/19/example_1_after_65p.jpg)  

The new node should insert between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.

### Solution
```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node next;

    public Node() {}

    public Node(int _val,Node _next) {
        val = _val;
        next = _next;
    }
};
*/
class Solution {
    public Node insert(Node head, int insertVal) {
        Node dummy = new Node();
        if (head == null) {
            dummy.val = insertVal;
            dummy.next = dummy;
            return dummy;
        }
        
        Node cur = head.next;
        Node prev = head;

        Node largest = head; //storing the largest element
        
        while(true){
            if (prev.val <= insertVal && insertVal <= cur.val) {
                prev.next = new Node(insertVal, cur);
                break;
            }
            
            if (cur.val >= largest.val) {
                largest = cur;
            }
            // We have come back to the start. Now insert the new node after largest. 
            // For example, the largest is 10, the new node -10 or 20 should be both after the node 10.
            if (cur == head) {
                Node node = new Node(insertVal, largest.next);
                largest.next = node;
                break;
            }
            
            prev = cur;
            cur = cur.next;
        }
        
        
        return head;
    }
}
```