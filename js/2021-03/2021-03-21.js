// CODE KATAS FOR 21 Mar 2021
// Rankings at start of the day:
//   Merit = 955
//   Kyu = 4
//   Clan = 13
// Comments:
//   Updates to js file = comment = #X kata for 21/Mar/2021

// 1) START===============================================================
// TITLE: Where are you from? (6 kyu)
// LINK:  Where are you from?

// v1
// function fromWhere(you,me,question){
//   console.log(you.Town)
//   let msg = ''
  
//     if ( question === 'Where are you from?' ) {
//       if ( you.Country != me.Country ) { msg = `I am from ${me.Country}.` }
//       else if ( you.Province != me.Province ) { msg = `I am from ${me.Province}.` }
//       else if ( you.City != me.City ) { msg = `I am from ${me.City}.` }
//       else if ( you.Town != me.Town ) { msg = `I am from ${me.Town}.` }
//       else if ( you.Street != me.Street ) { msg = `I am from ${me.Street}.` }
//       else { msg = 'Same as you.' }
      
//     } else if ( question === 'What country are you from?' ) {
//       if ( you.Country != me.Country ) { msg = `I am from ${me.Country}.` }
//       else { msg = 'Same as you.' }
    
//     } else if ( question === 'What province are you from?' ) {
//       if ( you.Province != me.Province ) { msg = `I am from ${me.Province}.` }
//       else { msg = 'Same as you.' }
      
//     } else if ( question === 'What city are you from?' ) {
//       if ( you.City != me.City ) { msg = `I am from ${me.City}.` }
//       else { msg = 'Same as you.' }
      
//     } else if ( question === 'What town are you from?' ) {
//       if ( you.Town != me.Town ) { msg = `I am from ${me.Town}.` }
//       else { msg = 'Same as you.' }
      
//     } else if ( question === 'What street are you from?' ) {
//       if ( you.Street != me.Street ) { msg = `I am from ${me.Street}.` }
//       else { msg = 'Same as you.' }
   
//     } else{ msg = 'What are you saying?' }
  
//   return msg
// }

// v2
// function fromWhere(you,me,question){
//   let msg = ''
  
//   if ( question === 'Where are you from?' ) {
//     if ( you.Country != me.Country ) { msg = `I am from ${me.Country}.` }
//     else if ( you.Province != me.Province ) { msg = `I am from ${me.Province}.` }
//     else if ( you.City != me.City ) { msg = `I am from ${me.City}.` }
//     else if ( you.Town != me.Town ) { msg = `I am from ${me.Town}.` }
//     else if ( you.Street != me.Street ) { msg = `I am from ${me.Street}.` }
    
//   } else if ( question === 'What country are you from?' ) {
//     if ( you.Country != me.Country ) { msg = `I am from ${me.Country}.` }
      
//   } else if ( question === 'What province are you from?' ) {
//     if ( you.Province != me.Province ) { msg = `I am from ${me.Province}.` }
    
//   } else if ( question === 'What city are you from?' ) {
//     if ( you.City != me.City ) { msg = `I am from ${me.City}.` }
    
//   } else if ( question === 'What town are you from?' ) {
//     if ( you.Town != me.Town ) { msg = `I am from ${me.Town}.` }
    
//   } else if ( question === 'What street are you from?' ) {
//     if ( you.Street != me.Street ) { msg = `I am from ${me.Street}.` }
 
//   } else{ msg = 'What are you saying?' }
  
//   return msg ? msg : 'Same as you.'
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Numbers to Letters (7 kyu)
// LINK:  https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

// function switcher(x){
//   let alphabet = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse()
  
//   return x.map((pos) => alphabet[pos-1]).join('')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Password validator (7 kyu)
// LINK:  https://www.codewars.com/kata/56a921fa8c5167d8e7000053

// v1
// function password(str) {
//   console.log(str)
//   let uc1plus = /[A-Z]+/.test(str)
//   console.log(uc1plus)
//   let lc1plus = /[a-z]+/.test(str)
//   console.log(lc1plus)
//   let num1plus = /[0-9]+/.test(str)
//   console.log(num1plus)
//   let num1plus2 = /\d+/.test(str)
//   console.log(num1plus2)
//   let pwLen = str.length>=8
//   console.log(pwLen)
  
//   return uc1plus && lc1plus && num1plus &&  pwLen
// }

// v2
// function password(str) {
  
//   return /[A-Z]+/.test(str) && 
//          /[a-z]+/.test(str) && 
//          /[0-9]+/.test(str) &&  
//          str.length>=8
// }
// 3) END===============================================================


// 4) START===============================================================
// TITLE: So Easy: Show my password (7 kyu)
// LINK:  https://www.codewars.com/kata/57ea1d9c491a15f43f000219

// v1
// function showMyPassword(birthdays){
//   let sorted = birthdays.sort()
  
//   let dad = sorted[0].split('-')
//   let mum = sorted[1].split('-')
//   let john = sorted[2].split('-')
//   let gf = sorted[3].split('-')
  
//   return john[0][2] + john[0][3] +
//          gf[0][2] + gf[0][3]
//          (dad[1].length === 2) ? dad[1] : '0' + dad[1]
//          (mum[2].length === 2) ? mum[2] : '0' + mum[2]

// }

// v2
// function showMyPassword(birthdays){
//   return birthdays.sort()[2].split('-')[0][2] + birthdays.sort()[2].split('-')[0][3] + 
//          birthdays.sort()[3].split('-')[0][2] + birthdays.sort()[3].split('-')[0][3] +
//          ((birthdays.sort()[0].split('-')[1].length===2) ? birthdays.sort()[0].split('-')[1] : '0' + birthdays.sort()[0].split('-')[1]) +
//          ((birthdays.sort()[1].split('-')[2].length===2) ? birthdays.sort()[1].split('-')[2] : '0' + birthdays.sort()[1].split('-')[2])
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Validate my Password (6 kyu)
// LINK:  https://www.codewars.com/kata/59c01248bf10a47bd1000046

// function validPass(password){
//   let pwLen = password.length>3 && password.length<20
//   let pwLet = /[A-z]+/.test(password)
//   let pwNum = /[0-9]+/.test(password)
//   let pwSpChar = /\W/.test(password)
  
//   return (pwLen && pwLet && pwNum && !pwSpChar) ? 'VALID' : 'INVALID'
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Password maker (7 kyu)
// LINK:  https://www.codewars.com/kata/5637b03c6be7e01d99000046

// const makePassword = phrase=> phrase.split(' ').map((x) => x[0]).join('').replace(/i/gi,'1').replace(/o/gi,'0').replace(/s/gi,'5')

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Regex Password Validation (5 kyu)
// LINK:  https://www.codewars.com/kata/52e1476c8147a7547a000811

// v1
// function validate(password) {
//   let pwLen = password.length>=6
//   let pwLC = /[a-z]+/.test(password)
//   let pwUC = /[A-Z]+/.test(password)
//   let pwDig = /[0-9]+/.test(password)
//   let pwSpChar = /\W/.test(password)
  
//   return (pwLen && pwLC && pwUC && pwDig && !pwSpChar)
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