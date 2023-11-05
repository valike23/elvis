const screen = document.getElementById("screen");
let todos = [];

function changeSomething(){
    alert("hello");
}

screen.addEventListener('change', changeSomething);
// function to remove an element from am an array

const removeElement = (i)=>{
    todos.splice(i,1);
    displayTodo();
}

`<button onclick='removeElement(${i})'></button>`