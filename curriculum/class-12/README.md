# Crear y eliminar recursos

## Resumen

En esta clase, nos centraremos en la `C` y la `D` del `CRUD`: `CREATE` y `DELETE`. Hablaremos de cómo enviar un POST request y guardar esa información en una base de datos MongoDB y un DELETE request para eliminar información de la base de datos.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción del tema del code challenge
- Revisión del código de la tarea de laboratorio.
- Crear un recurso
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- POST
- DELETE
- params
- request.body
- middleware

#### Ejecutar

- Poder enviar un post request desde el front-end a un servidor
- Poder actualizar instantáneamente los resultados y hacer que esos resultados persistan al volver a cargar la página.
- Poder enviar un delete request desde el front-end a un servidor
- Comprender la necesidad de un body parser

## Recursos útiles

- [mongoose queries](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)

## Notas

1. ¿Qué significa la C y la D en CRUD?

1. ¿Cuáles son las formas de enviar información desde el front-end al back-end?

1. De las tres formas de enviar información, ¿cuáles son las dos que se envían en la URL?

1. Cómo enviar información desde el front-end al back-end utilizando Axios:

**QUERY**

  ```javaScript
  const randomString = 'info that I want to send to the server';
  const SERVER = 'http://localhost:3001';

  axios.get(`${SERVER}`, { params, { data: randomString }})
  ```

- Los queries se ven así: `http://localhost:3000/?city=seattle`
- van después del signo de interrogación
- están formados por pares key/value separados por un signo de igual
- Pueden tener varios queries: `http://localhost:3000/?city=seattle&state=wa`
- se envían en el request.query
  - este será el `request.query.data`

------------------------

**PARAMS**

```javaScript
const id = 12;
const SERVER = 'http://localhost:3001`;

// esto obtendrá un solo registro porque estamos haciendo un app.get con un id
axios.get(`${SERVER}/${id}`)

// esto eliminará un solo registro porque estamos haciendo un app.delete con un id
axios.delete(`${SERVER}/${id}`})
```

- Los params se ven así: `http://localhost:3000/12`
- van antes de cualquier query
- el servidor define cuál es el key para los params de la siguiente manera: `app.get('/someRoute/:id', callBack)`
  - Ese `:id` se puede llamar como cualquier cosa - es una variable (es decir, `app.get('/someRoute/:banana', callback)`)
- El valor de los params es lo que aparece en la URL en esa posición. Así que en este caso, el key es `id` y el value es `12`.
- se envían en el request.params
  - este será el `request.params.id`

------------------------

**BODY**

```javaScript
const newRecord = {
  name: 'bob',
  age: 104
}
const SERVER = 'http://localhost:3001';

// esto creará un nuevo registro porque eso es lo que hace POST
axios.post(`${SERVER}`, { data: newRecord });
```

- se envía en el request.body
- se tendrá que analizar el body en el servidor para poder leer esta información. Para esto, añade esta línea de código a tu servidor: `app.use(express.json());`
  - Sin esta línea de código, request.body aparecerá como undefined

1. Rutas del servidor

**CREATE**

  ```javaScript
  app.post('/someRoute', callback);

  callback(request, response) {
    // obtiene información del BODY del objeto request
    const newRecord = request.body.newRecord

    // crea y guarda un registro
    const bob = new Model(name: request.body.newRecord.name, age: request.body.newRecord.age);
    bob.save()
  }
  ```

**DELETE**

  ```javaScript
  app.delete('/someRoute/:id', callback);

  callback(request, response) {
    // obtiene el id del registro que se va a eliminar de los params
    const id = request.params.id;

    // encuentra ese registro y lo elimina
    Model.findOneAndDelete(id);
  }
  ```

- si primero necesitamos encontrar un usuario y luego eliminar un libro...

  ```javaScript
  app.delete('/someRoute/:index', callback);

  callback(request, response) {
    // obtén el index del libro
    const index = request.params.index;
    // obtén el correo electrónico del query (debemos asegurarnos de enviarlo en el front-end)
    const email = request.query.email;

    // encuentra al usuario por su correo electrónico
    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // ahora que encontramos al usuario, elimina el libro utilizando el índice
      const newBookArray = person.books.splice(index, 1);
      // asignar el nuevo array de libros al usuario
      person.books = newBookArray;
      // guárdalo
      person.save();
    })
  }
  ```