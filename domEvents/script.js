var button = document.getElementById("enter"); //grab the id element and save it to button variable
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//adding event listener
button.addEventListener("click", function() { //button event listener
    if (input.value.length > 0) { //only if the length of the input.value is greater than zero
        const li = document.createElement("li"); //grabs the li element and saves into a variable 
        li.appendChild(document.createTextNode(input.value)); //input.value gets the value enterd in the textbox
        ul.appendChild(li); //appends li child into ul parent
        input.value = ""; //after pressing enter the text box resets to an empty string
    }
})

//adding key press event: use javascript character codes: enter is key code 13
input.addEventListener("keydown", function(event) {  //input is event becyase keypress requires it
    if (input.value.length > 0 && event.key === "Enter") { //code only runs if the legth of the textNode child of li is greater than zero and the event key is 13 or if the user presses the button enter/return
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode(input.value)); 
        ul.appendChild(li); 
        input.value = ""; 
    }
})

//changed event.keyCode === 13 to even.key === "Enter" becuase event.keyCode ===13 got depreciated