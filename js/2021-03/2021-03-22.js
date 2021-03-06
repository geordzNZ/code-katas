// CODE KATAS FOR 22 Mar 2021
// Rankings at start of the day:
//   Merit = 987
//   Kyu = 4
//   Clan = 12
// Comments:
//   Updates to js file = comment = #X kata for 22/Mar/2021

// 1) START===============================================================
// TITLE: Get Nth Even Number (8 kyu)
// LINK:  https://www.codewars.com/kata/5933a1f8552bc2750a0000ed

// v1 - gets basic tests and one other,but then times out.
// function nthEven(n){
//   let i = 0
//   let j = 0
//   while (i<n){
//     if (j%2===0) { i++ }
//     j++
//   }
//   return j-1
// }

// v2 - for loop that only tests ever 2nd number... so half as many as v1 -- but it still times out
// function nthEven(n){
//   let ans = 0
//   let i = 0
//   for (i;ans<n;i+=2){
//     ans++
    
//   }
//   return i-2
// }

// v3 - noticed a pattern in the results.
//const nthEven = n => n*2-2

// 1) END===============================================================


// 2) START===============================================================
// TITLE: What is between? (8 kyu)
// LINK:  https://www.codewars.com/kata/55ecd718f46fba02e5000029

// v1
// function between(a, b) {
//   let ans = []
//   for (let i=a;i<=b;i++) ( ans.push(i))
//   return ans
// }

// v2
// const between = (a, b) => [...Array(b-a+1)].map((_,i) => a+i)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Convert a String to a Number! (8 kyu)
// LINK:  https://www.codewars.com/kata/544675c6f971f7399a000e79

// var stringToNumber = str => Number(str)

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Watermelon (8 kyu)
// LINK:  https://www.codewars.com/kata/55192f4ecd82ff826900089e

// const divide = weight => (weight >=4 && weight%2===0)

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Surface Area and Volume of a Box (8 kyu)
// LINK:  https://www.codewars.com/kata/565f5825379664a26b00007c

// function getSize(w, h, d){
//   return [2*d*w+2*d*h+2*h*w,w*h*d]
// }


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