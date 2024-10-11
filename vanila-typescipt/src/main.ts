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
  checkbox.onchange = () => {
    todos.find(item => {
      if (item.id === todo.id) todo.isCompleted = checkbox.checked;
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

  todoDiv.append(checkbox, paragraph, deleteButton);

  todoContainer.append(todoDiv);
}

const renderTodo = (todos: todo[]) => {

  todoContainer.innerHTML = ""

  todos.forEach((todo) => {
    generateTodo(todo);
  })
}



// practise


// interface 

// interface Person {
//   readonly id: string;
//   name: string;
//   age: number;
// }

// type 

// type funcType = (a:number,b:number) => void;

// extends interface from Person interface
// interface Person2 extends Person {
//   func:funcType,
//   gender?: 'male' | 'female'; // ? makes keys optional
// }

// const masum: Person2 = {
//   id: String(Math.random() * 1000000),
//   name: "masum ahmed",
//   age: 20,
//   func:(n, m)=>console.log(n * m),
//   gender:"male"
// }

// masum.func(10,20);

// console.log(masum)

// type inference

// const a:number = 20;
// let b :string = "something";
// let c: string | number = 20;

// c = 'masum';

// console.log(a,b)


// array type
// const arrOfNumber:number[] = [1,2,3,4,5,6,7,8];
// arrOfNumber.push(20);
// console.log(arrOfNumber)

// const arrOfDate:Date[] = [];
// arrOfDate.push()

// any type
// type funcType = (a:any , b:any) => any;

// const func:funcType =(a,b) =>{
//   return a + b
// }

// console.log(func(10,20))


// difference between type and interface 
// 1. interface only works on objects but type can work with anything.
// 2. interface can extends other interfaces but type can't

// optional perameters

// type funcType = (a: number, b: number, c?: number) => number;

// const func:funcType = (a,b,c) =>{
//   if(c == undefined) return a * b;
//   else return a * b * c;
// }

// console.log(func(20,20,2))

// type funcType = (a: number, b: number, c?: number) => number;
// default parameters
// const func: funcType = (a, b, c = 10) =>{
//   return a * b * c;
// }

// console.log(func(10,20,20))


// const func = (person: { name: string, age: number }): string => {
//   return person.name
// }

// let a = 10, b = 20, c = 10;

// enum numbers { a, b, c }

// const myNumber:numbers = numbers.a
// console.log(myNumber)