import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  function aumentarContador() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello</h1>
      <Button variant="success" onClick={aumentarContador}>Aumentar conteo: {count}</Button>
    </>
  )
}

export default App
