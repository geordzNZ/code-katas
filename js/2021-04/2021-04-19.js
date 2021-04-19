// CODE KATAS FOR 19 Apr 2021
// Rankings at start of the day:
//   Merit = 1310
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 19/Apr/2021"

// 1) START===============================================================
// TITLE: Boiled Eggs (7 kyu)
// LINK:  https://www.codewars.com/kata/52b5247074ea613a09000164

// function cookingTime(eggs) {
//   return Math.ceil(eggs/8)*5
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Unscrambled eggs (7 kyu)
// LINK:  https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7

// function unscrambleEggs(word){
//   return word.replace(/egg/ig,'')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Caffeine Script (7 kyu)
// LINK:  https://www.codewars.com/kata/5434283682b0fdb0420000e6

// v1
// function caffeineBuzz(n){
//   let msg = ''
  
//   if (n%3===0 && n%4===0) {
//     msg += 'Coffee'
//     if (n%2===0) { 
//       msg += 'Script' 
//     }
//   } else if (n%3===0) {
//     msg += 'Java'
//     if (n%2===0) { 
//       msg += 'Script' 
//     }
//   } else { 
//     msg = 'mocha_missing!' 
//   }
//   return msg
// }

// v2
// function caffeineBuzz(n){
//   let t1 = n%3===0 && n%4===0
//   let t2 = n%3===0
//   let t3 = n%2===0
  
//   return t1 ? `Coffee${t3 ? 'Script' : ''}` : t2 ? `Java${t3 ? 'Script' : ''}` : 'mocha_missing!' 
// }
// 3) END===============================================================


// 4) START===============================================================
// TITLE: Digitize (7 kyu)
// LINK:  https://www.codewars.com/kata/5417423f9e2e6c2f040002ae

// v1
// function digitize(n) {
//   let res = []
  
//   for (let i=0; i<n.toString().length; i++){
//     res.push(+(n.toString()[i]))
//   }
//   return res
// }


// v2
// const digitize = n => n.toString().split('').map((x) => +x)

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Validate Credit Card Number (6 kyu)
// LINK:  https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

// function validate(n){
//   let splitN = n.toString().split('').map(Number)
  
//   let step1 = splitN.map((v,i) => {
//     if (splitN.length%2===0) {
//       return i%2===0 ? v*2 : v
//     } else {
//       return i%2===0 ? v : v*2
//     }
//   })
  
//   let step2 = step1.map(v => v>9 ? v-9 : v) 
  
//   let step3 = step2.reduce((c,v) => c+v)
  
//   return step3%10===0
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Most digits (7 kyu)
// LINK:  https://www.codewars.com/kata/58daa7617332e59593000006

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