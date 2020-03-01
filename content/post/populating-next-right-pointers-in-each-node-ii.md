---
title: "Populating Next Right Pointers in Each Node II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "level-traversal", "bfs", "recursion"]
categories: ["algorithm"]
date: 2020-02-26T20:19:59-08:00
lastmod: 2020-02-26T20:19:59-08:00
draft: false
archive: false
---
Given a binary tree  
```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.  

Initially, all next pointers are set to NULL.  

### Follow up

1. You may only use constant extra space.
2. Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

### Example 1

![Populating Next Right Pointers in Each Node II](/img/post/populating-next-right-pointers-in-each-node-ii.png)
```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

### Constraints:

1. The number of nodes in the given tree is less than `6000`.
2. `-100 <= node.val <= 100`

### Solution 1 (bfs / level by level)

Time: `O(n)`  
Space: `O(n)`  
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
from collections import deque

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        queue = deque([root])

        while queue:
            size = len(queue)
            node = queue[0]

            for i in range(size):
                node = queue.popleft()

                if i < size-1:
                    node.next = queue[0]

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return root
```

### Solution 2 (iterative)

Time: `O(n)`  
Space: `O(1)`  
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
from collections import deque

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        head_nextLevel = None
        prev_nextLevel = None
        curr = root

        while curr:
            while curr:
                if curr.left:
                    if head_nextLevel:
                        prev_nextLevel.next = curr.left
                        prev_nextLevel = prev_nextLevel.next
                    else:
                        head_nextLevel = curr.left
                        prev_nextLevel = curr.left

                if curr.right:
                    if head_nextLevel:
                        prev_nextLevel.next = curr.right
                        prev_nextLevel = prev_nextLevel.next
                    else:
                        head_nextLevel = curr.right
                        prev_nextLevel = curr.right

                curr = curr.next

            curr = head_nextLevel
            head_nextLevel = None
            prev_nextLevel = None

        return root
```