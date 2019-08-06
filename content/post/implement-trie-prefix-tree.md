---
title: "Implement Trie Prefix Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "trie"]
categories: ["algorithm"]
date: 2018-11-08T23:07:10-08:00
draft: false
archive: false
---
Implement a trie with `insert`, `search`, and `startsWith` methods.

### Example
```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
```
### Note
You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
### Solution
```python
# o(n)
class TrieNode():
    def __init__(self):
        self.children = {}
        self.isWholeWord = False

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def insert(self, word):
        """
        Inserts a word into the trie.
        :type word: str
        :rtype: void
        """
        r = self.root
        for w in word:
            if w not in r.children:
                # go down one level along the path
                r.children[w] = TrieNode()
            r = r.children[w]
        r.isWholeWord = True

    def search(self, word):
        """
        Returns if the word is in the trie.
        :type word: str
        :rtype: bool
        """
        r = self.root
        for w in word:
            if w in r.children:
                # go down one level along the path
                r = r.children[w]
            else:
                return False
        # has to match the last leaf
        return r.isWholeWord

    def startsWith(self, prefix):
        """
        Returns if there is any word in the trie that starts with the given prefix.
        :type prefix: str
        :rtype: bool
        """
        r = self.root
        for w in prefix:
            if w in r.children:
                r = r.children[w]
            else:
                return False
        # Doesn't need to match the last leaf
        return True

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```