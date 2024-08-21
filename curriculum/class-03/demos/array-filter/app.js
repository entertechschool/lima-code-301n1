// const ul_aprobados = document.getElementById("aprobados");
// const ul_desaprobados = document.getElementById("desaprobados");

const alumnos = [
  { nombre: "pepe", nota: 14 },
  { nombre: "charo", nota: 9 },
  { nombre: "raul", nota: 15 },
  { nombre: "juan", nota: 12 },
  { nombre: "andres", nota: 10 },
  { nombre: "andrea", nota: 13 },
];

const NOTA_MINIMA = 13;

function criteriosFiltroAprobado(alumno) {
  return alumno.nota >= NOTA_MINIMA;
}

const alumnos_aprobados = alumnos.filter(criteriosFiltroAprobado);
console.log(alumnos_aprobados);

const alumnos_aprobadazos = alumnos.filter((alumno) => alumno.nota >= 15);
console.log(alumnos_aprobadazos);

function criteriosFiltroDesaprobados(alumno) {
  return alumno.nota < NOTA_MINIMA;
}

const alumnos_desaprobados = alumnos.filter(criteriosFiltroDesaprobados);
console.log(alumnos_desaprobados);

// Lista a los alumnos aprobados y desaprobados
