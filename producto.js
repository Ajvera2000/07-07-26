// producto.js
class Producto {
    constructor(id, nombre, precioBase) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase; // <-- Añadido en Commit 3
    }

    obtenerDetalles() {
        return `Producto [${this.id}]: ${this.nombre} - Precio Base: $${this.precioBase}`;
    }

    // <-- Nuevo método añadido en Commit 3
    calcularPrecioConImpuesto(porcentajeImpuesto = 21) {
        const impuesto = this.precioBase * (porcentajeImpuesto / 100);
        return this.precioBase + impuesto;
    }
}

module.exports = Producto;