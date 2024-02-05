import { useState } from 'react'
import { nanoid } from "nanoid"
import ListItem from './ListItem'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [todoList, setTodoList] = useState([
    { id: nanoid(5), content: "item 1" },
    { id: nanoid(5), content: "item 2" },
    { id: nanoid(5), content: "item 3" }
  ])

  const [todo, setTodo] = useState("")
  const [showValidation, setShowValide] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()

    if(todo === "") {
      setShowValide(true)
      return
    }

    setTodoList([...todoList, {id:nanoid(5), content:todo}])
    setTodo("")
    setShowValide(false)
  }

  return (
    <>
      <div className="h-screen bg-slate-900">
        <div className="max-w-4xl mx-auto pt-20 px-6">
          <h1 className="text-3xl text-slate-100 mb-4">To-do list</h1>
          <form onSubmit={handleSubmit} className="mb-10">
            <label htmlFor="todo-item" className="text-slate-50">Ajouter une chose à faire</label>
            <input 
            value={todo} 
            onChange={e => setTodo(e.target.value)} 
            type="text" className="mt-1 block w-full rounded" />
            {showValidation && (
              <p className='text-red-400'>
                Ajoutez d'abord du contenu à votre tâche
              </p>
            )}

            <button className=" mt-4 py-2 px-2 bg-slate-50 rounded min-w-[135px]">Ajouter</button>
          </form>
          <ul>

            {todoList.length === 0 && (
              <li className='text-slate-50 text-md'>Pas d'item à afficher</li>
            )}

            {todoList.length > 0 &&
              todoList.map(item => (
                <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
              ))}


          </ul>
        </div>
      </div>
    </>
  )
}

export default App
