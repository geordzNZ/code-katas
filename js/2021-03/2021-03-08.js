// CODE KATAS FOR 08 Mar 2021
// Rankings at start of the day:
//   Merit = 605
//   Kyu = 5
//   Clan = 18
// Comments:
//   Updates to js file = comment = #X kata for 08/Mar/2021

// 1) START===============================================================
// TITLE: Find Maximum and Minimum Values of a List (8 kyu)
// LINK:  https://www.codewars.com/kata/577a98a6ae28071780000989

// var min = list => list.sort((a,b) => (a-b))[0]
// var max = list => list.sort((a,b) => (b-a))[0]

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Hex Hash Sum (7 kyu)
// LINK:  https://www.codewars.com/kata/5ab363ff6a176b29880000dd

// v1
// function hexHash(code){
//   let numCodes = ''
//   let total = 0
  
//   for (char of code){
//     numCodes = numCodes + char.charCodeAt(0).toString(16).replace(/[a-f]/g,'')
//   }
//   for (num of numCodes){
//     let i = 0
//     total+=Number(num[i])
//     i++
//   }
//   return total 
// }

// v2
// function hexHash(code){
//   let total = 0
  
//   for (char of code){
//     let hexNum = ''
//     hexNum = char.charCodeAt(0).toString(16).replace(/[a-f]/g,'')
//     for (num of hexNum){
//       let i = 0
//       total+=Number(num[i])
//       i++
//     }
//   }
//   return total 
// }


// v3
//
// function hexHash(code){
//   let total = 0
  
//   code.split('').map((c) => {
//     let hexNum = ''
//     hexNum = c.charCodeAt(0).toString(16).replace(/[a-f]/g,'')
//     hexNum.split('').map((h) => total+=Number(h))
//   })
//   return total 
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