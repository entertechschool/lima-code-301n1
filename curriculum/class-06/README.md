# Código asíncrono y APIs de terceros

## Resumen

Para esta clase, exploraremos las API de terceros y cómo pedirles datos.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción del tema del code challenge
- Revisión del código de la tarea de laboratorio anterior.
- APIs de terceros, `async` y `await`
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- APIs
- Cliente de API HTTP
- .env
- Axios
- async y await
- Código asíncrono
- Claves de API
- Queries
- WRRC
- Request
- Response
- Entender las APIs de terceros
- Entender async y await

#### Ejecutar

- Ser capaz de recopilar información de las APIs
- Utilizar el cliente de API HTTP para probar rutas

## Notas

1. ¿Qué es una API?
1. ¿Qué es el código asíncrono y cómo se relaciona con async y await?
1. ¿Por qué necesitas una clave de API?
1. ¿Qué es un cliente de API HTTP?
1. ¿Qué es axios?
1. Crear una variable en un archivo .env: `PORT=3000`

   - Formas comunes de equivocarse:
     - Espacios antes y después del `=`
     - Añadir un punto y coma al final de la línea
     - Utilizar algo que no sea MAYÚSCULAS

1. Llamar a la API:

   ```javascript
   import React from 'react';
   import axios from 'axios';

   class App extends React.Component {
     // Ya que se necesita una cantidad desconocida de tiempo para obtener la información, necesitamos hacer un async y await en esta función:
     getPokemon = async () => {
       // Esto irá a la API de Pokemon y hará un GET con un montón de objetos de pokemon.
       // El 'await' dice: "No avances a la siguiente línea hasta que regrese con la información que pediste y luego la coloque en un const llamada 'pokemon'."
       const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');

       // axios retorna un objeto grande. La parte de ese objeto que tiene el pokemon es el atributo .data del objeto.
       const pokemonArray = pokemonResponse.data;
     }

     render() {
       return(
         <button onClick={this.getPokemon}>Get Pokemon</button>
       )
     }
   }
   ```

1. Utilizar un try/catch para el manejo de errores:

   ```javascript
   getPokemon = async () => {
     try{
       const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
       const pokemonArray = pokemon.data;
     } catch(err) {
       console.error(err);
     }
   }
   ```

   - Puedes envolver un try/catch alrededor de cualquier parte del código que quieras
   - Dice: "Intenta ejecutar este código - si no funciona, ejecuta el código en el bloque catch"