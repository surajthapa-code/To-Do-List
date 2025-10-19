    // Basic element selections matching your index.html
    const input = document.getElementById('input');
    const createBtn = document.querySelector('.row button');
    const listContainer = document.querySelector('.list-container');
    const main = document.querySelector('main');
    const todoApp = document.querySelector('.todo-app');
    const listItems = listContainer.querySelectorAll('li');

    //functions -->
    createBtn.addEventListener('click',createnewtask =()=>{
        if(input.value === ''){
            input.placeholder = "enter a valid text";
        }else{
            input.value = '';
             let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        }
        console.log("hl")
    })
    