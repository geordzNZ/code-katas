// CODE KATAS FOR 26 May 2021
// Rankings at start of the day:
//   Merit = 1671
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: draw me a chessboard (7 kyu)
// LINK:  https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

// v1
// function chessBoard(rows, cols) {  
//   let board = []
//   for (let i=0; i<rows; i++){
//     let row = []
//     for (let j=0; j<cols; j++){
//       if (i%2===0){
//         if (j%2===0){ row.push('O') }
//         else { row.push('X') }
//       }else{
//         if (j%2===0){ row.push('X') }
//         else { row.push('O') }
//       }
//     }
//     board.push(row)
//   }
//   return board
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: ChessBoard (7 kyu)
// LINK:  https://www.codewars.com/kata/581c894633b9fe465d0000a6

// v1
// function board(size) {
//   let board = []
//   let row = ''
//   for (let i=0; i<size; i++){
//     for (let j=0; j<size; j++){
//       if (i%2===0){
//         if (j%2===0){ row += '#' }
//         else { row += ' ' }
//       }else{
//         if (j%2===0){ row += ' ' }
//         else { row += '#' }
//       }
//     }
//     row += '\n'
//   }
//   return row
// }

// v2
// function board(size) {
//   let row = ''
//   for (let i=0; i<size; i++){
//     for (let j=0; j<size; j++){
//       if (i%2===0) { row += j%2===0 ? '#' : ' ' }
//       else{ row += j%2===0 ? ' ' : '#' }
//     }
//     row += '\n'
//   }
//   return row
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Correct the mistakes of the character recognition software (8 kyu)
// LINK:  https://www.codewars.com/kata/577bd026df78c19bca0002c0

// v1
// function correct(string){
// 	let s1 = string.replace(/5/g,'S')
//   let s2 = s1.replace(/0/g,'O')
//   let s3 = s2.replace(/1/g,'I')
//   return s3
// }

// v2
// function correct(string){
// 	return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
// }

// v3
//const correct =string=> string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
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