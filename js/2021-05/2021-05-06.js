// CODE KATAS FOR 06 May 2021
// Rankings at start of the day:
//   Merit = 1506
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 06/May/2021"

// 1) START===============================================================
// TITLE: KISS - Keep It Simple Stupid (7 kyu)
// LINK:  https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1

// v1
// function isKiss( words ){
//   let splitWords = words.split(' ')
//   let max = 0
  
//   for (let i=0; i<splitWords.length; i++){
//     if (splitWords[i].length>max) { max = splitWords[i].length }
//   }
//   return max<=splitWords.length ? 'Good work Joe!' : 'Keep It Simple Stupid'
// }

// v2
// const isKiss =words=> words.split(' ').reduce((m,w)=> m=Math.max(m,w.length),0)<=words.split(' ').length ? 'Good work Joe!' : 'Keep It Simple Stupid'

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Dora Explores! Help Dora keep her lassi (beta)
// RANK:  before kata: 1508 / post kata: 1512 / post rating: 1514
// LINK:  https://www.codewars.com/kata/58f9fda15b7df65fca000004

// function holaDora (v) {
//   let dora = v.lastIndexOf('x')
//   let swiper = v.indexOf(v.find((v)=> v.match(/[aeiou]/i) ))
//   let msg = swiper===-1 ? "You're safe Dora!" : Math.abs(dora-swiper)===1 ? "Swiper, no swiping!" : "Keep your eyes peel Dora!" 
//   return msg 
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: pick a set of first elements (7kyu)
// LINK:  https://www.codewars.com/kata/572b77262bedd351e9000076

// v1
// function first(arr, n) {
//   if (n===0) { return [] }
//   if (!n) { return [arr[0]] }
  
//   return arr.slice(0,n)
// }

// v2
// const first =(a,n)=> (n===0) ? [] : !n ? [a[0]] : a.slice(0,n)

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