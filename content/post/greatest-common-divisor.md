---
title: "Greatest Common Divisor"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2019-03-27T20:57:21-07:00
draft: true
archive: false
---
```java
// Java program to find GCD of two numbers
class Test
{
	// Recursive function to return gcd of a and b
	static int gcd_1(int a, int b)
	{
		// Everything divides 0
		if (a == 0)
			return b;
		if (b == 0)
			return a;

		// base case
		if (a == b)
			return a;

		// a is greater
		if (a > b)
			return gcd(a-b, b);
		return gcd(a, b-a);
	}
	
	static int gcd_2(int a, int b)
	{
		if (b == 0) return a;
		
		return gcd_2(b, a % b);
	}

	// Driver method
	public static void main(String[] args) 
	{ 
		int a = 98, b = 56; 
		System.out.println("GCD of " + a +" and " + b + " is " + gcd_1(a, b)); 
		System.out.println("GCD of " + a +" and " + b + " is " + gcd_2(a, b)); 
	} 
} 
```
