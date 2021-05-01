// CODE KATAS FOR 01 05 2021
// Rankings at start of the day:
//   Merit = 1444
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 01/05/2021"

// 1) START===============================================================
// TITLE: Most Likely (7 kyu)
// LINK:  https://www.codewars.com/kata/56644a421b7c94c622000056

// function mostLikely(prob1,prob2){
//   let p1 = prob1.split(':')
//   let p2 = prob2.split(':')
  
//   return p1[0]/p1[1] > p2[0]/p2[1]
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Diving Scores (beta)
// RANK:  before: 1446 / post kata: 1450 / post ranking 1452
// LINK:  https://www.codewars.com/kata/5c97be7d856e611dbb78805f

// function scoreOfDive(scores, tariff) {
//   let total = 0
//   scores.sort((a,b)=>a-b)
  
//   for (let i=2;i<scores.length-2;i++) { total +=  scores[i] }
  
//   return (total*tariff).toFixed(2)
// }

// v2
// const scoreOfDive =(s, t)=>(s.sort((a,b) => a-b).slice(2,-2).reduce((a,v) => a+=v)*t).toFixed(2)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Scrabble Score (7 kyu)
// LINK:  https://www.codewars.com/kata/558fa34727c2d274c10000ae

// v1
// function scrabbleScore(str){
//   let ltrs = str.replace(/\s/g,'').split('')
//   let total = 0
  
//   for (l of ltrs){
//     switch (l.toUpperCase()){
//       case ('Q'): total+=10; break;
//       case ('Z'): total+=10; break;
        
//       case ('J'): total+=8; break;
//       case ('X'): total+=8; break;
        
//       case ('K'): total+=5; break;
        
//       case ('F'): total+=4; break;
//       case ('H'): total+=4; break;
//       case ('V'): total+=4; break;
//       case ('W'): total+=4; break;
//       case ('Y'): total+=4; break;
      
//       case ('B'): total+=3; break;
//       case ('C'): total+=3; break;
//       case ('M'): total+=3; break;
//       case ('P'): total+=3; break;
        
//       case ('D'): total+=2; break;
//       case ('G'): total+=2; break;
        
//       default: total+=1; break;
//     }
//   }
//   return total
// }

// v2
// function scrabbleScore(str){
//   let ltrs = str.replace(/\s/g,'').split('')
//   let total = 0
//   let s10 = 'QZ', s8 = 'JX', s5 = 'K', s4 = 'FHVWY', s3 = 'BCMP', s2 = 'DG', s1 = 'AEIOULNRST'
  
//   for (l of ltrs){    
//     if (s10.includes(l.toUpperCase())) { total+=10 }
//     else if (s8.includes(l.toUpperCase())) { total+=8 }
//     else if (s5.includes(l.toUpperCase())) { total+=5 } 
//     else if (s4.includes(l.toUpperCase())) { total+=4 }
//     else if (s3.includes(l.toUpperCase())) { total+=3 }
//     else if (s2.includes(l.toUpperCase())) { total+=2 }
//     else { total+=1 }
//   }
//   return total
// }

// v3
// function scrabbleScore(str){
//   let total = 0
//   let ltrs = str.toUpperCase().replace(/\s/g,'').split('')
  
//   for (l of ltrs){ total += $dict[l] }
//   return total
// }

// v4
// const scrabbleScore =str=> str.toUpperCase().replace(/\s/g,'').split('').reduce((t,v)=>t+=$dict[v],0)

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