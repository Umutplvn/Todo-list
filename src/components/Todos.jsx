import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {TiDelete} from "react-icons/ti"

const Todos = ({todo, setTodo}) => {


const todoDelete =(id)=>{
    const newTodo= todo.filter((item)=> item.id !== id)
    setTodo(newTodo)
}


  return (
    <div className='mt-3'>
         {todo?.map((item)=>   
         <ListGroup.Item key={item.id} className='w-75 m-auto rounded p-1 mt-3 d-flex align-items-center justify-content-between' action variant="success">

         <h6>{item.content}</h6>

        <TiDelete className='fs-3' onClick={()=>todoDelete(item.id)}/>
      </ListGroup.Item>
         
         )}
        
     
    </div>
  )
}

export default Todos