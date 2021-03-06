// CODE KATAS FOR 14 May 2021
// Rankings at start of the day:
//   Merit = 1574
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Simple string reversal (7 kyu)
// LINK:  https://www.codewars.com/kata/5a71939d373c2e634200008e

// v1
// function solve(str){
//   let revdStr = str.replace(/\s/g,'').split('').reverse()

//   for (let i=0;i<str.length;i++){
//     if (str[i]===' ') { revdStr.splice(i,0,' ') }
//   }
//   return revdStr.join('')
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Powers of 2 (8 kyu)
// LINK:  https://www.codewars.com/kata/57a083a57cb1f31db7000028

// v1
// function powersOfTwo(n){
//   let res = []
//   for (let i=0;i<=n;i++) { res.push(Math.pow(2,i)) }
//   return res
// }

// v2
// const powersOfTwo =n=> Array.from({length: n + 1}, (_,i)=> 2**i)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Reverse list (7 kyu)
// LINK:  https://www.codewars.com/kata/57a04da9e298a7ee43000111

// v1
// function reverseList(arr) {
//   let res = []
//   if (!arr.length) { return [] }
//   for (let i=arr.length-1;i>=0;i--){
//     res.push(arr[i])
//   }
//   return res
// }

// v2
// const reverseList =arr=> arr.reverse()
// 3) END===============================================================


// 4) START===============================================================
// TITLE: Sentence to words (7 kyu)
// LINK:  https://www.codewars.com/kata/57a05e0172292dd8510001f7

// const splitSentence =s=> s.split(' ')
// 4) END===============================================================


// 5) START===============================================================
// TITLE: Words to sentence (7 kyu)
// LINK:  https://www.codewars.com/kata/57a06005cf1fa5fbd5000216

// const wordsToSentence =words=> words.join(' ')
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