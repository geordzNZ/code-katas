// CODE KATAS FOR 18 Feb 2021
// Rankings at start of the day:
//   Merit = 158
//   Kyu = 6
//   Clan = 47
// Comments:
//   Updates to js file = #X kata for 18/Feb/2021

// 1) START===============================================================
// TITLE: Century From Year
// LINK:  https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// function century(year) {
//   return year%100 === 0 ? Math.floor(year/100) : Math.floor(year/100)+1
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Filter out the geese
// LINK:  https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

// function gooseFilter (birds) {
//   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   let newBirds = []
//   for (let i = 0; i < birds.length; i++){
//     for (let j = 0; j < geese.length; j++){
//       if (birds[i]===geese[j]){
//         birds.splice(i,1)
//         i--
//       }
//     }
//   }
//   return birds
// };

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Fake Binary
// LINK:  https://www.codewars.com/kata/57eae65a4321032ce000002d

// v1
// function fakeBin(x){
//   let newX = x.split('')
//   newX.forEach((c,i) => (c >= 5) ? newX[i] = 1 : newX[i] = 0)
//   return newX.join('')
// }

// v2
// function fakeBin(x){
//   let splitX = x.split('')  
//   return splitX.map((c, i) => (c >= 5) ? splitX[i] = 1 : splitX[i] = 0).join('')
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: A wolf in sheep's clothing
// LINK:  https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// v1
// function warnTheSheep(queue) {
//   let i = queue.length - 2
//   let sheep = 1
//   if (queue[queue.length - 1] === 'wolf'){ return "Pls go away and stop eating my sheep"}
  
//   while (i >= 0) {
//     if (queue[i] === 'wolf'){ return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`}
//     i--
//     sheep++
//   } 
// }

// v2
// function warnTheSheep(queue) {
//   if (queue[queue.length - 1] === 'wolf'){ return "Pls go away and stop eating my sheep" }
  
//   for (let i = 1; i <= queue.length - 1; i++){
//     if (queue[i - 1] === 'wolf'){ return `Oi! Sheep number ${queue.length - i}! You are about to be eaten by a wolf!`}
//   }
// }

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