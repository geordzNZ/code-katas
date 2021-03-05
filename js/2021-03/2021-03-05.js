// CODE KATAS FOR 05 Mar 2021
// Rankings at start of the day:
//   Merit = 539
//   Kyu = 5
//   Clan = 20
// Comments:
//   Updates to js file = comment = #X kata for 05/Mar/2021

// 1) START===============================================================
// TITLE: Basic variable assignment (8 kyu)
// LINK:  https://www.codewars.com/kata/50ee6b0bdeab583673000025

// BUGGED -- FIX THE CODE
// var a == "code";
// var b == "wa.rs";
// var name == a + b;

// ANSWER -- straight fix
// var a = "code";
// var b = "wa.rs";
// var name = a + b;


// 1) END===============================================================


// 2) START===============================================================
// TITLE: getNames() (7 kyu)
// LINK:  https://www.codewars.com/kata/514a677421607afc99000002

// BUGGED -- FIX THE CODE
// function getNames(data){
//   return data.map(function(item){item.name});
// }

// ANSWER -- straight fix
// function getNames(data){
//   return data.map((item) => item.name);
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Regex Failure - Bug Fixing #2 (7 kyu)
// LINK:  https://www.codewars.com/kata/55c423ecf847fbcba100002b

// BUGGED -- FIX THE CODE
// function filterWords(phrase){
//   return phrase.replace(/(bad|mean|ugly|horrible|hideous)/,'awesome');
// }

// ANSWER -- straight fix
// function filterWords(phrase){
//   return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
// }

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Failed Filter - Bug Fixing #3 (7 kyu)
// LINK:  https://www.codewars.com/kata/55c606e6babfc5b2c500007c

// BUGGED -- FIX THE CODE
// var FilterNumbers = function(str) {
//   return str.split('').filter(c => !parseInt(c)).join('');
// }

// ANSWER -- straight fix
// var FilterNumbers = function(str) {
//   return str.split('').filter(c => c.match(/[^0-9]/g)).join('');
// }

// Answer v2
// var FilterNumbers = str => str.replace(/[0-9]/g,'')

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Failed Sort - Bug Fixing #4 (7 kyu)
// LINK:  https://www.codewars.com/kata/55c7f90ac8025ebee1000062

// BUGGED -- FIX THE CODE
// var sortArray = function(value) {
//   return value.split('').sort((c, p) => c / p ).join('');
// }

// ANSWER -- straight fix
// var sortArray = function(value) {
//   return value.split('').sort((c, p) => c - p ).join('');
// }

// 5) END===============================================================


// 6) START===============================================================
// TITLE: Multiply characters
// LINK:  https://www.codewars.com/kata/52e9aa89b5acdd26d3000127

// BUGGED -- FIX THE CODE
// function spam(number){
//   //TO DO: Not returning the expected value.
//   return "hue" * number;
// }

// ANSWER -- straight fix
// function spam(number){
//   return ''.padEnd(number*3,'hue')
// }

// ANSWER -- v2
// const spam = n => ''.padEnd(n*3,'hue')

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