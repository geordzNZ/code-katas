// CODE KATAS FOR 06 June 2021
// Rankings at start of the day:
//   Merit = 1751
//   Kyu = 4
//   Clan = 7

// 1) START===============================================================
// TITLE: Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins (7 kyu)
// LINK:  https://www.codewars.com/kata/582dace555a1f4d859000058

// v1
// function findAdmin(list, lang) {
//   let res = []
//   for (l of list){ if (l.language===lang && l.githubAdmin==='yes') { res.push(l) } }
//   return res
// }

// v2
//const findAdmin =(list,lang)=> list.filter(dev => dev.language == lang && dev.githubAdmin == 'yes')
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Coding Meetup #15 - Higher-Order Functions Series - Find the odd names (6 kyu)
// LINK:  https://www.codewars.com/kata/583a8bde28019d615a000035

// v1
// function findOddNames(list) {
//   let sum = 0
//   let res =[]
//   for (l of list){
//     sum = (l.firstName).split('').reduce((cV,c)=> cV+=c.charCodeAt(0),0)
//     if (sum%2===1) { res.push(l) }
//   }
//   return res
// }

// v2
// const findOddNames =list=> list.filter(l=> ((l.firstName).split('').reduce((cV,c)=> cV+=c.charCodeAt(0),0))%2===1)
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