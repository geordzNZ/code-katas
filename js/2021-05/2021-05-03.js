// CODE KATAS FOR 03 May 2021
// Rankings at start of the day:
//   Merit = 1474
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 03/May/2021"

// 1) START===============================================================
// TITLE: Count the likes (beta)
// RANK:  before 1474 / post kata: 1478 / post ranking: 1480
// LINK:  https://www.codewars.com/kata/5532686f0408dfe458000117

// var evalLikes =words=> words.filter(w=>w.match(/^like$/i)).length/words.length>0.05

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Counting like a kid. (beta)
// RANK:  before 1480 / post kata: 1484 / post ranking: 1486
// LINK:  https://www.codewars.com/kata/58e8c25806db4de3da00011c

// v1
// function  kidoCount(n){
//   let res = []
//   for (let i=1;i<=n;i+=2){
//     res.push(i)
//   }
//   return res
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Monkey Tennis - The Aftermath (7 kyu)
// LINK:  https://www.codewars.com/kata/5a0c5b3206d5b696940000b8

// function ballCollector(d) {
//   return {weight: d.filter(r=>r===58).length*58}
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Scoring Tests (7 kyu)
// LINK:  https://www.codewars.com/kata/55d2aee99f30dbbf8b000001

// v1
// function scoreTest(str, right, omit, wrong){  
//   let cAns = str.filter(m=>m===0)
//   let oAns = str.filter(m=>m===1)
//   let wAns = str.filter(m=>m===2)

//   return (cAns.length * right) + (oAns.length * omit) - (wAns.length * wrong)
// }

// v2
// const scoreTest =(mks,c,o,w)=> mks.reduce((t,m)=> t+= m===0?c:m===1?o:-w,0)

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