// CODE KATAS FOR 23 Mar 2021
// Rankings at start of the day:
//   Merit = 997
//   Kyu = 4
//   Clan = 12
// Comments:
//   Updates to js file = comment = #X kata for 23/Mar/2021

// 1) START===============================================================
// TITLE: Basic Mathematical Operations (8 kyu)
// LINK:  https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// function basicOp(op, v1, v2){
//   switch (op){
//     case '+': return v1+v2;
//     case '-': return v1-v2;
//     case '*': return v1*v2;
//     case '/': return v1/v2      
//   }
// }

// v2
// clerver ans from someone else
// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }

// v3
// reformatted for me.
// const basicOp = (op, v1, v2) => eval(v1+op+v2)

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Count Odd Numbers below n (8 kyu)
// LINK:  https://www.codewars.com/kata/59342039eb450e39970000a6

// v1 - timed out on full test run
// function oddCount(n){
//   let odd = 0
//   for (let i=1;i<n;i+=2) { odd++ } 
//   return odd
// }

// v2
// const oddCount = n => (n%2===1) ? (n-1)/2 : n/2

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Volume of a Cuboid (8 kyu)
// LINK:  https://www.codewars.com/kata/58261acb22be6e2ed800003a

// class Kata {
//   static getVolumeOfCuboid(l, w, h) {
//    return l*w*h
//   }
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Simple validation of a username with regex (8 kyu)
// LINK:  https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

// function validateUsr(username) {
//   return  /^[a-z0-9_]{4,16}$/.test(username)
// }

// Explanation
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */

// 4) END===============================================================


// 5) START===============================================================
// TITLE: 
// LINK:  

// 5) END===============================================================


// 6) START===============================================================
// TITLE: 
// LINK:  

// 6) END===============================================================


// 7) START===============================================================
// TITLE: 
// LINK:  

// 7) END===============================================================


// 8) START===============================================================
// TITLE: 
// LINK:  

// 8) END===============================================================


// 9) START===============================================================
// TITLE: 
// LINK:  

// 9) END===============================================================

// 10) START===============================================================
// TITLE: 
// LINK:  

// 10) END===============================================================