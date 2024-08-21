// Convertir la siguiente función constructora en una class de JavaScript adecuada:

function Car(color, bodyType, engineSize, transmission) {
  this.color = color;
  this.bodyType = bodyType;
  this.engineSize = engineSize;
  this.transmission = transmission;
  this.moving = false;
}

Car.prototype.drive = function () {
  this.moving = true;
};

Car.prototype.stop = function () {
  this.moving = false;
};

// Comienza aqui:

class Carro {
  constructor(color, tipo, motor, transmision) {
    this.color = color;
    this.tipo = tipo;
    this.motor = motor;
    this.transmision = transmision;
    this.moving = false;
  }

  drive() {
    this.moving = true;
  }

  stop() {
    this.moving = false;
  }
}

// Test:
const mazda = new Carro("grey", "hatchback", "4cyl", "automatic");

carrito.drive();

console.log(`Is Moving? ${mazda.moving.toString()}`); // false
mazda.drive();
console.log(`Is Moving? ${mazda.moving.toString()}`); // true
mazda.stop();
console.log(`Is Moving? ${mazda.moving.toString()}`); // false
