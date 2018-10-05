class Todo {
    constructor(text, checked){
        this.id = null;
        this.text = text;
        this.checked = checked;
    }

    display() {
        let checkmark = (this.checked ? "checked" : "");
        let text = this.text;
        let id = this.id;
        return `<li><span>${text}</span>
                    <input type="checkbox" ${checkmark}/>
                    <button>Delete</button>
                </li>`;
    }
}

class TodoList {
    constructor(){
        this.todos = [];
        this.index = 0;
    }

    add(todo){
        todo.id = this.index++;
        this.todos = [...this.todos, todo];
    }

    displayTodos(){
        const output = this.todos.map(todo => todo.display());
        const list = document.getElementById("todo-list");
        list.innerHTML = output;
    }

}

const myTodolist = new TodoList();
const todo1 = new Todo("Ate food", true);
console.log(myTodolist);
myTodolist.displayTodos();

const addTodo = () => {
    const todo = new Todo(document.getElementById("add-todo").value, false);
    myTodolist.add(todo);
    console.log(myTodolist);
    myTodolist.displayTodos();
}

const deleteTodo = (clicked_id) => {
    alert()
}