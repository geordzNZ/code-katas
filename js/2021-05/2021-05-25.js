// CODE KATAS FOR 25 May 2021
// Rankings at start of the day:
//   Merit = 1663
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Ermahgerd (6 kyu)
// LINK:  https://www.codewars.com/kata/5660c1e9fae768c3b50000a6/train/javascript

// v1
// function ermahgerd(text) {
//   let t1 = text.toUpperCase()
//   let t2 = t1.replace(/[AEIOU]/g,'ER')
//   let t3 = t2.replace(/ERER|ERH/g,'ER')
//   let t4 = t3.replace(/MY/g,'MAH')
//   let t5 = t4.replace(/RR/g,'R')
//   let t6 = t5.split(' ')
//   for (let i=0; i<t6.length; i++){
//     if (t6[i].length>4){
//       if (t6[i][t6[i].length-1]===',' || t6[i][t6[i].length-1]==='!'){        
//         if (t6[i].substr(t6[i].length-3,2)==='ER') { t6[i]=t6[i].substr(0,t6[i].length-3) +t6[i][t6[i].length-1]  }
//       }else{
//         if (t6[i].substr(t6[i].length-2,2)==='ER') { t6[i]=t6[i].substr(0,t6[i].length-2) }
//       }
//     }
//   }
//   return t6.join(' ')
// }

// v2
// function ermahgerd(text) {
//   let t5 = text.toUpperCase().replace(/[AEIOU]/g,'ER').replace(/ERER|ERH/g,'ER').replace(/MY/g,'MAH').replace(/RR/g,'R')
//   let t6 = t5.split(' ')
//   for (let i=0; i<t6.length; i++){
//     if (t6[i].length>4){
//       if (t6[i][t6[i].length-1]===',' || t6[i][t6[i].length-1]==='!'){        
//         if (t6[i].substr(t6[i].length-3,2)==='ER') { t6[i]=t6[i].substr(0,t6[i].length-3) +t6[i][t6[i].length-1]  }
//       }else{
//         if (t6[i].substr(t6[i].length-2,2)==='ER') { t6[i]=t6[i].substr(0,t6[i].length-2) }
//       }
//     }
//   }
//   return t6.join(' ')
// }

//v3
// function ermahgerd(text) {
//   let t6 = text.toUpperCase().replace(/[AEIOU]/g,'ER').replace(/ERER|ERH/g,'ER').replace(/MY/g,'MAH').replace(/RR/g,'R').split(' ')
//   for (let i=0; i<t6.length; i++){
//     if (t6[i].length>4){
//       if (t6[i][t6[i].length-1]===',' || t6[i][t6[i].length-1]==='!'){        
//         if (t6[i].substr(t6[i].length-3,2)==='ER') { t6[i]=t6[i].substr(0,t6[i].length-3) +t6[i][t6[i].length-1]  }
//       }else{
//         if (t6[i].substr(t6[i].length-2,2)==='ER') { t6[i]=t6[i].substr(0,t6[i].length-2) }
//       }
//     }
//   }
//   return t6.join(' ')
// }

// v4 - someone elses
// const ermahgerd = text =>
//   text.toUpperCase()
//     .replace(/[AEIOU]/g, `ER`)
//     .replace(/ER(ER|H)/g, `ER`)
//     .replace(/MY/g, `MAH`)
//     .replace(/RR/g, `R`)
//     .replace(/(?<=\w{4,})ER\b/g, ``);
// 1) END===============================================================


// 2) START===============================================================
// TITLE: 
// LINK:  

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