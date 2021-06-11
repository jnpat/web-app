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

const FormInput = () => {
  const [todo, setTodo] = useState('')

  return(
    <form onSubmit = {(e) => {
      e.preventDefault()
      // console.log(e)
      // const todo = document.querySelector('#todo-input').value //use id to get value form input
      console.log('Submitted: ' + todo)
    }}>
      <input 
      id = "todo-input" 
      type = "text" 
      value = {todo} 
      onChange = {(e) => {
        console.log('Changing: ' + e.currentTarget.value)
        setTodo(e.currentTarget.value)
      }}/>
      <button type = "submit">+</button>
    </form>
  )
}


function App() {
  //Using const Input 
  // return (
  //   <form action = "/something">
  //     <Input label = "Frist Name"  name = "fname"/>
  //     <Input label = "Last Name"  name = "lname"/>
  //     <Input label = "Email"  name = "email"/>
  //     <input type = "submit" value = "Submit" />
  //   </form>
  // );
  
  //Count by Click Button
  // const [count, setCount] = useState(0) //useState ต้องใช้ใน  React Function Component => App() 
  // const onButtonClick = () => setCount(count + 1)

//   return (
//     <div className = "App">
//       <h1>Counter</h1>
//       <p>{count}</p>
//       <button onClick = {onButtonClick} >Click here</button>
//     </div>
//   )
// }

  const [todos, setTodos] = useState(['test', 'foo'])

  const todosElement = todos.map(todo => <p>{todo}</p>)

  return (
    <div>
      <h1>Todos</h1>
      {todosElement}
      <FormInput />
    </div>

  );
}

export default App;
