// CODE KATAS FOR 14 Mar 2021
// Rankings at start of the day:
//   Merit = 785
//   Kyu = 4
//   Clan = 14
// Comments:
//   Updates to js file = comment = #X kata for 14/Mar/2021

// 1) START===============================================================
// TITLE: Number of Decimal Digits (7 kyu)
// LINK:  https://www.codewars.com/kata/58fa273ca6d84c158e000052

// let digits = n => n.toString().split('').length

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Number-Star ladder (7 kyu)
// LINK:  https://www.codewars.com/kata/5631213916d70a0979000066

// function pattern(n){
//   var output=[]
  
//   output.push(1)
//   for (let i=1; i<n; i++) { output.push(`1${'*'.repeat(i)}${i+1}`) }
  
//   return output.join('\n')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Get decimal part of the given number (7 kyu)
// LINK:  https://www.codewars.com/kata/586e4c61aa0428f04e000069

// let getDecimal = n => Math.abs(n - Math.trunc(n))

// 3) END===============================================================


// 4) START===============================================================
// TITLE: SpeedCode #4 × Factory Functions #3 - Artefacts (7 kyu)
// LINK:  https://www.codewars.com/kata/5701bdd564730378ac000b88

// function artefact(name, age, location, status) {
//   return Object.freeze({
//     name: name,
//     age: age,
//     location: location,
//     status: status,
//   })
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Sum - Square Even, Root Odd (7 kyu)
// LINK:  https://www.codewars.com/kata/5a4b16435f08299c7000274f

// const sumSquareEvenRootOdd = ns => {
//   return +ns.reduce((tot, n) => n%2===0 ? tot+=n**2 : tot+=Math.sqrt(n) ,0).toFixed(2)
// };

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Make A Window (6 kyu)
// LINK:  https://www.codewars.com/kata/59c03f175fb13337df00002e

// function makeAWindow(num) {
//   let window = []
//   window.push(`${'-'.repeat(num*2+3)}\n`)
  
//   for (let pane = 1; pane<=2;pane++){
//     for (let row = 1; row<=num;row++){ window.push(`|${'.'.repeat(num)}|${'.'.repeat(num)}|\n`) }
//     if ( pane===1 ){ window.push(`|${'-'.repeat(num)}+${'-'.repeat(num)}|\n`) }
//   }
//   window.push(`${'-'.repeat((num*2)+3)}`)

//   return window.join('')
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Lost number in number sequence
// LINK:  https://www.codewars.com/kata/595aa94353e43a8746000120

// function findDeletedNumber(arr, mixArr) {
//   if (arr.length === mixArr.length) { 
//     return 0
//   } else {
//     for (i=0;i<=arr.length-1;i++) { 
//       if(arr[i] != mixArr.sort((a,b) => a-b)[i]) return arr[i] 
//     }
//   }
// }

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