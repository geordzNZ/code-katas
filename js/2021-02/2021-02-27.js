// CODE KATAS FOR 27 Feb 2021
// Rankings at start of the day:
//   Merit = 417
//   Kyu = 5
//   Clan = 22
// Comments:
//   Updates to js file = comment = #X kata for 27/Feb/2021

// 1) START===============================================================
// TITLE: Happy Birthday, Darling! (7 kyu)
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
// TITLE: Determine the date by the day number (6 kyu)
// LINK:  https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e

// function getDay(day, isLeap){
//   let theDate = new Date(isLeap ? 2020 : 2021, 00, 00)
//   theDate.setDate(theDate.getDate() + day)
 
//   let output = Intl.DateTimeFormat('en', { month: 'long' }).format(theDate)
//   output = output + ', '
//   output = output + Intl.DateTimeFormat('en', { day: 'numeric' }).format(theDate)
  
//   return  output
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Find Your Villain Name (7 kyu)
// LINK:  https://www.codewars.com/kata/536c00e21da4dc0a0700128b

// function getVillainName(birthday){
//   const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
//   const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
//    return `The ${m[birthday.getMonth()]} ${d[birthday.getDate()%10]}`
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Unlucky Days (7 kyu)
// LINK:  https://www.codewars.com/kata/56eb0be52caf798c630013c0

// function unluckyDays(year){
//   let fridays = 0
//   for (let i = 0; i <= 11; i++){
//     let testDate = new Date(year, i, 13)
//     if (testDate.getDay() === 5) fridays ++
//   }
//   return fridays
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Is the date today
// LINK:  https://www.codewars.com/kata/563c13853b07a8f17c000022

// function isToday(date) {
//   let today = new Date(Date.now())
//   return date.toDateString() === today.toDateString()
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Days in the year (8 kyu)
// LINK:  https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

// function yearDays(year) {
//   if (year % 100 === 0){
//     if (year % 400 === 0) return `${year} has 366 days`
//     else return `${year} has 365 days`  
//   } else if (year % 4 === 0) return `${year} has 366 days`
//   else return `${year} has 365 days`
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Remove the time  (8 kyu)
// LINK:  https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

// v1
// function shortenToDate(longDate) {
//   output =  longDate.split(', ')
//   return output[0]
// }

//v2
//const shortenToDate = longDate => longDate.replace(/,\s\d*\w*/,'')

//v3 Someone elses answer
// const shortenToDate = longDate => longDate.split(",")[0];

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