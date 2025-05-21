
const ingredientes = [
    { nombre: "Azúcar", peso: 1000, precio: 21 },
        { nombre: "Harina", peso: 1000, precio: 21 },
        { nombre: "Sal", peso: 1000, precio: 8 },
        { nombre: "Levadura", peso: 1000, precio: 45 },
        { nombre: "Mantequilla", peso: 1000, precio: 160 },
        { nombre: "Leche", peso: 1000, precio: 23 },
        { nombre: "Fermento", peso: 1000, precio: 22 },
        { nombre: "Agua", peso: 1000, precio: 3 },
        { nombre: "Huevo", peso: 1000, precio: 45 },
        { nombre: "Tapa concha", peso: 1000, precio: 130 },
        { nombre: "Relleno de nata", peso: 1000, precio: 50 },
        { nombre: "Clara", peso: 1000, precio: 60 },
        { nombre: "Azúcar glass", peso: 1000, precio: 25 },
        { nombre: "Crema pastelera", peso: 1000, precio: 36 },
        { nombre: "Canela", peso: 100, precio: 60 },
        { nombre: "Chocolate", peso: 1000, precio: 250 },
        { nombre: "Azúcar morena", peso: 1000, precio: 38 },
        { nombre: "Leche en polvo", peso: 1000, precio: 60 },
        { nombre: "Harina integral", peso: 1 , precio: 1 },
        { nombre: "Harina blanca", peso: 50, precio: 50 },
        { nombre: "Harina cebada", peso: 50, precio: 200 },
        { nombre: "Harina centeno", peso: 250, precio: 150 },
        { nombre: "Mijo", peso: 10, precio: 300 },
        { nombre: "Linaza", peso: 50, precio: 250 },
        { nombre: "Trigo entero", peso: 200, precio: 90 },
        { nombre: "Cebada entera", peso: 500, precio: 35 },
        { nombre: "Avena", peso: 100, precio: 80 },
        { nombre: "Hierbas", peso: 1000, precio: 32 },
        { nombre: "Parmesano", peso: 1000, precio: 22 },
        { nombre: "Ajo", peso: 1000, precio: 8 },
        { nombre: "Aceitunas", peso: 1000, precio: 100 },
        { nombre: "Aceite de oliva", peso: 1000, precio: 150 },
        { nombre: "Romero con oregano", peso: 1000, precio: 30 },
        { nombre: "Jitomate", peso: 1000, precio: 45 },
        { nombre: "Sal de grano", peso: 1000, precio: 30 },
        { nombre: "Semillas varias", peso: 1 , precio: 1 },
        { nombre: "Relleno calabaza", peso: 1000, precio: 50 },
        { nombre: "Semillas", peso: 500, precio: 40 },
        { nombre: "Nuez de castilla", peso: 300, precio: 80 },
        { nombre: "Higo", peso: 100, precio: 60 },
        { nombre: "Albahaca", peso: 1000, precio: 15 },
        { nombre: "Mostaza", peso: 50, precio: 200 },
        { nombre: "Miel", peso: 250, precio: 150 },
        { nombre: "Relleno de espinacas", peso: 10, precio: 300 },
        { nombre: "Queso", peso: 50, precio: 250 },
        { nombre: "Chipotle", peso: 200, precio: 90 },
        { nombre: "Ajonjoli", peso: 500, precio: 35 },
        { nombre: "Salchicha", peso: 1 , precio: 1 },
        { nombre: "Relleno de pollo", peso: 50, precio: 50 },
        { nombre: "Relleno de jamon", peso: 500, precio: 40 },
        { nombre: "Relleno de cochinita", peso: 300, precio: 80 },
        { nombre: "Relleno de atun", peso: 100, precio: 60 },
        { nombre: "Espinacas", peso: 1000, precio: 15 },
        { nombre: "Salsa de tomate", peso: 50, precio: 200 },
        { nombre: "Peperoni", peso: 250, precio: 150 },
        { nombre: "Mozarella", peso: 10, precio: 300 },
        { nombre: "Pure de papa", peso: 50, precio: 250 },
        { nombre: "Romero", peso: 200, precio: 90 },
        { nombre: "Tocino", peso: 500, precio: 35 },
        { nombre: "Pistache", peso: 100, precio: 60 },
        { nombre: "Jamon serrano", peso: 1000, precio: 50 },
        { nombre: "Eneldo", peso: 50, precio: 50 },
        

        { nombre: "Vainilla", peso: 50, precio: 200 },
        { nombre: "Cacao", peso: 250, precio: 150 },


        { nombre: "Mano de obra", peso: 1 , precio: 1 },
        
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
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "20g" }, 
            { nombre: "Mano de obra", cantidad: "0g" }
        ],
        porciones: 20
    },
    {
        nombre: "Bolillito de nata",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "500ml" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Relleno de nata", cantidad: "28.5g" }
        ],
        porciones: 26
    },
    {
        nombre: "Concha de chocolate",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Clara", cantidad: "30g" }, 
            { nombre: "Azúcar glass", cantidad: "200g" },
            { nombre: "Crema pastelera", cantidad: "400g" },
            { nombre: "Canela", cantidad: "120g" }
        ],
        porciones: 23
    },
    {
        nombre: "Rol de canela",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Fermento", cantidad: "100g" }, 
            { nombre: "Chocolate", cantidad: "644g" }
        ],
        porciones: 20
    },
    {
        nombre: "Chocolatin",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Chocolate", cantidad: "352g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Fermento", cantidad: "100g" }, 
            { nombre: "Agua", cantidad: "350g" }
        ],
        porciones: 22
    },  
    {
        nombre: "Concha pinole",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Fermento", cantidad: "100g" }, 
            { nombre: "Nueces", cantidad: "644g" }
        ],
        porciones: 23
    },
    {
        nombre: "Tarta de queso",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Fermento", cantidad: "100g" }, 
            { nombre: "Semillas", cantidad: "644g" }
        ],
        porciones: 23
    },
    {
        nombre: "Garra de oso",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Fermento", cantidad: "100g" }, 
            { nombre: "Vainilla", cantidad: "644g" }
        ],
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

// Ordena las recetas alfabéticamente por nombre
recetasPanDulce.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));

// Exporta la función para usarla en PanDulce.js
module.exports.generarTablaPanDulce = generarTablaPanDulce;
