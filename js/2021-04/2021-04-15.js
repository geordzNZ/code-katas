// CODE KATAS FOR 15 Apr 2021
// Rankings at start of the day:
//   Merit = 1274
//   Kyu = 4
//   Clan = 9
// Comments:
//   Updates to js file = comment = git commit -am "#X kata for 15/Apr/2021"

// 1) START===============================================================
// TITLE: Javascript filter - 1 (7 kyu)
// LINK:  https://www.codewars.com/kata/525d9b1a037b7a9da7000905

// function searchNames( logins ){
//   return logins.filter(l=> l[0].substr(l[0].length-1)==='_')
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: JavaScript Array Filter (7 kyu)
// LINK:  https://www.codewars.com/kata/514a6336889283a3d2000001

// const getEvenNumbers =numbersArray=> numbersArray.filter(n=>n%2===0) 

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Javascript filter - 2 (6 kyu)
// LINK:  https://www.codewars.com/kata/5262fa26875ed24a3e000029

// const roomMates =(rooms,floor)=> rooms.filter((r,i)=> i+1>((floor-1)*6) && (i+1<=floor*6) && r!='')

// 3) END===============================================================


// 4) START===============================================================
// TITLE: Invalid Login - Bug Fixing #11 (8 kyu)
// LINK:  https://www.codewars.com/kata/55e4c52ad58df7509c00007e

// v1
// function validate(username, password){
//   var database = new Database();
//   let patt1 = /[\/\/]/g;
//   let patt2 = /[\|\|]/g;
//   if (patt1.test(password) || patt2.test(password)) { return 'Wrong username or password!'}
//   return database.login(username, password);
// }

// v2
// function validate(username, password){
//   var database = new Database();
//   if (/[\/\/]/g.test(password) || /[\|\|]/g.test(password)) { return 'Wrong username or password!'}
//   return database.login(username, password);
// }

// v3
// function validate(username, password){
//   var database = new Database();
//   if (/[\/\/|\|\|]/g.test(password)) { return 'Wrong username or password!'}
//   return database.login(username, password);
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