---
title: "Prefix Postfix Conversion"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2019-10-19T22:15:17-07:00
lastmod: 2019-10-19T22:15:17-07:00
draft: false
archive: false
---
**Prefix** : An expression is called the prefix expression if the operator appears in the expression before the operands. Simply of the form (operator operand1 operand2).
Example : `*+AB-CD (Infix : (A+B) * (C-D) )`

**Postfix**: An expression is called the postfix expression if the operator appears in the expression after the operands. Simply of the form (operand1 operand2 operator).
Example : `AB+CD-* (Infix : (A+B * (C-D) )`

Given a Prefix expression, convert it into a Postfix expression.
Conversion of Prefix expression directly to Postfix without going through the process of converting them first to Infix and then to Postfix is much better in terms of computation and better understanding the expression (Computers evaluate using Postfix expression).


### Example:
```
Input :  Prefix :  *+AB-CD
Output : Postfix : AB+CD-*
Explanation : Prefix to Infix :  (A+B) * (C-D)
              Infix to Postfix :  AB+CD-*

Input :  Prefix :  *-A/BC-/AKL
Output : Postfix : ABC/-AK/L-*
Explanation : Prefix to Infix :  A-(B/C)*(A/K)-L
              Infix to Postfix : ABC/-AK/L-*
```

### Solution
Java
```java
class Solution
{

  // funtion to check if character
  // is operator or not
  static boolean isOperator(char x)
  {
    switch (x)
    {
      case '+':
      case '-':
      case '/':
      case '*':
      return true;
    }
    return false;
  }

  // Convert prefix to Postfix expression
  static String preToPost(String pre_exp)
  {

    Stack<String> s= new Stack<String>();

    // length of expression
    int length = pre_exp.length();

    // reading from right to left
    for (int i = length - 1; i >= 0; i--)
    {

      // check if symbol is operator
      if (isOperator(pre_exp.charAt(i)))
      {

        // pop two operands from stack
        String op1 = s.peek(); s.pop();
        String op2 = s.peek(); s.pop();

        // concat the operands and operator
        String temp = op1 + op2 + pre_exp.charAt(i);

        // Push String temp back to stack
        s.push(temp);
      }

      // if symbol is an operand
      else
      {
        // push the operand to the stack
        s.push( pre_exp.charAt(i)+"");
      }
    }
    for(String str: s) {
        System.out.println(str);
      }
    // stack contains only the Postfix expression
    return s.peek();
  }
}
```
