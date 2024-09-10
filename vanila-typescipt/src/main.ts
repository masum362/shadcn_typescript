import './style.css'

interface todo {
  title: string;
  isCompleted: boolean;
  readonly id: string
}

const todos: todo[] = []

const formContainer = document.getElementById('formContainer') as HTMLFormElement
const TodoInput = document.getElementById('todoInput') as HTMLInputElement
const todoContainer = document.getElementById('todoContainer') as HTMLDivElement


formContainer.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: todo = {
    id: String(Math.random() * 1000),
    isCompleted: false,
    title: TodoInput.value
  }

  todos.push(todo);
  TodoInput.value = ''
  renderTodo(todos);
}

const deleteTodo = (id: String) => {
  const idx = todos.findIndex(t => t.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);

}

const generateTodo = (todo: todo) => {
  const todoDiv: HTMLDivElement = document.createElement('div');

  // creating the checkbox
  const checkbox: HTMLInputElement = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.isCompleted
  checkbox.onchange = () =>{
    todos.find(item =>{
      if(item.id===todo.id) todo.isCompleted = checkbox.checked;
    })
    paragraph.className = todo.isCompleted ? "textCut" : "todoText";
  
  }

  // creating the p
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = todo.title;
  paragraph.className = todo.isCompleted ? "textCut" : "todoText";
  

  // creating the delete button
  const deleteButton: HTMLButtonElement = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.className = "deleteBtn";
  deleteButton.onclick = () => {
    deleteTodo(todo.id)
  }

  todoDiv.append(checkbox,paragraph,deleteButton);

  todoContainer.append(todoDiv);
}

const renderTodo = (todos: todo[]) => {

  todoContainer.innerHTML = ""

  todos.forEach((todo) => {
    generateTodo(todo);
  })
}