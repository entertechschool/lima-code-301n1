function Header(props) {
  return (
    <header>
      <h1>Personas</h1>
      <p>Contador de likes: {props.contadorLikes}</p>
      <h3>Persona favorita: {props.personaFavorita}</h3>
    </header>
  );
}

export default Header;
