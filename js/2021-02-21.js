// CODE KATAS FOR 21 Feb 2021
// Rankings at start of the day:
//   Merit = 228
//   Kyu = 6
//   Clan = 31
// Comments:
//   Updates to js file = comment = #X kata for 21/Feb/2021

// 1) START===============================================================
// TITLE: Word Mesh (6 kyu)
// LINK:  https://www.codewars.com/kata/5c1ae703ba76f438530000a2

//  REVISIT: copied to file
// function wordMesh(arr){
//   console.log(arr)
//   let msg = ''
    
//   for (let i = 1; i <= arr.length-1; i++){
// //     console.log(`i  =  ${i}`)
// //     console.log(`  lengths = ${arr[i-1].length}  and  ${arr[i].length}`)
//     let j = 1
//     let addStr = ''
//     while ((addStr === '') && ((j <= arr[i-1].length) && (j <= arr[i].length))) {
// //       console.log(`  j =   ${j}  and  addStr = ${addStr}`)
//       let endStr = arr[i-1].substring(arr[i-1].length-j,arr[i-1].length)
// //       console.log (`    ${endStr}`)
//       let startStr = arr[i].substring(0,j)
// //       console.log (`    ${startStr}`)
//       if (endStr === startStr){
// //         console.log(`        found  = "${endStr}"  equals  "${startStr}"`)
//         addStr = endStr
// //         console.log(`        addStr = "${addStr}"`)
//       } else {
//         j++
//       }
//     }
// //    if (addStr == '') return 'failed to mesh'
//     msg = msg + addStr
// //     console.log('========================================')
//   }
//   return msg
// }

// 1) END===============================================================

// 2) START===============================================================
// TITLE: For Twins: 1. Types (8 kyu)
// LINK:  https://www.codewars.com/kata/59c1302ecb7fb48757000013

// const typeValidation = (variable, type) => typeof variable === type

// 2) END===============================================================


// 3) START===============================================================
// TITLE: For Twins: 2. Math operations
// LINK:  https://www.codewars.com/kata/59c287b16bddd291c700009a

// function iceBrickVolume(radius, bottleLength, rimLength) {
//   //w * h * l
//   let w = radius * 2
//   let h = radius
//   let l = bottleLength - rimLength
//   return w * h * l
// // dd
// }
   
// 3) END===============================================================




// 4) START===============================================================
// TITLE: Kata Example Twist
// LINK:  https://www.codewars.com/kata/525c1a07bb6dda6944000031

// // add the value "codewars" to the websites array 1,000 times
// var websites = []
// for (let i = 1; i<= 1000;i++) websites.push('codewars')

// Someone elses option
// var websites = new Array(1000).fill("codewars");

// 4) END===============================================================


// 5) START===============================================================
// TITLE: L1: Set Alarm (8 kyu)
// LINK:  https://www.codewars.com/kata/568dcc3c7f12767a62000038

// const setAlarm = (employed, vacation) => (employed && !vacation) ? true : false

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Check the exam
// LINK:  https://www.codewars.com/kata/5a3dd29055519e23ec000074

// function checkExam(array1, array2) {
//   let total = 0
//   for (let i = 0; i <= array1.length-1; i++){
//     total = total + (array2[i] === '' ? 0 : array2[i] === array1[i] ? 4 : -1)
//   }
//   return Math.max(total, 0)
//}

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Rearrange Number to Get its Maximum (7 kyu)
// LINK:  https://www.codewars.com/kata/563700da1ac8be8f1e0000dc

// var maxRedigit = function(num) {
//   return (num > 99 && num < 1000) ? Number(num.toString().split('').sort((a,b) =>  b-a).join('')) : null
// };

// 7) END===============================================================


// 8) START===============================================================
// TITLE: You Can't Code Under Pressure #1 (8 kyu)
// LINK:  https://www.codewars.com/kata/53ee5429ba190077850011d4

// const doubleInteger = (i) => i*2

// 8) END===============================================================


// 9) START===============================================================
// TITLE: You Can't Code Under Pressure #2 (7 kyu)
// LINK:  https://www.codewars.com/kata/5546ea9bddfc5c0c38000026

// function Counter() {
//   //quickly, now!
//   this.total = 0
//   this.check = function() { return this.total }
//   this.increment = function() { this.total = this.total + 1 }
// };

// 9) END===============================================================

// 10) START===============================================================
// TITLE: Clean up after your dog (7 kyu)
// LINK:  https://www.codewars.com/kata/57faa6ff9610ce181b000028

// function crap(x, bags, cap){
//   let craps = 0
  
//   for (let i =0; i <= x.length-1; i++){
//     if (x[i].includes('D')) return 'Dog!!'
    
//     for (let j = 0; j <= x[i].length-1; j++){
//       if (x[i][j] === '@') craps = craps + 1
//     }
//   }
//   return (craps > (bags * cap)) ? 'Cr@p' : 'Clean'
// }

// 10) END===============================================================

// 11) START===============================================================
// TITLE: Positions Average (6 kyu)
// LINK:  https://www.codewars.com/kata/59f4a0acbee84576800000af

// function posAverage(s) {
//   let newS = s.split(', ')
//   let subStrLen = newS[0].length
//   let matches = 0
//   let tests = 0

//   for (let i = 0; i <= newS.length-2; i++){
//     for (let j =i+1; j <= newS.length-1; j++){
//       for (let k = 0; k <= subStrLen-1; k++){
//         newS[i][k] === newS[j][k] ? matches++ : matches
//       }
//     }
//   }
//   let combos = ((newS.length * (newS.length-1)) / 2) 
//   let percent = matches/(combos*subStrLen)*100
//   return percent.toFixed(10)
// }

// 11) END===============================================================

// 12) START===============================================================
// TITLE: Convert to Binary (8 kyu)
// LINK:  https://www.codewars.com/kata/59fca81a5712f9fa4700159a

// function toBinary(n){
//   return Number((n >>> 0).toString(2))
// }

// 12) END===============================================================