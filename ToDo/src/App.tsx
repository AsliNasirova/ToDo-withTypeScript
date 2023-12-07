import { useState } from 'react'
import './App.css'
import { todos } from './Type/type'
import Input from './Components/input'
import Message from './Components/message'


const App: React.FC = () => {
  const [todo, setTodo] = useState("")
  const [TodosArray, setTodos] = useState<todos[]>([])
  const [todoUpdatedItem, setTodoUpdatedItem] = useState<todos | null>(null)


  const addMessage = () => {

    if (todoUpdatedItem) {
      const index = TodosArray.findIndex((todo) => todo.id === todoUpdatedItem.id)
      TodosArray[index].text = todo
      setTodos([...TodosArray])
      setTodoUpdatedItem(null)
      setTodo("")
      return
    }
    if (todo) {
      setTodos([...TodosArray, { text: todo, id: TodosArray.length + 1 }])
      setTodo("")

    }
  }
  const deleteMessage = (id: number) => {
    setTodos(TodosArray.filter((todo) => todo.id !== id))
  }
  const editMessage = (item: todos) => {
    const index = TodosArray.findIndex((todo) => todo.id === item.id)
    setTodoUpdatedItem(TodosArray[index])
    setTodo(TodosArray[index].text)
  }

  return (
    <div className='App'>
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message deleteMessage={deleteMessage} TodosArray={TodosArray} setTodos={setTodos} editMessage={editMessage} />
    </div>
  );
}

export default App
