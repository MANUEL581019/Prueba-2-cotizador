
const ingredientes = [
        { nombre: "Azúcar", peso: 1000, precio: 21 },
        { nombre: "Harina", peso: 1000, precio: 19.5 },
        { nombre: "Sal", peso: 1000, precio: 6 },
        { nombre: "Levadura", peso: 1000, precio: 45},
        { nombre: "Mantequilla", peso: 1000, precio: 1700 },
        { nombre: "Leche", peso: 1000, precio: 23 },
        { nombre: "Fermento", peso: 1000, precio: 22 },
        { nombre: "Agua", peso: 1000, precio: 3 },
        
    ];

const recetasPanDulce = [
    {
        nombre: "Croissant",
        ingredientes: [
            { nombre: "Agua", cantidad: "350ml" },
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Leche", cantidad: "350ml" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "60g" },
            { nombre: "Sal", cantidad: "20g" }
        ],
        porciones: 20
    },
    {
        nombre: "Pan de muerto",
        ingredientes: [
            { nombre: "Harina", cantidad: "500g" },
            { nombre: "Azúcar", cantidad: "120g" },
            { nombre: "Levadura", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "100g" },
            { nombre: "Huevos", cantidad: "3 piezas" },
            { nombre: "Leche", cantidad: "200ml" },
            { nombre: "Ralladura de naranja", cantidad: "1 pieza" }
        ],
        porciones: 10
    },
    {
        nombre: "Cuerno",
        ingredientes: [
            { nombre: "Harina", cantidad: "400g" },
            { nombre: "Azúcar", cantidad: "80g" },
            { nombre: "Levadura", cantidad: "8g" },
            { nombre: "Mantequilla", cantidad: "70g" },
            { nombre: "Huevos", cantidad: "2 piezas" },
            { nombre: "Leche", cantidad: "180ml" }
        ],
        porciones: 8
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const tablaHTML = generarTablaPanDulce(recetasPanDulce);
    const tablaElemento = document.getElementById('tablaPanDulce');
    if (tablaElemento) {
        tablaElemento.innerHTML = tablaHTML;
    }
});
function generarTablaPanDulce(recetas) {
    let tabla = '<table border="1"><thead><tr><th>Nombre del Pan Dulce</th></tr></thead><tbody>';
    recetas.forEach(receta => {
        tabla += `<tr><td>${receta.nombre}</td></tr>`;
    });
    tabla += '</tbody></table>';
    return tabla;
}
function obtenerPrecioIngrediente(nombreIngrediente) {
    // Busca el ingrediente en la lista de ingredientes base (ignorando mayúsculas/minúsculas y variantes)
    const nombreNormalizado = nombreIngrediente.trim().toLowerCase();
    // Mapeo para normalizar nombres de ingredientes de recetas a los de la lista de ingredientes
    const equivalencias = {
        "harina de trigo": "harina",
        "azúcar": "azúcar",
        "levadura": "levadura",
        "mantequilla": "mantequilla",
        "huevos": "huevos",
        "leche": "leche",
        "ralladura de naranja": "extracto de naranja"
    };
    const nombreBusqueda = equivalencias[nombreNormalizado] || nombreNormalizado;
    return ingredientes.find(i => i.nombre.toLowerCase() === nombreBusqueda);
}

function parseCantidad(cantidad) {
    // Soporta "500g", "250ml", "2 piezas", "1 pieza"
    const match = cantidad.match(/^([\d.]+)\s*(g|ml|piezas?|)$/i);
    if (!match) return { cantidad: 0, unidad: "" };
    let valor = parseFloat(match[1]);
    let unidad = match[2].toLowerCase();
    if (unidad === "pieza" || unidad === "piezas") {
        // Para huevos, 1 pieza = 60g (según la lista de ingredientes)
        valor = valor * 60;
        unidad = "g";
    } else if (unidad === "ml") {
        // Para leche, 1ml = 1g (aprox. para agua/leche)
        unidad = "g";
    }
    return { cantidad: valor, unidad };
}

function calcularPrecioReceta(receta) {
    let total = 0;
    receta.ingredientes.forEach(ing => {
        const info = obtenerPrecioIngrediente(ing.nombre);
        if (!info) return;
        const { cantidad, unidad } = parseCantidad(ing.cantidad);
        // Solo calculamos si la unidad es gramos
        if (unidad === "g") {
            const precioPorGramo = info.precio / info.peso;
            total += cantidad * precioPorGramo;
        }
    });
    return total;
}

// Modifica la función para agregar las columnas de precio
function generarTablaPanDulce(recetas) {
    let tabla = '<table border="1"><thead><tr><th>Nombre del Pan Dulce</th><th>Precio por Receta</th><th>Precio por Pieza</th></tr></thead><tbody>';
    recetas.forEach(receta => {
        const precioReceta = calcularPrecioReceta(receta);
        const precioPorPieza = receta.porciones ? (precioReceta / receta.porciones) : 0;
        tabla += `<tr>
            <td>${receta.nombre}</td>
            <td>$${precioReceta.toFixed(2)}</td>
            <td>$${precioPorPieza.toFixed(2)}</td>
        </tr>`;
    });
    tabla += '</tbody></table>';
    return tabla;
}

// Exporta la función para usarla en PanDulce.js
module.exports.generarTablaPanDulce = generarTablaPanDulce;
