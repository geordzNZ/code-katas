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
// TITLE: number with 3 roots. (7 kyu)
// LINK:  https://www.codewars.com/kata/5932c94f6aa4d1d786000028/

// v1
// function perfectRoots(n){
//   let rt2 = Math.pow(n, 1/2)
//   let rt4 = Math.pow(n, 1/4)
//   let rt8 = Math.pow(n, 1/8)

//    if (rt2 === Math.floor(rt2) && 
//        rt4 === Math.floor(rt4) && 
//        rt8 === Math.floor(rt8)) return(true)
//    return false
//}

// v2
// function perfectRoots(n){
//   if (Math.pow(n, 1/2) % 1 === 0 && Math.pow(n, 1/4) % 1 === 0 && Math.pow(n, 1/8) % 1 === 0) return(true)
//   return false
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Number toString
// LINK:  https://www.codewars.com/kata/53934feec44762736c00044b

//Fix the code
// var a = 123.toString();

// Answer
// var a = (123).toString();

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