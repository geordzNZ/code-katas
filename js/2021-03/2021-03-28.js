// CODE KATAS FOR 28 Mar 2021
// Rankings at start of the day:
//   Merit = 1083
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 28/Mar/2021

// 1) START===============================================================
// TITLE: Is the string uppercase? (8 kyu)
// LINK:  https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

// String.prototype.isUpperCase = function() {
//   let res = true
//   this.replace(/\s/g,'').split('').forEach((char) => { if (char != char.toUpperCase())  { return res = false } })
//   return res
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Highest and Lowest (7 kyu)
// LINK:  https://www.codewars.com/kata/554b4ac871d6813a03000035

// const highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Simple Fun #176: Reverse Letter (7 kyu)
// LINK:  https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// function reverseLetter(str) {
//   return str.replace(/[^a-z]/g,'').split('').reverse().join('')
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Reverse Letters in Sentence (7 kyu)
// LINK:  https://www.codewars.com/kata/57ebdf944cde58f973000405

// // reverse the letters in the sentence
// function reverser(sentence) {
//   return sentence.split(' ').map((word) => word.split('').reverse().join('')).join(' ')
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Simple Fun #20: First Reverse Try (7 kyu)
// LINK:  https://www.codewars.com/kata/5886c6b2f3b6ae33dd0000be

// v1
// function firstReverseTry(arr) {
//   if (arr.length===0){ return []}
//   let temp = arr[0]
//   arr[0] = arr[arr.length-1]
//   arr[arr.length-1] = temp
//   return arr
  
// }


// v2
// function firstReverseTry(arr) {
//   if (arr.length===0) { return [] }
//   [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
//   return arr
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