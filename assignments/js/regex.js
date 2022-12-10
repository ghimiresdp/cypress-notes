/*
**Assignment: Please create a regular expression that matches the following**:

- p1: `Ram`, `Rama`, `Ramu`, `ram`, `rama`, `ramu`
- p2: `sun`, `sin`, `run`, `ran`, `tin`, `tan`
- p3: `raj`, `raja`, `raju`, `ram`, `rama`, `ramu`
- p4: `class`, `classes`, `glass`, `glasses`, `clash`, `clashes`, `rash`, `rashes`
- p5: `a1`, `a2`, `b1`, `b2`, `c1`, `c2`

*/


let p1, p2, p3, p4, p5;

// =============================================[ Enter your answers here ]=============================================

// Example Pattern
p1 = /[Rr]a[mj](a)?/;

p2 = /sun/      // Change your answer here
p3 = /raj/      // Change your answer here
p4 = /class/    // Change your answer here
p5 = /a1/       // Change your answer here

// p2 = /[trs][uia]n/      // Change your answer here
// p3 = /ra[jm](au)?/      // Change your answer here
// p4 = /(cl)|(gl)|(r)as[sh](es)?/    // Change your answer here
// p5 = /[abc][12]/       // Change your answer here



// ==================================================[ End of answer ]==================================================
/*
To run the test, type the following in your terminal:

node js/regex.js

(or equivalent command)

if all the test case passes, then ✅ icon will be shown otherwise ❌ icon will be shown for failed test cases

Example Passed Test Case:

✅: Ram
✅: Rama
✅: Ramu
✅: ram
✅: rama
✅: ramu

Example Failed Test Cases:
✅: Ram
✅: Rama
❌: Ramu
✅: ram
✅: rama
❌: ramu
*/
// ===============================================[ Start of Test Cases ]===============================================

// Please do not edit tests

let tests = [
    { regex: p1, sample: [`Ram`, `Rama`, `Ramu`, `ram`, `rama`, `ramu`]},
    { regex: p2, sample: [`sun`, `sin`, `run`, `ran`, `tin`, `tan`]},
    { regex: p3, sample: [`raj`, `raja`, `raju`, `ram`, `rama`, `ramu`]},
    { regex: p4, sample: [`class`, `classes`, `glass`, `glasses`, `clash`, `clashes`, `rash`, `rashes`]},
    { regex: p5, sample: [`a1`, `a2`, `b1`, `b2`, `c1`, `c2`]},
]

tests.forEach(({regex, sample}) =>{
    console.log(`==========================================================`)
    console.log(`Testing for the pattern: ${regex}\n`)
    sample.forEach(item =>{
        console.log(`${regex.test(item) ? '✅' :'❌'}:`, item)
    })
})
// ================================================[ End of Test Cases ]================================================
