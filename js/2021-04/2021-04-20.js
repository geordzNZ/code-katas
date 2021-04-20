// CODE KATAS FOR 20 Apr 2021
// Rankings at start of the day:
//   Merit = 1328
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 20/Apr/2021"

// 1) START===============================================================
// TITLE: Spraying trees (7 kyu)
// LINK:  https://www.codewars.com/kata/5981a139f5471fd1b2000071

// function task(w, n, c) {
//   let names = {Monday: 'James', Tuesday: 'John', Wednesday: 'Robert', Thursday: 'Michael', Friday: 'William'}
  
//   return `It is ${w} today, ${names[w]}, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Xmas Tree (7 kyu)
// LINK:  https://www.codewars.com/kata/577c349edf78c178a1000108

// v1
// function xMasTree(n){
//   let tree = []
//   let w = (2*n)-1

//   for (let i=1, j=1; i<=n; i++, j+=2){
//     let row = '_'.repeat((w-j)/2)+'#'.repeat(j)+'_'.repeat((w-j)/2)
//     tree.push(row)
//   }
//   tree.push('_'.repeat((w-1)/2)+'#'.repeat(1)+'_'.repeat((w-1)/2))
//   tree.push('_'.repeat((w-1)/2)+'#'.repeat(1)+'_'.repeat((w-1)/2))

//   return tree
// }

// v2
// function xMasTree(n){
//   let tree = []
//   let w = (2*n)-1
  
//   for (let i=1; i<=3; i++){
//     tree.push('_'.repeat((w-1)/2)+'#'.repeat(1)+'_'.repeat((w-1)/2))
//   }
  
//   for (let i=2, j=3; i<=n; i++, j+=2){
//     let row = '_'.repeat((w-j)/2)+'#'.repeat(j)+'_'.repeat((w-j)/2)
//     tree.splice(i-1,0, row)
//   }
//   return tree
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Don't Drink the Water (5 kyu)
// LINK:  https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript

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