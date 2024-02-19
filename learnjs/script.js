//1. function excervises
// function checkDriverAge() {
//     var age = prompt("What is your age?");

//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }

// }

// // checkDriverAge();

// const checkDriverAge1 = function() {
//     var age = prompt("What is your age?");

//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// // checkDriverAge1();

// function checkDriverAge3(age) {
   

//     if (Number(age) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }

// }

// checkDriverAge3(91);
// checkDriverAge3(15);
// checkDriverAge3(18);    

//2. array excercises

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

// array.shift();
// console.log(array);

// array.sort();
// console.log(array);

// array.push('Kiwi');
// console.log(array);

// array.shift();
// console.log(array);

// array.reverse();
// console.log(array);

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// console.log(array2[1][1][0]);

//3. Objects excercise 

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

//we need to create a database of users and newsfeed with the username of the users and what it 
//says on their timeline, then we use an action to check a users credentials

// var database = [
//     {
//         username: "David",
//         password: "secret"
//     },
//     {
//         username: "sally",
//         password: "123"
//     },
//     {
//         username: "ingrid",
//         password: "777"
//     }
// ]

// var newsFeed = [
//     {
//         username: "Bobby",
//         timeline: "Sotured from all this learning"
//     },
//     {
//         username: "Sally",
//         timeline: "JavaScript is sooo coool!"
//     }
// ];

// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");

// function signIn(user, pass) {
//     if(user == database[0].username && pass == database[0].password) {
//         console.log(newsFeed);
//     } else {
//         alert("Wrong username and password");
//     }
// }

// signIn(userNamePrompt, passwordPrompt);

//function declaration 
// function newFunction() {

// }

//function expression 
// var newFunction = function() {

// }

//expression
// 1+3;
// var a = 2;
// return true;

//calling or invoking a function
// alert();
// newFunction(param1, param2);

//assign a varaible
// var a = true;

// //function vs methods
// function thisIsAFunction() {

// }

// var obj = {
//     thisIsAMethod: function() {

//     }
// }

// thisIsAFunction(); //calling a function
// obj.thisIsAMethod(); //calling a method

//loops

// var todos = [
//     "clean room",
//     "brush teeth",
//     "excercise",
//     "study javascript",
//     "eat healthy"
// ];
//wrrite a loop that will print out each object and add an ! to it

// for(let i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }

//write a program that when you keep popping until element gets to the end of the length
//what is the result of this program?

// for(let i = 0; i < todos.length; i++) {
//     todos.pop();
// }

//   i:      lenght of array
//   0       <       5
//pops out "eat healthy"
//increments
//   1       <      4
//pops out "study javascript"
//increments
//   2       <       3
//pops out "excercise"
//increments
//   3       >       2
// now 3 is greater than 2 or i > than the lenght so the loop stops

// let counterOne = 0;
// while(counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }
//  counterOne         is counterOne < 10?    
//      0                      yes
//prints out 0
//increments
//      1                       yes
//prints out 1
//increments
//      2                       yes
//prints out 2
//increments
//      3                       yes
//prints out 3
//increments
//      4                       yes
//prints out 4
//increments
//      5                       yes
//prints out 5
//increments
//      6                       yes
//prints out 6
//increments
//      7                       yes
//prints out 7
//increments
//      8                       yes
//prints out 8
//increments
//      9                       yes
//prints out 9
//increments                      
//      10                       no
//since condition is now false it breaks off the loop 

//do while check the condition after

//difference between while and do while loops

var conuterOne = 10;
while(counterOne > 10) {
    console.log("while", counterOne);
    counter--;
}

var counterTwo = 10;
do {
    console.log("do while", counterTwo);
    counterTwo--;

}while(counterTwo > 10);
//the while checks the conditional first and determines that 10 is not greater than 10
//so the while loop does not even go into the console.log and breaks out of the loop

//the do while oop first prints out the console.log first, decrements, then checks if 10 is greater than 10
//since 10 is not greater than 10 the loops breaks out, only printing out the first console.log 

//forEach ECMAScript 5 method, for loop does the same thing
// todos.forEach (function(todo) {
//     console.log(todo);
// })






 
