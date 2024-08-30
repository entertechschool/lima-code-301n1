# State y Props

## Resumen

Esta clase se centrará en pasar información como `props` de un parent component a un child component. También cubriremos el concepto de `state` y cómo los componentes individuales pueden contener el state.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción al tema del code challenge
- Revisión del código de la tarea de laboratorio.
- Demostración de código
- Bootstrap
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- JSON vs XML
- State
- Props
- React-Bootstrap
- Netlify
- setState

#### Ejecutar

- Comprender y definir los conceptos de `props` y `state` y su relación con los componentes de React.
- Transmitir información estática y dinámica de un parent component a un child component utilizando `props`
- Mantener la información como `state` en diferentes componentes
- Crear páginas web responsivas adecuadas para navegadores web de escritorio o móviles
- Integrar una librería de componentes de terceros en una aplicación React
- Desplegarlo en Netlify

## Notas

1. ¿Qué es el state?

1. ¿Qué son los props?

1. Para actualizar el state: `this.setState({ thingInState: thingToUpdate })`

1. Para enviar algo en props a un child component: `<ChildComponent bananas='randomString' />`

1. Para acceder a esa variable en los props desde el child component: `this.props.bananas`

1. La información fluye en una dirección. Esa dirección es ______________.

1. ¿Qué es Bootstrap?

1. ¿Cuáles son las diferentes cosas que puedo personalizar con Bootstrap?

1. ¿Cómo Bootstrap utiliza las clases para personalizar?

1. Mantener el state en un parent component y enviarlo a un child component:

  ```javaScript
  import React from 'react';
  import Child from './path-to-Child-component';

  class Parent extends React.Component {
    constructor(props);
    this.state={
      name: 'sue',
      childName: 'bob'
    }

    render() {
      return (
        <>
          <p>My name is {this.state.name}</p>
          <Child kidsName={this.state.childName}>
        </>
      )
    }
  }

  export default Parent

  import React from 'react';

  class Child extends React.Component {
    render() {
      return(
        <p>My name is {this.props.kidsName}</p>
      )
    }
  }

  export default Child
  ```
