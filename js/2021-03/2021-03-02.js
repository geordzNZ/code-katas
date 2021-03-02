// CODE KATAS FOR 02 Mar 2021
// Rankings at start of the day:
//   Merit = 461
//   Kyu = 5
//   Clan = 21
// Comments:
//   Updates to js file = comment = #X kata for 02/Mar/2021

// 1) START===============================================================
// TITLE: Find the Difference in Age between Oldest and Youngest Family Members (8 kyu)
// LINK:  https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

// function differenceInAges(ages){
//   let max = ages[0]
//   let min = ages[0]
  
//   for (let i = 1; i <= ages.length-1;i++){
//     if (ages[i] > max) max = ages[i]
//     if (ages[i] < min) min = ages[i]
//   }
//   return [min, max, max-min]
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Write Number in Expanded Form (6 kyu)
// LINK:  https://www.codewars.com/kata/5842df8ccbd22792a4000245

// function expandedForm(num) {
//   let strNums = num.toString().split('')
//   let msg = ''
  
//   for (let i = 0; i <= strNums.length-1; i++) {
//     if (strNums[i] != 0){
//       strNums[i] = strNums[i].padEnd(strNums.length - i,'0')
//     } else {
//       strNums.splice(i,1)
//       i--
//     }
//   }
//   return strNums.join(' + ')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Playing with passphrases (6 kyu)
// LINK:  https://www.codewars.com/kata/559536379512a64472000053

// function playPass(s, n) {
//   let splitS = s.split('')
  
//   for (let i = 0; i <= splitS.length - 1; i++){
//     let theCharCode = splitS[i].charCodeAt(0)
//     let charToAdd = ''
    
//     if (theCharCode >= 65 && theCharCode <= 90 ) {
//       if (theCharCode + n <= 90){
//         charToAdd = String.fromCharCode(theCharCode + n)
//       } else{
//         theCharCode = (theCharCode + n - 90) + 64
//         charToAdd = String.fromCharCode(theCharCode)
//       }
//     } else if (theCharCode >= 97 && theCharCode <= 122 ) {
//       if (theCharCode + n <= 122){
//         charToAdd = String.fromCharCode(theCharCode + n)
//       } else{
//         theCharCode = (theCharCode + n - 122) + 96
//         charToAdd = String.fromCharCode(theCharCode)
//       }
//     } else if (theCharCode >= 48 && theCharCode <= 57 ) {
//       charToAdd = 9 - splitS[i]
//     } else {
//       charToAdd = splitS[i]
//     }
//     typeof charToAdd === 'number' ? splitS[i] = charToAdd : i % 2 === 0 ? splitS[i] = charToAdd.toUpperCase() : splitS[i] = charToAdd.toLowerCase()
//   }
//   return splitS.reverse().join('')
// }


// 3) END===============================================================


// 4) START===============================================================
// TITLE: Element equals its index
// LINK:  https://www.codewars.com/kata/5b7176768adeae9bc9000056

// v1 -- completed tests, but bigger ones were too slow
// function indexEqualsValue(a) {
//   console.log(a)
//   for (let i = 0; i<= a.length-1; i++){
//     if (i === a[i]) return i
//   }
//   return -1
// }
// v2  -- roughly same times as above tests
// function indexEqualsValue(a) {
//   let i = 0
//   let aLen = a.length-1
  
//   while (i <= aLen){
//     if (i === a[i]) return i
//     i++    
//   }
//   return -1  
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