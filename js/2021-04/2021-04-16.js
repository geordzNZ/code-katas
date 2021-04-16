// CODE KATAS FOR 16 Apr 2021
// Rankings at start of the day:
//   Merit = 1288
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 16/Apr/2021"

// 1) START===============================================================
// TITLE: Day of The Week (7 kyu)
// LINK:  https://www.codewars.com/kata/588d54c2ce8a3532a500001b

// v1
// function getDayOfTheWeek(date) {
// let day = new Date(date).getDay()
// return day === 0 ? "Sunday" : 
//        day === 1 ? "Monday" :
//        day === 2 ? "Tuesday" :
//        day === 3 ? "Wednesday" :
//        day === 4 ? "Thursday" :
//        day === 5 ? "Friday" : "Saturday"
// }

// v2
// function getDayOfTheWeek(date) {
//   switch (new Date(date).getDay())  {
//     case 0: return "Sunday"
//     case 1: return "Monday"
//     case 2: return "Tuesday"
//     case 3: return "Wednesday"
//     case 4: return "Thursday"
//     case 5: return "Friday"
//     case 6: return "Saturday"
//   }
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Next birth-day of the week finder  (7 kyu)
// LINK:  https://www.codewars.com/kata/547336f44481cf5ecc000dde

// v1
// var nextBirthdayOfTheWeek = function (birthday) {
//   let birthDAY = birthday.getDate()
//   let birthMonth = birthday.getMonth()
//   let birthYEAR = birthday.getFullYear()
  
//   let theDay
//   let i = 0
  
//   while (theDay != birthday.getDay()) {
//     i++
//     theDay = new Date(birthYEAR + i, birthMonth, birthDAY).getDay()
//   }
//   return i--
// }

// v2
// var nextBirthdayOfTheWeek = function (birthday) {
//   let theDay
//   let i = 0
  
//   while (theDay != birthday.getDay()) {
//     i++
//     theDay = new Date(birthday.getFullYear() + i, birthday.getMonth(), birthday.getDate()).getDay()
//   }
//   return i--
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: #~For Kids~# d/m/Y -> Day of the week.  (7 kyu)
// LINK:  https://www.codewars.com/kata/5885b5d2b632089dc30000cc

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