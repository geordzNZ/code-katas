// CODE KATAS FOR 25 Feb 2021
// Rankings at start of the day:
//   Merit = 385
//   Kyu = 5
//   Clan = 25
// Comments:
//   Updates to js file = comment = #X kata for 25/Feb/2021

// 1) START===============================================================
// TITLE: Descending Order (7 kyu)
// LINK:  https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// function descendingOrder(n){
//   return Number(n.toString().split('').sort((a,b) => b-a).join(''))
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: MakeUpperCase (8 kyu)
// LINK:  https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

// const makeUpperCase = str => str.toUpperCase()

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Odd or Even? (7 kyu)
// LINK:  https://www.codewars.com/kata/5949481f86420f59480000e7

// v1
// function oddOrEven(array) {
//   return array.reduce((t,c) => t + c,0) % 2 === 0 ? "even" : "odd"
// }

// v2
// const oddOrEven = array => array.reduce((t,c) => t + c,0) % 2 === 0 ? "even" : "odd"

//v3
// oddOrEven=a=>a.reduce((t,c)=>t+c,0)%2==0?"even":"odd"


// 3) END===============================================================


// 4) START===============================================================
// TITLE: Sum Arrays (8 kyu)
// LINK:  https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// const sum = numbers => numbers.reduce((t,c) => t + c,0)

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Numbers to Objects (7 kyu)
// LINK:  https://www.codewars.com/kata/57ced2c1c6fdc22123000316

// v1
// not working, but got close...
// class CharObj{
//   constructor (value){
//     this.key = value.toString()
//     this.char = String.fromCharCode(value)
//   }
// }

// function numObj(s){
//   let msg = []
//   console.log(s)
  
//   for (let i = 0; i <= s.length - 1; i++){
//     let vari = new CharObj(s[i])
//     msg.push([vari.key,vari.char])
//     //msg.push([vari.output])
//     //msg.push(vari)
//   }
//   console.log(msg)
//   return msg
// }
// outcomes
// Expected: '[{ \'118\': \'v\' }, { \'117\': \'u\' }, { \'120\': \'x\' }]', 
// instead got: '[[\'118\', \'v\'], [\'117\', \'u\'], [\'120\', \'x\']]'
//
// and 
// 
// Expected: '[{ \'101\': \'e\' }, { \'121\': \'y\' }, { \'110\': \'n\' }, { \'113\': \'q\' }, { \'113\': \'q\' }, { \'103\': \'g\' }]', 
// instead got: '[[\'101\', \'e\'], [\'121\', \'y\'], [\'110\', \'n\'], [\'113\', \'q\'], [\'113\', \'q\'], [\'103\', \'g\']]'


// someone elses result
// function numObj(s){
//   const arr = []
//   for(i=0; i<s.length;i++){
//     const obj = {}
//     obj[s[i]] = String.fromCharCode(s[i])
//     arr.push(obj)
//   }
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