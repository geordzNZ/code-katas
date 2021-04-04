// CODE KATAS FOR 03 Apr 2021
// Rankings at start of the day:
//   Merit = 1143
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 03/Apr/2021

// 1) START===============================================================
// TITLE: Who ate the cookie? (8 kyu)
// LINK:  https://www.codewars.com/kata/55a996e0e8520afab9000055

// v1
// function cookie(x){
//   return (typeof x === 'string') ? "Who ate the last cookie? It was Zach!" :
//          (typeof x === 'number') ? "Who ate the last cookie? It was Monica!" : 
//                                    "Who ate the last cookie? It was the dog!"
// }

// v2
// function cookie(x){
//   let msg = 'Who ate the last cookie? It was '
//   let name = typeof x==='string' ? 'Zach!' : typeof x==='number' ? 'Monica!' : 'the dog!'
  
//   return msg + name
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Geometry Basics: Circle Area in 2D (8 kyu)
// LINK:  https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0

// v1
// function circleArea(circle){
//   return Math.PI * Math.pow(circle.radius,2)
// }

// v2
//const circleArea = circle => Math.PI * Math.pow(circle.radius,2)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Geometry Basics: Circle Circumference in 2D (8 kyu)
// LINK:  https://www.codewars.com/kata/58e43389acfd3e81d5000a88

// v1
// function circleCircumference(circle) {
//   return 2 * Math.PI * circle.radius
// }

// v2
// const circleCircumference = circle => 2 * Math.PI * circle.radius

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Geometry Basics: Triangle Area in 2D (6 kyu)
// LINK:  https://www.codewars.com/kata/58e4377c46e371aee7001262/train/javascript

// function triangleArea(triangle){
  
//   let hyp1 = Math.hypot(triangle.a.x-triangle.b.x,triangle.a.y-triangle.b.y)
//   let hyp2 = Math.hypot(triangle.b.x-triangle.c.x,triangle.b.y-triangle.c.y)
//   let hyp3 = Math.hypot(triangle.c.x-triangle.a.x,triangle.c.y-triangle.a.y)
  
//   return 0.25 * Math.sqrt((hyp1 + hyp2 + hyp3) * (-hyp1 + hyp2 + hyp3) * (hyp1 - hyp2 + hyp3) * (hyp1 + hyp2 - hyp3)) 
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Area of a Circle (7 kyu)
// LINK:  https://www.codewars.com/kata/537baa6f8f4b300b5900106c

// var circleArea = r => r>0 ? +(Math.PI*Math.pow(r,2)).toFixed(2) : false

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Complementary DNA (7 kyu)
// LINK:  https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// v1
// function DNAStrand(dna){
//   let splitDNAarr = dna.split('')
//   let newDNAarr = splitDNAarr.map((char) => {
//     return char === 'A' ? 'T' : 
//            char === 'T' ? 'A' :
//            char === 'C' ? 'G' : 'C'
//   })
  
//   return newDNAarr.join('')
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