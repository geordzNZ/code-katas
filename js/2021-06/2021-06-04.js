// CODE KATAS FOR 04 June 2021
// Rankings at start of the day:
//   Merit = 1743
//   Kyu = 4
//   Clan = 7

// 1) START===============================================================
// TITLE: Switch/Case - Bug Fixing #6 (7 kyu)
// LINK:  https://www.codewars.com/kata/55c933c115a8c426ac000082

// Fix this Code
// function evalObject(value){
//   var result = 0;
//   switch(value.operation){
//     case'+': result = value.a + value.b;
//     case'-': result = value.a - value.b;
//     case'/': result = value.a / value.b;
//     case'*': result = value.a * value.b;
//     case'%': result = value.a % value.b;
//     case'^': result = Math.pow(value.a, value.b);
//   }
//   return result;
// }

// the fix
// function evalObject(value){
//   var result = 0;
//   switch(value.operation){
//     case'+': result = value.a + value.b; break;
//     case'-': result = value.a - value.b; break;
//     case'/': result = value.a / value.b; break;
//     case'*': result = value.a * value.b; break;
//     case'%': result = value.a % value.b; break;
//     case'^': result = Math.pow(value.a, value.b); break;
//   }
//   return result;
// }

// fix v2
// function evalObject(value){
//   switch(value.operation){
//     case'+': return value.a + value.b;
//     case'-': return value.a - value.b;
//     case'/': return value.a / value.b;
//     case'*': return value.a * value.b;
//     case'%': return value.a % value.b;
//     case'^': return Math.pow(value.a, value.b);
//   }
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Build a square (7 kyu)
// LINK:  https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

// v1
// function generateShape(int){
//   let res = []
//   for (let i=1; i<=int; i++){
//     res.push('+'.repeat(int))
//   }
//   return res.join('\n')
// }

// v2
// const generateShape =int=> Array(int).fill('+'.repeat(int)).join('\n')
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Largest pair sum in array (7 kyu)
// LINK:  https://www.codewars.com/kata/556196a6091a7e7f58000018

//v1
// function largestPairSum(numbers){
//   numbers.sort((a,b)=>b-a)
//   return numbers[0] + numbers[1] 
// }
// 3) END===============================================================


// 4) START===============================================================
// TITLE: 
// LINK:  

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