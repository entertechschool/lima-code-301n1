import { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Person(props) {
  const [likes, setLikes] = useState(0);

  function clickCard() {
    props.setModalPersona(props.persona);
  }

  function clickLike() {
    setLikes(likes + 1);
    props.aumentarLikes();
    let pcl = [...props.personasConLikes];
    pcl.map(person => {
        if (!person.likes) person.likes = 0;
        return person;
    })
    let currentPerson = pcl.find(
      (person) => person.nombre === props.persona.nombre
    );
    currentPerson.likes = likes + 1;
    const personasSinCurrentPerson = pcl.filter(
      (person) => person.nombre !== props.persona.nombre
    );
    personasSinCurrentPerson.push(currentPerson);
    props.setPersonasConLikes(personasSinCurrentPerson);
    // lógica de persona favorita:
    const clonePersonasConLikes = [...props.personasConLikes];
    clonePersonasConLikes
      .sort((a, b) => {
        return a.likes - b.likes;
      })
      .reverse();

    props.setPersonaFavorita(clonePersonasConLikes[0].nombre);
  }

  return (
    <Card style={{ width: "18rem", padding: "1em", cursor: "pointer" }} onClick={clickCard}>
      <Card.Img variant="top" src="https://placehold.co/60x30" />
      <Card.Body>
        <Card.Title>{props.persona.nombre}</Card.Title>
        <Card.Text>Hijos: {props.persona.hijos}</Card.Text>
        <Button variant="outline-primary" onClick={clickLike}>
          Like [ {likes} ]
        </Button>
      </Card.Body>
    </Card>
  );
}
