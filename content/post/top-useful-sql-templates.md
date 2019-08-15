---
title: "Top Useful Sql Templates"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["sql"]
categories: ["database"]
date: 2019-07-15T15:38:32-07:00
draft: false
archive: false
---
In this post, we introduce the most useful SQL template statements.

### Find all duplicates based on a field
```sql
SELECT [EmailAddress], [CustomerName] FROM [Customers] WHERE [EmailAddress] IN
  (SELECT [EmailAddress] FROM [Customers] GROUP BY [EmailAddress] HAVING COUNT(*) > 1)
```
This is significantly more efficient than using `EXISTS`

### Select DISTINCT on multiple columns
We can select distinct on multiple columns(distinct combinations of column values.), for example, gender(male) **AND** age(>18).

### Select duplicate rows based on column
```sql
SELECT TOP 1 C1.ID, C1.Code, C1.OwnerName, C2.NumberDuplicates
FROM
Customers C1
INNER JOIN
  (
  SELECT Code, COUNT(*) as NumberDuplicates  FROM Customers GROUP BY code HAVING COUNT(*) > 1
  ) C2
ON C1.Code = C2.Code
```

### Override column values conditionally
```sql
SELECT id, name, CASE WHEN hide = 0 THEN 'false' ELSE 'true' END AS hide
  FROM YOUR_FAVE_TABLE
```