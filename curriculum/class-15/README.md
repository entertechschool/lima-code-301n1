# Inicio del Proyecto final

## Resumen

Esta es nuestra última clase formal. Es hora de agregar autenticación a nuestra aplicación, para que sepamos con cierto nivel de seguridad quiénes son nuestros usuarios.

Se te asignará a un equipo de proyecto. Para el siguiente módulo de este curso, trabajarás con el equipo del proyecto que se te fue asignado para armar tu proyecto final. El último día del curso, tu grupo presentará su proyecto.

## Descripción general

- Autenticación
- Demostración de código
- Vista previa del laboratorio
- Revisa los [requisitos finales del proyecto](./project-guidelines.md)

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- Autenticación
- Autorización
- Auth0
- Entiende los usos y aplicaciones de la Autenticación
- Entiende el concepto de OAuth

#### Ejecutar

- Poder implementar la autenticación utilizando Auth0 en la aplicación React

## Recursos útiles

[auth0](https://auth0.com/docs/libraries/auth0-react)

## Notas

1. La diferencia entre autenticación y autorización es...
1. Existen diferentes tipos de autenticación. Da un ejemplo de una autenticación utilizando OAuth.
1. ¿Cuál es la diferencia entre OAuth y Auth0?
1. ¿Qué es Auth0? ¿Cuáles son los requisitos para utilizar Auth0?
1. ¿Cómo Auth0 se asegura de que eres quien dices ser?
1. Componente LoginButton:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LoginButton = (props) => {
     const { loginWithRedirect } = useAuth0();

     return <button onClick={() => loginWithRedirect()}>Log In</button>;
   };

   export default LoginButton;
   ```

1. Componente LogOutButton:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LogoutButton = () => {
     const { logout } = useAuth0();

     return (
       <button onClick={() => logout({ returnTo: window.location.origin })}>
         Log Out
       </button>
     );
   };

   export default LogoutButton;
   ```

1. Componente IsLoadingAndError - debería envolver todo

   ```javaScript
   import React from 'react';
   import { withAuth0 } from '@auth0/auth0-react';

   class IsLoadingAndError extends React.Component {
     render() {
       return(
         this.props.auth0.isLoading ?
           <div> Loading...</div>
           :
           this.props.auth0.error ?
           <div>Oops... {this.props.auth0.error.message}</div>
           :
           this.props.children
       )
     }
   }

   export default withAuth0(IsLoadingAndError);
   ```

1. Componente Profile - mostrará la información del usuario. Hay más que podemos mostrar. Los detalles se pueden encontrar en la documentación.

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const Profile = () => {
     const { user, isAuthenticated, isLoading } = useAuth0();

     if (isLoading) {
       return <div>Loading ...</div>;
     }

     return (
       isAuthenticated && (
         <div>
           <img src={user.picture} alt={user.name} />
           <h2>{user.name}</h2>
           <p>{user.email}</p>
         </div>
       )
     );
   };

   export default Profile;

   ```