---
title: "Encode and Decode Tinyurl"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "encoding", "decoding", "hashmap"]
categories: ["algorithm"]
date: 2018-11-11T18:48:12-08:00
draft: false
archive: false
---
**Note:** This is a companion problem to the `System Design` problem: `Design TinyURL`.
TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`.

Design the `encode` and `decode` methods for the TinyURL service. There is no restriction on how your `encode/decode` algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
**Solution:**
```python
class Codec:
    def __init__(self):
        self.encodeVal = 0
        self.map = {}

    def encode(self, longUrl):
        """Encodes a URL to a shortened URL.
        :type longUrl: str
        :rtype: str
        """
        self.encodeVal += 1
        encodedUrl = "http://tinyurl.com/" + str(self.encodeVal)
        self.map[encodedUrl] = longUrl

        return encodedUrl


    def decode(self, shortUrl):
        """Decodes a shortened URL to its original URL.

        :type shortUrl: str
        :rtype: str
        """
        if shortUrl in self.map:
            return self.map[shortUrl]
        return ""

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
```
**Think beyond:**
Python uses dynamic memory allocation so you don't specify the size of an object. It will use as little or as much as you need. Any name can be assigned any object at run time, that object can be dynamically generated (e.g. a complete file read as a string). The limit of the number of urls can be stored in the class regarding our problem is the machine's memory on which the programme is running.