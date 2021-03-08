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
// TITLE: Miles per gallon to kilometers per liter (8 kyu)
// LINK:  https://www.codewars.com/kata/557b5e0bddf29d861400005d

// const converter = mpg => Number((mpg * 1.609344 / 4.54609188).toFixed(2))

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Beginner Series #3 Sum of Numbers (7 kyu)
// LINK:  https://www.codewars.com/kata/55f2b110f61eb01779000053

// function getSum( a,b ) {
//   let total = 0
//   for (let i = Math.min(a,b); i <= Math.max(b,a); i++) {
//     total+=i
//   }
//   return total
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Separate basic types
// LINK:  https://www.codewars.com/kata/60113ded99cef9000e309be3

// v1
// function separateTypes(input) {
//   console.log(input)
  
//   let ansN = []
//   let ansS = []
//   let ansB = []

//   for (let i = 0; i <=input.length-1;i++){
//     let myDT = 'ans' + (typeof input[i])

//      switch(typeof input[i]){
//        case 'number':
//          ansN.push(input[i])
//          break;
//        case 'string':
//          ansS.push(input[i])
//          break;
//        case 'boolean':
//          ansB.push(input[i])
//      }
//   }
//   let result = {}
  
//   //nsn
//   if (ansN.length != 0 && ansS.length != 0 && ansB.length != 0 ) result = {number: ansN, string: ansS, boolean: ansB}
  
//   //n
//   if (ansN.length != 0 && ansS.length === 0 && ansB.length === 0 ) result = {number: ansN}
//   //ns
//   if (ansN.length != 0 && ansS.length != 0 && ansB.length === 0 ) result = {number: ansN, string: ansS}
//   //nb
//   if (ansN.length != 0 && ansS.length === 0 && ansB.length != 0 ) result = {number: ansN, boolean: ansB}
  
//   //s
//   if (ansN.length === 0 && ansS.length != 0 && ansB.length === 0 ) result = {string: ansS}
//   //sb
//   if (ansN.length === 0 && ansS.length != 0 && ansB.length != 0 ) result = {string: ansS, boolean: ansB}
  
//   //b
//   if (ansN.length === 0 && ansS.length === 0 && ansB.length != 0 ) result = {boolean: ansB}
  
//   return result
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Valid Parentheses  (5 kyu)
// LINK:  https://www.codewars.com/kata/52774a314c2333f0a7000688

// v1
// function validParentheses(parens){
//   let splitP = parens.split('')
//   let oP = 0
  
//   for (p of splitP){
//     p === '(' ? oP++ : oP--
//     if (oP<0) return false
//   }
//   return oP === 0 ? true : false
// }


// 6) END===============================================================


// 7) START===============================================================
// TITLE: Get the integers between two numbers
// LINK:  https://www.codewars.com/kata/598057c8d95a04f33f00004e

// function range(startNum, endNum) {  
//   let nums = []
//   for (let i = startNum+1; i < endNum; i++) nums.push(i)
//   return nums
// }; 

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