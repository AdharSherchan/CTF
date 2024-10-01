import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstContent from './home/components/ctf/hero/FirstContent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <FirstContent />
  )
}

export default App
