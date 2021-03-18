// CODE KATAS FOR 18 Mar 2021
// Rankings at start of the day:
//   Merit = 881
//   Kyu = 4
//   Clan = 14
// Comments:
//   Updates to js file = comment = #X kata for 18/Mar/2021

// 1) START===============================================================
// TITLE: Coding Meetup #2 - Higher-Order Functions Series - Greet developers (7 kyu)
// LINK:  https://www.codewars.com/kata/58279e13c983ca4a2a00002a

// function greetDevelopers(list) {
//   let greetings = list.map((p) => { return `Hi ${p.firstName}, what do you like the most about ${p.language}?`})
  
//   for (let i=0;i<=list.length-1;i++){
//     list[i].greeting = greetings[i]
//   }
//   return list
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? (7 kyu)
// LINK:  https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming

// function isRubyComing(list) {
//   return list.filter((dev) => dev.language==='Ruby').length>0
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer (7 kyu)
// LINK:  https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer

// function getFirstPython(list) {
//   for (dev of list){
//     if (dev.language==='Python') {return `${dev.firstName}, ${dev.country}`}
//   }
//   return `There will be no Python developers`
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages (7 kyu)
// LINK:  https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages

// v1 - My way, that long ugly way
// function countLanguages(list) {
//   let langC = 0
//   let langJS = 0
//   let langRuby = 0
//   let langClojure = 0
//   let langPython = 0
//   let langJava = 0
//   let langPHP = 0
//   let langs = {}
  
//   for (dev of list){
//     switch (dev.language){
//       case 'C':{
//         langC ++
//         break;
//       }
//       case 'JavaScript':{
//         langJS ++
//         break;
//       }
//       case 'Ruby':{
//         langRuby ++
//         break;
//       }
//       case 'Clojure':{
//         langClojure ++
//         break;
//       }
//       case 'Python':{
//         langPython ++
//         break;
//       }
//       case 'Java':{
//         langJava ++
//         break;
//       }
//       case 'PHP':
//         langPHP ++ 
//         break;
//     }
    
//   }
//   //console.log(`${langC} / ${langJS} / ${langRuby} / ${langClojure} / ${langPython}`)
//   if (langC>0) { langs.C = langC };
//   if (langClojure>0) { langs.Clojure = langClojure }; 
//   if (langJava>0) { langs.Java = langJava };
//   if (langJS>0) { langs.JavaScript = langJS };
//   if (langPHP>0) { langs.PHP = langPHP };
//   if (langPython>0) { langs.Python = langPython };  
//   if (langRuby>0) { langs.Ruby = langRuby };
  
//   return langs
// }

// v2 - shorter prettier, and what I wanted to do at the start, but didnt know how
// function countLanguages(list) {
//   let langs = {}
  
//   for (dev of list){
//     langs[dev.language] ? langs[dev.language]++ : langs[dev.language] = 1
//   }
//   return langs
// }

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