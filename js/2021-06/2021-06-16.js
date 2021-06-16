// CODE KATAS FOR 16 June 2021
// Rankings at start of the day:
//   Merit = 1823
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Hex to Decimal (8 kyu)
// LINK:  https://www.codewars.com/kata/57a4d500e298a7952100035d/

// v1 
// function hexToDec(hexString){
//   let decNum = parseInt(hexString, 16)
  
//   return decNum
// }

// v2
//const hexToDec =h=> parseInt(h,16)
// 1) END===============================================================


// 2) START===============================================================
// TITLE: Bin to Decimal (8 kyu)
// LINK:  https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

// v1
// const binToDec =b=> parseInt(b,2)
// 2) END===============================================================


// 3) START===============================================================
// TITLE: ToLeetSpeak (7 kyu)
// LINK:  https://www.codewars.com/kata/57c1ab3949324c321600013f

// v1
// function toLeetSpeak(str) {
//   let res =''
//   let alphabet = {A:'@',B:'8',C:'(',D:'D',E:'3',F:'F',G:'6',H:'#',I:'!',J:'J',K:'K',L:'1',M:'M',N:'N',O:'0',P:'P',Q:'Q',R:'R',S:'$',T:'7',U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'2'}  
  
//   for (let s of str){
//     if (/\w/i.test(s)) { res+=alphabet[s] }
//     else { res+=s }
//   }
//   return res
// }

// v2
// function toLeetSpeak(str) {
//   let alphabet = {A:'@',B:'8',C:'(',D:'D',E:'3',F:'F',G:'6',H:'#',I:'!',J:'J',K:'K',L:'1',M:'M',N:'N',O:'0',P:'P',Q:'Q',R:'R',S:'$',T:'7',U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'2'}
//   return [...str].reduce((res,s)=> /\w/i.test(s) ? res+=alphabet[s] : res+=s,'')
// }
// 3) END===============================================================


// 4) START===============================================================
// TITLE: Training JS #8: Conditional statement--switch (8 kyu)
// LINK:  https://www.codewars.com/kata/572059afc2f4612825000d8a

// v1
// function howManydays(month){
//   let days;
//   switch (month){
//     case 1: days = 31;break;
//     case 2: days = 28;break;
//     case 3: days = 31;break;
//     case 4: days = 30;break;
//     case 5: days = 31;break;
//     case 6: days = 30;break;
//     case 7: days = 31;break;
//     case 8: days = 31;break;
//     case 9: days = 30;break;
//     case 10: days = 31;break;
//     case 11: days = 30;break;
//     case 12: days = 31;break;
//   }
//   return days;
// }

// v2
// function howManydays(month){
//   let days;
//   switch (month){
//     case 2: days = 28;break;
//     case 4: days = 30;break;
//     case 6: days = 30;break;
//     case 9: days = 30;break;
//     case 11: days = 30;break;
//     default: days = 31;break;
//   }
//   return days;
// }
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