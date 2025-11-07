const ingredientes = [
    { nombre: "Baguette", precio: 20 },
    { nombre: "Croissant", precio: 25 },
    { nombre: "Pan de chocolate", precio: 30 },
    { nombre: "Concha", precio: 15 }
];

// Asume que tienes un input con id="producto" y un botón con id="cotizarBtn"
// También un elemento para mostrar el resultado con id="resultado"

document.getElementById("botonDeCotizador").addEventListener("click", function() {
    // Busca todos los inputs de ingredientes y cantidades
    const ingredientesInputs = document.querySelectorAll('input[id^="nombreIngrediente"], input.ingrediente');
    const cantidadInputs = document.querySelectorAll('input[id^="cantidadProducto"], input.cantidad');
    let total = 0;
    let mensaje = "";

    for (let i = 0; i < ingredientesInputs.length; i++) {
        const producto = ingredientesInputs[i].value.trim();
        const cantidad = parseInt(cantidadInputs[i].value, 10) || 1;
        const encontrado = ingredientes.find(item => item.nombre.toLowerCase() === producto.toLowerCase());
        if (encontrado) {
            total += encontrado.precio * cantidad;
            mensaje += `El precio de ${cantidad} ${encontrado.nombre}(s) es $${encontrado.precio * cantidad}\n`;
        } else if (producto) {
            mensaje += `Producto "${producto}" no encontrado.\n`;
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = mensaje || "No se ingresaron productos válidos.";
});

document.getElementById("botonDeCalcular").addEventListener("click", function() {
    const container = document.getElementById("inputsContainer") || (() => {
        const div = document.createElement("div");
        div.id = "inputsContainer";
        document.body.insertBefore(div, document.querySelector(".botonesInicio"));
        return div;
    })();

    // Crear input de ingrediente
    const inputIngrediente = document.createElement("input");
    inputIngrediente.type = "text";
    inputIngrediente.placeholder = "Ingrediente";
    inputIngrediente.className = "ingrediente";

    // Crear input de cantidad
    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.placeholder = "Cantidad";
    inputCantidad.className = "cantidad";
    inputCantidad.min = "1";
    inputCantidad.value = "1";

    // Agregar los inputs al contenedor
    container.appendChild(inputIngrediente);
    container.appendChild(inputCantidad);
    container.appendChild(document.createElement("br"));
});
// Elimina este bloque para que no se borren los inputs al cotizar
// Si quieres limpiar solo el resultado, hazlo en el evento correspondiente