import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { v4 as uuidv4 } from 'uuid';


const Header = ({todo, setTodo}) => {

const[text, setText] = useState("")

const handlePrint =()=>{
  setText("")
    setTodo([...todo, {
        id: uuidv4(),
        content: text,
    }])
}

const handleSubmit =(e)=>{
  {e.key=="Enter"&&handlePrint()}
}


  return (
    <div className='container'>
      
      <h3 className='text-center mt-4 fs-2' style={{fontFamily:"monospace", fontWeight:'bolder'}}>To Do List</h3>  
    <InputGroup className="w-75 m-auto">
        <Form.Control
          placeholder="Enter your note here..."
          aria-label="Enter your note here..."
          aria-describedby="basic-addon2"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={handleSubmit}
        />
        <Button  onClick={handlePrint} disabled={!text.trim()} className="bg-success">Save</Button>
      </InputGroup>

    </div>
  )
}

export default Header