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
// TITLE: Convert a Boolean to a String
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