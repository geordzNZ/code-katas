// CODE KATAS FOR 26 Mar 2021
// Rankings at start of the day:
//   Merit = 1058
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 26/Mar/2021

// 1) START===============================================================
// TITLE: Write out expression! (7 kyu)
// LINK:  https://www.codewars.com/kata/57e2afb6e108c01da000026e

// function expressionOut(expr) {
//   let numWords = {1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine',10:'Ten'}
//   let splitExp = expr.split(' ')
  
//   if (!OPERATORS[splitExp[1]]) { return `That's not an operator!` }
    
//   return `${numWords[splitExp[0]]} ${OPERATORS[splitExp[1]]}${numWords[splitExp[2]]}`
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: DNA to RNA Conversion (8 kyu)
// LINK:  https://www.codewars.com/kata/5556282156230d0e5e000089

// const DNAtoRNA = dna => dna.replace(/T/ig,'U')

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Ones and Zeros (7 kyu)
// LINK:  https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// const binaryArrayToNumber = arr => parseInt(arr.join(''),2)

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Geometry Basics: Distance between points in 2D (8 kyu)
// LINK:  https://www.codewars.com/kata/58dced7b702b805b200000be

// function distanceBetweenPoints(a, b) {
//   return Math.sqrt( (a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y) ); 
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Coding Meetup #11 - Higher-Order Functions Series - Find the average age (7 kyu)
// LINK:  https://www.codewars.com/kata/582ba36cc1901399a70005fc

// function getAverageAge(list) {
//   let totalAge = 0
//   for (dev of list){
//     totalAge += dev.age
//   }
//   return Math.round(totalAge / list.length)
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Slaphead (7 kyu)
// LINK:  https://www.codewars.com/kata/57efab9acba9daa4d1000b30

// function bald(x){
//   let hairs = x.length - x.replace(/\//g,'').length
//   let msg = hairs === 0 ? 'Clean!' : 
//             hairs === 1 ? 'Unicorn!' :
//             hairs === 2 ? 'Homer!' :
//             hairs <= 5 ? 'Careless!' : 'Hobo!'
 
//   return [x.replace(/\//g,'-'),msg]
// }

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