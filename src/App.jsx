import { useState } from 'react'
import NoteApp from './components/NoteApp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoteApp />
    </>
  )
}

export default App
