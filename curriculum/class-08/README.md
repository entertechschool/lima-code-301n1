# APIs

## Resumen

Durante esta clase, utilizaremos nuestro servidor express para solicitar información de una API de terceros para enviarla al front-end.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción del tema del code challenge
- Revisión del código de la tarea de laboratorio.
- Solicitar de datos de una API de terceros a través del servidor
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- APIs

#### Ejecutar

- Servidor Express de Node
- Utiliza **axios** para obtener datos remotos de forma asíncrona
- Utiliza **axios** para llegar al back-end desde el front-end
- Utiliza datos de terceros desde una API
- Incorpora datos con una aplicación web independiente.

## Notas

1. ¿Qué es una API?

1. ¿Por qué necesitamos un servidor?

1. ¿Qué guardamos en nuestro archivo .env?

1. Nodemon detectará automáticamente los cambios que realicemos en todos los archivos de nuestro servidor, sin embargo, si realizamos un cambio en ESTE archivo, deberemos reiniciar nodemon para que surta efecto.

1. Verdadero o falso: todas las APIs necesitan una clave

1. Para realizar una llamada a la API en el servidor mediante axios:

  ```javaScript
  const url = `http://urlToAPI/?key=${process.env.MY_API_KEY}&city=seattle`;

  // Fíjate en el 'await'. Esto es código asíncrono. La función deberá ser 'asíncrona'
  const axiosResults = await axios.get(url);
  console.log(axiosResults.data);
  ```

- NOTA: `axios` retorna un objeto gigante. Los datos que nos interesan se encontrarán en la propiedad `data` de ese objeto.