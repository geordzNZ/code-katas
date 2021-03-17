// CODE KATAS FOR 17 Mar 2021
// Rankings at start of the day:
//   Merit = 871
//   Kyu = 4
//   Clan = 13
// Comments:
//   Updates to js file = comment = #X kata for 17/Mar/2021

// 1) START===============================================================
// TITLE: No zeros for heros (8 kyu)
// LINK:  https://www.codewars.com/kata/570a6a46455d08ff8d001002

// function noBoringZeros(n) {
//   if (n===0) { return 0 }
//   let splitN = String(n).split('')
  
//   for (let i=splitN.length-1; i>=0; i--){
//     if (splitN[i]==='0') { splitN.pop() }
//     else { return Number(splitN.join('')) }
//   }
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: All unique (7 kyu)
// LINK:  https://www.codewars.com/kata/553e8b195b853c6db4000048

// v1
// function hasUniqueChars(str){
//   let splitStr = str.split('')
  
//   for (let i=0;i<=splitStr.length-2;i++){
//     for (let j=i+1;j<=splitStr.length-1;j++){
//       if (splitStr[i] === splitStr[j]) { return false }
//     }
//   }
//   return true
// }

// v2 - someone elses better answer
// function hasUniqueChars(str){
//   return str.split('').every(function(v, i, arr){
//     return arr.indexOf(v) == i;
//   });
// }

// or 
// let hasUniqueChars = (str) => new Set(str).size === str.length;

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe (7 kyu)
// LINK:  https://www.codewars.com/kata/582746fa14b3892727000c4f

// function countDevelopers(list) {
//   return list.filter((p) => (p.language==='JavaScript' && p.continent==='Europe')).length
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Convert number to reversed array of digits (8 kyu)
// LINK:  https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// function digitize(n) {
//   return String(n).split('').reverse().map((v) => { return v*1})
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Even or Odd (8 kyu)
// LINK:  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript



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