import { useState } from "react";

function Pokemon() {
  const [pokeData, setPokeData] = useState(null);

  // async function
  const handleSubmit = async (event) => {
    // para evitar que la web se recargue
    event.preventDefault();
    // extraer la informacion de los inputs
    const inputs = new FormData(event.target);
    const pokemonName = inputs.get("pokemon_name");

    if (pokemonName) {
      // hacemos la busqueda del pokemon
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          alert("Error: Pokemon no encontrado");
          return;
        }

        const data = await response.json();
        setPokeData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="pokemon_name"
              type="text"
              placeholder="Ingrese el nombre del pokemin"
            />
            <button>Buscar</button>
          </form>
          <div>
            {pokeData ? (
              <div>
                <img
                  src={pokeData.sprites.other.dream_world.front_default}
                  alt=""
                />
                <h1>{pokeData.name}</h1>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}

export default Pokemon;
