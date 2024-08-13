# Actualizando los Recursos

## Recordatorio de DEI

En nuestra próxima clase hablaremos de Diversidad, Equidad e Inclusión.  Asegúrate de completar [la tarea de lectura](https://entertechschool.github.io/code-301-guide/curriculum/class-14/DISCUSSION) antes de que comience la clase para obtener el crédito completo de la actividad.

## Resumen

En esta clase daremos el paso final en la funcionalidad CRUD completa para nuestra base de datos. Este paso es implementar la capacidad de actualizar los registros que existen en nuestra base de datos.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Revisión del código de la tarea de laboratorio.
- Actualizar los Recursos
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- UPDATE
- PUT

#### Ejecutar

- Configurar una base de datos de MongoDB utilizando Mongoose
- Actualizar un recurso instantáneamente en una aplicación React y hacer que el state del recurso persista al volver a cargar la página

## Notas

1. ¿Por qué necesitamos hablar de Diversidad e Inclusión?

1. ¿Qué significa la U en CRUD?

1. ¿Cómo encontramos un registro por id y lo actualizamos en Mongoose?

1. Enviar un request de axios para actualizar un registro:

  ```javaScript
  const SERVER = 'http://localhost:3001';
  // id del registro que se va a actualizar
  const id = 2;
  // el registro completo con la información actualizada
  const updatedRecord = {name: 'bobby', age: 105};

  axios.put(`${SERVER}/${id}`, { recordToUpdate: updatedRecord });
  ```

1. Actualizando un registro del lado del servidor:

  ```javaScript
  app.put('/someRoute/:id', callback);

  callback(request, response) {
    const record = request.body.recordToUpdate;
    const id = request.query.params.id;

    Model.findOneAndUpdate(id, record);
  }
  ```

1. Actualizar un registro del lado del servidor de cuando el registro está anidado dentro de un objeto de usuario (como los libros del usuario)

  ```javaScript
  app.put('/someRoute/:index', callback);

  callback(request, response) {
    const email = request.body.email; // envía el correo en el body así como el record
    const record = request.body.recordToUpdate;
    const index = request.query.params.index;

    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // ahora que tenemos el usuario, necesitamos reemplazar el registro
      const newBooks = person.books.splice(index, 1, record);
      // reemplaza el array books por el array new books
      person.books = newBooks;
      // guarda el person actualizado en la base de datos
      person.save()
    })
  }
  ```

1. Desplegar MongoDB en la nube

### Alojar bases de datos de MongoDB: Atlas

Si bien puedes ejecutar MongoDB en tu propio equipo, es bastante común ejecutar una instancia de MongoDB en la nube para que puedas aprovechar un mejor hardware, más memoria y redes de mayor velocidad. MongoDB ofrece un servicio de base de datos alojado en la nube llamado "Atlas"... una vez que lo configures, es fácil conectar tus servidores API desde cualquier parte del mundo para utilizarlos.

1. Regístrate.
1. Configura la organización
   - Nombra tu organización y proyecto
   - Puedes llamarlos como quieras
   - Establece el lenguaje de preferencia (Javascript)
1. Elije la opción "Free" (Shared Cluster)
1. Crea el Cluster
   - Escoge AWS
   - Escoge la región más cercana a tu ubicación (es decir, Oregon)
1. Crea un DB User
   - Haz click en el enlace "Database Access"
   - Luego en Add a new user
     - Elige tu Password Authentication
     - Elige un nombre de usuario y una contraseña
     - Para obtener derechos de acceso, elige "Atlas Admin"
1. Habilita Network Access
   - Haz click en el botón Network Access
   - Haz click en "Add IP Address"
   - Elige la opción "Allow Access from Anywhere"
   - Haz click en "Confirm"
1. Obtén tu string de conexión
   - Haz click en el botón "Clusters" a la izquierda
   - Haz click en el botón "Connect" en la pantalla del cluster
   - Para conectarte a tu nueva base de datos con la línea de comandos:
     - Elige la opción "Connect with MongoDB Shell"
     - Copia el string de conexión
     - Esto se verá así:
     - `mongosh "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Reemplace `<dbname>` con el nombre de la base de datos que quieres utilizar para tu aplicación, por ejemplo, `people`
   - Para conectarte a tu aplicación de Node o Express:
     - Elige la opción "Connect your Application"
     - Esto se verá así:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Reemplaza `<password>` con la contraseña que creaste anteriormente
     - Reemplace `<dbname>` con el nombre de la base de datos que quieres utilizar para tu aplicación, por ejemplo, `people`
     - Utiliza esto como `MONGODB_URI` en tu archivo .env o como una **variable de entorno** cuando despliegues en la nube.

![Account Setup](assets/atlas-setup.png)

![Choose Plan](assets/atlas-choose-plan.png)

![Cluster](assets/atlas-cluster-screen.png)

![Network Options](assets/atlas-network.png)

![Connect](assets/atlas-connect-options.png)