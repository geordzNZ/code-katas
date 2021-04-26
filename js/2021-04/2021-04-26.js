// CODE KATAS FOR 26 Apr 2021
// Rankings at start of the day:
//   Merit = 1386
//   Kyu = 4
//   Clan = 8
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 26/Apr/2021"

// 1) START===============================================================
// TITLE: Sort Letters Sum Numbers (beta)
// RANK:  before: 1386 / after completion: F / after ranking: 1388
// LINK:  https://www.codewars.com/kata/58bae32c14f4f2d378000ce8

// v1
// function sortAndSum(...items) {
//   let ltrs = items.filter(c=> typeof c === 'string').sort(0)
//   let num = items.filter(c=> typeof c === 'number').reduce((t,c)=>t+=c,0)
//   ltrs.push(num)
//   return ltrs
// }

// v2
// function sortAndSum(...items) {
//   return items.filter(c=> typeof c === 'string').sort().concat(items.reduce((t,c) => t+=(c|0), 0));
//  }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: ASCII letters from Number (7 kyu)
// LINK:  https://www.codewars.com/kata/589ebcb9926baae92e000001

// v1
// function convert(number){
//   let arr = []
//   for (let i=0; i<number.length; i+=2){
//     arr.push(''+number.substr(i,2))
//   }
  
//   let res = arr.map(c=>String.fromCharCode(c))
//   return res.join('')
// }

// v2
// function convert(number){
//   let arr = []
//   for (let i=0; i<number.length; i+=2){ arr.push(''+number.substr(i,2)) }
  
//   return arr.map(c=>String.fromCharCode(c)).join('')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: How much coffee do you need? (7 kyu)
// LINK:  https://www.codewars.com/kata/57de78848a8b8df8f10005b1

// v1
// function howMuchCoffee(events) {
//   let cawfees = 0
  
//   for (evt of events){
//     if (evt == 'cw' || evt == 'dog' || evt == 'cat' || evt == 'movie') { cawfees+=1 }
//     if (evt == 'CW' || evt == 'DOG' || evt == 'CAT' || evt == 'MOVIE') { cawfees+=2 }
//   }  
//   return cawfees <= 3 ? cawfees : 'You need extra sleep'
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Do you speak retsec? (7 kyu)
// LINK:  https://www.codewars.com/kata/5516ab668915478845000780

// v1
// function reverseByCenter(s){
//   let newWord = ''
//   let mid = Math.floor(s.length/2)
  
//   if (s.length%2===0){
//     newWord = s.substr(mid) + s.substr(0,s.length/2)
//   } else {
//     newWord = s.substr(mid+1) + s.substr(mid,1) + s.substr(0,mid)
//   }
//   return newWord
// }

// v2
// function reverseByCenter(s){
//   let mid = Math.floor(s.length/2)
  
//   return s.length%2===0 ? s.substr(mid) + s.substr(0,mid) : s.substr(mid+1) + s.substr(mid,1) + s.substr(0,mid)
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