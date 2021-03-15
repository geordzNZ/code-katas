// CODE KATAS FOR 15 Mar 2021
// Rankings at start of the day:
//   Merit = 811
//   Kyu = 4
//   Clan = 13
// Comments:
//   Updates to js file = comment = #X kata for 15/Mar/2021

// 1) START===============================================================
// TITLE: Holiday III - Fire on the boat (7 kyu)
// LINK:  https://www.codewars.com/kata/57e8fba2f11c647abc000944

// function fireFight(s){
//   return /fire/gi.test(s) ? s.replace(/fire/ig,'~~') : s
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Holiday II - Plane Seating (& kyu)
// LINK:  https://www.codewars.com/kata/57e8f757085f7c7d6300009a

// function planeSeat(a){
//   let row  = parseInt(a)
//   let seat = a[a.length-1]
  
//   if (/[IJ]/i.test(seat) || row > 60) {
//     return 'No Seat!!'
//   } else {
//     return `${row<=20 ? 'Front' : row<=40 ? 'Middle' : 'Back'}-${seat<='C' ? 'Left' : seat<='F' ? 'Middle' : 'Right'}`
//   }
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Simple Sentences (6 kyu)
// LINK:  https://www.codewars.com/kata/5297bf69649be865e6000922

// function makeSentence(parts) {
//   return parts.join(' ').replace(/\s\./g,'').replace(/\s,/g,',')+'.'
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Consecutive Count (6 kyu)
// LINK:  https://www.codewars.com/kata/59c3e819d751df54e9000098

// function getConsectiveItems(items, key){
//   let splitItems = String(items).split('')
//   let ctr = 0
//   let maxKey = 0
 
//   for (let i=0; i<splitItems.length; i++){
//     if (key == splitItems[i]) {
//       ctr++
//       if (ctr > maxKey){ maxKey = ctr }
//     }
//     else { ctr = 0 }
//   }
//   return maxKey
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Pig Latin Converter (7 kyu)
// LINK:  https://www.codewars.com/kata/57fe90ae08d102a2ba0011e6

// v1
// function pigLatin(phrase){
//   console.log(phrase)
//   let splitPhrase = phrase.split(' ')
  
//   for (i=0; i<splitPhrase.length;i++){
//     console.log(splitPhrase[i])
//     splitPhrase[i] = splitPhrase[i].substring(1)+splitPhrase[i][0]+'ay'
//     console.log(splitPhrase[i])
//   }
//   return splitPhrase.join(' ').toLowerCase()
// }

// v2
// function pigLatin(phrase){
//   return phrase.split(' ').map((w) => {
//     console.log('  '+w)
//     return (w.substring(1)+w[0]+'ay').toLowerCase()
//   }).join(' ')
// }

// v3
// let pigLatin = phrase => phrase.split(' ').map((w) => { return (w.substring(1)+w[0]+'ay').toLowerCase() }).join(' ')
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