// CODE KATAS FOR 23 Feb 2021
// Rankings at start of the day:
//   Merit = 336
//   Kyu = 5
//   Clan = 26
// Comments:
//   Updates to js file = comment = #X kata for 23/Feb/2021

// 1) START===============================================================
// TITLE: Moving Zeros To The End (5 kyu)
// LINK:  https://www.codewars.com/kata/52597aa56021e91c93000cb0

// v1
// var moveZeros = function (arr) {
//   console.log(arr)
//   let len = arr.length - 1
//   for (let i = 0; i <= len; i++){
//     console.log(`  i=${i}   /   arr=${arr[i]}`)
//     if (arr[i] === 0){
//       console.log(`    i=${i}   /   arr=${arr[i]}`) 
//       console.log(`    a) arr=${arr}`)
//       arr.splice(i,1).push(0)
//        console.log(`    b) arr=${arr}`)
//       arr.push(0)
//      console.log(`    c) arr=${arr}`)
//       i--
//       len = len -1
//     }
// }
// return arr
// }

// v2
// var moveZeros = function (arr) {
//   let non0Arr = arr.filter((itm) => !(itm ===0))
//   return non0Arr.concat(Array(arr.length - non0Arr.length).fill(0))
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Closest to Zero (7 kyu)
// LINK:  https://www.codewars.com/kata/59887207635904314100007b

// function closest(arr){
//   console.log(arr)
//   let diff = 999999999
//   let msg = 0
  
//   for (let i = 0; i <= arr.length-1; i++){
//     let cDiff = Math.abs(arr[i] - 0)
//     if (cDiff === 0) msg = 0
//     if (cDiff === diff){
//       if (msg != arr[i]) msg = null
//     }
//     if (cDiff < diff) {
//       diff = cDiff
//       msg = arr[i]
//     }
//   }
//   return msg
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Exclamation marks series #8: Move all exclamation marks to the end of the sentence (7 kyu)
// LINK:  https://www.codewars.com/kata/57fafd0ed80daac48800019f

// function remove(s){
//   return s.split('').filter((char) => char != '!').concat(s.split('').filter((char) => char === '!')).join('')
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Remove exclamation marks (8 kyu)
// LINK:  https://www.codewars.com/kata/57a0885cbb9944e24c00008e

//const removeExclamationMarks = (s) => s.replace(/!/g,'')

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Exclamation marks series #1: Remove a exclamation mark from the end of string (8 kyu)
// LINK:  https://www.codewars.com/kata/57fae964d80daa229d000126

//const remove = s => (s[s.length-1] === '!') ? s.substring(0,s.length-1) : s

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Exclamation marks series #2: Remove all exclamation marks from the end of sentence (8 kyu)
// LINK:  https://www.codewars.com/kata/57faece99610ced690000165

// const remove = (s) => s.replace(/!+$/,'')

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Exclamation marks series #3: Remove all exclamation marks from sentence except at the end (7 kyu)
// LINK:  https://www.codewars.com/kata/57faefc42b531482d5000123

// const remove = (s) => s.replace(/^!/g,'').replace(/!+\s/g,' ')

// 7) END===============================================================


// 8) START===============================================================
// TITLE: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string (8 kyu)
// LINK:  https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

// const remove = (s) => s.replace(/!/g,'').concat('!')

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Exclamation marks series #5: Remove all exclamation marks from the end of words (8 kyu)
// LINK:  https://www.codewars.com/kata/57faf32df815ebd49e000117

// const remove = (s) => s.replace(/\b!+/g,'')

// 9) END===============================================================

// 10) START===============================================================
// TITLE: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right (8 kyu)
// LINK:  https://www.codewars.com/kata/57faf7275c991027af000679

// function remove(s,n){
//   let i = 0
//   return s.replace(/!/g, match => i++ < n ? '' : match)
// }

// 10) END===============================================================