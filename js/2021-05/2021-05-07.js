// CODE KATAS FOR 07 May 2021
// Rankings at start of the day:
//   Merit = 1516
//   Kyu = 4
//   Clan = 9

// 1) START===============================================================
// TITLE: Larger Product or Sum (7 kyu)
// LINK:  https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02

// v1
// function sumOrProduct(arr, n) {
//   arr.sort((a,b)=>a-b)
//   let mnN = arr.slice(0,n)
//   let mnT = mnN.reduce((t,v)=>t*=v)

//   arr.sort((a,b)=>b-a)
//   let mxN = arr.slice(0,n)
//   let mxT = mxN.reduce((t,v)=>t+=v)
  
//   return (mxT>mnT) ? 'sum' : (mxT<mnT) ? 'product' : 'same'
// }

// v2
// function sumOrProduct(arr, n) {
//   let mnT = arr.sort((a,b)=>a-b).slice(0,n).reduce((t,v)=>t*=v)
//   let mxT = arr.sort((a,b)=>b-a).slice(0,n).reduce((t,v)=>t+=v)
  
//   return (mxT>mnT) ? 'sum' : (mxT<mnT) ? 'product' : 'same'
// }

// 1) END===============================================================


// 2) START===============================================================
// TITLE: Sushi-go-round (Beginner's) (7 kyu)
// LINK:  https://www.codewars.com/kata/59619e4609868dd923000041

// const totalBill =str=> str.replace(/\s/g,'').length * 2 - (Math.floor(str.replace(/\s/g,'').length/5) * 2)

// 2) END===============================================================


// 3) START===============================================================
// TITLE: Find the vowels (7 kyu)
// LINK:  https://www.codewars.com/kata/5680781b6b7c2be860000036

// function vowelIndices(w){
//   let ltrs = w.split('')
//   let res = []
//   for (let j=0; j<ltrs.length; j++){
//     if( (/[aeiouy]/ig).test(ltrs[j]) ) { res.push(j+1) }
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