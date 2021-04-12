// CODE KATAS FOR 12 Apr 2021
// Rankings at start of the day:
//   Merit = 1230
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = #X kata for 12/Apr/2021

// 1) START===============================================================
// TITLE: Secret Agent 101: The secret password (beta)
// RANK:  before: 1230 / after completion: 1234 / after ranking: 1236
// LINK:  https://www.codewars.com/kata/56c5ac0803a14d43fd0026e6

// Part 1
// //Section 1: Encryption
// function encrypt(pc) {
//     if (pc.length!=9) { return 'BANG!'}
    
//     let pcP1 = pc.substr(0,3)
//     let pcP2 = pc.substr(3,3)
//     let pcP3 = pc.substr(6,3)
//     let newP1 = ''
//     let newP2 = ''
//     let newP3 = ''
    
//     newP1 = pcP1.charCodeAt(0)-96
//     newP1 += pcP1[1]
//     newP1 +=  pcP1.charCodeAt(2)-96
    
//     newP2 = pcP2.split('').reverse().join('')
    
//     newP3 = String.fromCharCode(pcP3.charCodeAt(0) === 122 ? 97 : pcP3.charCodeAt(0)+1)
//     newP3 += String.fromCharCode(pcP3.charCodeAt(1) === 122 ? 97 : pcP3.charCodeAt(1)+1)
//     newP3 += String.fromCharCode(pcP3.charCodeAt(2) === 122 ? 97 : pcP3.charCodeAt(2)+1)
    
//     return newP2+newP3+newP1 
//   }

// part 2
// function decrypt(pc) {
//   if (pc.length<9 || pc.length>11) { return 'BANG!'}
  
//   let pcP2 = pc.substr(0,3)
//   let pcP3 = pc.substr(3,3)
//   let pcP1 = pc.substr(6)
//   let newP1 = ''
//   let newP2 = ''
//   let newP3 = ''
//   let fullPC = ''
  
//   pcP1 = pcP1.replace(/\D/,`,$&,`).split(',')
//   //console.log(pcP1)
  
//   newP1 = String.fromCharCode(parseInt(pcP1[0])+96)
//   newP1 += pcP1[1]
//   newP1 += String.fromCharCode(parseInt(pcP1[2])+96)
  
//   newP2 = pcP2.split('').reverse().join('')
  
//   newP3 = String.fromCharCode(pcP3.charCodeAt(0) === 97 ? 122 : pcP3.charCodeAt(0)-1)
//   newP3 += String.fromCharCode(pcP3.charCodeAt(1) === 97 ? 122 : pcP3.charCodeAt(1)-1)
//   newP3 += String.fromCharCode(pcP3.charCodeAt(2) === 97 ? 122 : pcP3.charCodeAt(2)-1)
 
//   fullPC = newP1+newP2+newP3
//   return validPasscodes.includes(fullPC) ? 'Nice to meet you, fellow Agent!' : 'BANG!'
  
// }

// Part 3 - submitted
// //Section 1: Encryption
// function encrypt(pc) {
//   if (!pc || pc.length!=9 || /[^a-z]/.test(pc)) { return 'BANG!'}
  
//   let pcP1 = pc.substr(0,3)
//   let pcP2 = pc.substr(3,3)
//   let pcP3 = pc.substr(6,3)
//   let newP1 = ''
//   let newP2 = ''
//   let newP3 = ''
  
  
//   newP1 = pcP1.charCodeAt(0)-96
//   newP1 += pcP1[1]
//   newP1 +=  pcP1.charCodeAt(2)-96
  
//   newP2 = pcP2.split('').reverse().join('')
  
//   newP3 = String.fromCharCode(pcP3.charCodeAt(0) === 122 ? 97 : pcP3.charCodeAt(0)+1)
//   newP3 += String.fromCharCode(pcP3.charCodeAt(1) === 122 ? 97 : pcP3.charCodeAt(1)+1)
//   newP3 += String.fromCharCode(pcP3.charCodeAt(2) === 122 ? 97 : pcP3.charCodeAt(2)+1)
  
//   return newP2+newP3+newP1 
// }

// //Section 2: Decryption
// var validPasscodes = passcodes; // Do not change this! Only the boss knows all the passcodes,
//                                 // but you can still check through this var

// function decrypt(pc) {
//   if (!pc || pc.length<9 || pc.length>11) { return 'BANG!' }
  
//   let pcP2 = pc.substr(0,3)
//   let pcP3 = pc.substr(3,3)
//   let pcP1 = pc.substr(6)
//   let newP1 = ''
//   let newP2 = ''
//   let newP3 = ''
    
//   pcP1 = pcP1.replace(/\D/,`,$&,`).split(',')
//   newP1 = String.fromCharCode(parseInt(pcP1[0])+96)
//   newP1 += pcP1[1]
//   newP1 += String.fromCharCode(parseInt(pcP1[2])+96)
  
//   newP2 = pcP2.split('').reverse().join('')
  
//   newP3 = String.fromCharCode(pcP3.charCodeAt(0) === 97 ? 122 : pcP3.charCodeAt(0)-1)  
//   newP3 += String.fromCharCode(pcP3.charCodeAt(1) === 97 ? 122 : pcP3.charCodeAt(1)-1)
//   newP3 += String.fromCharCode(pcP3.charCodeAt(2) === 97 ? 122 : pcP3.charCodeAt(2)-1)
 
//   return validPasscodes.includes(newP1+newP2+newP3) ? 'Nice to meet you, fellow Agent!' : 'BANG!'
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Secret Code (beta)
// LINK:  https://www.codewars.com/kata/596a6c6722407127d4000035

// 2) END===============================================================


// 3) START===============================================================
// TITLE: 
// LINK:  

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