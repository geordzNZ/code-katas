// CODE KATAS FOR 10 Apr 2021
// Rankings at start of the day:
//   Merit = 1206
//   Kyu = 4
//   Clan = 9
// Comments:
//   New JS file = 
//   Updates to js file = comment = #X kata for 10/Apr/2021

// 1) START===============================================================
// TITLE: Caesar Cipher Encryption - Variation (6 kyu)
// LINK:  https://www.codewars.com/kata/55ec55323c89fc5fbd000019

// function caesarEncode(phrase, shift) {
//   let spPh = phrase.split('')
//   let newPh = spPh.map((c,i)=>{
//     let newC = ''
//     shift = shift>26 ? shift%26 : shift
    
//     if (c === ' ') {
//       shift===26 ? shift=1 : shift++
//       return ' '
//     }
//     else { 
//         let adjSh = c.charCodeAt(0) + shift > 122 ? c.charCodeAt(0) + shift - 26 : c.charCodeAt(0) + shift
//         return String.fromCharCode(adjSh)
//       }
//     })
//   return newPh.join('')
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Cipher (7 kyu)
// LINK:  https://www.codewars.com/kata/5a19701d80171fd71d000029

// v1
// function encode(str) {
//   let spArr = str.split('')
//   return spArr.map((c)=> String.fromCharCode(c.charCodeAt(0)*6) ).join('')
// }

// function decode(str) {
//   let spArr = str.split('')
//   return spArr.map((c)=> String.fromCharCode(c.charCodeAt(0)/6) ).join('')
// }

// v2
// const encode=str=>str.split('').map((c) => String.fromCharCode(c.charCodeAt()*6)).join('')
// const decode=str=>str.split('').map((c) => String.fromCharCode(c.charCodeAt()/6)).join('')

// v3
// const encode=str=>str.split('').map((c) => String.fromCharCode(c.charCodeAt()*6)).join('')
// const encode=s=> s.split('').map((c)=>String.fromCharCode(c.charCodeAt()*6)).join``
// const encode=s=> [...s].map((c)=>String.fromCharCode(c.charCodeAt()*6)).join``

// const decode =str=> str.split('').map((c) => String.fromCharCode(c.charCodeAt()/6)).join('')
// const decode=s=> s.split('').map((c)=>String.fromCharCode(c.charCodeAt()/6)).join``
//const decode=s=> [...s].map((c)=>String.fromCharCode(c.charCodeAt()/6)).join``

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Ciphers #1 - The 01 Cipher (7 kyu)
// LINK:  https://www.codewars.com/kata/593f50f343030bd35e0000c6

// v1
// function encode(plaintext){
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   let newStr = ''
  
//   for (let i=0; i<plaintext.length;i++){
//     if (alphabet.indexOf(plaintext[i].toLowerCase()) != -1){
//       let indx = alphabet.indexOf(plaintext[i].toLowerCase())
//       newStr += indx%2===0 ? '0' : '1'
//     } else {
//       newStr += plaintext[i]
//     } 
//   }
//   return newStr
// }

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