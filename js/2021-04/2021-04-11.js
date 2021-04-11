// CODE KATAS FOR 11 Apr 2021
// Rankings at start of the day:
//   Merit = 1218
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = #X kata for 11/Apr/2021

// 1) START===============================================================
// TITLE: Ciphers #2 - The reversed Cipher (6 kyu)
// LINK:  https://www.codewars.com/kata/59474c656ff02b21e20000fc

// v1
// function encode(pt){
//   let pt2 = pt.split(' ')
//   for (let i=0; i<pt2.length; i++){
//     pt2[i] = pt2[i].split('').reverse().join('')
//     pt2[i] += pt2[i][0]
//     pt2[i] = pt2[i].substr(1)
//   }
//   return pt2.join(' ')
// }

// v2
// function encode(pt){
//   let pt2 = pt.split(' ')
//   for (let i=0; i<pt2.length; i++){
//     pt2[i] = pt2[i].split('').reverse().join('').concat(pt2[i][pt2[i].length-1]).substr(1)
//   }
//   return pt2.join(' ') 
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Sum of the first nth term of Series (7 kyu)
// LINK:  https://www.codewars.com/kata/555eded1ad94b00403000071

// v1
// function SeriesSum(n) {
//   if (n ===0) { return '0.00'}
//   let sum = 0
//   for (let i=0; i<n;i++){ sum+= 1/(i*3+1) }
//   return sum.toFixed(2)
// }

// v2
// function SeriesSum(n) {
//   let sum = 0
//   for (let i=0; i<n; i++){ sum+= 1/(i*3+1) }
//   return sum.toFixed(2)
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Jenny's secret message (8 kyu)
// LINK:  https://www.codewars.com/kata/55225023e1be1ec8bc000390

// Fix this
// function greet(name){
//   return "Hello, " + name + "!";
//   if(name === "Johnny")
//     return "Hello, my love!";
// }

// v1
// function greet(name){
//   if(name === "Johnny")
//     return "Hello, my love!";
//   return "Hello, " + name + "!";
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