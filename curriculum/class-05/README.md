# Clase 5: Juntando todo

## Resumen

Para esta clase, utilizaremos las habilidades que aprendimos durante el módulo pasado para armar una nueva aplicación: ¡city explorer! Tu laboratorio consistirá en tomar el código de inicio de React y convertirlo en un bonito portafolio.

## Descripción general

- Ejercicio de calentamiento
- Introducción del tema del code challenge
- Build City Explorer (React)
- Vista previa del laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- Renderizado Condicional
- Declaraciones Ternarias
- Browser Router

#### Ejecutar

- Ser capaz de crear una aplicación React que pase props del parent component al child component
- Retener el state en la aplicación
- Utilizar formularios en React
- Renderizar datos de forma condicional

## Notas

1. ¿Qué es la renderizado condicional?

1. ¿Qué es el Browser Router?

1. Una declaración ternaria:

  ```javaScript
  // un condicional if/else regular
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // declaración ternaria
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Renderizar un componente de forma condicional:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // utiliza una declaración ternaria para renderizar de forma condicional el child component
        {this.state.displayChild ?
          <Child>
        : ''
        }
      )
    }
  }
  ```

- Una mejor forma de escribirlo sería:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```