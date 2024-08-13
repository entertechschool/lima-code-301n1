# Servidor Express

## Resumen

En esta clase crearemos nuestro propio servidor Express en Node.js. Vamos a servir nuestros archivos estáticos de front end y profundizaremos en el WRRC.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción del tema del code challenge
- Revisión del código de la tarea de laboratorio.
- Conceptos de programación funcional
- Servidores Express
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- Async
- Server
- REST
- Express
  - Aplicación Middleware
  - Route Middleware
- cors
- Variables env
- WRRC

#### Ejecutar

- Conectar una aplicación React front-end con un servidor back-end
- Crear un servidor Express desde cero

## Notas

1. ¿Qué es un servidor?

1. ¿Qué es Express?

1. ¿Qué es cors?

1. ¿Por qué necesitamos un servidor?

1. Servidor express básico:

   ```javaScript
   'use strict';

   // esta librería nos permite acceder a nuestro archivo .env
   require('dotenv').config();

   // express es una librería de servidor
   const express = require('express');

   // esto inicia la librería Express
   const app = express();

   // librería que determina quién puede comunicarse con nuestro servidor
   const cors = require('cors');


   // esta configuración indica que todos pueden comunicarse con nuestro servidor
   app.use(cors());

   // obtenemos la variable port del archivo .env.
   const PORT = process.env.PORT;

   // esto es una ruta. Si enciendes el servidor y vas a http://localhost:3001/ (o a cualquier puerto que hayas especificado en tu .env), verás 'hello from the home route'
   app.get('/', (request, response) => {
     response.send('hello from the home route');
   });

   // esto conecta al servidor se con el puerto especificado en tu archivo .env
   app.listen(PORT, () => console.log(`listening on ${PORT}`));
   ```

1. Puedes establecer una ruta a la que pueda llegar tu front-end. Tu servidor retornará información sobre esa ruta:

   ```javaScript
   // FRONT-END
   await axios.get('http://localhost:3001/cats');

   // BACK-END
   app.get('/cats', (request, response) => {
     response.send('cats are the best');
   });
   ```

1. También puedes enviar información desde el front-end al back-end como un query.

   - Los queries se encuentran en la URL después del signo de interrogación: `http://localhost:3000/?city=seattle`
   - Para enviar ese query al back-end a través de axios, puedes escribir el código como:

     ```javaScript
     // FRONT-END
     await axios.get('http://localhost:3001/city', {params: { city: 'seattle' }});

     // BACK-END
     app.get('city', (request, response) => {
       const city = reqeust.query.city;
       response.send(`you sent the city of ${city}`)
     });
     ```