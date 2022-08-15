// ASSESSMENT 2: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not. ✅
// Pseudocode

// a) Create a test with expect statements for each of the variables provided.

//Pseudocode: We invoke the method describe with the argument divThree (function name) 
// We invoke a test method that returns in plain words what the function does, then we provide it with an argument for the function to call on. Then using toEqual we chain the object with the argument expecting it to equal "15 is divisible by three".
//After we set the test up, we run it using '$ yarn jest' and expect the test to fail with 'divThree is undefined' since we haven't defined the function yet.(This is a good fail.)


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divThree", () => {
    it("takes the object and checks if the number is divisible by 15, 0, -7", () => {
    expect(divThree(object1.number)).toEqual("15 is divisible by three");
    expect(divThree(object2.number)).toEqual("0 is divisible by three");
    expect(divThree(object3.number)).toEqual("-7 is not divisible by three");
    })
})

// b) Create the function that makes the test pass.

//Pseudocode: Now that we had a good failure we start building our function divThree and we pass object thru it to see if it is nor not divisible by 3 using modulo. if modulo 3 is 0 then it is divisible by 3 and if modulo is not 0 then it is not divisible.
//We then console log the function and pass it in the object. 

const divThree = (object) => {
    if (object % 3 === 0) {
    return `${object} is divisible by three`
} else if (object % 3 !== 0) {
    return `${object} is not divisible by three` 
    }
}
console.log(divThree(object1.number))
console.log(divThree(object2.number))
console.log(divThree(object3.number))

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized. ✅

// a) Create a test with expect statements for each of the variables provided.

//PseudoCode: We invoke the method describe with the argument firstCap (function name) 
// We invoke a test method that returns in plain words what the function does, then we provide it with an argument for the function to call on. Then using toEqual we chain the object with the argument expecting it to return the array of words with all the words capitalized.
//After we set the test up, we run it using '$ yarn jest' and expect the test to fail with 'firstCap is undefined' since we haven't defined the function yet.(This is a good fail.)


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("firstCap", () => {
it("takes the arrays of words and returns an array with all the words capitalized", () => {
        expect(firstCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
        expect(firstCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);
    })        
})

// b) Create the function that makes the test pass.

//Pseudocode: After the good fail we declare a function that takes in an array named firstCap. Then we create the local variable 'eachItem' that maps through the entire array. Then we return the first value of the string capitalized using .toUpperCase and add the first value of the substring and return the new array eachItem.
//We console log the function and pass it the array. 

const firstCap = (array) => {
    let eachItem = array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
     return eachItem
}     
console.log(firstCap(randomNouns1))
console.log(firstCap(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel. ✅


// a) Create a test with expect statements for each of the variables provided.

//We invoke the method describe with the argument firstVow (function name) 
// We invoke a test method that returns in plain words what the function does, then we provide it with an argument for the function to call on. Then using toEqual we chain the object with the argument expecting it to return the index of the first vowel in the string.
//After we set the test up, we run it using '$ yarn jest' and expect the test to fail with 'firstVow is undefined' since we haven't defined the function yet.(This is a good fail.)

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe ("firstVow", () => {
    it("takes the string and logs the index of the first vowel", () =>{
        expect(firstVow(vowelTester1)).toEqual(1)
        expect(firstVow(vowelTester2)).toEqual(0)
        expect(firstVow(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

//Pseudocode: After the good fail we declare a function that contains all the vowels in a string 'firstVow' . We then run that in a loop to iterate every letter of the string to check if it includes the letters in the vowels array using .includes string at i, returning i, which is the index of the vowel.
//We console log the function and pass it the array. 

const firstVow = (string) => {
    for (let i = 0; i < string.length; i++) {
        const vowels = ["a", "e", "i", "o", "u"]
        if(vowels.includes(string[i])){
            return i
        }
    }
}
console.log(firstVow(vowelTester1))
console.log(firstVow(vowelTester2))
console.log(firstVow(vowelTester3))

