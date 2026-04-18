const todoForm=document.querySelector("form");
const todoInput=document.getElementById("todo-input");
const todoListUL=document.getElementById("todo-list")

const allTodos=[];

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    addTodo();
});

function addTodo(){
    const todoText=todoInput.value.trim();
    if(todoText.length>0){
        allTodos.push(todoText);
        createTodoItem(todoText);
        todoInput.value="";
    }
}

function updateTodoList(){
    todoListUL.innerHTML="";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem=createTodoItem(todo, todoIndex)
    })
}

function createTodoItem(todo) {
    const todoLI=document.createElement("li");
    todoLI.innerHTML=todo;
    return todoLI;
    
} 