// CODE KATAS FOR 30 May 2021
// Rankings at start of the day:
//   Merit = 1707
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Grid index (7 kyu)
// LINK:  https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e

// v1
// function gridIndex(grid, indices) {
//   let ans = ''
//   let newGrid = [...grid].join('').replace(/,/g,'').split('')
//   for (i of indices){ 
//     ans += newGrid[i-1] 
//   }
//   return ans
// }

// v2 - from someone else
// const gridIndex = (grid, indices) => indices.map(c => grid.flat(2)[c-1]).join('')
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Grid blast! (7 kyu)
// LINK:  https://www.codewars.com/kata/54fdfe14762e2edf4a000a33

// v1
// function fire(x,y) {
//   let coOrd = (y*3)+x
//   return grid[coOrd]
// }

// v2
// const fire =(x,y)=> grid[(y*3)+x]
// 2) END===============================================================