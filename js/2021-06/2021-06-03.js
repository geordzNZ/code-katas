// CODE KATAS FOR 03 June 2021
// Rankings at start of the day:
//   Merit = 1733
//   Kyu = 4
//   Clan = 7

// 1) START===============================================================
// TITLE: A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future" (8 kyu)
// LINK:  https://www.codewars.com/kata/562e98755e9214cd2500003d

// Start code to fix
// function {
// 	var : Math.random()
// 		if (career <= 0.32) {
// 			return = FrontEnd Developer
// 		 else if (career <= 0.65) 
// 			return : BackEnd Developer,
// 		} else {
// 			return 'Full-Stack Developer'
// 		}
// yourFutureCareer();

// fix v1
// function yourFutureCareer(){
// 	let career = Math.random()
// 	if (career <= 0.32) { 
//     return 'FrontEnd Developer' 
//   } else if (career <= 0.65) { 
//     return 'BackEnd Developer' 
//   }	else { 
//     return 'Full-Stack Developer' 
//   }
// }

// fix v2
// my fix v2
// function yourFutureCareer(){
// 	let career = Math.random()
// 	if (career <= 0.32) { return 'FrontEnd Developer' }
//   else if (career <= 0.65) { return 'BackEnd Developer' }
// 	else { return 'Full-Stack Developer' }
// }

// fix v3
// function yourFutureCareer(){
// 	let career = Math.random()
// 	return career<=0.32 ? 'FrontEnd Developer' : career<=0.65 ? 'BackEnd Developer' : 'Full-Stack Developer'
// }
// fix v4
// function yourFutureCareer(){
// 	let career = Math.random()
// 	return (career<=0.32 ? 'FrontEnd' : career<=0.65 ? 'BackEnd' : 'Full-Stack') + ' Developer'
// }
// 1) END===============================================================


// 2) START===============================================================
// TITLE: A (no more) bugs trilogy: Episode 2 - An Array of Tasks (beta)
// RANK: pre-kata: 1735 / post-kata: 1739 / post rank: 1741
// LINK:  https://www.codewars.com/kata/5630c81e8e90d20992000051

// v1
// function myTasks(array) {
//   let res = []
//   for (a of array){
//     if (a==='buy food') { res.push('learn Node.js') }
//     else if (a==='sleep') { res.push('make a weather app') }
//     else { res.push(a)} 
//   }
//   return res
// }

// v2
// function myTasks(array) {
//   let res = []
//   for (a of array) {
//     res.push(a==='buy food' ? 'learn Node.js' : a==='sleep' ? 'make a weather app' : a)
//   }
//   return res
// }

// v3
// const myTasks =arr=> arr.map(a=> a==='buy food' ? 'learn Node.js' : a==='sleep' ? 'make a weather app' : a)
// 2) END===============================================================


// 3) START===============================================================
// TITLE: A Letter from Your Niece (7 kyu)
// LINK:  https://www.codewars.com/kata/589f8bb8423ac3576a00000b

// v1
// function nonsense(str) {
//   let fixedStr = str.toLowerCase()
//                  .replace(/0/g,'a')
//                  .replace(/1/g,'e')
//                  .replace(/2/g,'i')
//                  .replace(/3/g,'o')
//                  .replace(/4/g,'u')
//                  .replace(/trex/g,'')
//                  .replace(/raptor/g,'')
//                  .replace(/( i )/g,' I ')
//                  .replace(/(^\w)/, function(l) { return l.toUpperCase(); })
  
//   return fixedStr[fixedStr.length-1]==='.' ? fixedStr : fixedStr+'.'
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