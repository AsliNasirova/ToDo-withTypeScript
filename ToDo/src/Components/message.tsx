import React from 'react'
import { todos } from "../Type/type";

type Props={
    TodosArray:todos[],
    setTodos:React.Dispatch<React.SetStateAction<todos[]>>
    deleteMessage:(id:number)=>void
    editMessage:(item:todos)=>void
}

const Message:React.FC<Props> = ({TodosArray,deleteMessage,editMessage}) => {
  return (
    <div>
      <ul>
        {TodosArray.map((todo,i)=>(
            <li key={i}>{" "+todo.text} <button onClick={()=>deleteMessage(todo.id)}>Delete</button> <button onClick={()=>editMessage(todo)}>Edit</button></li>
        ))}
      </ul>
     
    </div>
  )
}

export default Message

