# Clase 11 - Base de Datos

## Ideas iniciales

- Datos: valores o hechos en crudo. Sin contexto.
- Información: datos relacionados dentro de un contexto para contar algo.

- Flujo común: Datos -> Información -> Decisiones.

- Las aplicaciones son canales de interactutar con datos.

- SQL: Structured Query Language -> Bases de Datos relacionales.
- NoSQL: Estilo de cómo se interactura con una Base de Datos NO relacional.

## Modelamiento (1ra vez y por ahí de vez en cuando)
El proceso de diseñar cómo vas a guardar los datos / cómo serán las relaciones.
- Bases de datos relacionales: SQL.
- Bases de datos NO relacionales: Librería / SDK (Software Development Kit)

## CRUD (diario)
Lo que todos los devs. quieren lograr hacer con los datos.

- Create: crear 
- Retrieve / Read: obtener / leer
- Update: actualizar / modificar
- Delete: borrar (es mentira)





### Base de datos relacionales:

- Solución para NO repetir los mismos datos muchas veces.
- Separar la información en datos, en diversas tablas.
- Luego, al momento de obtener los datos, juntas a partir de las relaciones y entregas.
- Esto logra que el almacenamiento sea más barato.

table: course
id, name

---

1 / Code 101
2 / Code 102
3 / Code 201

table: user
id, name, birth_date

---

25 / "Angel Paz" / "1994-08-17"
56 / "Matias Carrillo" / "2005-02-17"

table: grade
id, user_id, course_id, start_date, final_score

---

.
.
34 / 25 / 1 / 2024-03-05 / 16
.
.
89 / 25 / 2 / 2024-04-20 / 18
.
.
117 / 56 / 1 / 2024-05-12 / 18
.
.
234 / 25 / 3 / 2024-05-20 / 20

### Base de datos NO relacional:

- Ojo con el MITO: las NoSQL si que guardan relaciones en los datos.
- Guardan estructuras de datos completas.
- Ejemplo: LocalStorage guarda estructuras JSON.

```json
[
  {
    "user": {
      "name": "Angel Paz",
      "birth_date": "1994-08-17"
    },
    "grades": [
      {
        "101": {
          "section": "lima-code-101-xx",
          "final_score": 16
        }
      },
      {
        "102": {
          "section": "lima-code-102-nn",
          "final_score": 18
        }
      },
      {
        "201": {
          "section": "lima-code-201-nn",
          "final_score": 18
        }
      }
    ]
  },
  {
    "user": {
      "name": "Matias Carrillo",
      "birth_date": "1994-08-17"
    },
    "grades": [
      {
        "101": {
          "section": "lima-code-101-xx",
          "final_score": 16
        }
      },
      {
        "102": {
          "section": "lima-code-102-nn",
          "final_score": 18
        }
      },
      {
        "201": {
          "section": "lima-code-201-nn",
          "final_score": 18
        }
      }
    ]
  }
]
```
