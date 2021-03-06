---
title: "Max Stack"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2019-03-31T02:37:36-07:00
draft: false
archive: false
---
Design a max stack that supports push, pop, top, peekMax and popMax.  
1. `push(x`) -- Push element x onto stack.
2. `pop()` -- Remove the element on top of the stack and return it.
3. `top()` -- Get the element on the top.
4. `peekMax()` -- Retrieve the maximum element in the stack.
5. `popMax()` -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.
### Example 1
```
MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5
```
#### Note
1. `-1e7 <= x <= 1e7`
2. Number of operations won't exceed `10000`.
3. The last four operations won't be called when stack is empty.

### Solution:
```java
class MaxStack {

    Stack<Integer> stack;
    Stack<Integer> maxStack;
    /** initialize your data structure here. */
    public MaxStack() {
        stack = new Stack<>();
        maxStack = new Stack<>();
    }

    public void push(int x) {
        int max = maxStack.isEmpty() ? x : maxStack.peek();
        // Assign a max to every newcomer
        maxStack.push(max > x ? max : x);
        stack.push(x);
    }

    public int pop() {
        maxStack.pop();
        return stack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int peekMax() {
        return maxStack.peek();
    }

    public int popMax() {
        int val = peekMax();
        Stack<Integer> buffer = new Stack();
        while (top() != val) { buffer.push(pop()); }
        pop();
        while (!buffer.isEmpty()) { push(buffer.pop()); }
        return val;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * MaxStack obj = new MaxStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.peekMax();
 * int param_5 = obj.popMax();
 */
 ```
**Time Complexity**: `O(N)` for the popMax operation, and `O(1)` for the other operations, where `N` is the number of operations performed.  
**Space Complexity**: `O(N)`, the maximum size of the stack.  

Idea 2: double linked list + treeMap
```java
// Time: O(logN) for all operations except peek which is O(1)
// Space: `O(n)`
class MaxStack {
    TreeMap<Integer, List<Node>> map;
    DoubleLinkedList dll;

    public MaxStack() {
        map = new TreeMap();
        dll = new DoubleLinkedList();
    }

    public void push(int x) {
        Node node = dll.add(x);
        if(!map.containsKey(x))
            map.put(x, new ArrayList<Node>());
        map.get(x).add(node);
    }

    public int pop() {
        int val = dll.pop();
        List<Node> L = map.get(val);
        L.remove(L.size() - 1);
        if (L.isEmpty()) map.remove(val);
        return val;
    }

    public int top() {
        return dll.peek();
    }

    public int peekMax() {
        return map.lastKey();
    }

    public int popMax() {
        int max = peekMax();
        List<Node> L = map.get(max);
        Node node = L.remove(L.size() - 1);
        dll.unlink(node);
        if (L.isEmpty()) map.remove(max);
        return max;
    }
}

class DoubleLinkedList {
    Node head, tail;

    public DoubleLinkedList() {
        head = new Node(0);
        tail = new Node(0);
        head.next = tail;
        tail.prev = head;
    }

    public Node add(int val) {
        Node x = new Node(val);
        x.next = tail;
        x.prev = tail.prev;
        tail.prev = tail.prev.next = x;
        return x;
    }

    public int pop() {
        return unlink(tail.prev).val;
    }

    public int peek() {
        return tail.prev.val;
    }

    public Node unlink(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return node;
    }
}

class Node {
    int val;
    Node prev, next;
    public Node(int v) {val = v;}
}
```
