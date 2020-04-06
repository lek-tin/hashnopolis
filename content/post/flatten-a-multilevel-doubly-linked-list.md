---
title: "Flatten a Multilevel Doubly Linked List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "recursion"]
categories: ["algorithm"]
date: 2020-03-23T22:53:23-07:00
lastmod: 2020-03-23T22:53:23-07:00
draft: false
archive: false
---
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.  

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.  

### Example 1

```
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:

The multilevel linked list in the input is as follows:
```
![multi level linked list example 1.png](/img/post/multi-level-linked-list-example-1.png)
```
After flattening the multilevel linked list it becomes:
```
![flattened multi level linked list example 1.png](/img/post/flattened-multi-level-linked-list-example-1.png)

### Example 2

```
Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation:

The input multilevel linked list is as follows:

  1---2---NULL
  |
  3---NULL
```

### Example 3

```
Input: head = []
Output: []
```

**How multilevel linked list is represented in test case:**  
We use the multilevel linked list from Example 1 above:  
```
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
```
The serialization of each level is as follows:
```
[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
```
To serialize all levels together we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:
```
[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
```
Merging the serialization of each level and removing trailing nulls we obtain:
```
[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
```

#### Constraints

1. Number of Nodes will not exceed `1000`.
2. `1 <= Node.val <= 10^5`

### Solution (recursive dfs)

Time: `O(n)`  
Space: `O(n)`  
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""
class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head:
            return head

        dummy = Node(None, None, None, None)
        dummy.next = head

        self.dfs(dummy, head)

        # delete prev pointer for head
        dummy.next.prev = None
        return dummy.next

    def dfs(self, prev, curr):
        if not curr:
            return prev

        curr.prev = prev
        prev.next = curr

        pending_next = curr.next
        # if child doesn't exist, it will return curr immediately
        # otherwise, dfs will continue flattening the child level
        pending_tail = self.dfs(curr, curr.child)
        # delete child pointer for curr
        curr.child = None
        return self.dfs(pending_tail, pending_next)
```

### Solution (iterative dfs)

Time: `O(n)`  
Space: `O(1)`  
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""
class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head:
            return None

        curr = head

        while curr:
            # flatten child level first
            if curr.child:
                pending_next = curr.next
                curr.child.prev = curr
                curr.next = curr.child
                nextLevel_prev = curr
                while nextLevel_prev.next:
                    nextLevel_prev = nextLevel_prev.next
                if pending_next:
                    nextLevel_prev.next = pending_next
                    pending_next.prev = nextLevel_prev
                # clear child pointer for curr
                curr.child = None
            # curr will move onto the already flattened child level head now
            # e.g., 3 -> 7
            curr = curr.next

        return head
```
