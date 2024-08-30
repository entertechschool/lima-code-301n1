# Ejercicio de calentamiento

Código asíncrono con Promises, async y await

Considere la siguiente Promise de JavaScript

```javascript
function getPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(results => {
      results.json()
        .then(data => {
          console.log(data.abilities);
        })
        .catch(error => {
          console.error("Data Error: " + error.message)
        })
    })
    .catch(error => {
      console.error("Fetch occured: " + error.mesage);
    })
}
```

## Responde algunas preguntas

1. ¿Cuál es el output esperado cuando se ejecuta getPokemon()?
2. ¿Qué retorna getPokemon()?
3. ¿Cuál sería el output si cambiaras la url a `https://pokeapi.co/api/v2/pokemon/johnsmith`?
4. ¿Cuál sería el output si cambiaras la url a `https://www.google.com`?

## Ejercicio: Convierte esto en una función `async`
