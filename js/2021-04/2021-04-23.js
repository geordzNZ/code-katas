// CODE KATAS FOR 23 Apr 2021
// Rankings at start of the day:
//   Merit = 1356
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 23/Apr/2021"

// 1) START===============================================================
// TITLE: What's my golf score? (7 kyu)
// LINK:  https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a


// v1
// function golfScoreCalculator(parList, scoreList){
//   let total = 0
//   for (let i=0; i<parList.length;i++){ total += scoreList[i]-parList[i] }
//   return total
// }

// v2
// const golfScoreCalculator =(parList,scoreList)=>
//   [...scoreList].reduce((result, score, index) => result += score - parList[index], 0)

// v3
// function golfScoreCalculator(parList, scoreList){
//   var totalPar = 0; parList.split('').forEach(e => totalPar += +e)
//   var totalScore = 0; scoreList.split('').forEach(e => totalScore += +e)
//   return totalScore - totalPar
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: What is my name score? #1 (7 kyu)
// LINK:  https://www.codewars.com/kata/576a29ab726f4bba4b000bb1

// function nameScore(name){
//   let total = 0

//   for (l of name){
//     for (ll in alpha){
//       if (ll.includes(l.toUpperCase())) { total += alpha[ll] }
//     }
//   }
//   return { [name] : total }
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: What Color is Your Name? (6 kyu)
// LINK:  https://www.codewars.com/kata/5705c699cb729350870003b7

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