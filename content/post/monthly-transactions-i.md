---
title: "Monthly Transactions I"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-04-12T01:47:02-07:00
lastmod: 2020-04-12T01:47:02-07:00
draft: false
archive: false
---

Table: `Transactions`

```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| country       | varchar |
| state         | enum    |
| amount        | int     |
| trans_date    | date    |
+---------------+---------+
id is the primary key of this table.
The table has information about incoming transactions.
The state column is an enum of type ["approved", "declined"].
```

Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.  

The query result format is in the following example:

```
Transactions table:
+------+---------+----------+--------+------------+
| id   | country | state    | amount | trans_date |
+------+---------+----------+--------+------------+
| 121  | US      | approved | 1000   | 2018-12-18 |
| 122  | US      | declined | 2000   | 2018-12-19 |
| 123  | US      | approved | 2000   | 2019-01-01 |
| 124  | DE      | approved | 2000   | 2019-01-07 |
+------+---------+----------+--------+------------+

Result table:
+----------+---------+-------------+----------------+--------------------+-----------------------+
| month    | country | trans_count | approved_count | trans_total_amount | approved_total_amount |
+----------+---------+-------------+----------------+--------------------+-----------------------+
| 2018-12  | US      | 2           | 1              | 3000               | 1000                  |
| 2019-01  | US      | 1           | 1              | 2000               | 2000                  |
| 2019-01  | DE      | 1           | 1              | 2000               | 2000                  |
+----------+---------+-------------+----------------+--------------------+-----------------------+
```

### Solution

```sql
SELECT DATE_FORMAT(trans_date, "%Y-%m") AS month,
       country,
       COUNT(state) AS trans_count,
       SUM(approved) AS approved_count,
       SUM(approved_amount) AS trans_total_amount,
       SUM(amount) AS approved_total_amount

FROM (
        SELECT *,
               IF(state = "approved", 1, 0) as approved,
               IF(state = "approved", amount, 0) as approved_amount
        FROM Transactions
) t1

GROUP BY DATE_FORMAT(trans_date, "%Y-%m"), country
```
