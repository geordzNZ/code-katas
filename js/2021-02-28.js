// CODE KATAS FOR 28 Feb 2021
// Rankings at start of the day:
//   Merit = 435
//   Kyu = 5
//   Clan = 21
// Comments:
//   Updates to js file = comment = #X kata for 28/Feb/2021

// 1) START===============================================================
// TITLE: A Cinema
// LINK:  https://www.codewars.com/kata/603301b3ef32ea001c3395d0

// NOT QUITE WORKING CORRECTLY
// when  there is a needs to be a double up like so BGBBGB etc
//
// function cinema(boys,girls) {
//   console.log(boys + '   /   ' + girls)
//   let msg = ''
  
  
//   if (Math.max(boys, girls) - Math.min(boys, girls) >= 2) return null
  
//   if (boys === girls){
//     for (let i = 1; i <= boys; i++){
//       msg = msg + 'BG'
//     }
//   } else if (boys >= girls){
//     for (let i = 1; i <= Math.ceil(girls); i++){
//       msg = msg + 'BG'
//     }
//     msg = msg + 'B'
//   }else {
//     for (let i = 1; i <= Math.ceil(boys); i++){
//       msg = msg + 'GB'
//     }
//     msg = msg + 'G'
//   }
//   console.log(msg)
//   return msg
// }

// someone's answer
// function cinema(boys, girls) {
//   if (boys > girls * 2 || girls > boys * 2) {
//     return null;
//   } else if (boys === girls) {
//     return "".padStart(boys + girls, "BG");
//   } else if (boys > girls) {
//     return "BGB".repeat(boys - girls).padEnd(boys + girls, "GB");    
//   }
//   return "GBG".repeat(girls - boys).padEnd(boys + girls, "BG");    
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: FIXME : Get Full Name (7 kyu)
// LINK:  https://www.codewars.com/kata/597c684822bc9388f600010f

// FIX THE BUG
// class Dinglemouse{
//   constructor( firstName, lastName ){
//   }
//   getFullName(){
//     return firstName+" "+lastName
//   }
// }

// My answer
// class Dinglemouse{
//   constructor( firstName, lastName ){
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   getFullName(){
//     return (this.firstName === '' || this.lastName === '' ) ? this.firstName+this.lastName : this.firstName+' '+this.lastName 
//   }
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Maximum Multiple (7 kyu)
// LINK:  https://www.codewars.com/kata/5aba780a6a176b029800041c

// function maxMultiple(divisor, bound){
//   for (let i = bound; i>= 1; i--){
//     if (i % divisor === 0) return i
//   }
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Grasshopper - If/else syntax debug  (8 kyu)
// LINK:  https://www.codewars.com/kata/57089707fe2d01529f00024a

// FIX THE BUG
// function checkAlive (health) {
//   if () {
//     health < 0
//     return false
//   } else () {
//     return true
//   }
// }

// MY ANSWER
// const checkAlive = health => health <= 0 ? false : true

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Get Planet Name By ID (8 kyu)
// LINK:  https://www.codewars.com/kata/515e188a311df01cba000003

// FIX THE BUG
// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//     case 2:
//       name = 'Venus'
//     case 3:
//       name = 'Earth'
//     case 4:
//       name = 'Mars'
//     case 5:
//       name = 'Jupiter'
//     case 6:
//       name = 'Saturn'
//     case 7:
//       name = 'Uranus'
//     case 8:
//       name = 'Neptune'
//   }
//   return name;
// }

// MY ANSWER
// function getPlanetName(id){
// var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//       break
//     case 2:
//       name = 'Venus'
//       break
//     case 3:
//       name = 'Earth'
//       break
//     case 4:
//       name = 'Mars'
//       break
//     case 5:
//       name = 'Jupiter'
//       break
//     case 6:
//       name = 'Saturn'
//       break
//     case 7:
//       name = 'Uranus'
//       break
//     case 8:
//       name = 'Neptune'
//       break
//   }
  
//   return name;
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Debug Sum of Digits of a Number (7 kyu)
// LINK:  https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

// FIX THE BUG
// function getSumOfDigits(integer) {
//   var sum = null;
//   var digits =  Math.floor(integer).toString();
//   for(var ix = 1; ix < digits.length; ix = sum + 1) {
//     sum =+ digits[ix + 1]);
//   }
//   return sum;
// }

// MY ANSWER
// const getSumOfDigits = integer => integer.toString().split('').reduce((t, i) => parseInt(t) + parseInt(n), 0)

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Capitalization and Mutability (8 kyu)
// LINK:  https://www.codewars.com/kata/595970246c9b8fa0a8000086

// FIX THE BUG
// function capitalizeWord(word) {
//   word[0].toUpperCase();
//   return word;
// }

// MY ANSWER
// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.substring(1,word.length)
// }


// 7) END===============================================================


// 8) START===============================================================
// TITLE: Number to digit tiers (7 kyu)
// LINK:  https://www.codewars.com/kata/586bca7fa44cfc833e00005c

// function createArrayOfTiers(num) {
//   let tiers = []
//   for (let i = 1; i <= num.toString().length; i++){
//     tiers.push(num.toString().substring(0,i))
//   }
//   return tiers;
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: 
// LINK:  

// 9) END===============================================================

// 10) START===============================================================
// TITLE: 
// LINK:  

// 10) END===============================================================