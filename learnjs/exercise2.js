//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function experiencePoints() {
    return winBattle ? 10 : 1
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
            
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
    default:
        whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
window.moveCommand("forward")
//#3 return value when moveCommand("back");
window.moveCommand("back")
//#4 return value when moveCommand("right");
window.moveCommand("right")
//#5 return value when moveCommand("left");
window.moveCommand("left")
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function career(type) {
    let outcome
    switch(type) {
        case "electrical engineer"
            outcome = "sad"
            break
        case "software engineer"
            outcome = "happy"
            break
        case "hacker"
            outcome = "also happy"
    default:
        outcome = "very sad"
    }
    return outcome
}