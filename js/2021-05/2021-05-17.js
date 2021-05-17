// CODE KATAS FOR 17 May 2021
// Rankings at start of the day:
//   Merit = 1604
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: The Barksdale Code (7 kyu)
// LINK:  https://www.codewars.com/kata/573d498eb90ccf20a000002a

// v1
// function decode(string) {
//   let res = ''
  
//   for (n of [...string]){
//     if (n==0) { res += 5 }
//     else if (n==1) { res += 9 }
//     else if (n==2) { res += 8 }
//     else if (n==3) { res += 7 }
//     else if (n==4) { res += 6 }
//     else if (n==5) { res += 0 }
//     else if (n==6) { res += 4 }
//     else if (n==7) { res += 3 }
//     else if (n==8) { res += 2 }
//     else if (n==9) { res += 1 }
//   }
//   return res
// }

// v2
// function decode(string) {
//   let res = ''
  
//   for (n of [...string]){
//     switch (parseInt(n)){
//       case 0: res += 5; break;
//       case 1: res += 9; break;
//       case 2: res += 8; break;
//       case 3: res += 7; break;
//       case 4: res += 6; break;
//       case 5: res += 0; break;
//       case 6: res += 4; break;
//       case 7: res += 3; break;
//       case 8: res += 2; break;
//       case 9: res += 1; break;
//    }
//   }
//   return res
// }

// v3
// function decode(string) {
//   let digs = {0:5,1:9,2:8,3:7,4:6,5:0,6:4,7:3,8:2,9:1}
//   let res = ''
  
//   for (n of [...string]) { res += digs[n] }
//   return res
// }

// v4
// function decode(string) {
//   let digs = {0:5,1:9,2:8,3:7,4:6,5:0,6:4,7:3,8:2,9:1}
  
//   return [... string].map(x=> digs[x]).join('') 
// }

// v5
// const decode =string=> string.replace(/./g, d=>'5987604321'[d])
// 1) END===============================================================


// 2) START===============================================================
// TITLE: The Coupon Code (7 kyu)
// LINK:  https://www.codewars.com/kata/539de388a540db7fec000642

// v1
// function checkCoupon(eC, cC, cD, eD){
//   let cDate2 = new Date( cD ) 
//   let eDate2 = new Date( eD )
  
//   if (eC!==cC)  { return false }
//   if (cDate2>eDate2) { return false }
  
//   return true
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