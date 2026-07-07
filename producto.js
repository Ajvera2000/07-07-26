// producto.js
class Producto {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    obtenerDetalles() {
        return `Producto [${this.id}]: ${this.nombre}`;
    }
}

module.exports = Producto;