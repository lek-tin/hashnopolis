---
title: "Human Traffic of Stadium"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-31T02:28:50-07:00
lastmod: 2020-03-31T02:28:50-07:00
draft: false
archive: false
---
X city built a new stadium, each day many people visit it and the stats are saved as these columns: `id`, `visit_date`, `people`  

Please write a query to display the records which have 3 or more consecutive rows and the amount of people more than **100(inclusive)**.  

For example, the table stadium:  

```
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+
```

For the sample data above, the output is:

```
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+
```

#### Note
- Each day only have one row record, and the dates are increasing with id increasing.

### Solution

```sql
SELECT
    DISTINCT s1.*
FROM
    stadium s1, stadium s2, stadium s3
WHERE
    s1.people >= 100 AND s2.people >= 100 AND s3.people >= 100
AND
(
    (s1.id - s2.id = 1 AND s2.id - s3.id = 1 AND s1.id - s3.id = 2)  -- s1->s2->s3
OR
    (s2.id - s1.id = 1 AND s1.id - s3.id = 1 AND s2.id - s3.id = 2)  -- s2->s1->s3
OR
    (s2.id - s3.id = 1 AND s3.id - s1.id = 1 AND s2.id - s1.id = 2)  -- s2->s3->s1
)
ORDER BY
    s1.id
```

#### Human Traffic of Stadium multi-select cartesian product table:
![Human Traffic of Stadium multi-select cartesian product table](/img/post/human-traffic-of-stadium-multi-select-cartesian-product-table.png)

### Solution 2

```sql
SELECT DISTINCT S1.*
FROM stadium S1
JOIN stadium S2
JOIN stadium S3
ON (
  (S1.id = S2.id - 1 AND S1.id = S3.id -2)
  OR
  (S3.id = S1.id - 1 AND S3.id = S2.id -2)
  OR
  (S3.id = S2.id - 1 AND S3.id = S1.id -2))
WHERE
  S1.people >= 100
AND
  S2.people >= 100
AND
  S3.people >= 100
ORDER BY
  S1.id
```
