import { useState } from 'react'
import './App.css'
import CTF from './home/components/ctf/CTF'

function App() {
  const [count, setCount] = useState(0)

  return (
   <CTF />
  )
}

export default App
