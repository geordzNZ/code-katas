// CODE KATAS FOR 08 June 2021
// Rankings at start of the day:
//   Merit = 1771
//   Kyu = 4
//   Clan = 7

// 1) START===============================================================
// TITLE: https://www.codewars.com/kata/580755730b5a77650500010c (7 kyu)
// LINK:  Odd-Even String Sort

// v1
// function sortMyString(S) {
//   let odds = [...S].filter((l,i)=> i%2)
//   let evens = [...S].filter((l,i)=> i%2===0)
//   return evens.join('') + ' ' + odds.join('')
// }

// v2
//const sortMyString=S=> [...S].filter((l,i)=> i%2===0).join('') + ' ' + [...S].filter((l,i)=> i%2).join('')
// 1) END===============================================================


// 2) START===============================================================
// TITLE: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e (8 kyu)
// LINK:  Expressions Matter

// v1
// function expressionMatter(a, b, c) {
//   let a1 = a + b + c
//   let a2 = a * b * c
  
//   let a3 = a + b * c
//   let a4 = a * b + c
  
//   let a5 = (a + b) * c
//   let a6 = a + (b * c)

//   let a7 = (a * b) + c
//   let a8 = a * (b + c)

//   return Math.max(a1,a2,a3,a4,a5,a6,a7,a8)
// }

// v2
// function expressionMatter(a, b, c) {
//   return Math.max(a + b + c, a * b * c,
//                   a + b * c, a * b + c,
//                   (a + b) * c, a + (b * c),
//                   (a * b) + c, a * (b + c))
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: 
// LINK:  

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