---
title: "Encode and Decode Strings"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-03-22T00:22:39-07:00
lastmod: 2020-03-22T00:22:39-07:00
draft: true
archive: false
---

Design an algorithm to encode **a list of strings** to **a string**. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:
```
string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
```
Machine 2 (receiver) has the function:
```
vector<string> decode(string s) {
  //... your code
  return strs;
}
```
So Machine 1 does:
```
string encoded_string = encode(strs);
```
and Machine 2 does:
```
vector<string> strs2 = decode(encoded_string);
```
`strs2` in Machine 2 should be the same as `strs` in Machine 1.

Implement the `encode` and `decode` methods.  

#### Note

1. The string may contain any possible characters out of `256` valid **ascii** characters. Your algorithm should be generalized enough to work on any possible characters.
2. Do not use class member/global/static variables to store states. Your `encode` and `decode` algorithms should be stateless.
3. Do not rely on any library method such as `eval` or serialize methods. You should implement your own `encode/decode` algorithm.

### Solution

```python
class Codec:
    def encode(self, strs: [str]) -> str:
        """Encodes a list of strings to a single string.
        """
        self.res = ""
        for s in strs:
            self.res += str(len(s)) + "/" + s

        return self.res

    def decode(self, s: str) -> [str]:
        """Decodes a single string to a list of strings.
        """
        l, i = 0, 0
        strs = []

        while i < len(self.res):

            while self.res[i] != "/":
                l = l*10 + int(self.res[i])
                i += 1
            strs.append(self.res[i+1:i+1+l])

            i = i+1+l
            l = 0

        return strs

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))
```
