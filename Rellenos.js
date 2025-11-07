
const ingredientes = [
    
        { nombre: "Aceite", peso: 866, precio: 37.5 },
        { nombre: "Aceite de oliva", peso: 1000, precio: 150 },
        { nombre: "Aceituna negra", peso: 1000, precio: 190 },
        { nombre: "Agua", peso: 1000, precio: 3 },
        { nombre: "Ajo", peso: 1000, precio: 80 },
        { nombre: "Ajonjoli", peso: 1000, precio: 50 },
        { nombre: "Albahaca", peso: 1000, precio: 200 },
        { nombre: "Almendra entera", peso: 1000, precio: 150 },
        { nombre: "Almendra fileteada", peso: 1000, precio: 180 },
        { nombre: "Amaranto", peso: 1000, precio: 80 },
        { nombre: "Anis", peso: 1000, precio: 300 },
        { nombre: "Arandanos", peso: 1000, precio: 111 },
        { nombre: "Avena", peso: 1000, precio: 15 },
        { nombre: "Azahar", peso: 1000, precio: 200 },
        { nombre: "Azúcar", peso: 1000, precio: 21 },
        { nombre: "Azucar", peso: 1000, precio: 21 },
        { nombre: "Azucar glass", peso: 1000, precio: 38 },
        { nombre: "Azucar mascabado", peso: 1000, precio: 38 },
        { nombre: "Azucar morena", peso: 1000, precio: 38 },
        { nombre: "Bicarbonato", peso: 1000 , precio: 35 },
        { nombre: "Cacahuate", peso: 1000, precio: 70 },
        { nombre: "Cafe soluble", peso: 1000, precio: 320 },
        { nombre: "Canela", peso: 1000, precio: 800 },
        { nombre: "Cebada entera", peso: 1000, precio: 20 },
        { nombre: "Chai", peso: 1000, precio: 850 },
        { nombre: "Chipotle", peso: 1000, precio: 40 },
        { nombre: "Chocolate blanco", peso: 1000, precio: 300 },
        { nombre: "Chocolate rito", peso: 1000, precio: 310 },
        { nombre: "Chocolate turin", peso: 1000, precio: 250 },
        { nombre: "Clara", peso: 1000, precio: 45 },
        { nombre: "Clavo", peso: 1000, precio: 500 },
        { nombre: "Coco", peso: 1000, precio: 120 },
        { nombre: "Cocoa", peso: 1000, precio: 90 },
        { nombre: "Colorante", peso: 1000, precio: 900 },
        { nombre: "Crema", peso: 1000, precio: 65 },
        { nombre: "Crema batir", peso: 1000, precio: 110 },
        { nombre: "Crema cacahuate", peso: 1000 , precio: 80 },
        { nombre: "Durazno", peso: 1000, precio: 70 },
        { nombre: "Fecula maiz", peso: 1000, precio: 43 },
        { nombre: "Gouda", peso: 1000, precio: 150 },
        { nombre: "Grenetina", peso: 1000, precio: 350 },
        { nombre: "Cardamomo", peso: 1000, precio: 600 },
        { nombre: "Harina", peso: 1000, precio: 19.5 },
        { nombre: "Harina blanca", peso: 1000, precio: 10.5 },
        { nombre: "Harina cebada", peso: 10, precio: 40 },
        { nombre: "Harina centeno", peso: 1000, precio: 40 },
        { nombre: "Harina integral", peso: 1000, precio: 21 },
        { nombre: "Hierbas", peso: 1000, precio: 115 },
        { nombre: "Huevo", peso: 1000 , precio: 45 },
        { nombre: "Jamon", peso: 1000, precio: 180 },
        { nombre: "Leche", peso: 1000, precio: 23 },
        { nombre: "Leche dorada", peso: 1000, precio: 1000 },
        { nombre: "Leche en polvo", peso: 1000, precio: 60 },
        { nombre: "Levadura", peso: 1000, precio: 88 },
        { nombre: "Linaza", peso: 1000, precio: 22 },
        { nombre: "Longaniza", peso: 1000, precio: 120 },
        { nombre: "Mantequilla", peso: 1000, precio: 160 },
        { nombre: "Mantequilla de empaste", peso: 1000, precio: 160 },
        { nombre: "Matcha", peso: 1000, precio: 2400 },
        { nombre: "Mazapan", peso: 1000, precio: 100 },
        { nombre: "Menta", peso: 1000, precio: 50 },
        { nombre: "Mijo", peso: 1000, precio: 26 },
        { nombre: "Mole" , peso: 1000, precio: 110 },
        { nombre: "Mostaza", peso: 1000, precio: 140 },
        
    // Ingredientes adicionales
        { nombre: "Mozarella", peso: 1000, precio: 120 },
        { nombre: "Nuez castilla", peso: 1000, precio: 180 },
        { nombre: "Nuez pecana", peso: 1000, precio: 220 },
        { nombre: "Pan molido", peso: 1000, precio: 90 },
        { nombre: "Parmesano", peso: 1000, precio: 220 },
        { nombre: "Pepperoni", peso: 1000, precio: 160 },
        { nombre: "Piloncillo", peso: 1000, precio: 43 },
        { nombre: "Pollo entero", peso: 1000, precio: 140 },
        { nombre: "Pollo pechuga", peso: 1000, precio: 160 },
        { nombre: "Queso", peso: 1000, precio: 80 },
        { nombre: "Queso cotija", peso: 1000, precio: 130 },
        { nombre: "Queso crema", peso: 1000, precio: 100 },
        { nombre: "Ralladura de naranja", peso: 1000, precio: 1450 },
        { nombre: "Romero", peso: 1000, precio: 160 },
        { nombre: "Romero con oregano", peso: 1000, precio: 30 },
        { nombre: "Royal", peso: 1000, precio: 35 },
        { nombre: "Royal icing", peso: 1000, precio: 100 },
        { nombre: "Sal", peso: 1000, precio: 8 },
        { nombre: "Sal de grano", peso: 1000, precio: 30 },
        { nombre: "Salchicha", peso: 1000, precio: 80 },
        { nombre: "Salsa de tomate", peso: 1000, precio: 30 },
        { nombre: "Semillas de girasol", peso: 1000, precio: 70 },
        { nombre: "Semillas varias", peso: 1000, precio: 55 },
        { nombre: "Trigo entero", peso: 1000, precio: 22 }, 
        { nombre: "Vainilla", peso: 1000, precio: 35 },
        { nombre: "Yema", peso: 1000, precio: 45 },
        { nombre: "Tortillas", peso: 100, precio: 25 },
        
        // Rellenos

        { nombre: "Relleno de jamon", peso: 1000, precio: 92 },
        { nombre: "Relleno de espinacas", peso: 1000, precio: 63.5},

        //Rellenos de pan dulce
        { nombre: "Relleno Tarta tatin", peso: 1000, precio: 49.15 },
        { nombre: "Crema pastelera", peso: 1400, precio: 43.69 },
        { nombre: "Relleno Quiche", peso: 1500, precio: 100.30 },
        { nombre: "Relleno rehilete", peso: 733, precio: 74.56 },
        { nombre: "Relleno strudel", peso: 1400, precio: 101.02 },
        { nombre: "Relleno garra oso", peso: 1000, precio: 26.16 },
        { nombre: "Relleno cocoa romero", peso: 230, precio: 15.90 },
        { nombre: "Quesito", peso: 1300, precio: 111.40 },
        { nombre: "Relleno Strudel durazno", peso: 1400, precio: 139.02 },
        { nombre: "Relleno guayaba", peso: 700, precio: 2.10 },
        { nombre: "Mermelada fresa", peso: 650, precio: 39.15 },
        { nombre: "Tapa mazapan", peso: null, precio: 14.85 },
        { nombre: "Tapa chocolate", peso: null, precio: 14.85 },
        { nombre: "Crema diplomatica", peso: 550, precio: 38.37 },
        { nombre: "Mermelada mandarina", peso: 600, precio: 39.15 },
        { nombre: "Relleno mandarina", peso: 1200, precio: 82.36 },
        { nombre: "Relleno camote", peso: 3000, precio: 231.20 },


        //frutas y verduras 
{ nombre: "Aguacate", peso: 1000, precio: 95.00 },
{ nombre: "Betabel", peso: 1000, precio: 40.00 },
{ nombre: "Blueberry", peso: 1000, precio: 200.00 },
{ nombre: "Calabaza", peso: 1000, precio: 90.00 },
{ nombre: "Camote", peso: 1000, precio: 90.00 },
{ nombre: "Cebolla", peso: 1000, precio: 30.00 },
{ nombre: "Cebolla", peso: 1000, precio: 30.00 },
{ nombre: "Cebolla morada", peso: 1000, precio: 40.00 },
{ nombre: "Chile serrano", peso: 1000, precio: 30.00 },
{ nombre: "Cilantro", peso: 1000, precio: 50.00 },
{ nombre: "Elote", peso: 1000, precio: 60.00 },
{ nombre: "Frambuesa", peso: 1000, precio: 200.00 },
{ nombre: "Fresa", peso: 1000, precio: 60.00 },
{ nombre: "Guayaba", peso: 1000, precio: 50.00 },
{ nombre: "Jengibre", peso: 1000, precio: 80.00 },
{ nombre: "Jitomate", peso: 1000, precio: 30.00 },
{ nombre: "Lechuga", peso: 1000, precio: 35.00 },
{ nombre: "Limon", peso: 1000, precio: 40.00 },
{ nombre: "Mandarina", peso: 1000, precio: 60.00 },
{ nombre: "Naranja", peso: 1000, precio: 35.00 },
{ nombre: "Papa", peso: 1000, precio: 30.00 },
{ nombre: "Piña", peso: 1000, precio: 85.00 },
{ nombre: "Platano", peso: 1000, precio: 35.00 },
{ nombre: "Tomate", peso: 1000, precio: 30.00 },
{ nombre: "Tomatillo", peso: 1000, precio: 30.00 },
{ nombre: "Zanahoria", peso: 1000, precio: 30.00 },
{ nombre: "Zarzamora", peso: 1000, precio: 200.00 },
{ nombre: "Manzana", peso: 1000, precio: 35.00 },

       
   

  
];



const recetasRellenos = [
    {
        nombreRelleno: "Relleno Tarta Tatin",
        ingredientesDeRelleno: [
            { nombre: "Azúcar", cantidad: 50, unidad: "g" },
            { nombre: "Manzana", cantidad: 1000, unidad: "g" },
            { nombre: "Menta", cantidad: 10, unidad: "g" },
            { nombre: "Chai", cantidad: 6, unidad: "g" },
            { nombre: "Mantequilla", cantidad: 50, unidad: "g" }
        ],

    },
    {
        nombreRelleno: "Crema pastelera",
        ingredientesDeRelleno: [
{ nombre: "Azúcar", cantidad: 250, unidad: "g" },
{ nombre: "Leche", cantidad: 1000, unidad: "g" },
{ nombre: "Yema", cantidad: 160, unidad: "g" },
{ nombre: "Mantequilla", cantidad: 30, unidad: "g" },
{ nombre: "Fecula maiz", cantidad: 80, unidad: "g" }

        ],
    },
    {
nombreRelleno: "Relleno strudel",
ingredientesDeRelleno: [
    { nombre: "Manzana", cantidad: 1200, unidad: "g" },
    { nombre: "Mantequilla", cantidad: 60, unidad: "g" },
    { nombre: "Azucar", cantidad: 20, unidad: "g" },
    { nombre: "Nuez pecana", cantidad: 100, unidad: "g" },
    { nombre: "Nuez castilla", cantidad: 100, unidad: "g" },
    { nombre: "Pan molido", cantidad: 100, unidad: "g" }
],
    },
    {
nombreRelleno: "Relleno quiche",
ingredientesDeRelleno: [
    { nombre: "Huevo", cantidad: 1000, unidad: "g" },
    { nombre: "Leche", cantidad: 180, unidad: "g" },
    { nombre: "Sal", cantidad: 20, unidad: "g" },
    { nombre: "Gouda", cantidad: 100, unidad: "g" },
    { nombre: "Jamon", cantidad: 200, unidad: "g" }
],
    },
    {
nombreRelleno: "Relleno rehilete",
ingredientesDeRelleno: [
    { nombre: "Crema pastelera", cantidad: 380, unidad: "g" },
    { nombre: "Higo", cantidad: 285, unidad: "g" },
    { nombre: "Almendra fileteada", cantidad: 114, unidad: "g" },
    { nombre: "Azucar glass", cantidad: 60, unidad: "g" }
],
    },
    {
        nombreRelleno: "Crema de chocolate con leche",
        ingredientesDeRelleno: [
            { nombre: "Mora", cantidad: 1000, unidad: "g" },
            { nombre: "Azúcar", cantidad: 1000, unidad: "g" }
        ],
    },
];


function calcularPrecioRelleno(nombreRelleno) {
    const receta = recetasRellenos.find(r => r.nombreRelleno === nombreRelleno);
    if (!receta) return null;

    let precioTotal = 0;
    receta.ingredientesDeRelleno.forEach(ingredienteReceta => {
        // Buscar el ingrediente en la lista principal
        const ingrediente = ingredientes.find(i => i.nombre.toLowerCase() === ingredienteReceta.nombre.toLowerCase());
        if (ingrediente && ingrediente.peso && ingrediente.precio) {
            // Calcular el precio proporcional
            precioTotal += (ingredienteReceta.cantidad / ingrediente.peso) * ingrediente.precio;
        }
    });
    return precioTotal;
}

// Crear la tabla en el DOM
function mostrarTablaRellenos() {
    const tabla = document.getElementById('tablaRellenos');
    if (!tabla) return;

    // Limpiar tabla
    tabla.innerHTML = '';

    // Crear encabezado
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Nombre del Relleno</th>
            <th>Precio por kilo</th>
        </tr>
    `;
    tabla.appendChild(thead);

    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    recetasRellenos.forEach(receta => {
        let precioTotal = 0;
        let pesoTotal = 0;

        receta.ingredientesDeRelleno.forEach(ingredienteReceta => {
            const ingrediente = ingredientes.find(i => i.nombre.toLowerCase() === ingredienteReceta.nombre.toLowerCase());
            if (ingrediente && ingrediente.peso && ingrediente.precio) {
                precioTotal += (ingredienteReceta.cantidad / ingrediente.peso) * ingrediente.precio;
                pesoTotal += ingredienteReceta.cantidad;
            }
        });

        
        const precioPorKilo = pesoTotal > 0 ? (precioTotal / pesoTotal) * 1000 : null;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${receta.nombreRelleno}</td>
            <td>${precioPorKilo !== null ? precioPorKilo.toFixed(2) : 'N/A'}</td>
        `;
        tbody.appendChild(fila);
    });
    tabla.appendChild(tbody);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', mostrarTablaRellenos);


 

