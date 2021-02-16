//CODE KATAS FOR 16 FEB 2021
// comment = #X kata for 16/Feb/2021

// 1) START===============================================================
// Title: Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   return d >= 7 ? (d * 40) - 50 : d >= 3 ? (d * 40) - 20 : (d * 40)
// }

// 1) END===============================================================


// 2) START===============================================================
// Title: Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// function getGrade (s1, s2, s3) {
//   let avg = (s1 + s2 + s3)/3
  
//   switch(true) {
//     case (avg >= 90):
//       return 'A'
//       break;
//     case (avg >=80):
//       return 'B'
//       break;
//     case (avg >= 70):
//       return 'C'
//     case (avg >= 60):
//       return 'D'
//     default:
//       return 'F'
//   }
// }

// 2) END===============================================================


// 3) START===============================================================
// Title: get character from ASCII Value
// https://www.codewars.com/kata/55ad04714f0b468e8200001c

// function getChar(c){
//   return String.fromCharCode(c)
// }

// 3) END===============================================================


// 4) START===============================================================
// Title: Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x){
//   let total = 1
//   for (let i = 0; i < x.length; i++){
//     total *= x[i]
//   }
//   return total
// }

// 4) END===============================================================


// 5) START===============================================================
// Title: L1: Bartender, drinks!
// https://www.codewars.com/kata/568dc014440f03b13900001d

// function getDrinkByProfession(param){
  
//   switch(param.toLowerCase()) {
//     case 'jabroni':
//       return 'Patron Tequila'
//       break;
//     case 'school counselor':
//       return 'Anything with Alcohol'
//       break;
//     case 'programmer':
//       return 'Hipster Craft Beer'
//       break;
//     case 'bike gang member':
//       return 'Moonshine'
//       break;
//     case 'politician':
//       return 'Your tax dollars'
//       break;
//     case 'rapper':
//       return 'Cristal'
//       break;
//     default:
//       return 'Beer'
//       break;
//   }
// }

// 5) END===============================================================


// 6) START===============================================================
// Title: Pre-FizzBuzz Workout #1
// https://www.codewars.com/kata/569e09850a8e371ab200000b

// function preFizz(n) {
//   let output = []
//   for (let i = 1; i <= n; i++){
//     output.push(i)
//   }
//   return output
// }

// 6) END===============================================================


// 7) START===============================================================
// Title: Switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d

// v1
// function switcheroo(x){
//     x = x.replace(/a/g,'g')
//     x = x.replace(/b/g,'a')
//     x = x.replace(/g/g,'b')
//     return x 
//   }

// v2
// function switcheroo(x){
//   return  x = x.replace(/a/g,'g').replace(/b/g,'a').replace(/g/g,'b')
// }

// 7) END===============================================================


// 8) START===============================================================
// Title: Beginner - Lost Without a Map
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// function maps(x){
//   return x.map(x => x*=2)
// }

// 8) END===============================================================


// 9) START===============================================================
// Title: Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function greet (name, owner) {
//   return name === owner ? 'Hello boss' : 'Hello guest'
// }

// 9) END===============================================================


// 10) START===============================================================
// Title: Spoonerize Me
// https://www.codewars.com/kata/56b8903933dbe5831e000c76

// v1 
// function spoonerize(words) {
//   let arrWords = words.split(' ')
//   let word1 = arrWords[0].split('')
//   let word2 = arrWords[1].split('')
  
  
//   let temp = word1[0]
//   word1[0] = word2[0]
//   word2[0] = temp
  
//   let newWord1 = word1.join('')
//   let newWord2 = word2.join('')
  
//   return newWord1 + ' ' + newWord2
// }

// v2 
// function spoonerize(words) {
//   let arrWords = words.split(' ')
//   let word1 = arrWords[0].split('')
//   let word2 = arrWords[1].split('')
  
  
//   let temp = word1[0]
//   word1[0] = word2[0]
//   word2[0] = temp
  
//   return word1.join('') + ' ' + word2.join('')
// }

// 10) END===============================================================


// 11) START===============================================================
// Title: Noonerize Me
// http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

function noonerize(numbers) {
  
//   if (Number.isInteger(numbers[0]) && Number.isInteger(numbers[1])){
//     let num1 = numbers[0].toString().split('')
//     let num2 = numbers[1].toString().split('')
      
//      let temp = num1[0]
//      num1[0] = num2[0]
//      num2[0] = temp
    
//     return Math.abs(Number(num1.join('')) - Number(num2.join('')))
//   } else {
//      return 'invalid array'
//   }
// }

// noonerize([12, 34])  //18
// noonerize([55, 63])  //12
// noonerize([357, 579])  //178
// noonerize([1000000, 9999999])  //7000001

// 11) END===============================================================