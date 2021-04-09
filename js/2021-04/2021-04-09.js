// CODE KATAS FOR 09 Apr 2021
// Rankings at start of the day:
//   Merit = 1194
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 09/Apr/2021

// 1) START===============================================================
// TITLE: PopShift (7 kyu)
// LINK:  https://www.codewars.com/kata/57cec34272f983e17800001e

// v1
// function popShift(s){
//   let splitS = s.split('')
//   let sol1 = ''
//   let sol2 = ''

//   while (splitS.length > 1){
//     sol1 += splitS.pop()
//     sol2 += splitS.shift()
//   }
  
//   return [sol1,sol2,splitS.toString()]
// }

// v2
// function popShift(s){
//   let mid = s.length/2
//   let sol1 = s.substr(Math.round(mid)).split('').reverse().join('')
//   let sol2 = s.substr(0,Math.round(mid) - (mid%1===0 ? 0 : 1))
//   let sol3 = mid%1===0 ? '' : s.substr(Math.round(mid)-1,1) 
  
//   return [sol1,sol2,sol3]
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Holiday VII - Local Talk (7 kyu)
// LINK:  https://www.codewars.com/kata/57e92812750fcc051800004d

// const pak =s=> /\s{2}/.test(s) ? '' : s.split(' ').join(' pak ')

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Car Door Roulette - Easy Version (beta)
// RANK:  before: 1198 / after completion: 1202 / after ranking: 1204
// LINK:  https://www.codewars.com/kata/57d1203395497e99120000c9

// function carD(s, x){
//   for (let i = x; i<=x+2;i++) { if(s[i]==='\\') { return 'Crash, Bang, Ouch!' } }
//   for (let i = x; i<=x+1;i++) { if(s[i]==='/') { return 'Knocked Off, Dust Yourself Down.' } }

//   return 'Plain Sailing!'
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