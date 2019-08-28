---
title: "Priorityqueue and Treemap in Java"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["data-structure"]
categories: ["java"]
date: 2019-08-15T00:32:23-07:00
draft: true
archive: false
---
One of the differences is that remove(Object) and contains(Object) are linear `O(n)` in a normal heap based PriorityQueue (like Oracle's), but `O(log(n))` for a TreeSet/Map.

So if you have a large number of elements and do a lot of remove(Object) or contains(Object), then a TreeSet/Map may be faster.

PriorityQueue Allows Duplicate(i.e with same priority) while TreeMap doesn't.
Complexity of PriorityQueue is `O(n)`(when is increases its size), while that of TreeMap is `O(logn)`(as it is based on Red Black Tree)
PriorityQueue is based on Array while in TreeMap nodes are linked to each other, so contains method of PriorityQueue would take `O(n)` time while TreeMap would take O(logn) time.