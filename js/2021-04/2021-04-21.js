// CODE KATAS FOR 21 Apr 2021
// Rankings at start of the day:
//   Merit = 1340
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 21/Apr/2021"

// 1) START===============================================================
// TITLE: Polish alphabet (8 kyu)
// LINK:  https://www.codewars.com/kata/57ab2d6072292dbf7c000039

// function correctPolishLetters (str) {
//   let res = ''

// v1
//   for (l of str){
//     switch (l.charCodeAt(0)){
//       default: res += l;break;
//       case 261: res += 'a';break;
//       case 263: res += 'c';break;
//       case 281: res += 'e';break;
//       case 322: res += 'l';break;
//       case 324: res += 'n';break;
//       case 243: res += 'o';break;
//       case 347: res += 's';break;
//       case 378: res += 'z';break;
//       case 380: res += 'z';break;
//     }
//   }
//   return res
// }

// v2
// function correctPolishLetters (str) {
//   var pLtrs = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
//   return str.replace(/[ąćęłńóśźż]/g, ltr => pLtrs[ltr]);
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Alphabet symmetry (7 kyu)
// LINK:  https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

// function solve(arr){  
//   let res = []
//   let lpW = 0
  
//   for (let i=0; i<arr.length; i++){
//     for (let j=0; j<arr[i].length; j++){
//       if (arr[i][j].toUpperCase().charCodeAt(0)-64===j+1) { lpW++ }
//     }
//     res.push(lpW)
//     lpW=0
//   }
//   return res 
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Alphabetical Sequence (7 kyu)
// LINK:  https://www.codewars.com/kata/5bd00c99dbc73908bb00057a

// function alphaSeq (str) {
//   let res = []

//   let ltrs = str.toLowerCase().split('')
  
//   for (ltr of ltrs){ res.push(ltr.toUpperCase() + ltr.repeat('abcdefghijklmnopqrstuvwxyz'.indexOf(ltr))) }
  
//   return res.sort().join(',')  
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Alphabetical Addition (7 kyu)
// LINK:  https://www.codewars.com/kata/5d50e3914861a500121e1958

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