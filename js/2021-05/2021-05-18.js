// CODE KATAS FOR 18 May 2021
// Rankings at start of the day:
//   Merit = 1608
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Last Survivor (7 kyu)
// LINK:  https://www.codewars.com/kata/609eee71109f860006c377d1

//v1
// function lastSurvivor(letters, coords) {
//   let res = letters.split('')
  
//   for (c of coords){ res.splice(c,1) }
//   return res.join('')
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Last (7 kyu)
// LINK:  https://www.codewars.com/kata/541629460b198da04e000bb9

// function last(list){
//   var last = arguments[arguments.length - 1];
//   return last[last.length - 1] || last;
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Fix string case (7 kyu)
// LINK:  https://www.codewars.com/kata/5b180e9fedaa564a7000009a

// v1
// function solve(s){
//   let uc = [...s].filter((c,i)=> c.charCodeAt(0)<=90)
//   let lc = [...s].filter((c,i)=> c.charCodeAt(0)>=97)

//   return uc.length>lc.length ? s.toUpperCase() : s.toLowerCase() 
// }

// v2
// function solve(s){
//   return [...s].filter((c,i)=> c.charCodeAt(0)<=90).length>[...s].filter((c,i)=> c.charCodeAt(0)>=97).length ? s.toUpperCase() : s.toLowerCase()
// }
// 3) END===============================================================


// 4) START===============================================================
// TITLE: Flatten (7 kyu)
// LINK:  https://www.codewars.com/kata/5250a89b1625e5decd000413

// v1
// var flatten = function (array){
//   let res = []
//   for (let i=0; i<array.length; i++){
//     if (!array[i].length) { res.push(array[i]) }
//     else { for (let j=0; j<array[i].length; j++){ res.push(array[i][j]) } }
//   }
//   return res
// }

// v2
// const flatten = (array) => [].concat(...array);
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