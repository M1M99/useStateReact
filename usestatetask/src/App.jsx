import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrintProds from './assets/products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrintProds/>
    </>
  )
}

export default App
