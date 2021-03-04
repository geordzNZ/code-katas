// CODE KATAS FOR 04 Mar 2021
// Rankings at start of the day:
//   Merit = 519
//   Kyu = 5
//   Clan = 20
// Comments:
//   Updates to js file = comment = #X kata for 04/Mar/2021

// 1) START===============================================================
// TITLE: If you can read this... (6 kyu)
// LINK:  https://www.codewars.com/kata/586538146b56991861000293

// function to_nato(words) {
//   const nato = ['Alfa','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliett','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu']
//   let splitWords = words.split('')
//   let converted = []

//   for (let i = 0; i < splitWords.length; i++){
//     let ltrCode = splitWords[i].charCodeAt(0)
//       if (ltrCode < 65) {
//         if (ltrCode === 32) {
//           converted.push('')
//         } else{
//           converted.push(splitWords[i])
//         }
//       } else {
//         let lookup = Number(splitWords[i].toUpperCase().charCodeAt(0)-65)
//         converted.push(nato[lookup])
//       }
//   }
//   return converted.join(' ').replace(/  /g,' ')
// }

// cool answer ... plus uses NATO
// function to_nato(words) {
//   return words.replace(/\s/g, '').toLowerCase().split('').map(e => NATO[e] ? NATO[e] : e).join(' ');
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: 
// LINK:  

// 2) END===============================================================


// 3) START===============================================================
// TITLE: 
// LINK:  

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