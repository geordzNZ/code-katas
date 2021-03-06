// CODE KATAS FOR 21 May 2021
// Rankings at start of the day:
//   Merit = 1630
//   Kyu = 4
//   Clan = 7

// 1) START===============================================================
// TITLE: Bingo Card (6 kyu)
// LINK:  https://www.codewars.com/kata/566d5e2e57d8fae53c00000c

// function getCard() {
//   let b = 'BINGO'
//   let bCard =[]
    
//   for (let i=0; i<5; i++){
//     let randos =[]
//     for (let j=0; j<5; j++){
//       let min = (i*15) + 1
//       let max = min + 14
      
//       while(randos.length < 5){
//         let rando = Math.floor(Math.random() * (max - min + 1) ) + min
//         if(randos.indexOf(rando) === -1) { randos.push(rando) }
//       } 
//       if (i===2 && j===4) { randos.pop() }
//     }
//     for (r of randos){ bCard.push(b[i]+r) }
//   }
//   return bCard
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Bingo ( Or Not ) (7 kyu)
// LINK:  https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

// v1
// function bingo(a) {
//   let b = a.includes(2)
//   let i = a.includes(9)
//   let n = a.includes(14)
//   let g = a.includes(7)
//   let o = a.includes(15)
  
//   return b && i && n && g && o ? 'WIN' : 'LOSE'
// }

// v2
// function bingo(a) {  
//   return a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15) ? 'WIN' : 'LOSE'
// }

// v3
// function bingo(a) {
//   return [2,9,14,7,15].every(n => a.includes(n)) ? "WIN" : "LOSE"
// }
// 2) END===============================================================


// 3) START===============================================================
// TITLE: Card Counting (beta)
// RANK:  pre-kata: 1640 / post-kata: 1644 / post-rank: 1646
// LINK:  https://www.codewars.com/kata/5843baa8673ea2668c0001e4/train/javascript

// v1
// function cc(card) {
//   let pts = {2:1,3:1,4:1,5:1,6:1,7:0,8:0,9:0,10:-1,'J':-1,'Q':-1,'K':-1,'A':-1}
//   let res = 0
  
//   for (c of card){
//     res += pts[c]
//   }
//   return `${res} ${res>0 ? 'Bet' : 'Hold'}`
// };

// v2
// function cc(card) {
//   let pts = {2:1,3:1,4:1,5:1,6:1,7:0,8:0,9:0,10:-1,'J':-1,'Q':-1,'K':-1,'A':-1}
//   return `${card.reduce((t,c)=> t+=pts[c],0)} ${card.reduce((t,c)=> t+=pts[c],0)>0 ? 'Bet' : 'Hold'}`
// };

// v3
// function cc(card) {
//   let pts = {2:1,3:1,4:1,5:1,6:1,7:0,8:0,9:0,10:-1,'J':-1,'Q':-1,'K':-1,'A':-1}
//   return `${ res = card.reduce((t,c)=> t+=pts[c],0)} ${res>0 ? 'Bet' : 'Hold'}`
// };
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