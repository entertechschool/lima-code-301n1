import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header.jsx";
import Gallery from "./Gallery.jsx";

import personas from "../personas.json";

function App() {
  const [contador, setContador] = useState(0);
  const [personasConLikes, setPersonasConLikes] = useState(personas); // []

  console.log(personas.length);

  const [personaFavorita, setPersonaFavorita] = useState("");

  function aumentarContador() {
    setContador(contador + 1);
  }

  return (
    <>
      <Header
        contadorLikes={contador}
        personaFavorita={personaFavorita}
        nombre={"Linder"}
      />
      <hr />
      {personas.length === 0 ? (
        <div>
          <h2>No hay personas por el momento</h2>
        </div>
      ) : (
        <Gallery
          personas={personas}
          aumentarContador={aumentarContador}
          personasConLikes={personasConLikes}
          setPersonasConLikes={setPersonasConLikes}
          setPersonaFavorita={setPersonaFavorita}
        />
      )}
    </>
  );
}

export default App;
