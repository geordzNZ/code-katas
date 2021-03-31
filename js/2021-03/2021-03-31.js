// CODE KATAS FOR 31 Mar 2021
// Rankings at start of the day:
//   Merit = 1105
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 31/Mar/2021

// 1) START===============================================================
// TITLE: Flatten and sort an array (7 kyu)
// LINK:  https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

// "use strict";

// function flattenAndSort(array) {
//   if (array.length === 0) { return [] }
//   let newArr = array[0]
  
//   for (let i=1; i<array.length; i++) { newArr = newArr.concat(array[i]) }
  
//   return newArr.sort((a,b) => a-b);
// }


// v2
// const flattenAndSort = array => [].concat(...array).sort((a,b) => a - b)
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Square Every Digit (7 kyu)
// LINK:  https://www.codewars.com/kata/546e2562b03326a88e000020

// const squareDigits = num => parseInt((''+num).split('').map((n) => n**2,0).join(''))

// 2) END===============================================================


// 3) START===============================================================
// TITLE: One line task: Square Every Digit (6 kyu)
// LINK:  https://www.codewars.com/kata/5acd142a2ec8c48521000104

// v1 -- Passes all tests except length (60 ... should be 36)
// sd=x=>parseInt((''+x).split('').map((n) => n**2,0).join(''))

// v2 -- Passes all tests except length (52 ... should be 36)
// sd=x=>1*(''+x).split('').map((n) => n**2,0).join('')

// v3 -- Passes all tests except length (45 ... should be 36)
//sd=x=>1*(''+x).split('').map(n=>n*n).join('')

// v3 -- Passes all tests except length (37 ... should be 36)
//sd=x=>+[...x+''].map(n=>n*n).join('')

// v4 - correct options
// sd=x=>+[...x+''].map(n=>n*n).join``  --  35 chars
// sd=x=>+`${x}`.replace(/./g,a=>a*a)  --  36 chars
// sd=n=>+(''+n).replace(/./g,x=>x*x)  --  34 chars


// 3) END===============================================================


// 4) START===============================================================
// TITLE: Sum of digits(7 kyu)
// LINK:  https://www.codewars.com/kata/59cf805aaeb28438fe00001c

// function sum(digits) {
//   if (digits===undefined) { return '' }
  
//   let digs = [...digits+'']
//   let total = 0
  
//   for (let i=0; i<digs.length; i++){ total+=Number(digs[i]) }
//   return `${digs.join(' + ')} = ${total}`
// }

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