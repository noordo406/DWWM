import { useEffect, useState } from "react"
import { Input } from "./components/forms/Input"

function App() {

  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  const handleChange = (v) => {
    setDuration(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer)
          return 0
        }
        return v - 1
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [duration])

  return <div className="vstack gap-2">
    <Input
      value={duration}
      onChange={handleChange}
      placeholder="Timer..."
    />
    <p>
      Décompte : {secondsLeft}
    </p>
  </div>
}


export default App