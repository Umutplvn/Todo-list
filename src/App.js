import { useState } from "react";
import Header from "./components/Header"
import Todos from "./components/Todos"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from "react";

function App() {

const getItem = JSON.parse(localStorage.getItem("todo"))


const[todo, setTodo]= useState(getItem || [])

useEffect(() => {
  localStorage.setItem("todo", JSON.stringify(todo))

}, [todo])


  return (
    <div className="App">
  
  <Header todo={todo} setTodo={setTodo}/>
  {todo.length <= 0 ?  <img src="./wallpaper.webp" alt="" className="w-75 d-flex m-auto rounded-5 mt-5" />:  <Todos  todo={todo} setTodo={setTodo}/> }
   
   </div> 

  )
}

export default App
