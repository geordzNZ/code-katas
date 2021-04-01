// CODE KATAS FOR 01 Apr 2021
// Rankings at start of the day:
//   Merit = 1125
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 01/Apr/2021

// 1) START===============================================================
// TITLE: Racing #1: Simplified Drag Race (7 kyu)
// LINK:  https://www.codewars.com/kata/5a40f5b01f7f70ed7600001e

// v1
// function dragRace(len, anna, bob) {

//   let annaRaceTime = (len/anna.speed)+anna.reactionTime
//   let bobRaceTime = (len/bob.speed)+bob.reactionTime
  
//   if (annaRaceTime<bobRaceTime) { return 'Anna is the winner' }
//   if (bobRaceTime<annaRaceTime) { return 'Bob is the winner' }
  
  
//   return "It's a draw";
// }

// v2
// function dragRace(len, anna, bob) {
//   let annaRaceTime = (len/anna.speed)+anna.reactionTime
//   let bobRaceTime = (len/bob.speed)+bob.reactionTime
  
//   return (annaRaceTime<bobRaceTime) ? 'Anna is the winner' : 
//          (bobRaceTime<annaRaceTime) ? 'Bob is the winner' : "It's a draw"
//   }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Holiday I - Temperature in Bali (beta)
// RANK: at start = 1127 / after completion =  / after completion = 
// LINK:  https://www.codewars.com/kata/57e8e9df2aee49c0280009ab

// v1
// function bareable(heat, humidity){
//   if (humidity > 0.5 || heat >= 36) { return false }
//   if ((heat >= 25 && heat < 36) && humidity > 0.4) { return false }
//   return true  
// }

// v2
// function bareable(heat, humidity){
//   if ((humidity > 0.5 || heat >= 36) || 
//      ((heat >= 25 && heat < 36) && humidity > 0.4)) { return false }
//   return true  
// }

// v3
// function bareable(heat, humidity){
//   return humidity > 0.5 || heat >= 36 ? false : 
//          (heat >= 25 && heat < 36) && humidity > 0.4 ? false : true  
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Temperature converter (6 kyu)
// LINK:  https://www.codewars.com/kata/54ce9497975ca65e1a0008c6

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