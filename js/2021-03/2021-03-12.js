// CODE KATAS FOR 12 Mar 2021
// Rankings at start of the day:
//   Merit = 749
//   Kyu = 4
//   Clan = 14
// Comments:
//   Updates to js file = comment = #X kata for 12/Mar/2021

// 1) START===============================================================
// TITLE: Sum of Cubes (7 kyu)
// LINK:  https://www.codewars.com/kata/59a8570b570190d313000037

// function sumCubes(n){
//   let total = 0
  
//   for (i=1;i<=n;i++) total+=Math.pow(i,3)
//   return total
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Largest 5 digit number in a series (7 kyu)
// LINK:  https://www.codewars.com/kata/51675d17e0c1bed195000001

// function solution(digits){
//   let maxN = 0
  
//   for (let i=0; i<=digits.length-5; i++){
//     if(Number(digits.substring(i,i+5)) > maxN ) maxN = Number(digits.substring(i,i+5))
//   }
//   return maxN  
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Reverse the bits in an integer
// LINK:  https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript

// function reverseBits (n) {
//   return parseInt(n.toString(2).split('').reverse().join(''),2)
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Follow that Spy
// LINK:  https://www.codewars.com/kata/5899a4b1a6648906fe000113

// function findRoutes(routes) {
//   let itinerary = []
//   let ctrItin = 1

//   //find starting 2 locations
//     for (let i=0; i<=routes.length-1; i++){
//       let ctr=0
//       for (let j=1; j<=routes.length-1; j++){
//         if (routes[i][0] === routes[j][1]) {
//           ctr++
//           j=routes.length-1
//         }
//       }
//       if (ctr === 0){
//         itinerary.push(routes[i][0])
//         itinerary.push(routes[i][1])
//         routes.splice(i,1)
//         i=routes.length-1
//       }
//     }

//  //find rest of locations
//   for (let i=0; i<=routes.length-1; i++){
//     if (itinerary[ctrItin] === routes[i][0]){
//       itinerary.push(routes[i][1])
//       routes.splice(i,1)
//       ctrItin++
//       i=-1
//     }
//   }
//   return itinerary.join(', ')
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: No oddities here
// LINK:  https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

// function noOdds( values ){
//   return values.filter((cV) => cV % 2 === 0)
// }

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