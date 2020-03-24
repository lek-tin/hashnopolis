---
title: "Delete Nodes and Return Forest"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "dfs"]
categories: ["algorithm"]
date: 2020-03-22T01:46:03-07:00
lastmod: 2020-03-22T01:46:03-07:00
draft: false
archive: false
---

Given the `root` of a binary tree, each node in the tree has a distinct value.  

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).  

Return the roots of the trees in the remaining forest.  You may return the result in any order.  

### Example 1

![delete nodes and return forest example 1](/img/post/delete-nodes-and-return-forest-example-1.png)
```
Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
```

#### Constraints

1 The number of nodes in the given tree is at most `1000`.
2. Each node has a distinct value between `1` and `1000`.
3. `to_delete.length <= 1000`
4. `to_delete` contains distinct values between `1` and `1000`.

### Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:
        self.res = []
        to_delete = set(to_delete)
        self.dfs(root, to_delete, True)
        return self.res

    def dfs(self, root, to_delete, is_root):
        if not root:
            return None

        is_deleted = root.val in to_delete

        if is_root and not is_deleted:
            self.res.append(root)

        root.left = self.dfs(root.left, to_delete, is_deleted)
        root.right = self.dfs(root.right, to_delete, is_deleted)

        return None if is_deleted else root
```
