import Person from "./Person.jsx";

export default function Gallery(props) {
  return (
    <main>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
          padding: 20,
        }}
      >
        {props.personas.map((persona, index) => {
          return (
            <Person
              key={index}
              persona={persona}
              aumentarLikes={props.aumentarContador}
              personasConLikes={props.personasConLikes}
              setPersonasConLikes={props.setPersonasConLikes}
              setPersonaFavorita={props.setPersonaFavorita}
            />
          );
        })}
      </section>
    </main>
  );
}
