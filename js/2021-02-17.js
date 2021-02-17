// CODE KATAS FOR 17 Feb 2021
// Rank at start of the day = 132 / 6 Kyu
// comment = #X kata for 17/Feb/2021


// 1) START===============================================================
// TITLE: Stringy Strings
// LINK:  https://www.codewars.com/kata/563b74ddd19a3ad462000054

// v1
// function stringy(size) {
//   msg = '1'
//   for (let i = 1; i < size; i++){
//     nextChar = (i % 2) === 1 ? 0 : 1
//     msg = msg + nextChar
//   }
//   return msg
// }

// v2
// function stringy(size) {
//   msg = '1'
//   for (let i = 1; i < size; i++){
//     msg = msg + `${(i % 2) === 1 ? 0 : 1}`
//   }
//   return msg
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Help the bookseller !
// LINK:  https://www.codewars.com/kata/54dc6f5a224c26032800005c

// v1
// function stockList(listOfArt, listOfCat){
//   //   console.log(listOfArt)
//   //   console.log(listOfArt[0])
//   //   console.log(listOfArt[0].charAt(0))  
//     let bookInfo = listOfArt[0].split(' ')
//   //   console.log(bookInfo)
//   //   console.log(bookInfo[1])
//     let msg =  ''
//     let total = 0

//     if (listOfArt.length === 0 || listOfCat.length === 0) return ''
//     for (let i = 0; i < listOfCat.length; i++){
//       let searchCat = listOfCat[i]
      
//       for (let j = 0; j < listOfArt.length; j++){
//         let bookCat = listOfArt[j].charAt(0)
//         if (searchCat === bookCat){
//           let bookInfo = listOfArt[j].split(' ')
//           console.log(`1= ${bookInfo[0]} / ${bookInfo[1]}`)
//           console.log(Number(bookInfo[1]))
//           total = total + Number(bookInfo[1])
//         }
//       }  
//       msg = msg + `(${searchCat} : ${total}) - `
//       total = 0
//     }
//     console.log(msg.substring(0, msg.length-3))
//     return (msg.substring(0, msg.length-3))
//   }
  
// v2
// function stockList(listOfArt, listOfCat){
//   let msg =  ''
//   let total = 0

//   if (listOfArt.length === 0 || listOfCat.length === 0) return ''
  
//   for (let i = 0; i < listOfCat.length; i++){
//     for (let j = 0; j < listOfArt.length; j++){
//       if (listOfCat[i] === listOfArt[j].charAt(0)){
//         let bookInfo = listOfArt[j].split(' ')
//         total = total + Number(bookInfo[1])
//       }
//     }  
//     msg = msg + `(${listOfCat[i]} : ${total}) - `
//     total = 0
//   }
//   return (msg.substring(0, msg.length-3))
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Double Trouble
// LINK:  https://www.codewars.com/kata/57f7796697d62fc93d0001b8

// v1
// function trouble(x, t){
//   console.log(x)
//   console.log(t)
  
//   for (let i = 1; i <= x.length; i++){
//     console.log('= ' + x[i - 1] + ' / ' + x[i] + ' === ' + t)
    
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//   }
//   console.log(x)
//   return x
// }

// v2
// function trouble(x, t){
//   for (let i = 1; i <= x.length; i++){    
//     while ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//   }
//   return x
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: The old switcheroo
// LINK:  https://www.codewars.com/kata/55d410c492e6ed767000004f

// v1
// function vowel2index(str) {
//   let chars = str.split('')
//   //console.log(str)
//   //console.log(str.replace(/[aeiou]/gi,"X"))
//   //console.log(chars)
//   for (j = 1; j <= chars.length; j++){
//     //console.log(`--${j}--`)
//     //console.log(`${chars[j - 1]}`)
    
//     if (/[aeiou]/gi.test(chars[j - 1])){
//       //console.log(chars[j - 1] + " / " + Number(j))
//       chars[j - 1] = j
//       //console.log(chars[j - 1])
//     }
//   }
   
//   //console.log(chars.join(''))
//   return chars.join('')
// }

// v2
// function vowel2index(str) {
//   let chars = str.split('')
//   let newChars = ''

//   chars.forEach((char, j) => (/[aeiou]/gi.test(char)) ? newChars = newChars + Number(j + 1) : newChars = newChars + char)

//   return newChars
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Divide and Conquer
// LINK:  https://www.codewars.com/kata/57eaec5608fed543d6000021

// function divCon(x){
//   let nums = 0
//   let numStrs = 0

//   for (i = 0; i < x.length; i++){
//     typeof x[i] === 'string' ? numStrs = numStrs + parseInt(x[i]) : nums = nums + Number(x[i])
//   }
//   return nums - numStrs
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Are arrow functions odd?
// LINK:  https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

// function odds(values){
//   return values.filter(x => (x % 2 == 1));
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Lario and Muigi Pipe Problem
// LINK:  https://www.codewars.com/kata/56b29582461215098d00000f

// function pipeFix(numbers){
//   let newNums = []
  
//   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
//     newNums.push(i)
//   }
//   return newNums
// }


// 7) END===============================================================


// 8) START===============================================================
// TITLE: Grasshopper - Summation
// LINK:  https://www.codewars.com/kata/55d24f55d7dd296eb9000030

//  v1
// var summation = function (num) {
//   let total = 0
//   for (let i = 0; i <= num; i++){
//     total = total + i
//   }
//   return total
// }

// v2
// var summation = function (num) {
//   let total = 0
//   let i = 0
  
//   while (i <= num) {
//     total = total + i
//     i++
//   }
//   return total
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: If you can't sleep, just count sheep!!
// LINK:  https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = function (num){
//   let msg = ''
//   for (let i = 1; i <= num; i ++){
//     msg = msg + i + ' sheep...'
//   }
//   return msg
// }

// 9) END===============================================================

// 10) START===============================================================
// TITLE: Double Char
// LINK:  https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//   let newStr = []
//   for (let i = 0; i < str.length; i++){
//     newStr.push(str[i])
//     newStr.push(str[i])
//   }
//   return newStr.join('')
// }

// 10) END===============================================================