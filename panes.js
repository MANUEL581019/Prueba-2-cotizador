document.addEventListener("DOMContentLoaded", () => {
    // Ingredientes y sus precios por gramo
   
    
//INICIO DE PAN DULCE
let precioTotal = 0;
let ingredientesLista = [];

// Recetas de panes con cantidades en gramos
const panDulce = [
    { nombre: "Croissant", ingredientes: { "Agua": 350, "Azúcar": 20, "Fermento": 100, "Harina": 1000, "Leche": 350, "Levadura" : 20, "Mantequilla": 60, "sal": 20  } },
    { nombre: "pan", ingredientes: { "Harina": 400, "Azúcar": 100, "Levadura": 10, "Sal": 5 } }
];

const tablaHeadPanDulce = document.querySelector("#tablaIngredientes thead tr");
const tablaBodyPanDulce = document.querySelector("#tablaPanDulce tbody");

panes.forEach(pan => {
   
    Object.keys(pan.ingredientes).forEach(ingrediente => {
        if (ingredientes[ingrediente]) {
            const precioPorGramo = ingredientes[ingrediente].precio / ingredientes[ingrediente].peso;
            const costoIngrediente = precioPorGramo * pan.ingredientes[ingrediente];
            precioTotal += costoIngrediente;
            ingredientesLista.push(`${ingrediente} (${pan.ingredientes[ingrediente]}g)`);
        }
    });

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${pan.nombre}</td>
        <td>${ingredientesLista.join(", ")}</td>
        <td>${precioTotal.toFixed(2)}</td>

    `;
    tablaBodyPanDulce.appendChild(fila);
});

});