---
title: "CPP Data Types"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["cpp", "cplusplus"]
categories: ["data-types"]
date: 2018-11-18T14:39:12-08:00
draft: false
archive: false
---

https://stackoverflow.com/questions/2550345/whats-the-difference-between-unsigned-long-long-int-in-c-c

| Type               | Typical Bit Width | Typical Range                   |
|--------------------|-------------------|---------------------------------|
| char               | 1byte             | -127 to 127 or 0 to 255         |
| unsigned char      | 1byte             | 0 to 255                        |
| signed char        | 1byte             | -127 to 127                     |
| int                | 4bytes            | -2147483648 to 2147483647       |
| unsigned int       | 4bytes            | 0 to 4294967295                 |
| signed int         | 4bytes            | -2147483648 to 2147483647       |
| short int          | 2bytes            | -32768 to 32767                 |
| unsigned short int | Range             | 0 to 65,535                     |
| signed short int   | Range             | -32768 to 32767                 |
| long int           | 4bytes            | -2,147,483,648 to 2,147,483,647 |
| signed long int    | 4bytes            | same as long int                |
| unsigned long int  | 4bytes            | 0 to 4,294,967,295              |
| float              | 4bytes            | +/- 3.4e +/- 38 (~7 digits)     |
| double             | 8bytes            | +/- 1.7e +/- 308 (~15 digits)   |
| long double        | 8bytes            | +/- 1.7e +/- 308 (~15 digits)   |
| wchar_t            | 2 or 4 bytes      | 1 wide character                |

`printf` format for different data types:  
`%d`: `int`  
`%u`: `unsigned int`  
`%ld`: `long int`  
`%lu`: `unsigned long int`  
`%lld`: `long long int`  
`%llu`: `unsigned long long int`  

`32-bit` number range:
```c++
#include <iostream>
#include <bitset>

using namespace std;
   int main()
   {
    int min = 1 << 31;
    int max = (1 << 31) - 1;
    int minus_1 = -1;
    int zero = 0;
    cout<< std::bitset<32>(min);
    cout<< "\n";
    cout<< std::bitset<32>(max);
    cout<< "\n";
    cout<< std::bitset<32>(minus_1);
    cout<< "\n";
    cout<< std::bitset<32>(zero);
    // Ouput
    // 10000000000000000000000000000000
    // 01111111111111111111111111111111
    // 11111111111111111111111111111111
    // 00000000000000000000000000000000
    return 0;
    }
```