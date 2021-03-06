// CODE KATAS FOR 25 Apr 2021
// Rankings at start of the day:
//   Merit = 1372
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 25/Apr/2021"

// 1) START===============================================================
// TITLE: Chain me (7 kyu)
// LINK:  https://www.codewars.com/kata/54fb853b2c8785dd5e000957

// v1
// function chain(v, fns) {
//   return fns.reduce(function(v, fn) { return fn(v) }, v);
// }

// v2
// function chain(x, fns) {
//   return fns.reduce(function(x, fn) {
//     return fn(x)
//   }, x)
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: How many lightsabers do you own? (8 kyu)
// LINK:  https://www.codewars.com/kata/51f9d93b4095e0a7200001b8

// const howManyLightsabersDoYouOwn =n=> n==='Zach' ? 18 : 0

// 2) END===============================================================


// 3) START===============================================================
// TITLE: How low do you go? (beta)
// RANK:  before: 1374 / after completion: 1378 / after ranking: 1380
// LINK:  https://www.codewars.com/kata/583872e3c233416868000162

// v1
// const lowest =(a,b,c)=> [Math.min(...a),Math.min(...b),Math.min(...c)]

// v2
// const lowest = (...days) => days.map(day => Math.min(...day));

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Calculate average (8 kyu)
// LINK:  https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// const find_average =arr=> arr.reduce((t,v)=> t+=v,0)/arr.length || 0

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Average Scores (7 kyu)
// LINK:  https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

// const average =scores=> Math.round(scores.reduce((t,v)=> t+=v,0)/scores.length)

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Sort Numbers (7 kyu)
// LINK:  https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

// const solution =nums=> !nums ? [] : nums.sort((a,b)=>a-b)

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