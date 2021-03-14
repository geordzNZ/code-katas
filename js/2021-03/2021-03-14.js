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
// TITLE: Char Code Calculation
// LINK:  https://www.codewars.com/kata/57f75cc397d62fc93d000059

// const calc = x => x.split('').map((cV) => cV.charCodeAt(0)).join('').split('').filter((cV) => cV === '7').length*6

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Vowel Count
// LINK:  https://www.codewars.com/kata/54ff3102c1bad923760001f3

// const getCount = str => str.replace(/[^aeiou]/g,'').length

// 9) END===============================================================

// 10) START===============================================================
// TITLE: Alphabet war
// LINK:  https://www.codewars.com/kata/59377c53e66267c8f6000027

// v1
// function alphabetWar(fight) {
//   let lTot = 0
//   let rTot = 0
  
//   fight.split('').forEach((c) => {
//     if (c === 'w' || c === 'p' || c === 'b' ||c === 's'){
//       lTot+= c === 'w' ? 4 :  c === 'p' ? 3 : c === 'b' ? 2 : 1
//     } else if (c === 'm' || c === 'q' || c === 'd' ||c === 'z'){
//       rTot+= c === 'm' ? 4 :  c === 'q' ? 3 : c === 'd' ? 2 : 1
//     }
//   })
//   return lTot > rTot ? 'Left side wins!' : lTot < rTot ? 'Right side wins!' : 'Let\'s fight again!'
// }

// v2
// function alphabetWar(fight) {
//   let lTot = 0
//   let rTot = 0
  
//   fight.split('').forEach((c) => {
//     if (/[wpbs]/.test(c)){
//       lTot+= c === 'w' ? 4 :  c === 'p' ? 3 : c === 'b' ? 2 : 1
//     } else if (/[mqdz]/.test(c)){
//       rTot+= c === 'm' ? 4 :  c === 'q' ? 3 : c === 'd' ? 2 : 1
//     }
//   })
//   return lTot > rTot ? 'Left side wins!' : lTot < rTot ? 'Right side wins!' : 'Let\'s fight again!'
// }

// 10) END===============================================================