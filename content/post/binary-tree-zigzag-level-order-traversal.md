---
title: "Binary Tree Zigzag Level Order Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "bfs", "dfs"]
categories: ["algorithm"]
date: 2019-01-25T00:12:07-08:00
lastmod: 2020-02-27T00:12:07-08:00
draft: false
archive: false
---
Given a binary tree, return the _zigzag level order traversal_ of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

### Example
Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its zigzag level order traversal as:
```
[
  [3],
  [20,9],
  [15,7]
]
```

### Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        self.traverse(root, res, 0)
        return res

    def traverse(self, root, res, level):
        if not root:
            return

        if len(res) <= level:
            res.append([root.val])
        elif level>>1<<1 == level:
            res[level].append(root.val)
        else:
            res[level].insert(0, root.val)

        self.traverse(root.left, res, level+1)
        self.traverse(root.right, res, level+1)
```

bfs  
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        level_list = deque()
        if root is None:
            return []
        # start with the level 0 with a delimiter
        node_queue = deque([root, None])
        is_order_left = True

        while len(node_queue) > 0:
            curr_node = node_queue.popleft()

            if curr_node:
                if is_order_left:
                    level_list.append(curr_node.val)
                else:
                    level_list.appendleft(curr_node.val)

                if curr_node.left:
                    node_queue.append(curr_node.left)
                if curr_node.right:
                    node_queue.append(curr_node.right)
            else:
                # we finish one level
                res.append(level_list)
                # add a delimiter to mark the level
                if len(node_queue) > 0:
                    node_queue.append(None)

                # prepare for the next level
                level_list = deque()
                is_order_left = not is_order_left

        return res
```
