// CODE KATAS FOR 23 Mar 2021
// Rankings at start of the day:
//   Merit = 997
//   Kyu = 4
//   Clan = 12
// Comments:
//   Updates to js file = comment = #X kata for 23/Mar/2021

// 1) START===============================================================
// TITLE: Basic Mathematical Operations (8 kyu)
// LINK:  https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// function basicOp(op, v1, v2){
//   switch (op){
//     case '+': return v1+v2;
//     case '-': return v1-v2;
//     case '*': return v1*v2;
//     case '/': return v1/v2      
//   }
// }

// v2
// clerver ans from someone else
// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }

// v3
// reformatted for me.
// const basicOp = (op, v1, v2) => eval(v1+op+v2)

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Count Odd Numbers below n (8 kyu)
// LINK:  https://www.codewars.com/kata/59342039eb450e39970000a6

// v1 - timed out on full test run
// function oddCount(n){
//   let odd = 0
//   for (let i=1;i<n;i+=2) { odd++ } 
//   return odd
// }

// v2
// const oddCount = n => (n%2===1) ? (n-1)/2 : n/2

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Volume of a Cuboid (8 kyu)
// LINK:  https://www.codewars.com/kata/58261acb22be6e2ed800003a

// class Kata {
//   static getVolumeOfCuboid(l, w, h) {
//    return l*w*h
//   }
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Simple validation of a username with regex (8 kyu)
// LINK:  https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

// function validateUsr(username) {
//   return  /^[a-z0-9_]{4,16}$/.test(username)
// }

// Explanation
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Super Secret Password Generator (7 kyu)
// LINK:  https://www.codewars.com/kata/54402d52cf3625b882000141/train/javascript

// starts with
//These are your super secret characters you will use to make the password super secure
// var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
// function createSSP(password){
//   //TO DO: Make that password super secret
// }

// with  my addded code
//These are your super secret characters you will use to make the password super secure
// var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
// function createSSP(password){  
//   for (sSC of superSecretChars){
//     let replaceTxt = sSC[0]
//     let re = new RegExp(replaceTxt,"ig");
    
//     password = password.replace(re,sSC[1])
//   }
//   return password
// }

//v2 -- add the new regex into the replace directly.
//These are your super secret characters you will use to make the password super secure
// var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
// function createSSP(password){  
//   for (sSC of superSecretChars){ password = password.replace(new RegExp(sSC[0], 'gi'), sSC[1])}
//   return password
// }
// 5) END===============================================================


// 6) START===============================================================
// TITLE: Make the Deadfish swim (6 kyu)
// LINK:  https://www.codewars.com/kata/51e0007c1f9378fa810002a9

// function parse( data ) {
//   let num = 0
//   let res = []
  
//   for (op of data) {
//     switch (op) {
//       case 'i': num++; break;
//       case 'd': num--;  break;
//       case 's': num *= num;  break;
//       case 'o': res.push(num); break;
//     }
//   }
//   return res
// }

// 6) END===============================================================


// 7) START===============================================================
// TITLE: Make techno. (7 kyu)
// LINK:  https://www.codewars.com/kata/563c8540d50eb20bab00009a

// function perc (mins) {
//   if (mins < 1 || mins > 100 || typeof mins != 'number') { return 'invalid track time'}

//   return [ `${Math.round(mins * 120)} kicks`,
//            `${Math.round(mins * 240)} hihats`,
//            `${Math.round(mins * 60)} claps` ]
// };

// 7) END===============================================================


// 8) START===============================================================
// TITLE: Make the small words big! (7 kyu)
// LINK:  https://www.codewars.com/kata/57b4dd38d2a31c75f7000299

// function smallWordHelper(sentence){
//   let res = []
  
// for (word of sentence.split(' ')){
//   word.length<=3 ? res.push(word.toUpperCase()) : res.push(word.replace(/[aeiou]/ig,''))
// }
// return res.join(' ')
// }

// 8) END===============================================================


// 9) START===============================================================
// TITLE: Powers Up (beta kyu - before = 1018 / after completion = 1022 / after ranking 1024)
// LINK:  https://www.codewars.com/kata/6001f1b46aad3700080d20a7

// function powersUp(number, upTo) {
//   let res = 0
  
//   for (let i=1; i<=upTo; i++) { res += Math.pow(number,i) }
//   return res
// }

// 9) END===============================================================

// 10) START===============================================================
// TITLE: 
// LINK:  

// 10) END===============================================================