import { useState } from 'react'
import './App.css'
import { Details } from './components/Details'
import { Inputs } from './components/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Inputs></Inputs>
    </div>
  )
}

export default App
