// CODE KATAS FOR 22 May 2021
// Rankings at start of the day:
//   Merit = 1646
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Opposite number (8 kyu)
// LINK:  https://www.codewars.com/kata/56dec885c54a926dcd001095

// v1
// function opposite(number) {
//   return number*-1
// }

// v2
// const opposite =n=> n*-1

// v3
// const opposite =n=> -n
// 1) END===============================================================

// 2) START===============================================================
// TITLE: Tip Calculator (8 kyu)
// LINK:  https://www.codewars.com/kata/56598d8076ee7a0759000087

// v1
// function calculateTip(amount, rating) {
//   switch (rating.toLowerCase()){
//     case 'terrible' : return 0; break;
//     case 'poor' : return Math.ceil(amount * 0.05); break;
//     case 'good' : return Math.ceil(amount * 0.1); break;
//     case 'great' : return Math.ceil(amount * 0.15); break;
//     case 'excellent' : return Math.ceil(amount * 0.2); break;
//     default: return 'Rating not recognised'
//   }
// }

// v2
// function calculateTip(amount, rating) {
//   return rating.toLowerCase() === 'terrible' ? 0 :
//          rating.toLowerCase() === 'poor' ? Math.ceil(amount * 0.05) :
//          rating.toLowerCase() === 'good' ? Math.ceil(amount * 0.10) :
//          rating.toLowerCase() === 'great' ? Math.ceil(amount * 0.15):
//          rating.toLowerCase() === 'excellent' ? Math.ceil(amount * 0.20) : 'Rating not recognised'
// }

// v3
// function calculateTip(amt, rtg){
//   const TIPS = {"terrible": 0,"poor": 0.05,"good": 0.1,"great": 0.15,"excellent": 0.2};
//   const tip = TIPS[rtg.toLowerCase()]
  
//   return tip != undefined ? Math.ceil(tip * amt) : "Rating not recognised";
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: 
// LINK:  

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