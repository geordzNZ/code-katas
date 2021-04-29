// CODE KATAS FOR 29 Apr 2021
// Rankings at start of the day:
//   Merit = 1406
//   Kyu = 4
//   Clan = 8
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 29/Apr/2021"

// 1) START===============================================================
// TITLE: Regex Ninja: Unique Digits (6 kyu)
// LINK:  https://www.codewars.com/kata/57555810be106b613c000115

// v1
// var regex = /^(?:(\d)(?!.*\1))*$/;

// v2
// var regex = /^(?:(0-9)(?!.*\1))*$/;

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Recursive Ninja (7 kyu)
// LINK:  https://www.codewars.com/kata/583ed487ee36e2a8d20000e8

// v1
// function chirp(n) {
//   let msg = 'chirp'
  
//   for (let i=2; i<=n;i++){ msg += '-chirp' }
//   return msg
// }

// v2 -- with recursion form someone else
// function chirp(n){
//   if(n === 1){
//       return "chirp";
//     }
//   return chirp(n - 1) + "-chirp";
// }

// v3 -- with recursion form someone else
// function chirp(n) {
//   return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Median fun fun (7 kyu)
// LINK:  https://www.codewars.com/kata/582609930626631a9600003e

// function median(n){
//   if (!n.length) { return false}
  
//   n.sort((a,b)=>a-b)
  
//   if (n.length%2===0){    
//     return (n[Math.floor(n.length/2)-1] + n[Math.floor(n.length/2)])/2
//   } else {
//     return n[Math.floor(n.length/2)]
//   }
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Substring fun (7 kyu)
// LINK:  https://www.codewars.com/kata/565b112d09c1adfdd500019c

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