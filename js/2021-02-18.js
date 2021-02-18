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
// TITLE: My head is at the wrong end!
// LINK:  https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

// v1
// function fixTheMeerkat(arr) {
//   let temp = arr[0]
//   arr[0] = arr[2]
//   arr[2] = temp
  
//   return arr
// }

// v2
// function fixTheMeerkat(arr) {
//   return [arr[0], arr[1], arr[2]] = [arr[2], arr[1], arr[0]]
// }

// v3
//const fixTheMeerkat = arr => [arr[0], arr[1], arr[2]] = [arr[2], arr[1], arr[0]]

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Find the first non-consecutive number
// LINK:  https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// function firstNonConsecutive (arr) {
//   for (let i = 1; i <= arr.length - 1; i++){
//     if (Math.abs(arr[i] - arr[i-1]) !== 1){ return arr[i] }
//   }
//   return null
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Smallest unused ID
// LINK:  https://www.codewars.com/kata/55eea63119278d571d00006a

// function nextId(ids){
//   ids.sort(function(a, b){return a - b})
  
//   if (ids[0] >= 1) { return 0 }
  
//   for (let i = 1; i <= ids.length - 1; i++){ 
//     if (Math.abs(ids[i] - ids[i-1]) > 1){ return ids[i-1]+1 }
//   }
//   return ids[ids.length-1]+1 
// }

// 7) END===============================================================


// 8) START===============================================================
// TITLE: Parse nice int from char problem
// LINK:  https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

// v1
// function getAge(inputString){
//   return Number(inputString[0])
// }

// v2
// const getAge = inputString => Number(inputString[0])

// 8) END===============================================================


// 9) START===============================================================
// TITLE: CSV representation of array
// LINK:  https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

// v1
// function toCsvText(arr) {
//   let msg = ''
  
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//       msg = msg + arr[i][j] + ','
//     }
//     msg = msg.substring(0, msg.length-1) + '\n'
//   }
//   return msg.substring(0, msg.length-1)
// }

// v2
// function toCsvText(arr) {
//   let msg = ''
  
//   arr.forEach((arr2) => {
//     arr2.forEach((num) => msg = msg + num + ',')
//     msg = msg.substring(0, msg.length-1) + '\n'
//   })
//   return msg.substring(0, msg.length-1)
// }

// 9) END===============================================================

// 10) START===============================================================
// TITLE: N-th Power
// LINK:  https://www.codewars.com/kata/57d814e4950d8489720008db

// const index = (array, n) => (n <= 0 || n > array.length-1) ? -1 : array[n]**n

// 10) END===============================================================


// 11) START===============================================================
// TITLE: Who likes it?
// LINK:  https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// v1
// function likes(names) {
//   if (names.length === 0){
//     return 'no one likes this'
//   } else if (names.length === 1){
//     return `${names[0]} likes this`
//   } else if (names.length === 2){
//     return `${names[0]} and ${names[1]} like this`
//   } else if (names.length === 3){
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   } else {
//     return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
//   }
// }

// v2
// const likes = names => {
//   return (names.length === 0) ? 'no one likes this' :
//          (names.length === 1) ? `${names[0]} likes this` :
//          (names.length === 2) ? `${names[0]} and ${names[1]} like this` :
//          (names.length === 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[0]}, ${names[1]} and ${names.length-2} others like this`
// }

// 11) END===============================================================


// 12) START===============================================================
// TITLE: Find the nth Reverse Number
// LINK:  https://www.codewars.com/kata/600bfda8a4982600271d6069

// v1  (server timed out, but think this works.)
// function findReverseNumber(n) {
//   //   console.log(`-----${n}-----`)
//     let num = ''
//     let i = 0
//     let j = 1

//     while (j <= n){  
//       //console.log(i.toString() + '  /  ' + i.toString().split('').reverse().join(''))
//       if (i === parseInt(i.toString().split('').reverse().join(''))){
//         //console.log(`To push ${i}`)
//         num = i
//         //console.log(`logged ${num}`)
//         j++
//       }
//       i++
//     }
//     //console.log(num)
//     return num
//   }


// v2 -- seems to work for lots of options, but times out due to the server
// function findReverseNumber(n) {
//   console.log('Enter the reverse')
//   let i = 0
//   let j = 0
   
//   while (j <= n){  
//     if (i === parseInt(i.toString().split('').reverse().join(''))){
//       j++
//       if( j % 10000 === 0) { console.log(j) }
      
//       if (j === n){ console.log(i) }
//       // if (j === n){ return i }
//     }
//     i++
//   }
// }

//xfindReverseNumber(10000) //90000000009
//xfindReverseNumber(100000) //90000000009
//xfindReverseNumber(1000000) //90000000009
// 12) END===============================================================