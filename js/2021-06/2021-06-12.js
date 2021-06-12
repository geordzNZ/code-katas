// CODE KATAS FOR 12 June 2021
// Rankings at start of the day:
//   Merit = 1795
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Find the Integral (8 kyu)
// LINK:  https://www.codewars.com/kata/59811fd8a070625d4c000013

// v1
// function integrate(coefficient, exponent) {
//   let n1 = coefficient/(exponent+1)
//   let n2 = exponent+1
//   return n1+"x^"+n2
// }

// v2
// const integrate =(co,exp)=> `${co/(exp+1)}x^${exp+1}`
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Student's Final Grade (7 kyu)
// LINK:  https://www.codewars.com/kata/5ad0d8356165e63c140014d4

// v1
// function finalGrade (exam, projects) {
//   if (exam>90 || projects>10) return 100
//   if (exam>75 && projects>=5) return 90
//   if (exam>50 && projects>=2) return 75
//   return 0
// }

// v2
// function finalGrade (exam, projects) {
//   return (exam>90 || projects>10) ? 100 :
//          (exam>75 && projects>=5) ? 90  :
//          (exam>50 && projects>=2) ? 75 : 0
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Wealth equality, finally! (7kyu)
// LINK:  https://www.codewars.com/kata/5815f7e789063238b30001aa

// v1
// function redistributeWealth(wealth) {
//   let totalWealth = wealth.reduce((t,w)=>t+=w,0)
//   let totalWealthPP = totalWealth/wealth.length
  
//   for (let i=0; i<wealth.length; i++){
//     wealth[i] = totalWealthPP
//   }
// }

// v2
// function redistributeWealth(wealth) {
//   let totalWealth = wealth.reduce((t,w)=>t+=w,0)
//   let totalWealthPP = totalWealth/wealth.length
  
//   wealth.fill(totalWealthPP)
// }

// v3
// const redistributeWealth =wealth=> wealth.fill(wealth.reduce((t,w)=>t+=w,0)/wealth.length)
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