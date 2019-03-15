---
title: "Most Common Word"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "hashset", "string"]
categories: ["algorithm"]
date: 2019-03-07T23:04:58-08:00
draft: false
archive: false
---
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

### Example:
```
Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
```

### Note:
1. `1 <= paragraph.length <= 1000`.
2. `1 <= banned.length <= 100`.
3. `1 <= banned[i].length <= 10`.
4. The answer is unique, and written in lowercase (even if its occurrences in `paragraph` may have uppercase symbols, and even if it is a proper noun.)
`paragraph` only consists of letters, spaces, or the punctuation symbols !?',;.
5. There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.

### SOlution:
```java
// Time: O(n)
// Space: O(n)
class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        HashSet<String> bannedWords = new HashSet<>(Arrays.asList(banned));
        HashMap<String, Integer> counts = new HashMap<>();
        // Split by one or more whitespaces
        String[] words = paragraph.replaceAll("\\s", ",").replaceAll("\\pP", " ").toLowerCase(). split("\\s+");
        int max = 0;
        String res = "";

        for (String word: words) {
            if (!bannedWords.contains(word)) {
                int currentCount = counts.getOrDefault(word, 0);
                counts.put(word, currentCount + 1);
                if (counts.get(word) > max) {
                    max = counts.get(word);
                    res = word;
                }
            }
        }

        return res;
    }
}
```