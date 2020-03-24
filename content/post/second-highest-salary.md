---
title: "Second Highest Salary"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-03T03:37:24-08:00
lastmod: 2020-03-03T03:37:24-08:00
draft: false
archive: false
---
Write a SQL query to get the second highest salary from the `Employee` table.
```
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```

For example, given the above `Employee` table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.
```
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
```

### Solution (naive)

```sql
SELECT max(Salary) as SecondHighestSalary
FROM Employee
WHERE Salary
NOT IN (SELECT max(Salary) FROM Employee)
```

### Solution

This solution considers when second highest salary doesn't exist
```sql
# Write your MySQL query statement below
SELECT
    IFNULL(
        (   SELECT DISTINCT Salary
            FROM Employee
            ORDER BY Salary Desc
            LIMIT 1
            OFFSET 1
        ),
        NULL
    ) AS SecondHighestSalary
```