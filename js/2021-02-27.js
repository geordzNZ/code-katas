// CODE KATAS FOR 27 Feb 2021
// Rankings at start of the day:
//   Merit = 417
//   Kyu = 5
//   Clan = XX
// Comments:
//   Updates to js file = comment = #X kata for 27/Feb/2021

// 1) START===============================================================
// TITLE: Happy Birthday, Darling!
// LINK:  https://www.codewars.com/kata/5e96332d18ac870032eb735f

// **Almost works ... see tests/results below
// function womensAge(n) {
//   let found = false
//   let base = 2
//   while (found === false){
//     //console.log(`  b= ${base}   /   = ${n.toString(base)}`)
//     if (n.toString(base)  === '20' || n.toString(base)  === '21' ){
//       found = true
//       console.log(`${n}? That's just ${n.toString(base)}, in base ${base}!\n`)
//       return `${n}? That's just ${n.toString(base)}, in base ${base}!`
//     } else { 
//       base ++
//     }
//   }
// }

// Tests (I can see)
// describe("Kata", () => {
//   it("Basic tests", () => {
//     assert.strictEqual(womensAge(32), "32? That's just 20, in base 16!");
//     assert.strictEqual(womensAge(39), "39? That's just 21, in base 19!");
//     assert.strictEqual(womensAge(22), "22? That's just 20, in base 11!");
//     assert.strictEqual(womensAge(65), "65? That's just 21, in base 32!");
//     assert.strictEqual(womensAge(83), "83? That's just 21, in base 41!");
//   });
// });

// Results
// 32? That's just 20, in base 16!
// 39? That's just 21, in base 19!
// 22? That's just 20, in base 11!
// 65? That's just 21, in base 32!
// RangeError: toString() radix argument must be between 2 and 36

//Answer
// function womensAge(n) {
//   return `${n}? That's just ${20+n%2}, in base ${Math.floor(n/2)}!`
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: 
// LINK:  

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