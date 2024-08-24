// Ejemplo 1:
const obj = { name: "bruno" };
console.log("Obj is: ", obj);

const copy = obj;
console.log("Copy is: ", copy);

copy.name = "matias";
console.log("Copy is: ", copy);
console.log("Obj is: ", obj); // what???

// utiliza la desestructuración para crear un nuevo clon desconectado del original
const clone = { ...obj };
console.log("Clone is: ", clone);

clone.name = "georgina";
console.log("Clone is: ", clone);
console.log("Obj is: ", obj);
return;

// Ejemplo 2: También podemos asignar valores utilizando la deconstrucción
// Actualiza el objeto con los elementos anteriores (... obj) y agrégarle una nueva propiedad
// Nota: utilizamos let antes, ¿alguna idea de por qué?
let persona = { name: "angel", lastname: "paz", country: "peru" };
persona = { ...persona, age: 30 };
console.log("persona: ", persona);

// También puedes hacer esto con clones y mantenerlos desconectados
const personaHomonima = { ...persona, age: 50, age: 80 };
// Si queremos modificar a personaHomonima, no podremos porque se declaro como "const"
console.log("personaHomonima: ", personaHomonima);

// Ejemplo 3: Los arrays funcionan de la misma manera. Agrega un elemento al mismo array:
const family = ["Me", "You", "Kid"];

family.push("Baby");

const familyExtended = [...family, "Dog"];

console.log(family);
console.log(familyExtended);
