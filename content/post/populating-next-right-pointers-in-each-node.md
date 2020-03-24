---
title: "Populating Next Right Pointers in Each Node"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "level-traversal", "bfs", "recursion"]
categories: ["algorithm"]
date: 2020-02-26T20:20:25-08:00
lastmod: 2020-02-26T20:20:25-08:00
draft: false
archive: false
---
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:  

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
![Populating Next Right Pointers in Each Node](/img/post/populating-next-right-pointers-in-each-node.png)
```
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

### Constraints

1. The number of nodes in the given tree is less than `4096`.
2. `-1000 <= node.val <= 1000`

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

        while len(queue):
            size = len(queue)
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

### Solution 2 (recursion)

Time: `O(n)`  
Space: `O(1)` or `O(logN)` if implicit stack space counted.
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
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root or not root.left:
            return root

        root.left.next = root.right

        if root.next:
            root.right.next = root.next.left

        self.connect(root.left)
        self.connect(root.right)
        return root
```

### Solution 3 (constant space)
We can use previously constructed next pointers to reduce space to constant  
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

        leftmost = root

        while leftmost.left:

            curr = leftmost

            while curr:
                curr.left.next = curr.right

                if curr.next:
                    curr.right.next = curr.next.left

                curr = curr.next

            leftmost = leftmost.left

        return root
```
