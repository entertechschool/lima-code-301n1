# Pasar funciones como props

## Resumen

En la clase pasada, aprendiste a cómo pasar información de un parent component a un child component a través de `props`. Para esta clase, también vamos a pasar funciones a través de los `props`. También vamos a mostrar un componente anidado utilizando `.map` en lugar de programar cada uno individualmente.

## Descripción general

- Ejercicio de calentamiento
- Revisar los code challenges
- Introducción del tema del code challenge
- Revisión del código de la tarea de laboratorio.
- Demostración de código
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- Parent component
- Child component
- Operador Spread

#### Ejecutar

- Ser capaz de transmitir funciones de un parent component a un child component
- Entender qué es el operador spread
- Entender qué es `.map` y cómo utilizarlo para renderizar datos en una aplicación React

## Notas

1. ¿Cómo es que un child component puede actualizar el state de un parent component?

1. ¿Cómo es que un parent component envía una función a un child component?

1. Utilizando React-Bootstrap, ¿cómo determinarías si un modal está abierto o cerrado?

1. Permitir que el child component actualice el state en el parent component:

  - Paso 1. Envía una función al child component que actualice el state en el parent component

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'bob'
      }
    }

    updateName = (newName) => this.setState({ name: newName });

    render(){
      return(
        <Child updateName={this.updateName}>
      )
    }
  }
  ```

  - Paso 2. Llama a esa función desde los props en el child component
  ```javaScript
  class Child extends React.Component {
    constructor(props){
      super(props);
      this.state={
        newName:''
      }
    }

    // esta función llama a la función que nos envía el parent component con el nuevo nombre como argumento
    updateChildName = () => this.props.updateName(this.state.newName);

    render(){
      return(
        <>
          <form onSubmit={this.updateChildName}>
            <label>What is your new name?</label>
            <input onChange={() => this.setState({ newName: e.target.value })} />
          </form>
        </>
      )
    }
  }
  ```

  - Paso 3. La función llamada desde el child component actualizará el nombre en el parent component, ¡y listo! Tu child component ha cambiado esencialmente el state del parent component.