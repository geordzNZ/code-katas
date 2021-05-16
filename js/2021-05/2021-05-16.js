// CODE KATAS FOR 16 May 2021
// Rankings at start of the day:
//   Merit = 1592
//   Kyu = 4
//   Clan = 8

// 1) START===============================================================
// TITLE: Format words into a sentence(6 kyu)
// LINK:  https://www.codewars.com/kata/51689e27fe9a00b126000004

//v1
// function formatWords(words){
//   if (words===null|| !words.length) { return '' }

//   let res = ''
//   let cleanedWords = words.filter(w=> w.length>=1)

//   if (cleanedWords.length===0) { return res = `` }
//   if (cleanedWords.length===1) { return res = `${cleanedWords[0]}` }
//   if (cleanedWords.length===2) { return res = `${cleanedWords[0]} and ${cleanedWords[1]}` }
  
//   for (let i=0;i<cleanedWords.length-1;i++){
//     res += cleanedWords[i] + ', '
//   }
//   return res.substr(0,res.length-2) + ` and ${cleanedWords[cleanedWords.length-1]}`
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Turn any word into a beef taco  (7 kyu)
// LINK:  https://www.codewars.com/kata/59414b46d040b7b8f7000021

// v1
// function tacofy(word) {
//   let res = []
  
//   for (c of [...word]){
//     //if (/aeiou/i.test(c)) { res.push('beef') }
    
//     switch (c.toLowerCase()) {
//       case 'a': res.push('beef'); break;
//       case 'e': res.push('beef'); break;
//       case 'i': res.push('beef'); break;
//       case 'o': res.push('beef'); break;
//       case 'u': res.push('beef'); break;
//       case 't': res.push('tomato'); break;
//       case 'l': res.push('lettuce'); break;
//       case 'c': res.push('cheese'); break;
//       case 'g': res.push('guacamole'); break;
//       case 's': res.push('salsa'); break;
//     }
//   }
//   res.unshift('shell')
//   res.push('shell')
  
//   return res
// }

// v2
// function tacofy(word) {
//   let resArr = [...word].filter(c=>/[aeioutlcgs]/i.test(c)).map((c)=> {
//     let res = ''
//     if (/[aeiou]/i.test(c)) { res = 'beef' }
    
//     switch (c.toLowerCase()) {
//       case 't': res ='tomato'; break;
//       case 'l': res = 'lettuce'; break;
//       case 'c': res ='cheese'; break;
//       case 'g': res ='guacamole'; break;
//       case 's': res ='salsa'; break;
//     }
//     return res
//   })
  
//   resArr.unshift('shell')
//   resArr.push('shell')
  
//   return resArr
// }

// v3
// function tacofy(word) {
//   let ings = {a:'beef',c:'cheese',e:'beef',g:'guacamole',i:'beef',l:'lettuce',o:'beef',s:'salsa',t:'tomato',u:'beef'}
//   return ['shell',...[...word].map(c=> ings[c.toLowerCase()]).filter(l=>l),'shell'];
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