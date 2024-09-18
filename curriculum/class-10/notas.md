# Stack (Pilas)

- LIFO: Last In First Out (Pila de platos por lavar)
- FIFO: FIrst In First Out (Canasta de ropa sucia)

# Call Stack

Es la forma/orden/comportamiento en la que se ejecuta un script de Javascript.
Funciona bajo el comportamiento "LIFO".
La pila guarda el registro de las funciones que se deben ejecutar.

## Stack Trace

Te muestra una captura de cómo es el CALL STACK en el momento preciso que sucede el error inesperado.

## Stack Overflow

Es un tipo de error que genera el entorno de ejecución (Javascript Run Time) cuando el límite que le colocó el navegador (o node) al Call Stack, se ha llenado. Esto evita que la ejecución del programa se coma toda la memoria de RAM de la computadora.

#### Cómo se genera un Stack Overflow

Cuando se llena el call stack. No siempre un bucle infinito llena el Call Stack.
Por ejemplo este código:
```js
while (true) {
    console.log("soy infinito pero NO genero Stack Overflow");
}
// Mientras se va imprimiendo el mensaje, va saliendo de la pila. Por lo tanto, nunca se llena.
```

En cambio, este código:
```js
function infinito() {
    infinito(); // Esto hará que la pila crezca sin parar.
}
infinito();
// Aquí solo se agregan registros a la pila. Por ende, genero Stack Overflow.
```

