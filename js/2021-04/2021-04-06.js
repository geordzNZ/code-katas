// CODE KATAS FOR 06 Apr 2021
// Rankings at start of the day:
//   Merit = 1176
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 06/Apr/2021

// 1) START===============================================================
// TITLE: Thinkful - String Drills: Areacode extractor (7 kyu)
// LINK:  https://www.codewars.com/kata/585a36b445376cbc22000072

// const areaCode = text => text.substr(text.indexOf('(')+1,3)

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Thinkful - Number Drills: Rømer temperature (7 kyu)
// LINK:  https://www.codewars.com/kata/5862eeeae20244d5eb000005

// const celsiusToRomer = t => t * 21/40 + 7.5

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Thinkful - List Drills: Longest word (7 kyu)
// LINK:  https://www.codewars.com/kata/58670300f04e7449290000e5

// v1
// function longest(words) {
//   let max = 0
//   words.forEach((w) => { if (w.length > max) {max = w.length} })
//   return max
// }

// v2
// const longest = w => w.reduce((max,wrd) => wrd.length > max ? max = wrd.length : max,0)

// 3) END===============================================================


// 4) START===============================================================
// TITLE: The Office I - Outed (7 kyu)
// LINK:  https://www.codewars.com/kata/the-office-i-outed

// v1
// function outed(meet, boss){
//   let total = 0
//   let avg = 0
//   let ctr = 0
  
//   for (p in meet){
//     total += meet[p]
//     ctr++
//   }
//   total += meet[boss]
//   avg = total / ctr
//   return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
// }


// v2
// function outed(meet, boss){
//   let total = 0
//   let ctr = 0

//   for (p in meet){
//     total += meet[p]
//     ctr++
//   }
//   return ((total + meet[boss]) / ctr) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
// }

// v3 - better answer from someone else
// function outed(c, b) {
//   return Object.keys(c).reduce((s, e) => s + c[e] * (e === b ? 2 : 1), 0) / Object.keys(c).length > 5 ? "Nice Work Champ!" : "Get Out Now!";
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