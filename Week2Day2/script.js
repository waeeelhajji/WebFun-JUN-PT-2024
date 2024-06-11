function Hello(){
    console.log("Hello from the Script.js")
    console.log('hello')
    var num = 5 + 6
    console.log(num)
}

function ShowThis(element) {
    console.log(element.innerHTML)
    var num = 5 + 6
    element.innerHTML = "Hello JS"
}

function turnOff(element) {
    if(element.innerHTML == "On"){
        element.innerText = "Off";
        element.style.backgroundColor = "red"

    }else {
        element.innerHTML = "On"
        element.style.backgroundColor = "#a0c3f4"
    }
}

function DeleteElement(element){
    element.innerHTML = "Hello onmouseover"
    element.style.backgroundColor = "green"
}

function ShowAnotherThisg(element) {
    element.innerHTML = "Hello onmouseout"
    element.style.backgroundColor = "red"
}

