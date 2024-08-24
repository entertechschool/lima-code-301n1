// Ejemplo 1:
const obj = { name: "bunnies" };
console.log("Obj is", obj);

const copy = obj;
console.log("Copy is", copy);

copy.name = "rabbit";
console.log("Copy is", copy);
console.log("Obj is also changed to", obj); // what???

// utiliza la desestructuración para crear un nuevo clon desconectado del original

// Ejemplo 2: También podemos asignar valores utilizando la deconstrucción
// Actualiza el objeto con los elementos anteriores (... obj) y agrégarle una nueva propiedad
// Nota: utilizamos let antes, ¿alguna idea de por qué?
let objeto = { name: "John" };
objeto = { ...objeto, age: 55 };

// También puedes hacer esto con clones y mantenerlos desconectados

// Ejemplo 3: Los arrays funcionan de la misma manera. Agrega un elemento al mismo array:
let family = ["Me", "You", "Kid"];
