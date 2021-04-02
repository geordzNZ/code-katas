// CODE KATAS FOR 02 Apr 2021
// Rankings at start of the day:
//   Merit = 1133
//   Kyu = 4
//   Clan = 10
// Comments:
//   Updates to js file = comment = #X kata for 02/Apr/2021

// 1) START===============================================================
// TITLE: Who is going to pay for the wall? (8 kyu)
// LINK:  https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

// v1
// function whoIsPaying(name){
//   return name.length>2 ? [name, name.substr(0,2)] : [name]
// }

// v2
// const whoIsPaying = name => name.length>2 ? [name, name.substr(0,2)] : [name]

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Who is the killer? (7 kyu)
// LINK:  https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

// someone elses answer
// function killer(suspectInfo, dead) {
//   for (let name in suspectInfo) {
//     if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
//       return name;
//     }
//   }
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Temperature converter (6 kyu)
// LINK:  https://www.codewars.com/kata/54ce9497975ca65e1a0008c6

// function convertTemp(temp, from_scale, to_scale){
//   console.log( temp, from_scale, to_scale)
//   if (from_scale === to_scale) { return temp}
  
//   if (from_scale === 'De'){
//       if (to_scale === 'K') { return  Math.round(373.15 - temp * 2/3) }
//       if (to_scale === 'F') { return  Math.round(212 - temp * 6/5) }
//       if (to_scale === 'C') { return  Math.round(100 - temp * 2/3) }
//       if (to_scale === 'R') { return  Math.round(671.67 - temp * 6/5) }
//       if (to_scale === 'Ro') { return  Math.round(60 - temp * 7/20) }
//       if (to_scale === 'N') { return  Math.round(33 - temp * 11/50) }
//       if (to_scale === 'Re') { return  Math.round(80 - temp * 8/15) }
  
//   } else if (from_scale === 'Re'){
//       if (to_scale === 'C') { return  Math.round(temp * 5/4) }
//       if (to_scale === 'R') { return  Math.round(temp * 9/4 + 491.67) }
//       if (to_scale === 'F') { return  Math.round(temp * 9/4 + 32) }
//       if (to_scale === 'De') { return  Math.round((80 - temp) * 15/8) }
//       if (to_scale === 'N') { return  Math.round(temp * 33/80) }
//       if (to_scale === 'Ro') { return  Math.round(temp * 21/32 + 7.5) }
  
//   } else if (from_scale === 'K'){
//       if (to_scale === 'De') { return  Math.round((373.15 - temp) * 3/2) }
//       if (to_scale === 'R') { return  Math.round(temp * 9/5) }
//       if (to_scale === 'N') { return  Math.round((temp - 273.15) * 33/100) }
//       if (to_scale === 'F') { return  Math.round(temp * 9/5 - 459.67) }
//       if (to_scale === 'C') { return  Math.round(temp - 273.15) }
//       if (to_scale === 'Ro') { return  Math.round(temp - 273.15) }
//       if (to_scale === 'Re') { return  Math.round((temp - 273.15) * 4/5) }
  
//   } else if (from_scale === 'C'){
//       if (to_scale === 'Re') { return  Math.round(temp * 4/5) }
//       if (to_scale === 'Ro') { return  Math.round(temp * 21/40 + 7.5) }
//       if (to_scale === 'F') { return  Math.round(temp * 9/5 + 32) }
//       if (to_scale === 'R') { return  Math.round((temp + 273.15) * 9/5) }
//       if (to_scale === 'De') { return  Math.round((100 - temp) * 3/2) }
//       if (to_scale === 'K') { return  Math.round(temp + 273.15) }
//       if (to_scale === 'N') { return  Math.round(temp * 33/100) }
  
//   } else if (from_scale === 'F'){
//       if (to_scale === 'De') { return  Math.round((212 - temp) * 5/6) }
//       if (to_scale === 'C') { return  Math.round((temp - 32) * 5/9) }
//       if (to_scale === 'Ro') { return  Math.round((temp - 32) * 7/24 + 7.5) }
//       if (to_scale === 'Re') { return  Math.round((temp - 32) * 4/9) }
//       if (to_scale === 'R') { return  Math.round(temp + 459.67) }
//       if (to_scale === 'K') { return  Math.round((temp + 459.67) * 5/9) }
//       if (to_scale === 'N') { return  Math.round((temp - 32) * 11/60) }
  
//   } else if (from_scale === 'R'){
//       if (to_scale === 'K') { return  Math.round(temp * 5/9) }
//       if (to_scale === 'C') { return  Math.round((temp - 491.67) * 5/9) }
//       if (to_scale === 'De') { return  Math.round((671.67 - temp) * 5/6) }
//       if (to_scale === 'Re') { return  Math.round((temp -  491.67) * 4/9) }
//       if (to_scale === 'N') { return  Math.round((temp - 491.67) * 11/60) }
//       if (to_scale === 'Ro') { return  Math.round((temp - 491.67) * 7/24 + 7.5) }
//       if (to_scale === 'F') { return  Math.round(temp - 459.67) }
  
//   } else if (from_scale === 'Ro'){
//       if (to_scale === 'C') { return  Math.round((temp - 7.5) * 40/21) }
//       if (to_scale === 'Re') { return  Math.round((temp - 7.5) * 32/21) }
//       if (to_scale === 'K') { return  Math.round((temp - 7.5) * 40/21 + 273.15) }
//       if (to_scale === 'F') { return  Math.round((temp - 7.5) * 24/7 + 32) }
//       if (to_scale === 'R') { return  Math.round((temp - 7.5) * 24/7 + 491.67) }
//       if (to_scale === 'De') { return  Math.round((60 - temp) * 20/7) }
//       if (to_scale === 'N') { return  Math.round((temp - 7.5) * 22/35) }
    
  
//   } else if (from_scale === 'N'){
//       if (to_scale === 'K') { return  Math.round(temp * 100/33 + 273.15) }
//       if (to_scale === 'Ro') { return  Math.round(temp * 35/22 + 7.5) }
//       if (to_scale === 'C') { return  Math.round(temp * 100/33) }
//       if (to_scale === 'R') { return  Math.round(temp * 60/11 + 491.67) }
//       if (to_scale === 'Re') { return  Math.round(temp * 80/33) }
//       if (to_scale === 'De') { return  Math.round((33 - temp) * 50/11) }
//       if (to_scale === 'F') { return  Math.round(temp * 60/11 + 32) }
    
//   }
// }


// 3) END===============================================================


// 4) START===============================================================
// TITLE: Invert values (8 kyu)
// LINK:  https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

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