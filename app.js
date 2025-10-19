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
             let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        input.value = '';
        saveData()
        }
        
    })
    createBtn.addEventListener("click",(evt)=>{
        evt.preventDefault();
    })

    listContainer.addEventListener('click',function(e){
        if(e.target.tagName = "LI"){
            e.target.classList.toggle("checked")
            e.target.innerHTML = "(Auto delete in 2 sec)"
            saveData ()
              setTimeout(() => {
                e.target.remove();
                saveData ()
        }, 2000);
        }
        
    })
    //save and show Data trough local storage
    function saveData (){
        localStorage.setItem("Data",listContainer.innerHTML);
    }
    function showData (){
        listContainer.innerHTML = localStorage.getItem("Data");
    }
    showData();