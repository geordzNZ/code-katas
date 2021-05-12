// CODE KATAS FOR 12 May 2021
// Rankings at start of the day:
//   Merit = 1550
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Find the next perfect square! (7 kyu)
// LINK:  https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// v1
// function findNextSquare(sq) {
//   let sqrt = Math.sqrt(sq)
//   return sqrt%1===0 ? Math.pow(sqrt+1,2) : -1
// }

// v2
// const findNextSquare =sq=> Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1

// v3
// const findNextSquare =sq=> Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq)+1,2)

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Find the Square Root (7 kyu)
// LINK:  https://www.codewars.com/kata/56426b4e971f01fd2f00005b

// v1
// function squareRoot(x) {
//   let sq = 1
//   let i=0;
  
//   while(true) {
//     i++
//     sq = (x / sq + sq) / 2
//     if (i==x+1) { break }
//   }
//   return sq%1 ? Number(sq.toFixed(5)) : sq;
// }


// v2
// const squareRoot =x=> +(x**0.5).toFixed(5)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Perfect Square. (6 kyu)
// LINK:  https://www.codewars.com/kata/584e93a70f60247eb8000132

// v1
// function perfectSquare(str){
//   let splitStr = str.split('\n')
//   let splitStrLen = splitStr[0].length
//   for (let i=1;i<splitStr.length;i++) { 
//     if (splitStrLen != splitStr[i].length) { return false }
//   }
  
  
//   let cleanStr = str.replace(/[^.]/ig,'')
//   return Math.sqrt(cleanStr.length)%1 || cleanStr.length===0 ? false : true
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