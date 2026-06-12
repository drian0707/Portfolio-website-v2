document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector(".add-todo-btn");
const text = document.querySelector(".text")
const todoList = document.querySelector(".todo-list")

button.addEventListener("click", function() {
    addTodo();
})

function addTodo() {
    const todoText = document.querySelector(".todo-input").value.trim();
    if (todoText === '') {
        text.textContent = "Please add a to do item!"
        text.style.color = "red"
    } else if (todoText.length < 3) {
        text.textContent = "Todo item should be at least 3 characters!"
        text.style.color = "yellow"
    } else {
        const lead = document.querySelector(".lead-list")
        const save = document.createElement("button")
        save.textContent = "Save"
        save.style.background = "green"
        save.style.marginLeft = "10px"
        save.style.cursor = "pointer"
        save.addEventListener("click", () => {
             const leads = document.querySelector(".leads")
            const leadList = document.createElement("li")
            leads.appendChild(leadList)
            leadList.textContent = todoText
            todoList.removeChild(todoItem)
            text.textContent = "Saved to Task!"
            text.style.color = "green"
        })


        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.style.background = "red"
        deleteBtn.style.marginLeft = "10px"
        deleteBtn.style.cursor = "pointer"
        deleteBtn.addEventListener("click", () => {
           todoList.removeChild(todoItem)
           text.textContent = "Task has been Deleted!"
           text.style.color = "black"
        })

        const todoItem = document.createElement("li")
        todoItem.style.listStyle = "none"
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem)
        todoText.value;
        text.textContent = "Added to Task!"
        text.style.color = "green"
        todoText.value = ''
        
        todoItem.style.boxShadow = "0 0 10px black"
        todoItem.style.width = "250px"
        todoItem.style.borderRadius = "10px"
        deleteBtn.style.marginLeft = "150px"

        todoItem.appendChild(deleteBtn)
        todoItem.appendChild(save)
    }
}
})