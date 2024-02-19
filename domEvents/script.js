var button = document.getElementById("enter"); //grab the id element and save it to button variable
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length

}

function createListElement () {
    var li = document.createElement("li"); //grabs the li element and saves into a variable 
    li.appendChild(document.createTextNode(input.value)); //input.value gets the value enterd in the textbox
    ul.appendChild(li); //appends li child into ul parent
    input.value = ""; //after pressing enter the text box resets to an empty string

}
function addByButton (){
    if (inputLength() > 0) { //only if the length of the input.value is greater than zero
        createListElement();
    }

}

function addByEnter (event) {
    if (inputLength() > 0 && event.key === "Enter") { //code only runs if the legth of the textNode child of li is greater than zero and the event key is 13 or if the user presses the button enter/return
        createListElement();
    }

}
//adding event listener
button.addEventListener("click", addByButton)//button event listener
//when inputting a function here, parenthesis are not needed
//adding key press event: use javascript character codes: enter is key code 13
input.addEventListener("keydown", addByEnter)

//changed event.keyCode === 13 to even.key === "Enter" becuase event.keyCode ===13 got depreciated