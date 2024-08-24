import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header(props) {
  const [filter, setFilter] = useState(0);

  function selectFilter(event) {
    setFilter(Number(event.target.value));
  }

  function submitFilter(event) {
    event.preventDefault();
    console.log(filter);
    if (filter === 0) {
      props.setPersonas(props.rawPersonas);
      return;
    }
    // Modificar el state del App/[personas] a través del App/[setPersonas]
    const personasFiltradas = props.rawPersonas.filter(
      (persona) => persona.hijos === filter
    );
    props.setPersonas(personasFiltradas);
  }

  return (
    <header>
      <h1>Personas</h1>
      <p>Contador de likes: {props.contadorLikes}</p>
      <h3>Persona favorita: {props.personaFavorita}</h3>
      <section style={{ marginInline: "auto", width: 200 }}>
        <Form
          action="https://www.apple.com"
          onSubmit={submitFilter}
          style={{ display: "flex", gap: 10 }}
        >
          <Form.Select
            onChange={selectFilter}
            aria-label="Default select example"
          >
            <option value="0"># de Hijos</option>
            <option value="1">1 hijo</option>
            <option value="2">2 hijos</option>
            <option value="3">3 hijos</option>
            <option value="4">4 hijos</option>
            <option value="5">5 hijos</option>
          </Form.Select>
          <Button type="submit">Filtrar</Button>
        </Form>
      </section>
    </header>
  );
}

export default Header;
