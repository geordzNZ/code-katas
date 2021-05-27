// CODE KATAS FOR 27 May 2021
// Rankings at start of the day:
//   Merit = 1677
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Battle of the characters (Easy) (7 kyu)
// LINK:  https://www.codewars.com/kata/595519279be6c575b5000016

// v1
// function battle(x, y) {
//   let ltrs = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26}
//   let scoreX = x.split('').reduce((t,c) => t+=ltrs[c],0)
//   let scoreY = y.split('').reduce((t,c) => t+=ltrs[c],0)
//   return scoreX > scoreY ? x : scoreY > scoreX ? y : 'Tie!'
// }

// v2
// function battle(x, y) {
//   let ltrs = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26}
//   let score = x.split('').reduce((t,c) => t+=ltrs[c],0) - y.split('').reduce((t,c) => t+=ltrs[c],0)
//   return score > 0 ? x : score < 0 ? y : 'Tie!'
// }

// v3
// function battle(x, y) {
//   let score = x.split('').reduce((t,c) => t+=c.charCodeAt(0)-64,0) - y.split('').reduce((t,c) => t+=c.charCodeAt(0)-64,0)
//   return score > 0 ? x : score < 0 ? y : 'Tie!'
// }

// v4
// function battle(x, y) {
//   let score = [...x].reduce((t,c) => t+=c.charCodeAt(0)-64,0) - [...y].reduce((t,c) => t+=c.charCodeAt(0)-64,0)
//   return score > 0 ? x : score < 0 ? y : 'Tie!'
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Battle of the characters (Medium) (7 kyu)
// LINK:  https://www.codewars.com/kata/595e9f258b763bc2d2000032

// v1
// function battle(x, y) {
  
//   let ucX = [...x].filter(c=> c.charCodeAt(0)<91)
//   let lcX = [...x].filter(c=> c.charCodeAt(0)>91)
  
//   let ucY = [...y].filter(c=> c.charCodeAt(0)<91)
//   let lcY = [...y].filter(c=> c.charCodeAt(0)>91)
  
//   let scoreX = ucX.reduce((t,c) => t+=c.charCodeAt(0)-64,0) + (lcX.reduce((t,c) => t+=c.charCodeAt(0)-96,0))/2 
//   let scoreY = ucY.reduce((t,c) => t+=c.charCodeAt(0)-64,0) + (lcY.reduce((t,c) => t+=c.charCodeAt(0)-96,0))/2 
                     
//   return scoreX > scoreY ? x : scoreY > scoreX ? y : 'Tie!'
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