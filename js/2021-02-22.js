// CODE KATAS FOR 22 Feb 2021
// Rankings at start of the day:
//   Merit = 260
//   Kyu = 6
//   Clan = 30
// Comments:
//   Updates to js file = comment = #X kata for 22/Feb/2021

// 1) START===============================================================
// TITLE: Beginner Series #2 Clock (8 kyu)
// LINK:  https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// v1
// function past(h, m, s){
//   s = s * 1000;
//   m = m * 60000;
//   h = h * 3600000;
//   return h + m + s;
// }

// v2
// const past = (h, m, s) => ((h * 3600) + (m * 60) + (s)) * 1000

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Beginner Series #5 Triangular Numbers (7 kyu)
// LINK:  https://www.codewars.com/kata/56d0a591c6c8b466ca00118b

// function isTriangular(t) {
//   for (i = 1; i <= t; i++){
//     let tn = i * (i + 1) / 2
//     if (tn == t) return true
//   }
//   return false
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Can we divide it? (8 kyu)
// LINK:  https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

//const isDivideBy = (number, a, b) => (number % a === 0 && number % b === 0) ? true : false

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Move 10 (7 kyu)
// LINK:  https://www.codewars.com/kata/57cf50a7eca2603de0000090

// function moveTen(s){  
//   let newS = ''
//   let newCC = 0
  
//   for (let i = 0; i <= s.length-1; i++){
//     if (s.charAt(i) >= 'a' && s.charAt(i) < 'q' ) {
//       newCC = s.charCodeAt(i) + 10
//     } else {
//       newCC = (10 - (122 - s.charCodeAt(i))) + 96
//     }
//     newS = newS + String.fromCharCode(newCC)
//   }
//   return newS
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Two to One (7 kyu)
// LINK:  https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// function longest(s1, s2) {
//   let split12 = (s1+s2).split('').sort()
//   let uniqueS12 = [];
  
//   for (let i = 0; i<= split12.length-1; i++){
//     if (uniqueS12.includes(split12[i]) === false) {
//       uniqueS12.push(split12[i])
//     }
//   }
//   return uniqueS12.join('')
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Hells Kitchen (7 kyu)
// LINK:  https://www.codewars.com/kata/57d1f36705c186d018000813

// function gordon(a){
//   return a.toUpperCase().replace(/\s/g,'!!!! ').replace(/A/g,'@').replace(/[EIOU]/g,'*') + '!!!!'
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Break camelCase (6 kyu)
// LINK:  https://www.codewars.com/kata/5208f99aee097e6552000148

// v1
// function solution(string) {
//   let splitS = string.split('')
  
//   for (let i = 0; i <= splitS.length-1; i++){
//     if (splitS[i] >= 'A' && splitS[i] <= 'Z') splitS[i] = ' ' + splitS[i]
//   }
//   return splitS.join('')
// }
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