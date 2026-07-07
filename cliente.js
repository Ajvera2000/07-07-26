// cliente.js
// Cliente con validación de email

function Cliente(nombre, email) {
  this.nombre = nombre;
  this.email = email;
}

Cliente.prototype.validarEmail = function () {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(this.email);
};

module.exports = Cliente;
