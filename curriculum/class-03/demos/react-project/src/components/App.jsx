import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header.jsx";
import Gallery from "./Gallery.jsx";
import ModalPerson from "./ModalPerson.jsx"

import rawPersonas from "../personas.json";

function App() {
  const [personas, setPersonas] = useState(rawPersonas);
  const [contador, setContador] = useState(0);
  const [personasConLikes, setPersonasConLikes] = useState(personas);

  const [personaFavorita, setPersonaFavorita] = useState("");

  const [modalPersona, setModalPersona] = useState({});

  function aumentarContador() {
    setContador(contador + 1);
  }

  return (
    <>
      <Header contadorLikes={contador} personaFavorita={personaFavorita} rawPersonas={rawPersonas} setPersonas={setPersonas} />
      <hr />
      <Gallery
        personas={personas}
        aumentarContador={aumentarContador}
        personasConLikes={personasConLikes}
        setPersonasConLikes={setPersonasConLikes}
        setPersonaFavorita={setPersonaFavorita}
        setModalPersona={setModalPersona}
      />
      <ModalPerson modalPersona={modalPersona} setModalPersona={setModalPersona} />
    </>
  );
}

export default App;
