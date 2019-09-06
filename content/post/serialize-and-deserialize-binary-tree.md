---
title: "Serialize and Deserialize Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "serialization"]
categories: ["algorithm"]
date: 2018-11-13T17:31:13-08:00
draft: false
archive: false
---
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

### Example
```
You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
```
**Clarification**: The above format is the same as [how LeetCode serializes a binary tree](https://leetcode.com/faq/#binary-tree). You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

### Note Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
### Solution
```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        :type root: TreeNode
        :rtype: str
        """
        vals = []
        def search(node):
            if node:
                vals.append(str(node.val))
                search(node.left)
                search(node.right)
            else:
                vals.append('#')
        search(root)
        return ' '.join(vals)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        vals = iter(data.split())
        def build():
            val = next(vals)
            if val == '#':
                return None
            node = TreeNode(int(val))
            node.left = build()
            node.right = build()
            return node
        return build()

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
```
```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from collections import deque

class Codec:
    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return ""

        q = deque([root])
        res = []
        while q:
            node = q.popleft()
            if not node:
                res.append(str("#"))
            else:
                res.append(str(node.val))
                q.append(node.left)
                q.append(node.right)

        return " ".join(res)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        # None or ""
        if not data:
            return None

        nodeList = [
            TreeNode(val) if val != "#" else None
            for val in data.split(" ")
        ]

        curr, fast = 0, 1
        validNodes = [nodeList[curr]]

        while curr < len(validNodes):
            node = validNodes[curr]
            node.left = nodeList[fast]
            node.right = nodeList[fast+1]
            curr += 1
            fast += 2

            if node.left:
                validNodes.append(node.left)
            if node.right:
                validNodes.append(node.right)

        return nodeList[0]


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
```
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    private Queue search(TreeNode node, Queue<String> nodes) {
        if (node != null) {
            nodes.add(Integer.toString(node.val));
            search(node.left, nodes);
            search(node.right, nodes);
        } else {
            // If null node, stop search further. Add "#" to nodes.
            nodes.add("#");
        }
        return nodes;
    }

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder res = new StringBuilder();
        Queue<String> nodes = new LinkedList<>();

        search(root, nodes);

        while (!nodes.isEmpty()) {
            res.append(nodes.poll());
            res.append(",");
        }
        // Delete the trailing ","
        res.deleteCharAt(res.length()-1);
        return res.toString();
    }

    private TreeNode build(Queue<String> nodes) {
        String val = nodes.poll();
        if (val.equals("#")) {
            return null;
        }
        TreeNode node = new TreeNode(Integer.parseInt(val));
        // Build left node then right node
        node.left = build(nodes);
        node.right = build(nodes);
        return node;
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(",")));
        return build(nodes);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder res = new StringBuilder();

        LinkedList<TreeNode> queue = new LinkedList<TreeNode>();

        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode t = queue.poll();
            if(t!=null){
                res.append(Integer.toString(t.val) + ",");
                queue.add(t.left);
                queue.add(t.right);
            }else{
                res.append("#,");
            }
        }
        // Delete the last ","
        res.deleteCharAt(res.length()-1);

        return res.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data==null || data.length()==0 || data.substring(0, 1).equals("#")) return null;

        String[] strs = data.split(",");
        TreeNode root = new TreeNode(Integer.parseInt(strs[0]));

        LinkedList<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);

        // Skip root in strs
        int i=1;
        // i++: we move level by level. At each level, left to right
        while(!queue.isEmpty()){
            TreeNode node = queue.poll();

            if(node == null) continue;

            if(!strs[i].equals("#")){
                node.left = new TreeNode(Integer.parseInt(strs[i]));
                queue.offer(node.left);
            } else {
                node.left = null;
                queue.offer(null);
            }
            i++;

            if(!strs[i].equals("#")){
                node.right = new TreeNode(Integer.parseInt(strs[i]));
                queue.offer(node.right);
            } else {
                node.right = null;
                queue.offer(null);
            }
            i++;
        }

        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```