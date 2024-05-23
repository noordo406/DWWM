import { useEffect, useRef, useState } from "react"
import { Input } from "./components/forms/Input"

function App() {

  const prefixRef = useRef(null)
  const [prefix, setPrefix] = useState('')
  prefixRef.current = prefix

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <div>
    <Input label="prefix" value={prefix} onChange={setPrefix}/>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sed repudiandae architecto explicabo odit nulla reprehenderit esse dolorem, exercitationem at. Et a nesciunt reiciendis eos ut dolorem blanditiis ab exercitationem!
  </div>

}


export default App