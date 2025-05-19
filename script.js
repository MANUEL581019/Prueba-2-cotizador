document.addEventListener("DOMContentLoaded", () => {
    
// INICIO DE TABLA INGREDIENTES

    // Ordenar ingredientes alfabéticamente
    
    ingredientes.sort((a, b) => a.nombre.localeCompare(b.nombre));

    const tablaEncabezadoIngredientes = document.querySelector("#tablaIngredientes thead tr");
    const tablaBodyIngredientes = document.querySelector("#tablaIngredientes tbody");

    // Agregar nueva columna al encabezado
    const nuevoEncabezado = document.createElement("th");
    nuevoEncabezado.textContent = "Precio por gramo ($)";
    tablaEncabezadoIngredientes.appendChild(nuevoEncabezado);

    ingredientes.forEach(ingrediente => {
        const fila = document.createElement("tr");
        const precioPorGramo = (ingrediente.precio / ingrediente.peso).toFixed(4); // Calcula el precio por gramo

        fila.innerHTML = `
            <td>${ingrediente.nombre}</td>
            <td>${ingrediente.peso}</td>
            <td>${ingrediente.precio}</td>
            <td>${precioPorGramo}</td>
        `;

        tablaBodyIngredientes.appendChild(fila);
    });
    



 

});