// CODE KATAS FOR 09 Mar 2021
// Rankings at start of the day:
//   Merit = 627
//   Kyu = 5
//   Clan = 16
// Comments:
//   Updates to js file = comment = #X kata for 09/Mar/2021

// 1) START===============================================================
// TITLE: Removing Elements (8 kyu)
// LINK:  https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// const removeEveryOther = arr => arr.filter((cV, i) => i % 2 === 0)

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Count the Monkeys! (8 kyu)
// LINK:  https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// v1 - for i
// function monkeyCount(n) {
//   let monkeys = []
//   for (let i = 1; i<=n; i++) monkeys.push(i)
//   return monkeys
// }

// v2 - while
// function monkeyCount(n) {
//   let monkeys = []
//   let i = 1
  
//   while (i<=n) {
//     monkeys.push(i)
//     i++
//   } 
//   return monkeys
// }

// v3 - Array.from 
// const monkeyCount = n => Array.from({length: n}, (_, i) => i + 1)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Count of positives / sum of negatives (8 kyu)
// LINK:  https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// function countPositivesSumNegatives(input) {
//   console.log(input)
//   let pos = 0
//   let neg = 0
  
//   if ((input === null) || (input.length === 0)) return []

//   input.forEach((num) => num >0 ? pos++ : neg+=num)
//   return [pos,neg]
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Reverse List Order (8 kyu)
// LINK:  https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b

// const reverseList = list => list.reverse()

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Add Length (8 kyu)
// LINK:  https://www.codewars.com/kata/559d2284b5bb6799e9000047

// function addLength(str) {
//   let splitStr = str.split(' ')
  
//   for (let i = 0; i <= splitStr.length -1; i++){
//     splitStr[i] = splitStr[i] + ' ' + (splitStr[i]).length
//   }
//   return splitStr
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Duck Duck Goose (8 kyu)
// LINK:  https://www.codewars.com/kata/582e0e592029ea10530009ce

// v1 - my answer
// function duckDuckGoose(players, goose) {
//   return players[(goose % players.length)-1 >= 0 ? (goose % players.length)-1 : players.length-1].name
// }


// v2 - proper answer
// const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Grasshopper - Array Mean (8 kyu)
// LINK:  https://www.codewars.com/kata/55d277882e139d0b6000005d

// var findAverage = nums => nums.reduce((t,cV) => t+=cV)/nums.length

// 7) END===============================================================


// 8) START===============================================================
// TITLE: How many days are we represented in a foreign country? (7 kyu)
// LINK:  https://www.codewars.com/kata/58e93b4706db4d24ee000096

// function daysRepresented(trips){
//   let diC = []
  
//   for (let i=0; i < trips.length; i++) {
//     for (let j=trips[i][0]; j<=trips[i][1];j++)  diC.push(j)
//   }
//   return diC.filter((cV, i, arr) => arr.indexOf(cV) === i).length
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: max diff - easy (7 kyu)
// LINK:  https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

// v1 
// function maxDiff(list) {
//   if (list.length === 0) return 0
  
//   let maxN = list[0]
//   let minN = list[0]
  
//   list.forEach((num) => {
//     if (num > maxN) maxN = num
//     if (num < minN) minN = num
//   })
//   return maxN-minN
// };

// v2
// function maxDiff(list) {
//   if (list.length === 0) return 0
  
//   let maxN = list[0]
//   let minN = list[0]
  
//   maxN = list.reduce((maxN, cV) => cV > maxN ? cV : maxN)
//   minN = list.reduce((minN, cV) => cV < minN ? cV : minN)

//   return maxN-minN
// };

// v3 - someone elses gooder answer
// function maxDiff(list) {
//   return list.length ? Math.max(...list) - Math.min(...list) : 0;
// };

// 9) END===============================================================

// 10) START===============================================================
// TITLE: 
// LINK:  

// 10) END===============================================================