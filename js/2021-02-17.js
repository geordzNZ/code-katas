// CODE KATAS FOR 17 Feb 2021
<<<<<<< HEAD
// Rank at start of the day = 132 / 6 Kyu
=======
// Rank at start of the day = 132
>>>>>>> 451cc1571e5113915e96176cc52c6e2fa6a7ecd9
// comment = #X kata for 17/Feb/2021


// 1) START===============================================================
// TITLE: Stringy Strings
// LINK:  https://www.codewars.com/kata/563b74ddd19a3ad462000054

// v1
// function stringy(size) {
//   msg = '1'
//   for (let i = 1; i < size; i++){
//     nextChar = (i % 2) === 1 ? 0 : 1
//     msg = msg + nextChar
//   }
//   return msg
// }

// v2
// function stringy(size) {
//   msg = '1'
//   for (let i = 1; i < size; i++){
//     msg = msg + `${(i % 2) === 1 ? 0 : 1}`
//   }
//   return msg
// }

// 1) END===============================================================


// 2) START===============================================================
<<<<<<< HEAD
// TITLE: Help the bookseller !
// LINK:  https://www.codewars.com/kata/54dc6f5a224c26032800005c

// v1
// function stockList(listOfArt, listOfCat){
//   //   console.log(listOfArt)
//   //   console.log(listOfArt[0])
//   //   console.log(listOfArt[0].charAt(0))  
//     let bookInfo = listOfArt[0].split(' ')
//   //   console.log(bookInfo)
//   //   console.log(bookInfo[1])
//     let msg =  ''
//     let total = 0

//     if (listOfArt.length === 0 || listOfCat.length === 0) return ''
//     for (let i = 0; i < listOfCat.length; i++){
//       let searchCat = listOfCat[i]
      
//       for (let j = 0; j < listOfArt.length; j++){
//         let bookCat = listOfArt[j].charAt(0)
//         if (searchCat === bookCat){
//           let bookInfo = listOfArt[j].split(' ')
//           console.log(`1= ${bookInfo[0]} / ${bookInfo[1]}`)
//           console.log(Number(bookInfo[1]))
//           total = total + Number(bookInfo[1])
//         }
//       }  
//       msg = msg + `(${searchCat} : ${total}) - `
//       total = 0
//     }
//     console.log(msg.substring(0, msg.length-3))
//     return (msg.substring(0, msg.length-3))
//   }
  
// v2
// function stockList(listOfArt, listOfCat){
//   let msg =  ''
//   let total = 0

//   if (listOfArt.length === 0 || listOfCat.length === 0) return ''
  
//   for (let i = 0; i < listOfCat.length; i++){
//     for (let j = 0; j < listOfArt.length; j++){
//       if (listOfCat[i] === listOfArt[j].charAt(0)){
//         let bookInfo = listOfArt[j].split(' ')
//         total = total + Number(bookInfo[1])
//       }
//     }  
//     msg = msg + `(${listOfCat[i]} : ${total}) - `
//     total = 0
//   }
//   return (msg.substring(0, msg.length-3))
// }
=======
// TITLE: 
// LINK:  
>>>>>>> 451cc1571e5113915e96176cc52c6e2fa6a7ecd9

// 2) END===============================================================


// 3) START===============================================================
<<<<<<< HEAD
// TITLE: Double Trouble
// LINK:  https://www.codewars.com/kata/57f7796697d62fc93d0001b8

// v1
// function trouble(x, t){
//   console.log(x)
//   console.log(t)
  
//   for (let i = 1; i <= x.length; i++){
//     console.log('= ' + x[i - 1] + ' / ' + x[i] + ' === ' + t)
    
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//     if ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//   }
//   console.log(x)
//   return x
// }

// v2
// function trouble(x, t){
//   for (let i = 1; i <= x.length; i++){    
//     while ((x[i - 1] + x[i]) === t) {
//       x.splice(i, 1)
//     }
//   }
//   return x
// }
=======
// TITLE: 
// LINK:  
>>>>>>> 451cc1571e5113915e96176cc52c6e2fa6a7ecd9

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