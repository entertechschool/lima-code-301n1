import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Header(props) {
  return (
    <header>
      <h1>Personas</h1>
      <p>
        {props.nombre ? `Bienvenido, ${props.nombre}` : "Usuario no encontrado"}
      </p>
      <p>Contador de likes: {props.contadorLikes}</p>
      <h3>Persona favorita: {props.personaFavorita}</h3>
      <p>
        <a href="/home">Ir al home</a>
      </p>
      <p>
        <Link to={"/home"}>Ir al home</Link>
      </p>
    </header>
  );
}

export default Header;
