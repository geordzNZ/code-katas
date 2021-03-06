// CODE KATAS FOR 10 May 2021
// Rankings at start of the day:
//   Merit = 1534
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Gradually discounted milk price (beta)
// RANK:  pre-kata: 1534 / post-kata: 1538 / post-ranking: 1540
// LINK:  https://www.codewars.com/kata/57b6f1bab69bfc9fb80002ca

// v1
// function milkPrice(lt, ppl) {
//   let total = 0
  
//   for (let i=1; i<=(Math.floor(lt/2)); i++){
//     ppl -= 0.05
//     total += (ppl) * 2
//   }
//   if (lt ===0.5) {return 0.62}
//   return +Number(total + (lt%2 * ppl)).toFixed(2)
// }

// v2
// function milkPrice(lt, ppl) {
//   let total = 0;
//   while(lt >= 2){
//     lt -= 2;
//     ppl -= 0.05;
//     total += 2 * ppl;
//   }
//   total += lt * ppl;
  
//   return Math.round(total * 100) / 100;
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Palindrome Strings (8 kyu)
// LINK:  https://www.codewars.com/kata/57a5015d72292ddeb8000b31

// v1
// function isPalindrome(line) {
//   let revd = [...String(line)].reverse().join('')
  
//   return typeof line === 'number' ? line === Number(revd) : line === revd
// }

// v2
// const isPalindrome =line=> line == [...String(line)].reverse().join('')

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Palindrome Pairs (7 kyu)
// LINK:  https://www.codewars.com/kata/5772ded6914da62b4b0000f8

// const palindromePairs = words => {
//   let res = []
//   for (let i=0; i<words.length; i++){
//     for (let j=0; j<words.length; j++){      
//       if (String(words[i])+String(words[j])===[...String(words[i])+String(words[j])].reverse().join('') && i!=j) { 
//         res.push([i,j]) 
//       }
//     }
//   }
//   return res
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