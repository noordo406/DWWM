import { useEffect, useRef, useState } from "react"
import { Input } from "./components/forms/Input"
import { useIncrement } from "./components/hooks/useIncrement"
import { useDocumentTitle } from "./components/hooks/useDocumentTitle"
import { useFetch } from "./components/hooks/useFetch"

// https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000

function App() {

  // const [checked, toggleChecked] = useToggle()

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=1000')

  const {count, increment, decrement} = useIncrement({
    base: 0,
    max: 10,
    min: 0
  })

  const [name, setName] = useState('')

  useDocumentTitle(name ? `Editer ${name}` : null)

  return <div>
    {loading && <div className="spinner-border" role="status"><span className="visually-hidden">Chargement</span></div>}
    {errors && <div className="alert alert-danger">{errors.toString()}</div>}
    {data && <div>
      <ul>
        {data.map(post => (<li key={post.id}>{post.title}</li>))}
      </ul>
      </div>}

    <Input value={name} onChange={setName} label="Nom"/>
    Compteur {count}
    <button onClick={increment}>Incrémenter</button>
    <button onClick={decrement}>Décrementer</button>
    {/* <input type="checkbox" checked={checked} onChange={toggleChecked} />
    {checked && 'coché'} */}
  </div>

}


export default App