# Temas avanzados

## Resumen

En esta clase profundizaremos un poco más en Express y en la programación de alto nivel en general, abarcando los siguientes temas:

- Estrategias para la refactorización
- Programación funcional
- Modularización

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción del tema del code challenge
- Revisión del código de la tarea de laboratorio.
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- Patrones de programación deficientes
- Oportunidades de refactorización
- Pérdida/aumento de eficiencia
- Modularización
- Principio de Responsabilidad Única (SRP)

#### Ejecutar

- Refactorizar funciones enormes en funciones más pequeñas y de una sola responsabilidad
- Crear una función "controller"
- Crear código DRY encontrando repeticiones, patrones
- Modularizar códigos similares

## Notas

1. ¿Qué es el código DRY?

1. ¿Por qué modularizamos nuestro código?

1. ¿Qué es un Promise?

1. ¿Cuál es la diferencia entre un Promise y utilizar `.then()/.catch()`?

1. `async and await` - vs - `.then() and .catch()`

  ```javaScript
  async function doSomething() {
    try{
      const results = await axios.get(url)
    }
    catch(err){
      console.error(err);
    }
  }

  // el manejo de errores está dentro del .catch(), así que no necesitamos un try/catch
  function doSomething() {
    axios
      .get(url)
      .then(results => {
        Los results solo existen dentro de este bloque de código
      })
      .catch(err => console.error(err))
  }
  ```

1. Modularizando un archivo en el servidor

  ```javaScript
  function doSomething(){
    // hace algo genial
  }

  module.exports = doSomething
  ```

  - O se puede escribir así

  ```javaScript
  module.exports = () => {
    // hace algo genial
  }
  ```

  - en el archivo del servidor

  ```javaScript
  const doSomething = require('./path-to-doSomething');
  // el resto del archivo
  ```

1. También podemos exportar más de una función colocándola en un objeto

  ```javaScript
  module.exports = {
    doSomething: function(){
      // hace algo genial
    },

    doSomethingElse: function(){
      // hace algo más
    }
  }
  ```

  - para acceder a una función desde el objeto anterior en el servidor, tenemos que...

  ```javaScript
  const doesStuffObject = require('./path-to-doesStuffObject');

  doesStuffObject.doSomething();
  doesStuffObject.doSomethingElse();
  ```

  1. Lista de recursos para ayudar con el laboratorio o si quiero saber más: