---
title: "Reorder Log Files"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sort", "comparator"]
categories: ["algorithm"]
date: 2019-03-08T23:56:44-08:00
draft: true
archive: false
---
You have an array of `logs`.  Each log is a space delimited string of words.

For each log, the first word in each log is an **alphanumeric identifier**.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the **identifier** will consist only of digits.
We will call these two varieties of logs **letter-logs** and **digit-logs**.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the **letter-logs** come before any **digit-log**.  The **letter-logs** are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The **digit-logs** should be put in their original order.

Return the final order of the logs.

 

### Example 1:
```
Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
```

### Note:
1. `0 <= logs.length <= 1001`
2. `3 <= logs[i].length <= 100`
3. `logs[i]` is guaranteed to have an identifier, and a word after the identifier.

### Solution:
```java
class Solution {

    private class logComparator implements Comparator<String> {
        @Override
        public int compare(String a, String b) {
            int index_a = a.indexOf(" ") + 1;
            int index_b = b.indexOf(" ") + 1;
            char char_a = a.charAt(index_a);
            char char_b = b.charAt(index_b);
            // If both are char, compare by substirng
            if (!isDigit(char_a) && !isDigit(char_b)) {
                return a.substring(index_a).compareTo(b.substring(index_b));
            }
            // char should appear before digit, return negative value;
            if (!isDigit(char_a) && isDigit(char_b)) {
                return -1;
            }
            // char should be brought foward, return positive value;
            if (isDigit(char_a) && !isDigit(char_b)) {
                return 1;
            }
            // If both are digits, remain order
            return 0;
        }
    }

    private boolean isDigit(char ch) {
      if(ch >= '0' && ch <= '9') return true;
      else return false;
    }

    public String[] reorderLogFiles(String[] logs) {
        logComparator LC = new logComparator();
        Arrays.sort(logs, LC);

        return logs;
    }
}
```