---
title: "Combine Two Tables"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-09-10T21:40:30+08:00
draft: false
archive: false
---
Table: `Person`
```
+-------------+---------+   
| Column Name | Type    |   
+-------------+---------+   
| PersonId    | int     |   
| FirstName   | varchar |   
| LastName    | varchar |   
+-------------+---------+   
PersonId is the primary key column for this table.
```
Table: `Address`
```
+-------------+---------+   
| Column Name | Type    |   
+-------------+---------+   
| AddressId   | int     |   
| PersonId    | int     |   
| City        | varchar |   
| State       | varchar |   
+-------------+---------+   
AddressId is the primary key column for this table.
```

Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:
```
FirstName, LastName, City, State
```
**Solution:**
```python
# Write your MySQL query statement below
SELECT FirstName, LastName, City, State
FROM Person LEFT JOIN Address
ON Person.PersonId = Address.PersonId
```