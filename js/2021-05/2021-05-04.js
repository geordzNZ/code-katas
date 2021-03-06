// CODE KATAS FOR 04 May 2021
// Rankings at start of the day:
//   Merit = 1490
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 04/May/2021"

// 1) START===============================================================
// TITLE: Well of Ideas - Harder Version (7 kyu)
// LINK:  https://www.codewars.com/kata/57f22b0f1b5432ff09001cab

// v1
// function well(x){
//   let good = 0
  
//   for (let i=0;i<x.length;i++){
//     for (let j=0;j<x[i].length;j++){
//       if (typeof x[i][j] === 'string' && x[i][j].search(/good/i) != -1) { good++ }
//     }
//   }
//   return good === 0 ? 'Fail!' : good <= 2 ? 'Publish!' : 'I smell a series!'
// }

// v2
// function well(x){
//   let good = 0
  
//   for (a1 in x){
//     for (a2 in x[a1]){
//       if (typeof x[a1][a2] === 'string' && x[a1][a2].search(/good/i) != -1) { good++ }
//     }
//   }
//   return good === 0 ? 'Fail!' : good <= 2 ? 'Publish!' : 'I smell a series!'
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Well Done Multiplus (beta)
// RANK:  before kata: 1492 / post kata: 1496 / post ranking: 1498
// LINK:  https://www.codewars.com/kata/56c5f2098046ec919a00063b

// v1
// function multiplus(array){
//   let ans =[]
  
//   for (num of array){
//     if (num % 2 === 0 && num % 3 === 0) { ans.push('Well Done') }
//     else if (num % 2 === 0) { ans.push('Well') } 
//     else if (num % 3 === 0) { ans.push('Done') }
//   }
//   return ans
// }

// v2
// function multiplus(array){
//   let ans =[]
  
//   array.forEach(num=> {
//     if (num % 2 === 0 && num % 3 === 0) { ans.push('Well Done') }
//     else if (num % 2 === 0) { ans.push('Well') } 
//     else if (num % 3 === 0) { ans.push('Done') }   
//   })

//   return ans
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Simple Fun #13: Magical Well (7 kyu)
// LINK:  https://www.codewars.com/kata/588463cae61257e44600006d

// v1
// function magicalWell(a, b, n) {
//   let total = 0
//   for (let i=1;i<=n;i++){
//     total += a*b
//     a++
//     b++
//   }
//   return total
// }

// v2
// function magicalWell(a, b, n) {
//   let total = 0
//   for (let i=1;i<=n;i++,a++,b++){ total += a*b }
  
//   return total
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