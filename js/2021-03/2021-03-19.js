// CODE KATAS FOR 19 Mar 2021
// Rankings at start of the day:
//   Merit = 907
//   Kyu = 4
//   Clan = 13
// Comments:
//   Updates to js file = comment = #X kata for 19/Mar/2021

// 1) START===============================================================
// TITLE: Strange mathematics (7 kyu)
// LINK:  https://www.codewars.com/kata/604517d65b464d000d51381f

// function strangeMath(n, k){
//   return  Array.from({length: n}, (_, i) => i + 1).sort().indexOf(k)+1
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Thinkful - List and Loop Drills: Inverse Slicer (7 kyu)
// LINK:  https://www.codewars.com/kata/586ec0b8d098206cce001141

// v1
// function inverseSlice(items, a, b) {

//   for (let i=b-1; i>=a; i--){ items.splice(i,1) }
//   return items
// }

// v2 - someone else answer
// inverseSlice=(a,b,c)=>a.slice(0,b).concat(a.slice(c))

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Convert a string to an array (8 kyu)
// LINK:  https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// function stringToArray(string){
//   return string.split(' ')
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Remove String Spaces (8 kyu)
// LINK:  https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// const noSpace = x => x.replace(/ /g,'')

// 4) END===============================================================


// 5) START===============================================================
// TITLE: "this" is a problem (8 kyu)
// LINK:  https://www.codewars.com/kata/547c71fdc5b2b38db1000098

// fix this
// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   return {name: this.firstName + ' ' + this.lastName};
// }

// answer
// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = this.firstName + ' ' + this.lastName
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Is it a vowel on this position? (7 kyu)
// LINK:  https://www.codewars.com/kata/5a2b7edcb6486a856e00005b

// function checkVowel(string, position) {
//   return position>=0 && position<string.length ? /[AEIOUaeiou]/.test(string[position]) : false
// };

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