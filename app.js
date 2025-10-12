const newButton = document.querySelectorAll(".create-new");
const checkbox = document.querySelector("#custom-checkbox");
const taskbar = document.querySelector(".task-bar");
const task = document.querySelector("#text");

newButton:addEventListener("click",()=>{
    const newtask = task.cloneNode(true);
})