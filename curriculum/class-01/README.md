# React y la Arquitectura Basada en Componentes

## Resumen

En esta clase abarcaremos algunos temas nuevos y revisaremos conceptos con los que ya deberías estar familiarizado.

Dedicaremos un tiempo a revisar los conceptos del trabajo previo. También hablaremos de varios temas nuevos: Vite y la arquitectura basada en componentes.

## Descripción general

- Resumen del curso 301
- Revisión del trabajo previo
- Discusión sobre Vite
- Discusión sobre la arquitectura basada en componentes
- Introducción a los code challenges
- Introducción del tema del code challenge
- Preparación para el laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- Arquitectura basada en componentes
- React
- Vite
- Clases en JavaScript
- Arrow functions
- Comprender el scope con las arrow functions
- Comprender el contexto, el scope, "this" y la palabra clave "new"
- Comprender los conceptos básicos de React y cómo crear una aplicación básica de React
- Comprender la arquitectura basada en componentes y ser capaz de crear una aplicación sencilla basada en componentes en React

#### Ejecutar

- Ser capaz de crear una aplicación básica de React utilizando Vite.

## Notas

1. ¿Qué es React?
1. ¿Qué son los componentes?
1. ¿Cuál es la diferencia entre un arrow function y una declaración de función?
1. Convertir una declaración de función en un arrow function:

   ```javascript
   function doSomething(name) {
     // Haz algo
   }

   doSomething = (name) => {
     // Haz algo
   }

   // ¡O hazlo en una línea!
   doSomething = (name) => // Haz algo pequeño
   ```

1. La diferencia entre una función constructora y una clase (class):

   ```javascript
   // constructor
   function Cat(name) {
     this.name = name;
     this.fluffy = true;
   }

   Cat.prototype.speak = function(){
     console.log(`${this.name} says meow`);
   }

   // para crear una nueva instancia
   const bob = new Cat('Bob');
   bob.speak();

   // class
   class Cat {
     constructor(name) {
       this.name = name;
       this.fluffy = true;
     }

     speak = () => console.log(`${this.name} says meow`);
   }

   // para crear una nueva instancia
   const bob = new Cat('bob');
   bob.speak();
   ```

1. Estructura básica de los componentes de React:

   ```javascript
   import React from 'react';

   class Something extends React.Component {
     render() {
       return(
          <section>
            <h1>Header for Something</h1>
            <p>Text that is all about Something.<p>
          </section>
       )
     }
   }

   export default Something
   ```
