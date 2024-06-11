// console.log("hello from the JS")

var H1 = document.querySelector("h1")
console.log(H1)
H1.innerHTML = "HELLO DOM"


function changeToDark() {
    console.log("Working")

    // We need to target the container(wrapper) Element
    var wrapperElement = document.querySelector(".wrapper")
    console.log(wrapperElement)
    // Show me the classes
    console.log(wrapperElement.classList)
    // remove the class
    wrapperElement.classList.remove("light-mode")
    // add class 
    wrapperElement.classList.add("dark-mode")
}
function changeToLigh() {
    console.log("Working")

    // We need to target the container(wrapper) Element
    var wrapperElement = document.querySelector(".wrapper")
    console.log(wrapperElement)
    // Show me the classes
    console.log(wrapperElement.classList)
    // remove the class
    wrapperElement.classList.remove("dark-mode")
    // add class 
    wrapperElement.classList.add("light-mode")
}

function setColor() {
    
    var MyFavoriteColor = document.querySelector(".colorInput").value
    console.log(MyFavoriteColor.value)

    var pTag = document.querySelector(".colorDiv p")
    console.log(pTag)
    pTag.innerHTML = "My Favorite Color is : " + MyFavoriteColor

    var theBody = document.querySelector("body")
    theBody.style.backgroundColor = MyFavoriteColor
}

function chooseLunch(element) {
    alert("You picked " + element.value);
}

function message() {
    alert("this message i wanted to work late");    
}
    
console.log("Start");
setTimeout(message, 5000);
console.log("End");
