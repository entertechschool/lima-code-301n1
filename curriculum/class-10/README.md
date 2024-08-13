# Persistencia

## Resumen

Durante esta clase, hablaremos sobre el almacenamiento en memoria y profundizaremos en la modularización y la refactorización.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Revisión del código de la tarea de laboratorio.
- Persistencia en memoria
- Resumen del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y Definir

- Base de datos en memoria
- Caché
- Acierto de Caché (hit)
- Fallo de Caché (miss)

#### Ejecutar

- Conservar los datos en la memoria
- Comprender las ventajas y desventajas de conservar los datos en la memoria frente al uso de algo como una base de datos

## Notas

1. ¿Qué es un caché?

1. ¿Qué significa un acierto de caché? ¿Qué significa un fallo de caché?

1. ¿Qué hace la palabra `debugger` en tu código?

1. ¿Qué es un breakpoint?

1. Enumera 5 herramientas de depuración diferentes:

1. Añadir al caché:

  ```javaScript
    if(inMemoryDB[ingredient] !== undefined){
      // si la información está en inMemoryDB, simplemente utiliza esos datos
      return inMemoryDB[ingredient];
    } else {
      // ve a la API y obtén la información
      // Añádelo a inMemoryDB
      inMemoryDB[ingredient] = recipeArr;
    }
  ```

1. Cómo monitoreamos la antigüedad de los datos: añade una clave con la marca de tiempo en el constructor

  ```javaScript
  function Recipe(obj){
    // otras claves
    this.dateAdded = Date.now();
  }
  ```

  - compara esa fecha/hora con el tiempo que quieras conservar los datos. Si los datos son demasiado antiguos, simplemente vacía el objeto

  ```javaScript
  if (cache[key] && (Date.now() - cache[key].dateAdded < 50000)) {
    console.log('Cache hit');
  } else {
    // elimina los datos y obtén datos nuevos de la API
  }
  ```