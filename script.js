const form=document.querySelector("form");
const inpVal=document.getElementById("todo-input");
const ul=document.querySelector("ul");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(inpVal.value.trim());
    addTodo();
    
})

function addTodo(){
    const todoValue= inpVal.value.trim();
    if(todoValue.length>0){
        inpVal.value="";
        // console.log(todoValue);
        display(todoValue);
    }
}

function display(todoValue){
    const li=document.createElement("li");
    li.classList.add("todo")
    li.innerHTML=`
                <input type="checkbox" name="" id="todo-1">
                <label class="custom-checkbox" for="todo-1">
                    <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#000000">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                </label>
                <label for="todo-1" class="todo-text">
                    ${todoValue}
                </label>
                <button class="delete-button">
                    <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
    `;
    
    ul.prepend(li);
    
}