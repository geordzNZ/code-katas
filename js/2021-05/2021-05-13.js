// CODE KATAS FOR 13 May 2021
// Rankings at start of the day:
//   Merit = 1562
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: esreveR gnirtS (7 kyu)
// LINK:  https://www.codewars.com/kata/52b74e0936d582d9210005ff

// v1
// String.prototype.reverse = function() {
//   let revStr = ''
//   for (let i=this.length-1;i>=0;i--){
//     revStr += this[i]
//   }
//   return revStr
// }

// v2
// String.prototype.reverse = function() {  
//   return [...this].reverse().reduce((rev,l)=> rev+=l,'')
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: WeIrD StRiNg CaSe (6 kyu)
// LINK:  https://www.codewars.com/kata/52b757663a95b11b3d00062d

// v1
// function toWeirdCase(string){
//   let splitStr = string.split(' ')
//   let newStr = ''
  
//   for (wrd of splitStr){
//     for (let i=0;i<wrd.length;i++){
//       if (i%2===0) { newStr += wrd[i].toUpperCase() }
//       else { newStr += wrd[i].toLowerCase() }
//     }
//     newStr += ' '
//   }
//   return newStr.trim()
// }

// v2
// function toWeirdCase(string){
//   let res = []
//   string.split(' ').forEach(wrd=>{
//     let newStr  = ''
//     for (let i=0;i<wrd.length;i++){
//       if (i%2===0) { newStr += wrd[i].toUpperCase() }
//       else { newStr += wrd[i].toLowerCase() }
//     }
//     res.push(newStr)
//   })
//   return res.join(' ')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: esrever esreveR!
// LINK:  https://www.codewars.com/kata/57e0206335e198f82b00001d/

// 3) END===============================================================


// 4) START===============================================================
// TITLE: 
// LINK:  

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