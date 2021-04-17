// CODE KATAS FOR 17 Apr 2021
// Rankings at start of the day:
//   Merit = 1294
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 17/Apr/2021"

// 1) START===============================================================
// TITLE: 1st day of month that are Sunday in a year range (7 kyu)
// LINK:  https://www.codewars.com/kata/587dfbfc80be384fd30002de

// function getTotalSundays (yearInit, yearEnd) {
//   let mths = 0
//   yearEnd = yearEnd || yearInit
  
//   for (let y=yearInit; y<=yearEnd; y++){
//     for (let m=0; m<12; m++){
//       if (new Date(y,m,1).getDay() === 0) { mths++}
//     }
//   }
//   return mths
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Split the Lyrics!! (beta)
// RANK:  before: 1296 / after completion: 1300 / after ranking: 1302
// LINK:  https://www.codewars.com/kata/5963b6f8a7000805ce000064

// let lyricSplit =lyric=> lyric.split(' ')

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Split The Bill (7 kyu)
// LINK:  https://www.codewars.com/kata/5641275f07335295f10000d0

// v1
// function splitTheBill(x) {
//   let total = 0
//   let ctr = 0
//   let ans = {}
  
//   for (const [key, value] of Object.entries(x)) {
//     total += value
//     ctr++
//   }
  
//   for (const [key, value] of Object.entries(x)) {
//     ans[key] = Number((value - (total/ctr)).toFixed(2))
//   } 
  
//   return ans
// }

// v2
// const splitTheBill = x => {
//   let vals = Object.values(x),
//       avg  = vals.reduce((s, v) => s + v) / vals.length;
//   return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
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