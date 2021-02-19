// CODE KATAS FOR 19 Feb 2021
// Rankings at start of the day:
//   Merit = 186
//   Kyu = 6 
//   Clan = 40
// Comments:
//   Updates to js file = comment = #X kata for 19/Feb/2021

// 1) START===============================================================
// TITLE: Decrypt this school cipher (7kyu)
// LINK:  https://www.codewars.com/kata/5cd48cffaae6e30018943175 

// -- NOT WORKING:  passes first 2 tests, but then fails with numbers ...
// const decrypt = (str) => {
//   console.log(`1 =  ${str}`)
//   console.log(str)
//   let msg = ''
//   let newStr = str.replace(/\'\'/g,"','").replace(/\'/g,'').split(',').reverse()//.join(',')
//   console.log(`2 =  ${newStr}`)
//   console.log(newStr)
//   console.log(`3 =  ${newStr.toString()}`)
//   console.log(newStr.toString())
// //   console.log(`4 =  ${String.fromCharCode(newStr.toString())}`)
// //   console.log(String.fromCharCode(newStr.toString()))
  
//   for (let i = 0; i <= newStr.length - 1; i++){
//     msg = msg + String.fromCharCode(newStr[i])
//     console.log(msg)
//   }
//   console.log(`5 =  ${msg}`)
//   return msg
// }


// 1) END===============================================================


// 2) START===============================================================
// TITLE: Grasshopper - Basic Function Fixer (8 kyu)
// LINK:  https://www.codewars.com/kata/56200d610758762fb0000002

// v1
// function addFive(num) {
//   var total = num + 5
//   return total
// }

// v2
// const addFive = num => num + 5

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Aspect Ratio Cropping - Part 1 (8 kyu)
// LINK:  https://www.codewars.com/kata/596e4ef7b61e25981200009f

// v1
// function aspectRatio(x,y){
//   return [Math.ceil(y / 9 * 16),y]
// }

// v2
// const aspectRatio = (x,y) => [Math.ceil(y / 9 * 16),y]

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Aspect Ratio Cropping - Part 2 (6 kyu)
// LINK:  https://www.codewars.com/kata/596e9524f24c7e5a7b000430

//My Version, not working for d/a
// function aspectRatio(x,y,constant){
//   switch (constant){
//     case 'height':
//       return [Math.ceil(y * (16/9)), y]
//       break
//     case 'width':
//       return [x, Math.ceil(x * (9/16))]
//       break
//     case 'diagonal':
//       console.log('diagonal')
//       d = Math.ceil(Math.sqrt(Math.pow(x,2) + Math.pow(y,2)))
//*************scale = Math.sqrt((x * x + y * y) / 337);
//       console.log(d)
//       //return [Math.ceil(y / 9 * 16), Math.ceil(x * 9 / 16)]
//       break
//     case 'area':
//       console.log('area')
//       a = x * y
//       console.log(a)
      
//       //return [Math.ceil(y / 9 * 16), Math.ceil(x * 9 / 16)]
//       break
//   }
// }

//WORKING CODE
// function aspectRatio(x,y,constant){
//   switch(constant){
//     case "height" : return [Math.ceil(y/9*16), y]
//     case "width" : return [x, Math.ceil(x/16*9)]
//     case "diagonal" : return [Math.ceil(Math.sqrt((x*x+y*y)/337)*16), Math.ceil(Math.sqrt((x*x+y*y)/337)*9)]
//     case "area" : return [Math.ceil(Math.sqrt(x*y/144)*16), Math.ceil(Math.sqrt(x*y/144)*9)]
//   }
// }

// // tests
// XaspectRatio(374, 280, "height")//, [498 ,280]);
// XaspectRatio(374, 280, "width")//, [374 ,211]);
// XaspectRatio(374, 280, "diagonal")//, [408 ,230]);
// XaspectRatio(374, 280, "area")//, [432 ,243]);

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Convert a Boolean to a String (8 kyu)
// LINK:  https://www.codewars.com/kata/551b4501ac0447318f0009cd

// variations doing the same thing
// --mine
// const booleanToString = b => b ? 'true' : 'false'
// const booleanToString = b => b.toString()
// --others
// const booleanToString = b => `${b}`
// const booleanToString = b => String(b)

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Find the position! (8 kyu)
// LINK:  https://www.codewars.com/kata/5808e2006b65bff35500008f

// function position(letter){
//   let alp = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   return 'Position of alphabet: ' + (alp.indexOf(letter) + 1)
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Sum of differences in array (8 kyu)
// LINK:  https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

// v1
// function sumOfDifferences(arr) {
//   arr.sort(function(a, b){return b-a})
//   let total = 0
  
//   for (let i = 1; i <= arr.length-1; i++){
//     total = total + (arr[i-1] - arr[i])
//   }
//   return total
// }



// 7) END===============================================================


// 8) START===============================================================
// TITLE: Deodorant Evaporator (7 kyu)
// LINK:  https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

// function evaporator(content, evap_per_day, threshold){ 
//   //console.log(`a = ${content}   /   ${threshold}`)
//   let limit = content * (threshold/100)
//   //console.log(limit)
//   let dur = 0
//   while (content >= limit){
//     //console.log(`b = ${content}   /   ${threshold}`)
//     content = content - (content * (evap_per_day/100))
//     //console.log(`c = ${content}`)
//     dur++
//   }
//   return dur;
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Drink about (8 kyu)
// LINK:  https://www.codewars.com/kata/56170e844da7c6f647000063

// const peopleWithAgeDrink = old => old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky'

// 9) END===============================================================

// 10) START===============================================================
// TITLE: How much water do I need? (8 kyu)
// LINK:  https://www.codewars.com/kata/575fa9afee048b293e000287

// rubbish kata
// function howMuchWater(water, clothes, load){
  
//   if (load > (clothes * 2)) return 'Too much clothes'
//   if (load < clothes) return 'Not enough clothes'
  
//   //return (water * 1.1 ^ (load - clothes)).toFixed(2)
//   console.log(load - clothes)
//   console.log(1.1 ^ (load - clothes))
//   console.log((water * 1.1 ^ (load - clothes)).toFixed(2))
  
// }

//actual answer from someone else ....
// function howMuchWater(L,X,N){
//   if (N > 2 * X) return "Too much clothes";
//   if (N < X) return "Not enough clothes";
//   return +(L * 1.1 ** (N - X)).toFixed(2);
// }

// my adjusted answer
// function howMuchWater(water, clothes, load){
//   if (load > (clothes * 2)) return 'Too much clothes'
//   if (load < clothes) return 'Not enough clothes'
  
//    return Number((water * 1.1 ** (load - clothes)).toFixed(2))
// }

// 10) END===============================================================


// 11) START===============================================================
// TITLE: Filling an array (part 1) (8 kyu)
// LINK:  https://www.codewars.com/kata/571d42206414b103dc0006a1



// 11) END===============================================================