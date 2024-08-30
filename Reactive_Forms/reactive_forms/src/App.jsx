import { useState } from 'react'
import Reactive from './assets/components/Reactive'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Reactive/>
    </>
  )
}

export default App
