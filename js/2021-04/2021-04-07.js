// CODE KATAS FOR 07 Apr 2021
// Rankings at start of the day:
//   Merit = 1184
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 07/Apr/2021

// 1) START===============================================================
// TITLE: Paul's Misery (7 kyu)
// LINK:  https://www.codewars.com/kata/57ee31c5e77282c24d000024

// function paul(x){
//   let score = 0
//   let ratings = {
//     kata: 5,
//     Peteskata: 10,
//     life: 0,
//     eating: 1
// }

// for (m of x){ score += ratings[m.replace(' ','')] }

//   return score < 40  ? 'Super happy!' : 
//          score < 70  ? 'Happy!' :
//          score < 100 ? 'Sad!' : 'Miserable!'
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: The Baby Years III - First Tooth (7 kyu)
// LINK:  https://www.codewars.com/kata/5bcac5a01cbff756e900003e

// function firstTooth(t) {
//   let maxDiff = {
//     value: 0,
//     tooth: 0
//   }
//   let dupDiff = false

//   for (let i = 0; i < t.length; i++){
//     let lDiff = 0
//     let rDiff = 0
//     let tDiff = 0
    
//     if (i === 0) { 
//       maxDiff.value = t[i] - t[i+1] 
//       maxDiff.tooth = i
//     } else if (i === t.length - 1) { 
//       lDiff = t[i] - t[i-1]
//       if (lDiff > maxDiff.value) { 
//         maxDiff.value = lDiff 
//         maxDiff.tooth = i
//         dupDiff = false
//       } else if ( lDiff === maxDiff.value ) { dupDiff = true }
//     } else {
//       lDiff = t[i] - t[i-1]
//       rDiff = t[i] - t[i+1]
//       tDiff = lDiff + rDiff
//       if (tDiff > maxDiff.value) { 
//         maxDiff.value = tDiff 
//         maxDiff.tooth = i
//         dupDiff = false
//       } else if ( tDiff === maxDiff.value ) { dupDiff = true } 
//     }
//   }
//   return !dupDiff ? maxDiff.tooth : -1
// }

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