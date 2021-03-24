// CODE KATAS FOR 24 Mar 2021
// Rankings at start of the day:
//   Merit = 1026
//   Kyu = 4
//   Clan = 12
// Comments:
//   Updates to js file = comment = #X kata for 24/Mar/2021

// 1) START===============================================================
// TITLE: Sort and Star (8 kyu)
// LINK:  https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// function twoSort(s) {
//     let ans = []
//     s.sort()[0].split('').forEach((char,i) => { i<s[0].length-1 ? ans = ans + char + '***' : ans = ans + char },'')
//      return ans
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Alan Partridge II - Apple Turnover (8 kyu)
// LINK:  https://www.codewars.com/kata/580a094553bd9ec5d800007d

// const apple = x => Math.pow(x,2)>1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Alan Partridge I - Partridge Watch (8 kyu)
// LINK:  https://www.codewars.com/kata/5808c8eff0ed4210de000008

// v1 - Code works for basic tests, but fails for full ... tests look wrong to me???
// function part(x){

//   let sW = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
//   let fW = []

//   console.log('x:  '+x)
//   console.log('')

//   for (let i=0; i<sW.length; i++){
//     for (let j=0; j<x.length; j++){
//       console.log(`i: ${i} - ${sW[i]}   x: ${j} - ${x[j]}`)
//       if (sW[i] === x[j]){
        
//         fW.push(sW[i])
//         console.log(`  f: ${fW}`)
//         x.splice(j,1)
//         console.log(`  x: ${x}`)
//         j--
        
//       }
//     }
//   }
  
//    console.log('f:  '+fW)
//    return fW.length>0 ? `Mine's a Pint${'!'.repeat(fW.length)}` : 'Lynn, I\'ve pierced my foot on a spike!!' 
// }

// v2
// function part(x){

//   let sW = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
//   let fW = 0

//   for (let i=0; i<sW.length; i++){
//     for (let j=0; j<x.length; j++){
//       if (sW[i] === x[j]) { fW++ }
//     }
//   }
//    return fW>0 ? `Mine's a Pint${'!'.repeat(fW)}` : 'Lynn, I\'ve pierced my foot on a spike!!' 
// }
// 3) END===============================================================


// 4) START===============================================================
// TITLE: Alan Partridge III - London (7 kyu)
// LINK:  https://www.codewars.com/kata/580a41b6d6df740d6100030c

// function alan(x){
//   let sS = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
//   let fS = 0

//   for (let i=0; i<sS.length; i++){
//     for (let j=0; j<x.length; j++){
//       if (sS[i] === x[j]) { 
//         fS++ 
//         j=x.length
//       }
//     }
//   }
//    return fS===4 ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.' 
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: To square(root) or not to square(root) (8 kyu)
// LINK:  https://www.codewars.com/kata/57f6ad55cca6e045d2000627

// const squareOrSquareRoot = array => array.map((n) => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n )

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Formatting decimal places #0 (8 kyu)
// LINK:  https://www.codewars.com/kata/5641a03210e973055a00000d

// const twoDecimalPlaces = n => Number(n.toFixed(2))

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Formatting decimal places #1 (7 kyu)
// LINK:  https://www.codewars.com/kata/5641c3f809bf31f008000042

// function twoDecimalPlaces(number) {
//   return Number(number.toString().substr(0,number.toString().indexOf('.')+3))
// }

// 7) END===============================================================


// 8) START===============================================================
// TITLE: Blood-Alcohol Content ( 8 kyu)
// LINK:  https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8

// function bloodAlcoholContent(drinks, weight, sex, time){
//   return Number(((drinks.ounces * drinks.abv * 5.14 / weight * (sex==='male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4))
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Regex count lowercase letters (8 kyu)
// LINK:  https://www.codewars.com/kata/56a946cd7bd95ccab2000055

// const lowercaseCount = str => str.replace(/[^a-z]/g,'').length

// 9) END===============================================================

// 10) START===============================================================
// TITLE: Vowel remover (8 kyu)
// LINK:  https://www.codewars.com/kata/5547929140907378f9000039

// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }

// 10) END===============================================================

// 11) START===============================================================
// TITLE: Vowel Changer (7 kyu)
// LINK:  https://www.codewars.com/kata/597754ba62f8a19c98000030

// function vowelChange(str, vow) {
//   return str.replace(/[aeiou]/g,vow)
// }

// 11) END===============================================================