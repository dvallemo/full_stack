// change everything below to the newer Javascript!
// newer javasript alswo allows no semicolins at the end 
// let + const
var a = 'test'; //let a = 'test'
var b = true; // const  b = true
var c = 789; // const c = 789
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// const key = obj.key

const {firsName, lastName, age, eyeColor} = person


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

var okObj = {
    a,
    b,
    c
}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol')
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }

}

