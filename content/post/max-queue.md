---
title: "Max Queue"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "queue", "priority-queue"]
categories: ["algorithm"]
date: 2020-03-15T00:27:41-07:00
lastmod: 2020-03-15T00:27:41-07:00
draft: false
archive: false
---
Implement a `MaxQueue` class that has the following methods:

```java
public interface MaxQueue {
  public void add(Long l);
  public Long poll();
  public Long pollMax();
}
```
All 3 operations should take on average `O(logN)` time.

### Solution

```java
// "static void main" must be defined in a public class.
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello World!");
        DoubleLinkedList list = new DoubleLinkedList();
        MaxQueue maxQ = new MaxQueue();
        maxQ.add(5);
        maxQ.add(3);
        maxQ.add(4);
        maxQ.add(9);
        maxQ.add(25);
        maxQ.add(1);
        maxQ.add(0);
        System.out.println(maxQ.pollMax());
        System.out.println(maxQ.poll());
        System.out.println(maxQ.poll());
        System.out.println(maxQ.pollMax());
        System.out.println(maxQ.poll());
        System.out.println(maxQ.poll());
        System.out.println(maxQ.poll());
    }
}
class Node {
    int val;
    Node prev;
    Node next;
    public Node(int val) {
        this.val = val;
    }
}
class DoubleLinkedList {
    private int size;
    private Node head;
    private Node tail;
    public DoubleLinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    public int length() {
        return size;
    }
    public Node getTail() {
        return tail;
    }
    public boolean addFirst(int val) {
        // check whether list is empty
        if (size == 0) {
            head = new Node(val);
            head.next = head;
            head.prev = head;
            tail = head;
        } else {
            Node node = new Node(val);
            node.next = head;
            node.prev = head.prev;
            head.prev = node;
            node.prev.next = node;
            head = node;
        }
        size++;
        return true;
    }
    public boolean addLast(int val) {
        // check size
        if (size == 0) {
            head = new Node(val);
            head.next = head;
            head.prev = head;
            tail = head;
        } else {
            Node node = new Node(val);
            node.prev = tail;
            tail.next = node;
            node.next = head;
            head.next = node;
            tail = node;
        }
        size++;
        return true;
    }
    public Node popFirst() {
        if (size == 0) { return null; }
        Node node = head;
        if (size == 1) {
            head = null;
            tail = null;
        } else {
            head = head.next;
            head.prev = tail;
            tail.next = head;
        }
        size--;
        return node;
    }
    public Node popLast() {
        if (size == 0) { return null; }
        Node node = tail;
        if (size == 1) {
            head = null;
            tail = null;
        } else {
            tail = tail.prev;
            tail.next = head;
            head.prev = tail;
        }
        size--;
        return node;
    }
    public void remove(Node node) {
        if (node == head) {
            popFirst();
        } else if (node == tail) {
            popLast();
        } else {
            node.prev.next = node.next;
            node.prev.next.prev = node.prev;
            size--;
        }
    }
}

class MaxQueue {
  PriorityQueue<Node> queue;
    DoubleLinkedList list;
    public MaxQueue() {
        queue = new PriorityQueue<>(new Comparator<Node>(){
            public int compare(Node o1, Node o2) {
                return o2.val - o1.val;
            }
        });
        list = new DoubleLinkedList();
    }
    public int size() {
        return list.length();
    }
    public void add(int val) {
        list.addLast(val);
        queue.offer(list.getTail());
    }
    public int poll() throws Exception {
        if (list.length() <= 0) { throw new Exception("Empty!"); }
        Node node = list.popLast();
        queue.remove(node);
        return node.val;
    }
    public int pollMax() throws Exception {
        if (list.length() <= 0) { throw new Exception("Empty!"); }
        Node node = queue.poll();
        list.remove(node);
        return node.val;
    }
}
```
