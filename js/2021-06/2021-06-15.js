// CODE KATAS FOR 15 June 2021
// Rankings at start of the day:
//   Merit = 1817
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Regexp Basics - is it a eight bit unsigned number? (7 kyu)
// LINK:  https://www.codewars.com/kata/567e8f7b4096f2b4b1000005

// v1
// String.prototype.eightBitNumber = function() {
//   return /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/.test(this)
// }

// v2
// String.prototype.eightBitNumber = function () {
//   return String(+this)==this && +this>=0 && +this<=255;
// };
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Regexp Basics - is it a six bit unsigned number? (7 kyu)
// LINK:  https://www.codewars.com/kata/567e8dbb9b6f4da558000030

// v1
// String.prototype.sixBitNumber = function() {
//   return /^(6[0-3]|[1-5]?[0-9])$/.test(this)
// }

// v2
// String.prototype.sixBitNumber = function() {
//   return String(+this)==this &&  +this>=0 && +this<=63
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Count by X (8 kyu)
// LINK:  https://www.codewars.com/kata/5513795bd3fafb56c200049e

// v1
// function countBy(x, n) {
//   let res = [];
//   for (let i=1; i<=n; i++ ){ res.push(i*x) }  
//   return res;
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