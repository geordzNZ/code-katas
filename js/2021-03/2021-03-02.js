// CODE KATAS FOR 02 Mar 2021
// Rankings at start of the day:
//   Merit = 461
//   Kyu = 5
//   Clan = 21
// Comments:
//   Updates to js file = comment = #X kata for 02/Mar/2021

// 1) START===============================================================
// TITLE: Find the Difference in Age between Oldest and Youngest Family Members (8 kyu)
// LINK:  https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

// function differenceInAges(ages){
//   let max = ages[0]
//   let min = ages[0]
  
//   for (let i = 1; i <= ages.length-1;i++){
//     if (ages[i] > max) max = ages[i]
//     if (ages[i] < min) min = ages[i]
//   }
//   return [min, max, max-min]
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Write Number in Expanded Form (6 kyu)
// LINK:  https://www.codewars.com/kata/5842df8ccbd22792a4000245

// function expandedForm(num) {
//   let strNums = num.toString().split('')
//   let msg = ''
  
//   for (let i = 0; i <= strNums.length-1; i++) {
//     if (strNums[i] != 0){
//       strNums[i] = strNums[i].padEnd(strNums.length - i,'0')
//     } else {
//       strNums.splice(i,1)
//       i--
//     }
//   }
//   return strNums.join(' + ')
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Playing with passphrases (6 kyu)
// LINK:  https://www.codewars.com/kata/559536379512a64472000053

// function playPass(s, n) {
//   let splitS = s.split('')
  
//   for (let i = 0; i <= splitS.length - 1; i++){
//     let theCharCode = splitS[i].charCodeAt(0)
//     let charToAdd = ''
    
//     if (theCharCode >= 65 && theCharCode <= 90 ) {
//       if (theCharCode + n <= 90){
//         charToAdd = String.fromCharCode(theCharCode + n)
//       } else{
//         theCharCode = (theCharCode + n - 90) + 64
//         charToAdd = String.fromCharCode(theCharCode)
//       }
//     } else if (theCharCode >= 97 && theCharCode <= 122 ) {
//       if (theCharCode + n <= 122){
//         charToAdd = String.fromCharCode(theCharCode + n)
//       } else{
//         theCharCode = (theCharCode + n - 122) + 96
//         charToAdd = String.fromCharCode(theCharCode)
//       }
//     } else if (theCharCode >= 48 && theCharCode <= 57 ) {
//       charToAdd = 9 - splitS[i]
//     } else {
//       charToAdd = splitS[i]
//     }
//     typeof charToAdd === 'number' ? splitS[i] = charToAdd : i % 2 === 0 ? splitS[i] = charToAdd.toUpperCase() : splitS[i] = charToAdd.toLowerCase()
//   }
//   return splitS.reverse().join('')
// }


// 3) END===============================================================


// 4) START===============================================================
// TITLE: Element equals its index
// LINK:  https://www.codewars.com/kata/5b7176768adeae9bc9000056

// v1 -- completed tests, but bigger ones were too slow
// function indexEqualsValue(a) {
//   console.log(a)
//   for (let i = 0; i<= a.length-1; i++){
//     if (i === a[i]) return i
//   }
//   return -1
// }
// v2  -- roughly same times as above tests
// function indexEqualsValue(a) {
//   let i = 0
//   let aLen = a.length-1
  
//   while (i <= aLen){
//     if (i === a[i]) return i
//     i++    
//   }
//   return -1  
// }
// v3  -- takes longer to run than the above  (about 10x slower)
// const indexEqualsValue = a => a.findIndex((cV,i) => cV === i,-1)

// v4 -- Answers deal with binary sort  (split array in 2 and then check the havles ... then split remainder in 2 etc etc)
// function indexEqualsValue(a) {
//   var start = 0, end = a.length;
//   var neg = -1;
//   while(start < end){
//     var i = Math.floor((start + end) / 2);
//     if (a[i] > i){
//       end = i;
//     } else if(a[i] < i) {
//       start = i+1;
//     } else {
//       neg = i;
//       end = i;
//     } 

//   }
//   return neg;
// }

// ... or
// function indexEqualsValue(a) {
//   let min = 0
//   let max = a.length - 1
//   while (min < max) {
//       let i = Math.floor((min+max)/2)
//       if (i <= a[i]) max = i
//       else min = i + 1
//   }
//   return a[max] === max ? max : -1
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Guess the Sequence (7 kyu)
// LINK:  https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090

// function sequence(x) {
//   let nums = []
//   for (let i = 1; i<=x;i++) nums.push(i)
//   return nums.sort()
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Lottery Ticket (6 kyu)
// LINK:  https://www.codewars.com/kata/57f625992f4d53c24200070e

// function bingo(ticket, win){
//   let wins = 0

//   ticket.forEach((mT) => {
//     let i = 0
//     let mTWins = 0
//     while (i < mT[0].length && mTWins===0){
//       if (mT[0][i].charCodeAt() === mT[1]){ mTWins ++ }
//       i++
//     }
//     wins+=mTWins
//   })
//   return wins >= win ? 'Winner!' : 'Loser!'
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Currying functions: multiply all elements in an array (7 kyu)
// LINK:  https://www.codewars.com/kata/586909e4c66d18dd1800009b



// 7) END===============================================================


// 8) START===============================================================
// TITLE: Street Fighter 2 - Character Selection (6 kyu)
// LINK:  https://www.codewars.com/kata/5853213063adbd1b9b0000be

// function streetFighterSelection(fighters, position, moves){
//   let a = position[0]
//   let b = position[1]
//   let chosen = []
  

//   for (let i = 0; i <= moves.length-1; i++){
//     switch(moves[i]) {
//       case 'up': if (a === 1) a = 0; break;
//       case 'down' : if (a === 0) a = 1; break;
//       case 'left' : b === 0 ? b = 5 : b-- ; break;
//       case 'right': b === 5 ? b = 0 : b++; break;
//     }
//     chosen.push(fighters[a][b])
//   }
//   return chosen;
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Multiples of 3 or 5 (6 kyu)
// LINK:  https://www.codewars.com/kata/514b92a657cdc65150000006

// function solution(number){
//   let total = 0
//   for (let i = 0; i < number; i++){
//     if (i%3 === 0 || i%5 === 0) total+=i
//   }
//   return total
// }

// 9) END===============================================================

// 10) START===============================================================
// TITLE: 
// LINK:  

// 10) END===============================================================