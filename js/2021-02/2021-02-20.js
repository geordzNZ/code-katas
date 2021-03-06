// CODE KATAS FOR 20 Feb 2021
// Rankings at start of the day:
//   Merit = 208
//   Kyu =  6
//   Clan = 36
// Comments:
//   Updates to js file = comment = #X kata for 20/Feb/2021

// 1) START===============================================================
// TITLE: Function 2 - squaring an argument
// LINK:  https://www.codewars.com/kata/523b623152af8a30c6000027

// function square(x){
//   return x * x
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Will there be enough space?
// LINK:  https://www.codewars.com/kata/5875b200d520904a04000003

// v1
// function enough(cap, on, wait) {
//   return cap - on >= wait ? 0 : wait - (cap - on)
// }

// v2
// const enough = (cap, on, wait) => (cap - on) >= wait ? 0 : wait - (cap - on)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Dollars and Cents
// LINK:  https://www.codewars.com/kata/55902c5eaa8069a5b4000083

// const formatMoney = amount => `\$${(amount).toFixed(2)}`

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Reversed Strings
// LINK:  https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// const solution = str => str.split('').reverse().join('')

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Reversed sequence
// LINK:  https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//   let arr = []
//   for (let i = n; i >= 1; i--) arr.push(i) 
//   return arr;
// };

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Multiplication table for number
// LINK:  https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

// function multiTable(number) {
//   let msg = ''
//   for (let i = 1; i <= 10; i++){
//     msg = msg + `${i} * ${number} = ${i*number}\n`
//   }
//   return msg.substring(0, msg.length-1)
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Reversed Words
// LINK:  https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// const reverseWords = str => str.split(' ').reverse().join(' ')

// 7) END===============================================================


// 8) START===============================================================
// TITLE: Switch it Up!
// LINK:  https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// function switchItUp(number){
//   const words = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
//   return words[number] 
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Keep Hydrated!
// LINK:  https://www.codewars.com/kata/582cb0224e56e068d800003c

// const litres = time => Math.floor(time * 0.5)

// 9) END===============================================================

// 10) START===============================================================
// TITLE: Returning Strings
// LINK:  https://www.codewars.com/kata/55a70521798b14d4750000a4

// const greet = name => `Hello, ${name} how are you doing today?`

// 10) END===============================================================