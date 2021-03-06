// CODE KATAS FOR 29 Mar 2021
// Rankings at start of the day:
//   Merit = 1093
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 29/Mar/2021

// 1) START===============================================================
// TITLE: All Star Code Challenge #22 (7 kyu)
// LINK:  https://www.codewars.com/kata/5865cff66b5699883f0001aa

// function toTime(seconds) {
//   let hrs = Math.floor(seconds/3600)
//   let mins = Math.floor((seconds%3600)/60)

//   return `${hrs} hour(s) and ${mins} minute(s)`

// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Valid Spacing (7 kyu)
// LINK:  https://www.codewars.com/kata/5f77d62851f6bc0033616bd8

// v1
// let testStart = s[0] != ' '
// let testEnd = s[s.length-1] != ' '
// let testBetween = /\b\s{2,}\b/g.test(s)

// return testStart && !testBetween && testEnd
// }

// v2
// function validSpacing(s) {
//   let testStart = /^\s/.test(s)
//   let testEnd = /\s$/.test(s)
//   let testBetween = /\b\s{2,}\b/g.test(s)
  
//   return !testStart && !testBetween && !testEnd
// }

// v3
// function validSpacing(s) {  
//   return !(/^\s/.test(s)) && !(/\s$/.test(s)) && !(/\b\s{2,}\b/g.test(s))
// }

// v4
// const validSpacing = s=> !(/(^\s|\s$|\b\s{2,}\b)/.test(s))

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Check digit (7 kyu)
// LINK:  https://www.codewars.com/kata/5a2e8c0955519e54bf0000bd

// function checkDigit(number, index1, index2, digit) {
//   let start = Math.min(index1,index2)
//   let end = Math.max(index1,index2)
//   let cutout = String(number).slice(start,end+1)
  
//   return cutout.search(digit) != -1
  
// };

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Generating Markdowns (7 kyu)
// LINK:  https://www.codewars.com/kata/5f656199132bf60027275739

// function generateMarkdowns(markdown,text,urlOrLanguage) {
//   switch (markdown){
//       case ('link'): return `[${text}](${urlOrLanguage})`;
//       case ('img'):  return `![${text}](${urlOrLanguage})`;
//       case ('code'): return `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``;
//   }
// };

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