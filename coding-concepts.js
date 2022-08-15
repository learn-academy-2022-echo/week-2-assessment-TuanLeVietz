// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(""))

// a) Your answer:
// [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '2'
// ]
// b) Verify and explain: The method .split("") splits every character in the string and puts it into an array individually. 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The function is missing a return. Functions always need to return something.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[8 ,10, 12, 14, 16]
// b) Verify and explain: .map iterates over an array and gives us a new array of the same length of the original array. In this case each element of the new array is multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: The .filter method creates a new array that meets the requirement of the function. In this case the requirement is for the number to not be divisible by 2. So it would only log the odd numbers onto the new array. 


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: The object myCodingSkills contains data passed through an array. We can access this data by using dot notation to pin point the exact location of languages at index 0. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {
//   student: George
//   cohort: Echo
//   year: 2022
// }
// b) Verify and explain: Classes are reusable, and are a blueprint for objects. Using the Learn class we are making a new object named learnStudent and with the new name assigned as George. 