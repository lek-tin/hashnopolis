---
title: "Lists in Java"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["list"]
categories: ["java"]
date: 2019-03-27T00:04:16-07:00
draft: false
archive: false
---
### List interface:
The List interface specifies two remove methods:  
```java
List<Integer> list = new List<>();
// Remove the element at index 4
remove(int index): list.remove(4);
// Remove the first occurrence of the object 4
remove(Object o): list.remove(new Integer(4));
```

### Linked List:
| Pros | Cons |
|------|------|
| Can insert or remove anywhere in the list without shifting elements | Not sortable |
| Insert: O(1) | Elements are not stored in contiguous memory addresses |
| Remove: O(1) | Find: O(n), as must traverse to find an element |