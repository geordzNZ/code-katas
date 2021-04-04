// CODE KATAS FOR 04 Apr 2021
// Rankings at start of the day:
//   Merit = 1150
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 04/Apr/2021

// 1) START===============================================================
// TITLE: Geometry Basics: Distance between points in 2D (8 kyu)
// LINK:  https://www.codewars.com/kata/58dced7b702b805b200000be

// function distanceBetweenPoints(a, b) {
//   let xDist = a.x - b.x
//   let yDist = a.y - b.y

//   return Math.sqrt( xDist*xDist + yDist*yDist )
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Geometry Basics: Triangle Perimeter in 2D (7 kyu)
// LINK:  https://www.codewars.com/kata/58e3e62f20617b6d7700120a

// function trianglePerimeter(triangle){
  
//   let hyp1 = Math.hypot(triangle.a.x-triangle.b.x,triangle.a.y-triangle.b.y)
//   let hyp2 = Math.hypot(triangle.b.x-triangle.c.x,triangle.b.y-triangle.c.y)
//   let hyp3 = Math.hypot(triangle.c.x-triangle.a.x,triangle.c.y-triangle.a.y)
  
//   return hyp1 + hyp2 + hyp3
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Geometry Basics: Triangle Area in 2D (6 kyu)
// LINK:  https://www.codewars.com/kata/58e4377c46e371aee7001262/train/javascript

// function triangleArea(triangle){
  
//   let hyp1 = Math.hypot(triangle.a.x-triangle.b.x,triangle.a.y-triangle.b.y)
//   let hyp2 = Math.hypot(triangle.b.x-triangle.c.x,triangle.b.y-triangle.c.y)
//   let hyp3 = Math.hypot(triangle.c.x-triangle.a.x,triangle.c.y-triangle.a.y)
  
//   return 0.25 * Math.sqrt((hyp1 + hyp2 + hyp3) * (-hyp1 + hyp2 + hyp3) * (hyp1 - hyp2 + hyp3) * (hyp1 + hyp2 - hyp3)) 
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Area of a Circle (7 kyu)
// LINK:  https://www.codewars.com/kata/537baa6f8f4b300b5900106c

// var circleArea = r => r>0 ? +(Math.PI*Math.pow(r,2)).toFixed(2) : false

// 4) END===============================================================


// 5) START===============================================================
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

// v2
// const DNAStrand = dna => dna.split('').map((char) => char === 'A' ? 'T' : char === 'T' ? 'A' : char === 'C' ? 'G' : 'C').join('')

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