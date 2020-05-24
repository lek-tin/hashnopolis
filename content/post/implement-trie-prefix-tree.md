---
title: "Implement Trie Prefix Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "trie"]
categories: ["algorithm"]
date: 2018-11-08T23:07:10-08:00
lastmod: 2020-05-14T02:07:10-08:00
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

#### Note
- You may assume that all inputs are consist of lowercase letters a-z.
- All inputs are guaranteed to be non-empty strings.

### Solution

Java
```java
class Trie {

    class TrieNode {

        private TrieNode[] children;

        private final int R = 26;

        private boolean isWord;

        public TrieNode() {
            children = new TrieNode[R];
        }

        public boolean containsKey(char ch) {
            return children[ch -'a'] != null;
        }

        public TrieNode get(char ch) {
            return children[ch -'a'];
        }

        public void put(char ch, TrieNode node) {
            children[ch -'a'] = node;
        }

        public void setEnd() {
            isWord = true;
        }

        public boolean isWord() {
            return isWord;
        }
    }

    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode node = root;
        for (int i = 0; i < word.length(); i++) {
            char currChar = word.charAt(i);
            if (!node.containsKey(currChar)) {
                node.put(currChar, new TrieNode());
            }
            node = node.get(currChar);
        }
        node.setEnd();
    }

    private TrieNode searchPrefix(String word) {
        TrieNode node = root;
        for (int i = 0; i < word.length(); i++) {
            char curLetter = word.charAt(i);
            if (node.containsKey(curLetter)) {
                node = node.get(curLetter);
            } else {
                return null;
            }
        }
        return node;
    }

    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isWord();
    }

    public boolean startsWith(String prefix) {
        TrieNode node = searchPrefix(prefix);
        return node != null;
    }
}
```

Python
```python
class TrieNode:
    def __init__(self):
        self.isWord = False
        self.chars = [False for _ in range(26)]
        self.children = [None for _ in range(26)]

class Trie:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = TrieNode()

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        curr = self.head
        for i, letter in enumerate(word):
            index = ord(letter)-ord("a")
            if not curr.chars[index]:
                curr.chars[index] = True
                curr.children[index] = TrieNode()
            curr = curr.children[index]
        curr.isWord = True


    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        curr = self.head
        for i, letter in enumerate(word):
            index = ord(letter)-ord("a")
            if not curr.chars[index]:
                return False
            curr = curr.children[index]

        return True if curr.isWord else False

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        curr = self.head
        curr = self.head
        for i, letter in enumerate(prefix):
            index = ord(letter)-ord("a")
            if not curr.chars[index]:
                return False
            curr = curr.children[index]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```
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
