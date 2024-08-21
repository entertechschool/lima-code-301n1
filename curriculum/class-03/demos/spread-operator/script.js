/**
 * spread operator:
 * permite desempaquetar los elementos de un objeto <<iterable>>
 * ej. Arrays, Object.propiedades
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const maxNumber = Math.max(numbers); // Cuántos argumentos hay? 1 array.
const maxNumber = Math.max(...numbers); // Cuántos argumentos hay? 8 numeros.
const minNumber = Math.min(...numbers); // Cuántos argumentos hay? 8 numeros.

console.log(maxNumber);
console.log(minNumber);

function sumar(a, b) {
  // Recibe 2 parámetros del tipo Numeric.
  return a + b;
}

const numeros = [4, 6];
const resultado = sumar(...numeros); // Le estoy enviando 2 argumentos, del tipo Numeric
