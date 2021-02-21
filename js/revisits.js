// 1) START===============================================================
// TITLE: Word Mesh (6 kyu)
// LINK:  https://www.codewars.com/kata/5c1ae703ba76f438530000a2
// FILE:  2021-02-21.js kata #1

//  REVISIT: copied to file
// function wordMesh(arr){
//   console.log(arr)
//   let msg = ''
    
//   for (let i = 1; i <= arr.length-1; i++){
// //     console.log(`i  =  ${i}`)
// //     console.log(`  lengths = ${arr[i-1].length}  and  ${arr[i].length}`)
//     let j = 1
//     let addStr = ''
//     while ((addStr === '') && ((j <= arr[i-1].length) && (j <= arr[i].length))) {
// //       console.log(`  j =   ${j}  and  addStr = ${addStr}`)
//       let endStr = arr[i-1].substring(arr[i-1].length-j,arr[i-1].length)
// //       console.log (`    ${endStr}`)
//       let startStr = arr[i].substring(0,j)
// //       console.log (`    ${startStr}`)
//       if (endStr === startStr){
// //         console.log(`        found  = "${endStr}"  equals  "${startStr}"`)
//         addStr = endStr
// //         console.log(`        addStr = "${addStr}"`)
//       } else {
//         j++
//       }
//     }
// //    if (addStr == '') return 'failed to mesh'
//     msg = msg + addStr
// //     console.log('========================================')
//   }
//   return msg
// }

// 1) END===============================================================


// 2) START===============================================================

// 2) END===============================================================