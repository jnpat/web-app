import logo from './logo.svg';
import './App.css';
import { isPropertyAccessExpression } from 'typescript';
import { useState } from 'react';

// const Input = (props) => {
//   return (
//     <>
//       <label for = {props.name}>
//         {props.label}:
//       </label><br />
//       <input type = "text" name = {props.name} />
//       <br />
//     </>
//   )
// }

// Callback Func

// const num = [1,2,3]
// num.forEach(num => console.log(num))

// const $num = num.map((current, index) => {
//   return {
//     id: index,
//     num: current,
//   }
// })
// console.log($num)

// const $num = num.filter(current => current >= 2)
// console.log($num)

// const sum = num.reduce(
//   (sum, current) => sum + current, 0)
// console.log(sum)

const FormInput = ({onTodoSubmit}) => {
  const [todo, setTodo] = useState('')

  return(
    <form onSubmit = {(e) => {
      e.preventDefault()
      // console.log(e)
      // const todo = document.querySelector('#todo-input').value //use id to get value form input
      console.log('Submitted: ' + todo)
      onTodoSubmit(todo) //callback func
      setTodo('')
    }}>
      <input 
      id = "todo-input" 
      type = "text" 
      value = {todo} 
      onChange = {(e) => {
        // console.log('Changing: ' + e.currentTarget.value)
        setTodo(e.currentTarget.value)
      }}/>
      <button type = "submit">+</button>
    </form>
  )
}

// const Todo = (props) => {
//   return (
//     <div style = {{display: 'flex'}}>
//       <li>{props.todo}</li>
//       <button onClick = {() => props.onCompleteClick({
//         todo: props.todo, 
//         date: props.date
//         })}>
//         {'\u2713'}
//       </button>
//     </div>
//   )
// }
// Deconstuct props
const Todo = ({title, date, onCompleteClick}) => {
  return (
    <div style = {{display: 'flex'}}>
      <li>{title}</li>
      <button onClick = {() => onCompleteClick({
        title, 
        date
        })}>
        {'\u2713'}
      </button>
    </div>
  )
}


function App() {

  const [todos, setTodos] = useState([])
  console.log(todos)

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => <Todo 
          // title = {todo.title} 
          // date = {todo.date}
          {...todo}
          onCompleteClick = {(e) => setTodos(todos.filter(todo => todo.date !== e.date))}/>)}
      </ul>
      {/* เป็นการดึง array เก่า (todos) มาต่อด้วย array ใหม่ (todo) */}
      <FormInput 
        onTodoSubmit = {(todo) => setTodos(
          [...todos, { date: Date.now(), title: todo }])
        }/>
    </div>

  );
}

export default App;
