---
title: "Duplicate Emails"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2018-09-12T23:55:39+08:00
draft: false
archive: false
---
Write a SQL query to find all duplicate emails in a table named `Person`.
```
+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
```
For example, your query should return the following for the above table:
```
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
```
```Note:``` All emails are in lowercase.
**Solution:**
```sql
# Write your MySQL query statement below
SELECT email
FROM Person
WHERE email
IN (
    SELECT email
    FROM Person
    GROUP BY email
    HAVING COUNT(*) > 1
)
GROUP BY email
```