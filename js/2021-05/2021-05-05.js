// CODE KATAS FOR 05 May 2021
// Rankings at start of the day:
//   Merit = 1500
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 05/May/2021"

// 1) START===============================================================
// TITLE: Keep up the hoop (8 kyu)
// LINK:  https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

// const hoopCount =n=> n>=10 ?  "Great, now move on to tricks" : "Keep at it until you get it"

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Keep the Order (7 kyu)
// LINK:  https://www.codewars.com/kata/582aafca2d44a4a4560000e7

// v1
// function keepOrder(ary, val) {
//   for (let i=0; i<=ary.length; i++){
//       if (val <= ary[i]) { return i }
//   }
//   return ary.length;
// }

// v2
// const keepOrder =(a,v)=> a.filter(n=>n<v).length

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Naming Files (7 kyu)
// LINK:  https://www.codewars.com/kata/naming-files

// v1
// function nameFile(fmt, nbr, start) {
//   let res = []

//   if ((nbr <= 0 || nbr%1!=0) || (start > 0 && start%1!=0)) { return [] }
  
//   for (let i=start; i<start+nbr; i++){
//     res.push(fmt.replace(/<index_no>/ig,i))
//   }
//   return res
// }

// v2 (from someone else)
// function nameFile(fmt, nbr, start) {
//   return nbr <= 0 || start % 1 !== 0 || nbr % 1 !== 0 ? [] : Array(nbr).fill(0).map((_, i) => fmt.replace(/\<index\_no\>/g, start + i));
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