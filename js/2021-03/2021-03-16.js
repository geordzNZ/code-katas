// CODE KATAS FOR 13 Mar 2021
// Rankings at start of the day:
//   Merit = 851
//   Kyu = 4
//   Clan = 13
// Comments:
//   Updates to js file = comment = #X kata for 13/Mar/2021

// 1) START===============================================================
// TITLE: Replace all items (7 kyu)
// LINK:  https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a

// function replaceAll(seq, find, replace) {
//   console.log(seq)
//   console.log(typeof seq )
//   if (seq.length === 0) return []
  
  
//   if (typeof seq === 'string'){
//     return seq.split('').map((v) => v === find ? v = replace : v = v).join('')
//   } else {
//     return seq.map((v) => v === find ? v = replace : v = v)
//   }
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Apparently-Modifying Strings (7 kyu)
// LINK:  https://www.codewars.com/kata/5b049d57de4c7f6a6c0001d7

// function apparently(string) {
//   let newStr = string.split(' ')
  
//   for (let i = 0; i<=newStr.length-1;i++){
//     if (newStr[i] === 'but' || newStr[i] === 'and') {
//       if (newStr[i+1] != 'apparently'){ newStr.splice(i+1,0,'apparently') }
//     }
//   }
//   return newStr.join(' ')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Monkey Talk (6 kyu)
// LINK:  https://www.codewars.com/kata/59f897ecc374cb9ed90000c2

// function monkeyTalk(phrase){
//   let splitPhrase = phrase.split(' ')
//   let msg = []
  
//   for (let i=0;i<=splitPhrase.length-1;i++){
//     if (/[aeiou]/i.test(splitPhrase[i][0])) { msg.push(i===0 ? 'Eek' : 'eek') } 
//     else { msg.push(i===0 ? 'Ook' : 'ook') }
//   }
//   return msg.join(' ')+'.'
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: By 3, or not by 3? That is the question . . . (7 kyu)
// LINK:  https://www.codewars.com/kata/59f7fc109f0e86d705000043

// v1
// let divisibleByThree = str => str.split('').reduce((t,v) => t+=parseInt(v),0)%3===0

// v2
// let divisibleByThree = str => [...str].reduce((t,v) => t+=parseInt(v),0)%3===0

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Total amount of points (8 kyu)
// LINK:  https://www.codewars.com/kata/5bb904724c47249b10000131

// v1
// function points(games) {
//   let pts = 0
//   for (let i=0;i<=games.length-1;i++){
//     if (games[i][0]>games[i][2]) { pts+=3 }
//     else if (games[i][0]===games[i][2]) { pts+=1 }
//   }
//   return pts
// }

// v2 -- better answer (someone elses)
//const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

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