// CODE KATAS FOR 03 Mar 2021
// Rankings at start of the day:
//   Merit = 505
//   Kyu = 5
//   Clan = 20
// Comments:
//   Updates to js file = comment = #X kata for 03/Mar/2021

// 1) START===============================================================
// TITLE: Your order, please (6 kyu)
// LINK:  https://www.codewars.com/kata/55c45be3b2079eccff00010f

// function order(words){
//   let splitWords = words.split(' ')
//   let sortedWords = []
  
//   for (let i = 0; i <= splitWords.length-1; i++) {
//     let index = splitWords[i].search(/\d/)
//     let position = splitWords[i][index]
//     sortedWords[position] = splitWords[i]
//   }
//   return sortedWords.join(' ').trim()
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Classic Hello World (8 kyu)
// LINK:  https://www.codewars.com/kata/57036f007fd72e3b77000023

// gave up ... but my answer was ....
// class Solution{
//   constrcutor(){}
//   main(){
//     console.log('Hello World!')
//   }
// }

// but their answer WaveShaperNodeclass Solution{
//   static main() {
//     console.log("Hello World!");
//   }  
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Grasshopper - Terminal game move function (8 kyu)
// LINK:  https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

function move (position, roll) {
  return (position + roll*2)
}

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Are You Playing Banjo? (8 kyu)
// LINK:  https://www.codewars.com/kata/53af2b8861023f1d88000832

// function areYouPlayingBanjo(name) {
//   // Implement me
//   return name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Hello, Name or World!
// LINK:  https://www.codewars.com/kata/57e3f79c9cb119374600046b

// v1
// function hello(name) {
//   if (name === undefined || name === '') {
//     return 'Hello, World!' 
//   } else{
//     return  'Hello, ' + name[0].toUpperCase() + name.substring(1).toLowerCase() + '!'
//   }
// }

// v2
// function hello(name) {
//   return 'Hello, ' + (name === undefined || name === '' ? 'World!' : name[0].toUpperCase() + name.substring(1).toLowerCase() + '!')
// }
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