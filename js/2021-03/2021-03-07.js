// CODE KATAS FOR 07 Mar 2021
// Rankings at start of the day:
//   Merit = 569
//   Kyu = 5
//   Clan = 19
// Comments:
//   Updates to js file = comment = #X kata for 07/Mar/2021

// 1) START===============================================================
// TITLE: Multiplication table (6 kyu)
// LINK:  https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

// multiplicationTable = function(size) {
//   let table = []
//   for (let i = 1;  i <= size; i++){
//     let rowArr = []
//     for (let j = 1;  j <= size; j++) rowArr.push(i*j)
//     table.push(rowArr)
//   }
//   return table
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: The Feast of Many Beasts (8 kyu)
// LINK:  https://www.codewars.com/kata/5aa736a455f906981800360d

// const feast = (beast, dish) => (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1])

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Opposites Attract (8 kyu)
// LINK:  https://www.codewars.com/kata/555086d53eac039a2a000083

// const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1

// 3) END===============================================================


// 4) START===============================================================
// TITLE: zipWith (6 kyu)
// LINK:  https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

// function zipWith(fn,a0,a1) {
//   let ansArray = []
  
//   for (let i = 0; i <= Math.min(a0.length,a1.length)-1; i++) ansArray.push( fn(a0[i],a1[i]) )

//   return ansArray
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: One down (6 kyu)
// LINK:  https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript

// function oneDown(str) {
//   if ( typeof str != 'string' ) return "Input is not a string"
  
//   let splitStr = str.split('')
//   let ansStr = []
  
//   for (let i = 0; i <= str.length-1;i++){
//     if ( (splitStr[i].charCodeAt(0) >= 65 && splitStr[i].charCodeAt(0) <= 90) ||
//          (splitStr[i].charCodeAt(0) >= 97 && splitStr[i].charCodeAt(0) <= 122)) {
//       switch (splitStr[i]){
//         case 'a':
//           splitStr[i] = 'Z'
//           break;
//         case 'A':
//           splitStr[i] = 'z'
//           break;
//         default:
//           splitStr[i] = String.fromCharCode(splitStr[i].charCodeAt(0)-1)  
//       }
//     }
//   }
//   return splitStr.join('')
// }


// someone else's answer
// function oneDown(str) {
//   var alph = "zABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   return typeof str === "string" ? str.replace(/\w/g, v => alph.charAt(alph.lastIndexOf(v) - 1)) : "Input is not a string";
// }
// 5) END===============================================================


// 6) START===============================================================
// TITLE: Backspaces in string (6 kyu)
// LINK:  https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

// function cleanString(s) {
//   let splitS = s.split('')
//   let sLen = s.length-1
  
//   for (let i = 0; i <= sLen; i++){
//     if (splitS[i] ==='#') {
//       if (i === 0) {
//         splitS.shift()
//         sLen--
//         i--
//       } else {
//         splitS.splice(i-1,2)
//         sLen-=2
//         i-=2
//       }
//     }
//   }
//   return splitS.join('')
// };

// someone else's answer
// function cleanString(s) {
//   const result = []
//   for (const c of s) {
//     if (c === "#") {
//       result.pop()
//     } else {
//       result.push(c)
//     }
//   }
//   return result.join("")
// }

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