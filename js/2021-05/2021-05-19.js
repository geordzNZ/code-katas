// CODE KATAS FOR 19 May 2021
// Rankings at start of the day:
//   Merit = 1614
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Operator Precedence (for beginners) (beta)
// RANK:  pre-kata: 1614 / post-kata: 1618 / post-rank: 1620
// LINK:  https://www.codewars.com/kata/5a32c292b6cfd7e83200017d

//Fix this:
// function fahrenheitToCelsius(fahrenheit) {  
//   return fahrenheit - 32 / 9/5
// }

// Fixed
// function fahrenheitToCelsius(fahrenheit) {  
//   return (fahrenheit - 32) / (9/5);  
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Check RNA Nucleotides (7 kyu)
// LINK:  https://www.codewars.com/kata/5a3325b4b6486ab367000064

// function checkNucleotides(seq) {
//   for (let i=0; i<seq.length; i++){
//     if ( /[^AGCU]/i.test(seq[i]) ) { return `There is an invalid letter: ${seq[i]}. At position: ${i+1}`}
//   }
//   return `Valid Sequence: ${seq}`
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Credit card issuer checking (7 kyu)
// LINK:  https://www.codewars.com/kata/5701e43f86306a615c001868


// v1
// function getIssuer(number) {
//   let len = String(number).length
 
//   if (len===15 && (String(number).substr(0,2)==34 || String(number).substr(0,2)==37)) { return 'AMEX'}
  
//   if (len===16 && (String(number).substr(0,4)==6011)) { return 'Discover'}
  
//   if (len===16 && (String(number).substr(0,2)>=51 && String(number).substr(0,2)<=55)) { return 'Mastercard'}
  
//   if ((len===13 || len===16) && (String(number)[0]==4)) { return 'VISA'}
  
//   return 'Unknown'
// }

// v2
// function getIssuer(number) {
//   var s = number.toString();
//   if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
//   if (/^6011\d{12}$/.test(s)) return "Discover";
//   if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
//   if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
//   return "Unknown";
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