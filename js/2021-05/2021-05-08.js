// CODE KATAS FOR 08 May 2021
// Rankings at start of the day:
//   Merit = 1522
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Sort the Vowels! (7 Kyu)
// LINK:  https://www.codewars.com/kata/59e49b2afc3c494d5d00002a

// v1
// function sortVowels(s){
//   let res = ''
//   if (!s) {return res }
//   for (let i=0; i<s.length; i++){
//     if (/[aeiou]/i.test(s[i])) { res += `|${s[i]}\n`}
//     else { res += `${s[i]}|\n` }
//   }
//   return res.substr(0,res.length-1)
// }

// v2
// function sortVowels(s){
//   if (!s || typeof s!='string') {return '' }
  
//   return s.split('').reduce((r,c)=> r+= (/[aeiou]/i).test(c) ?  `|${c}\n` : `${c}|\n`,'').substr(0,(s.length*3)-1)
// }

// v3
// function sortVowels(s){
//   if (!s || typeof s!='string') {return '' }
  
//   return [...s].map(c=> (/[aeiou]/i).test(c) ?  `|${c}` : `${c}|`).join('\n')
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