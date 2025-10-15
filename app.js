
const newButton = document.querySelector(".create-new");
const main = document.querySelector("#main-section");
const checkbox = document.querySelector("#custom-checkbox");
const taskbar = document.querySelector(".task-bar");
const task = document.querySelector("#text");

newButton.addEventListener("click",()=>{
    const newtaskbar = taskbar.cloneNode(true);
    main.appendChild(newtaskbar);

})
checkbox.addEventListener("change", ()=>{
    taskbar.style.display = "none"
})