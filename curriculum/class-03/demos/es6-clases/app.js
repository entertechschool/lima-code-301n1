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

// Test:
const mazda = new Car("grey", "hatchback", "4cyl", "automatic");
console.log(`Is Moving? ${mazda.moving.toString()}`);
mazda.drive();
console.log(`Is Moving? ${mazda.moving.toString()}`);
mazda.stop();
console.log(`Is Moving? ${mazda.moving.toString()}`);
