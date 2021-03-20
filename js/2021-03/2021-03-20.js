// CODE KATAS FOR 20 Mar 2021
// Rankings at start of the day:
//   Merit = 929
//   Kyu = 4
//   Clan = 13
// Comments:
//   Updates to js file = comment = #X kata for 20/Mar/2021

// 1) START===============================================================
// TITLE: Meeting (6 kyu)
// LINK:  https://www.codewars.com/kata/59df2f8f08c6cec835000012

// function meeting(s) {
//   let splitS = s.split(';')
//   let res = splitS.map((name) => {
//     return (`(${name.substring(name.indexOf(':')+1)}, ${name.substring(0,name.indexOf(':'))})`).toUpperCase()
//   })
  
//   return res.sort().join('')
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Get the Middle Character (7 kyu)
// LINK:  https://www.codewars.com/kata/56747fd5cb988479af000028

// const getMiddle = s => (s.length % 2 === 0) ? s.substring((s.length/2)-1,(s.length/2)+1) : s.charAt(s.length/2)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Counting sheep... (8 kyu)
// LINK:  https://www.codewars.com/kata/54edbc7200b811e956000556

// const countSheeps = arrayOfSheep => arrayOfSheep.filter((x) => x).length

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Count all the sheep on farm in the heights of New Zealand (7 kyu)
// LINK:  https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010

// function lostSheep(friday,saturday,total){
//   return total-(friday.reduce((v,i) => v+=i,0)+saturday.reduce((v,i) => v+=i,0))  
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: The Wide-Mouthed frog! (8 kyu)
// LINK:  https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

// const mouthSize = animal => /alligator/i.test(animal) ? 'small' : 'wide'

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Build a train! (Beta 945 ==> 951)
// LINK:  https://www.codewars.com/kata/60398a8c64b9d5000d84f6a9/javascript

// function train(s) {
//   let loco = s[0] ==='A' ? 15 : s[0] ==='B' ? 10 : s[0] ==='C' ? 7 : 8
  
//   return loco + (s.length-1)*5
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: I love you, a little , a lot, passionately ... not at all (8 kyu)
// LINK:  https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// v1
// function howMuchILoveYou(nbPetals) {
//   let ans = {
//     1: 'I love you',
//     2: 'a little',
//     3: 'a lot',
//     4: 'passionately',
//     5: 'madly',
//     0: 'not at all'
//   }
//   return ans[nbPetals % 6]
// }

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