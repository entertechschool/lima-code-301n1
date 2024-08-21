import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import CardActions from "./components/CardActions";

function App() {
  const [contador, setContador] = useState(0);
  const [contadorcito, setContadorcito] = useState(0);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function disminuirContador() {
    setContador(contador - 1);
  }

  return (
    <>
      <h1>Hello soy App.jsx (parent)</h1>
      <p>Contador: {contador}</p>
      <hr />
      <CardActions aumentar={aumentarContador} disminuir={disminuirContador} contadorcito={contadorcito} setContadorcito={setContadorcito} />
    </>
  );
}

export default App;
