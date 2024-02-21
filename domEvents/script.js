var button = document.getElementById("enter") //grab the id element and save it to button variable
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

//returns the length of the character lenght inputed by the user
function inputLength() {
    return input.value.length
}

function createListElement () {
    var li = document.createElement("li")
    //adds delete button functinality when the new list item is added to the list
    var div = document.createElement("div")
    var delButton = document.createElement("button")
    div.classList.add("wapper")
    ul.appendChild(div)
    div.append(li, delButton)
    li.classList.add("taskClass")
    //end of delete button implementation 
    li.appendChild(document.createTextNode(input.value))
    input.value = "" //after pressing enter the text box resets to an empty string
    //last part of delete button 
    delButton.classList.add("del")
    delButton.innerHTML='Delete'


}
function addByButton (){
    if (inputLength() > 0) { //only if the length of the input.value is greater than zero
        createListElement()
    }

}

function addByEnter (event) {
    if (inputLength() > 0 && event.key === "Enter") { //code only runs if the legth of the textNode child of li is greater than zero and the event key is 13 or if the user presses the button enter/return
        createListElement()
    }


}

function toggle (strike) {
    if(strike.target.tagName === "LI") { //target every single li tag in the ul parent tag
        strike.target.classList.toggle("done")
    }
    
    // document.getElementsByTagName('li').classList.toggle("done");

    // let lineThrough = document.getElementsById("li");
    // lineThrough.classList.toggle("done");
}

function deleteItem (element) {
    if (element.target.className === "del") {
        element.target.parentElement.remove()

    }
}

function handleUlClick (element) { //want to keep these in its parent ul
	toggle(element)
	deleteItem(element)
}


//adding event listeners
button.addEventListener("click", addByButton)//button event listener
input.addEventListener("keydown", addByEnter)//enter key event listener
ul.addEventListener("click", handleUlClick)//ul list handler event listener

//changed event.keyCode === 13 to even.key === "Enter" becuase event.keyCode ===13 got depreciated


