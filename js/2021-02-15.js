// 5) START===============================================================
// Title: Printer Errors
// Link:  https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  let errors = 0

  for (let i = 0; i <= s.length; i++){
    s[i] >= 'n' ? errors ++ : 0
  }
 console.log(`${errors}/${s.length}`)

}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm")

// 5) END===============================================================