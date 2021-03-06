// CODE KATAS FOR 11 June 2021
// Rankings at start of the day:
//   Merit = 1791
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// LINK:  https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

// const replace=s=> s.replace(/[aeiou]/ig,'!')
// 1) END===============================================================

// v1 partially working, except for the object generator??
// function nextItem(xs, item) {
 
//   let arrXS = xs
//    if (typeof xs === 'string'){ 
//      let arrXS = xs.split('') 
//    }
//    for (let i=0; i<arrXS.length; i++){
//        if (xs[i] === item) { 
//          return xs[i+1] 
//        }
//      }
//    return undefined
//  }

// V2 - someone elses code
// function nextItem(xs, item) {
//   var found = false;
//   for (var x of xs) {
//     if (found) return x;
//     if (x == item) found = true;
//   }
//   return undefined;
// }

// 2) START===============================================================
// TITLE: What's up next?
// LINK:  https://www.codewars.com/kata/542ebbdb494db239f8000046

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Return the day
// LINK:  https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

// v1
// function whatday(num) { 
//   switch(num){
//     case 1: return "Sunday";break;
//     case 2: return "Monday";break;
//     case 3: return "Tuesday";break;
//     case 4: return "Wednesday";break;
//     case 5: return "Thursday";break;
//     case 6: return "Friday";break;
//     case 7: return "Saturday";break;
//     default: return "Wrong, please enter a number between 1 and 7";break;
//   }
// }

// v2
// function whatday(num) { 
//   return num===1 ? "Sunday" :
//          num===2 ? "Monday" :
//          num===3 ? "Tuesday" :
//          num===4 ? "Wednesday" :
//          num===5 ? "Thursday" :
//          num===6 ? "Friday" :
//          num===7 ? "Saturday" : "Wrong, please enter a number between 1 and 7"
// }

// v3
// function whatday(num) { 
//   let days = ["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 
//   return days[num] || "Wrong, please enter a number between 1 and 7"
// }

//v4
// const whatday =num=> ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][num-1] || "Wrong, please enter a number between 1 and 7"
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