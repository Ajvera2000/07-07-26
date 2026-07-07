// index.js
console.log("¡Servidor corriendo con éxito en Docker!");
console.log("Proyecto Colaborativo - Estudiante A y Estudiante B");

const Cliente = require("./cliente");

// Ejemplo de uso
const clienteDemo = new Cliente("Juan", "juan@example.com");
console.log("Email válido:", clienteDemo.validarEmail());
