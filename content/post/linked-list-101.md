---
title: "Linked List 101"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2019-08-11T15:16:43-07:00
draft: true
archive: false
---
node: 4bytes
node.next: 4bytes
node.val: 4bytes

Changing node1 with node2 only changes node1's address, not its content.
Node addresses reside in stack memory. When a function terminates, it destroys the stack memory which contains the node addresses.
Linked list structure lives in heap memory. Only modifying node1.next can change the linked list's structure.