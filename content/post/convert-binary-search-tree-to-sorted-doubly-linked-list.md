---
title: "Convert Binary Search Tree to Sorted Doubly Linked List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "doubly-linked-list", "bst"]
categories: ["algorithm"]
date: 2018-12-26T01:24:33-08:00
lastmod: 2019-10-12T13:24:33-08:00
draft: false
archive: false
---
Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers as synonymous to the previous and next pointers in a doubly-linked list.

Let's take the following BST as an example, it may help you understand the problem better:

![binary-search-tree](/img/post/binary-search-tree.png)

We want to transform this BST into a circular doubly linked list. Each node in a doubly linked list has a predecessor and successor. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

The figure below shows the circular doubly linked list for the BST above. The "head" symbol means the node it points to is the smallest element of the linked list.

![converted-double-linked-list](/img/post/converted-double-linked-list.png)

Specifically, we want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. We should return the pointer to the first element of the linked list.

The figure below shows the transformed BST. The solid line indicates the successor relationship, while the dashed line means the predecessor relationship.

![double-linked-list](/img/post/double-linked-list.png)

### Solution
python
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val, left, right):
        self.val = val
        self.left = left
        self.right = right
"""
class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        if not root:
            return None
        head, end = self.convert(root)
        head.left = end
        end.right = head
        print(head.val)
        return head

    def convert(self, root):
        pair = [None, None]
        if not root:
            return pair

        leftHead, leftTail = self.convert(root.left)
        root.left = leftTail
        if leftTail:
            leftTail.right = root
        if leftHead:
            pair[0] = leftHead
        else:
            pair[0] = root

        rightHead, rightTail = self.convert(root.right)
        root.right = rightHead
        if rightHead:
            rightHead.left = root
        if rightTail:
            pair[1] = rightTail
        else:
            pair[1] = root

        return pair
```