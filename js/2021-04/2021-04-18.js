// CODE KATAS FOR 18 Apr 2021
// Rankings at start of the day:
//   Merit = 1304
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 18/Apr/2021"

// 1) START===============================================================
// TITLE: Substituting Variables Into Strings: Padded Numbers (7 kyu)
// LINK:  https://www.codewars.com/kata/51c89385ee245d7ddf000001

// const solution = v => `Value is ${'0'.repeat(5-v.toString().length)}${v}`

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Is there a vowel in there? (8 kyu)
// LINK:  https://www.codewars.com/kata/57cff961eca260b71900008f

// v1
// function isVow(a){
//   for (let i=0; i<a.length; i++){
//     switch (a[i]){
//       case 97: a[i] = 'a';break;
//       case 101: a[i] = 'e';break;
//       case 105: a[i] = 'i';break;
//       case 111: a[i] = 'o';break;
//       case 117: a[i] = 'u';break;
//     }
//   }
//   return a
// }

// v2
// function isVow(a){  
//   a.forEach((v,i) => v===97 ? a[i]='a' : v===101 ? a[i]='e' : v===105 ? a[i]='i' : v===111 ? a[i]='o': v===117 ? a[i]='u' : a[i])
//   return a
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Celebrity Baby Names (7 kyu)
// LINK:  https://www.codewars.com/kata/577d5ce442a8d81e790002b2

// function validName(a){
//   console.log(a.length,a)
//   if (a.length === 0) { return 'You must test at least one name.' }
//   if (a.length === 1) { return 'Congratulations, you can choose any name you like!' }
//   let matches = 0
  
//   for (let i=1; i<a.length; i++){
//     if (a[i-1][a[i-1].length-1].toUpperCase() === a[i][0].toUpperCase()){ matches++ }
//   }
//   return matches === a.length-1 
//                    ? 'Congratulations, your baby names are compatible!' 
//                    : 'Back to the drawing board, your baby names are not compatible.'
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