---
title: "Print Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2020-02-15T17:48:43-08:00
lastmod: 2020-02-15T17:48:43-08:00
draft: false
archive: false
---
Print a binary tree in an `m*n` **2D** string array following these rules:

1. The row number m should be equal to the height of the given binary tree.
2. The column number n should always be an odd number.
3. The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts **(left-bottom part and right-bottom part)**. You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
4. Each unused space should contain an empty string "".
5. Print the subtrees following the same rules.

### Example 1
```
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
```

### Example 2
```
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
```

### Example 3
```
Input:
      1
     / \
    2   5
   / 
  3 
 / 
4 
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
```

#### NOTE: The height of binary tree is in the range of [1, 10].

### Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def printTree(self, root: TreeNode) -> List[List[str]]:
        height = self.getHeight(root)
        res = [["" for j in range(2**height - 1)] for i in range(height)]
        answer = []
        self.fill(res, root, 0, 0, len(res[0]))
        for arr in res:
            answer.append(arr)
        return answer

    def getHeight(self, root):
        if not root:
            return 0
        return 1 + max(self.getHeight(root.left), self.getHeight(root.right))

    def fill(self, res, root, i, l, r):
        if not root:
            return
        res[i][(l+r)//2] = str(root.val)
        self.fill(res, root.left, i+1, l, (l+r)//2)
        self.fill(res, root.right, i+1, (l+r+1)//2, r)
```