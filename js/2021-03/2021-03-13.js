// CODE KATAS FOR 13 Mar 2021
// Rankings at start of the day:
//   Merit = 777
//   Kyu = 4
//   Clan = 14
// Comments:
//   Updates to js file = comment = #X kata for 13/Mar/2021

// 1) START===============================================================
// TITLE: Sum Mixed Array (8 kyu)
// LINK:  https://www.codewars.com/kata/57eaeb9578748ff92a000009

// let sumMix = x => x.reduce((t, v) => t+=parseInt(v),0)

// 1) END===============================================================


// 2) START===============================================================
// TITLE: SpeedCode #1 - Getters and Setters in Object Literals (8 kyu)
// LINK:  https://www.codewars.com/kata/56fe9dbb69510b2ff8000fb3

// let person = {
//   firstName : 'Jane',
//   lastName : 'Doe',
  
//   get fullName(){
//     return `${this.firstName} ${this.lastName}`
//   },
  
//   set fullName(name){
//     this.firstName = name.split(' ')[0]
//     this.lastName = name.split(' ')[1]
//   }
// }

// 2) END===============================================================


// 3) START===============================================================
// TITLE: SpeedCode #2 - Array Madness (8 kyu)
// LINK:  https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

// let arrayMadness = (a, b) => a.reduce((tot, num) => tot+= num**2,0) > b.reduce((tot, num) => tot+= num**3,0)

// 3) END===============================================================


// 4) START===============================================================
// TITLE: SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes (8 kyu)
// LINK:  https://www.codewars.com/kata/56ff9b53140fcca90b000530

// starts with ... trim chars to get to limit
// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

// v1 - this worked, but I'm confused about the need for the extra master line
// class Labrador extends Dog {
//   constructor(name, age, gender, master) {
//     super(name, age, gender, master)
//     this.species = "Labrador"
//     this.size = "Large"
//     this.loyal = true
//     this.master = master
//   }
// }

// v2 - smaller better version from someone else
// class Labrador extends Dog {
//   constructor(name, age, gender, master) {
//     super(name, age, gender, "Labrador", "Large", master, true);
//   }
// }

// 4) END===============================================================


// 5) START===============================================================
// TITLE: Factory Functions #1 - Creating profile for people (7 kyu)
// LINK:  https://www.codewars.com/kata/56fd46bcc5957c83ea001023

// v1 - apparently not workiing, but not sure why
// function person(fN, lastName, age, gender, employed, occupation, married) {
//   console.log(fN+' '+lastName+' '+age+' '+gender+' '+employed+' '+occupation+' '+married)
//   let persons = {
//     constructor(fN, lastName, age, gender, employed, occupation, married){
//       this.firsxxxtName = fN
//       this.lastName = lastName
//       this.age = age
//       this.gender = gender
//       this.employed = employed
//       this.occupation = occupation
//       this.married = married
//     }
// //     sayName(){
// //       return `${firstName} ${lastName}`
// //     },
// //     introduce(){
// //       return  `Hello, my name is ${firstName} ${lastName}.  I am ${age} years old.  I am a ${gender}.`
// //     }
//   }
// }

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