---
title: "Second Degree Follower"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-29T23:56:31-07:00
lastmod: 2020-03-29T23:56:31-07:00
draft: false
archive: false
---

In facebook, there is a follow table with two columns: **followee**, **follower**.  

Please write a sql query to get the amount of each follower’s follower if he/she has one.  

For example:

```
+-------------+------------+
| followee    | follower   |
+-------------+------------+
|     A       |     B      |
|     B       |     C      |
|     B       |     D      |
|     D       |     E      |
+-------------+------------+
should output:
+-------------+------------+
| follower    | num        |
+-------------+------------+
|     B       |  2         |
|     D       |  1         |
+-------------+------------+
Explaination:
Both B and D exist in the follower list, when as a followee, B's follower is C and D, and D's follower is E. A does not exist in follower list.
```

#### Note
1. Followee would not follow himself/herself in all cases.
2. Please display the result in follower's alphabet order.

### Solution (join)

```sql
SELECT f1.follower, COUNT(DISTINCT f2.follower) AS num
FROM follow f1
JOIN follow f2
ON f1.follower = f2.followee
GROUP BY f1.follower
```

### Solution (where)

```sql
SELECT followee as follower,
       count(distinct follower) as num
FROM
  follow
WHERE followee in
  (
    SELECT distinct follower from follow
  )
GROUP BY followee
```
