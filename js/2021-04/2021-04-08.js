// CODE KATAS FOR 08 Apr 2021
// Rankings at start of the day:
//   Merit = 1190
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 08/Apr/2021

// 1) START===============================================================
// TITLE: Baby shark lyrics generator (7 kyu)
// LINK:  https://www.codewars.com/kata/5d076515e102162ac0dc514e

// v1 - 283 chars
// function babySharkLyrics(){
//   let s = ['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"]
//   let d = `, doo doo doo doo doo doo\n`
//   let m = ''
  
//   for (let i=0; i<6; i++){
//     m += (s[i] + d).repeat(3)
//     m += `${s[i]}!\n`
//   }
//   return m+'Run away,…'
// }

// v2 - 228 chars
// let babySharkLyrics =()=>{
//   let s=['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"]
//   let d=`,${' doo'.repeat(6)}\n`
//   let m=''
//   for (t of s){m += (t + d).repeat(3)+`${t}!\n`}
//   return m+'Run away,…'}


// v3 - 213 chars
// let babySharkLyrics =()=>{
//   s=['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"]
//   m=''
//   for (t of s){m += (t + `,${' doo'.repeat(6)}\n`).repeat(3)+`${t}!\n`}
//   return m+'Run away,…'}

// v4 - 200 chars
// babySharkLyrics=_=>{
//   s=["Baby shark","Mommy shark","Daddy shark","Grandma shark","Grandpa shark","Let's go hunt"]
//   return s.map(t=>`${t},${" doo".repeat(6)}\n`.repeat(3)+`${t}!\n`).join("")+"Run away,…"}


// v5 - 180 chars
// babySharkLyrics=_=>[...["Baby","Mommy","Daddy","Grandma","Grandpa"].map(s=>s+' shark'),"Let's go hunt"].map(t=>`${t},${" doo".repeat(6)}\n`.repeat(3)+t+"!\n").join("")+"Run away,…"

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Codewars Leaderboard Climber (7 kyu)
// LINK:  https://www.codewars.com/kata/57d28215264276ea010002cf

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