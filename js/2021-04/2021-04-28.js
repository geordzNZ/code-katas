// CODE KATAS FOR 28 Apr 2021
// Rankings at start of the day:
//   Merit = 1402
//   Kyu = 4
//   Clan = 8
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 28/Apr/2021"

// 1) START===============================================================
// TITLE: Ninja vs Samurai: Strike (7 kyu)
// LINK:  https://www.codewars.com/kata/517b0f33cd023d848d000001

// v1
// class Warrior {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//   }
  
//   strike(enemy, swings) {
//     enemy.health = Math.max(0, enemy.health - (swings * 10));   
//   }
// }

// v2
// var Warrior = function(name){
//   this.name = name;  
//   this.health = 100;

// this.strike = function(enemy, swings) {
//   enemy.health = Math.max(0, enemy.health - (swings * 10));   
// }
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Mean vs. Median (7 kyu)
// LINK:  https://www.codewars.com/kata/5806445c3f1f9c2f72000031

// function meanVsMedian(numbers) {
//   let mean = numbers.reduce((t,v)=>t+=v,0)/numbers.length
//   let median = (numbers.sort((a,b)=>a-b))[Math.floor(numbers.length/2)]
  
//   return (mean > median) ? 'mean' : (mean < median) ? 'median' : 'same'
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Tube strike options calculator (7 kyu)
// LINK:  https://www.codewars.com/kata/568ade64cfd7a55d9300003e

// function calculator(distance, busDrive, busWalk)  {
//   let walkD = distance / walk
//   let busD = busDrive / bus + busWalk / walk
  
//   return walkD > 2 ? 'Bus' : 
//          walkD <= 0.12 ? 'Walk' : 
//          walkD === busD ? 'Walk' :
//          walkD > busD ? 'Bus' : 'Walk'
  
// }

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