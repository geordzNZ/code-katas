// CODE KATAS FOR 20 May 2021
// Rankings at start of the day:
//   Merit = 1624
//   Kyu = 4
//   Clan = 7

// 1) START===============================================================
// TITLE: Validate credit card expiry date (7 kyu)
// LINK:  https://www.codewars.com/kata/58c3fbe3ea65729f3800007d

// v1
// function checkExpiryValid (date) {
//   let curYear = 2021
//   let curMonth = 05
  
//   let spltDate = date.replace(/\s/g,'').split(date.includes('-') ? '-' : '/')
//   spltDate[1] = spltDate[1].length===2 ?  '20'+spltDate[1] : spltDate[1]
  
  
//   if (spltDate[1]>curYear || spltDate[1]==curYear && spltDate[0]>=curMonth) { return true }
//   else { return false}
// }

// v2
// function checkExpiryValid (date) {  
//   let spltDate = date.replace(/\s/g,'').split(date.includes('-') ? '-' : '/')
//   spltDate[1] = spltDate[1].length===2 ?  '20'+spltDate[1] : spltDate[1]

//   return (spltDate[1]>2021 || spltDate[1]==2021 && spltDate[0]>=05)
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Date Format Validation (7 kyu)
// LINK:  https://www.codewars.com/kata/57ce0c634001a5f3c7000006

// v1
// function dateChecker(date){
//   return /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|[12][0-9]|3[01])-\d\d\d\d (0[1-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(date)
// }

// v2
// function dateChecker(date){
// 	return /^(\d\d-){2}\d{4} \d\d:\d\d$/.test(date);
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Credit Card Mask (7 kyu)
// LINK:  https://www.codewars.com/kata/5412509bd436bd33920011bc

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