---
title: "Top Useful Sql Templates"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["sql"]
categories: ["database"]
date: 2019-07-15T15:38:32-07:00
draft: true
archive: false
---
In this post, we introduce the most useful SQL template statements.

### Find all duplicates based on a field
```sql
SELECT [EmailAddress], [CustomerName] FROM [Customers] WHERE [EmailAddress] IN
  (SELECT [EmailAddress] FROM [Customers] GROUP BY [EmailAddress] HAVING COUNT(*) > 1)
```
This is significantly more efficient than using `EXISTS`

