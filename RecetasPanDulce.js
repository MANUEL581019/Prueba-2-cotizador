
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
        { nombre: "Aguacate", peso: 1000, precio: 95 },
        { nombre: "Blueberry", peso: 1000, precio: 200 },
        { nombre: "Cebolla", peso: 1000, precio: 30 },
        { nombre: "Cebolla morada", peso: 1000, precio: 40 },
        { nombre: "Chile serrano", peso: 1000, precio: 30 },
        { nombre: "Cilantro", peso: 1000, precio: 50 },
        { nombre: "Frambuesa", peso: 1000, precio: 200 },
        { nombre: "Fresa", peso: 1000, precio: 60 },
        { nombre: "Jengibre", peso: 1000, precio: 80 },
        { nombre: "Jitomate", peso: 1000, precio: 30 },
        { nombre: "Lechuga", peso: 1000, precio: 35 },
        { nombre: "Papa", peso: 1000, precio: 30 },
        { nombre: "Tomate", peso: 1000, precio: 85 },
        { nombre: "Tomatillo", peso: 1000, precio: 30 },
        { nombre: "Zanahoria", peso: 1000, precio: 30 },
        { nombre: "Zarzamora", peso: 1000, precio: 30 },
        { nombre: "Betabel", peso: 1000, precio: 40 },
        { nombre: "Mandarina", peso: 1000, precio: 60 },
        { nombre: "Guayaba", peso: 1000, precio: 30 },
        { nombre: "Camote", peso: 1000, precio: 90 },

       
    // Tapas
    { nombre: "Tapa de mazapan", peso: 1000, precio: 14.85 },
    { nombre: "Tapa de chocolate", peso: 1000, precio: 14.85 },

    // masas 
    { nombre: "Masa cuernito", peso: 1000, precio: 54 },
    { nombre: "Masa concha", peso: 1000, precio: 49 },
    { nombre: "Masa galleta canela integral", peso: 1000, precio: 68 },
    { nombre: "Masa panettone", peso: 1000, precio: 53 },
    { nombre: "Masa baguette", peso: 1000, precio: 14 },
    { nombre: "Masa Garra", peso: 1000, precio: 48 },
    { nombre: "Masa Fruit cake", peso: 1000, precio: 59 },
    { nombre: "Masa caja", peso: 1000, precio: 21 },
    { nombre: "Masa empanada argentina", peso: 1000, precio: 32 },
    { nombre: "Masa colchon", peso: 1000, precio: 34 },
    { nombre: "Masa integral", peso: 1000, precio: 15 },
    { nombre: "Masa Focaccia", peso: 1000, precio: 22 },
    { nombre: "Masa cubilete", peso: 1000, precio: 54 },

    // rellenos
    { nombre: "Relleno Tarta tatin", peso: 1000, precio: 49.15 },
    { nombre: "Crema pastelera", peso: 1400, precio: 43.69 },
    { nombre: "Relleno Quiche", peso: 1500, precio: 100.30 },
    { nombre: "Relleno rehilete", peso: 733, precio: 74.56 },
    { nombre: "Relleno strudel", peso: 1400, precio: 101.02 },
    { nombre: "Relleno garra oso", peso: 1000, precio: 26.16 },
    { nombre: "Relleno cocoa romero", peso: 230, precio: 15.90 },
    { nombre: "Quesito", peso: 1300, precio: 141.40 },
    { nombre: "Strudel durazno", peso: 1400, precio: 139.02 },
    { nombre: "Relleno guayaba", peso: 1200, precio: 106.80 },
    { nombre: "Mermelada fresa", peso: 650, precio: 39.15 },
    { nombre: "Crema diplomatica", peso: 550, precio: 38.37 },
    { nombre: "Mermelada mandarina", peso: 600, precio: 39.15 },
    { nombre: "Relleno mandarina", peso: 1200, precio: 82.36 },
    { nombre: "Relleno camote", peso: 3000, precio: 246.20 },
    { nombre: "Mezcla nueces", peso: 400, precio: 62.00 },
    { nombre: "Relleno chai", peso: 432, precio: 72.81 },
    { nombre: "Relleno panettone", peso: 900, precio: 153.30 },
    { nombre: "Relleno calabaza", peso: 1500, precio: 120.80 },
    { nombre: "Relleno queso calabaza", peso: 1700, precio: 74.56 },
    { nombre: "Relleno piña", peso: 900, precio: 89.20 },
    { nombre: "Relleno nuez", peso: 500, precio: 42.21 },
    { nombre: "Relleno queso limon", peso: 1400, precio: 156.75 },


];



const recetasPanDulce = [
    {
        nombre: "Croissant",
        ingredientes: [
            { nombre: "Masa cuernito", cantidad: "2400g" },
        ],
        porciones: 20,
        preparacion: 313,
    },
    {
        nombre: "Banderilla",
        ingredientes: [
            { nombre: "Masa cuernito", cantidad: "2200g" },
            { nombre: "Azucar mascabado", cantidad: "120g" }
        ],
        porciones: 22,
        preparacion: 210,
    }, 
    {
        nombre: "Chocolatin",
        ingredientes: [
            { nombre: "Masa cuernito", cantidad: "2500g" },
            { nombre: "Chocolate turin", cantidad: "352g" }
        ],
        porciones: 22,
        preparacion: 328,
    },
    {
        nombre: "concha de chocolate",
        ingredientes: [
            { nombre: "Masa concha", cantidad: "2400g" },
            { nombre: "Tapa de concha", cantidad: "150g" },
        ],
        porciones: 12
    },
    {
        nombre: "Tarta tatin",
        ingredientes: [
            { nombre: "Masa cuernito", cantidad: "2500g" },
            { nombre: "Relleno Tarta tatin", cantidad: "3666g" }
        ],
        porciones: 22,
        preparacion: 400,
    },
    {
        nombre: "Rehilete",
        ingredientes: [
{ nombre: "Fermento", cantidad: "100g" },
{ nombre: "leche", cantidad: "250g" },
{ nombre: "Agua", cantidad: "350g" },
{ nombre: "Harina", cantidad: "1000g" },
{ nombre: "Levadura", cantidad: "20g" },
{ nombre: "Sal", cantidad: "22g" },
{ nombre: "Mantequilla", cantidad: "25g" },
{ nombre: "Azucar", cantidad: "100g" },
{ nombre: "Huevo", cantidad: "50g" },
{ nombre: "Mantequilla de empaste", cantidad: "400g" },
{ nombre: "Relleno rehilete", cantidad: "840g" }

        ],
        porciones: 19
    },
    {
        nombre: "Abanico",
        ingredientes: [
            { nombre: "Masa cuernito", cantidad: "2150g" },
            { nombre: "Chocolate turin", cantidad: "285g" }
        ],
        porciones: 18,
        preparacion: 120

    },
    {
        nombre: "Concha de mazapan",
        ingredientes: [
            { nombre: "Masa concha", cantidad: "2500g" },
            { nombre: "Tapa de mazapan", cantidad: "3666g" }
        ],
        porciones: 22
    },
    {
        nombre: "Gusanito de canela",
        ingredientes: [
{ nombre: "Fermento", cantidad: "40g" },
{ nombre: "Huevo", cantidad: "50g" },
{ nombre: "Agua", cantidad: "150g" },
{ nombre: "Harina", cantidad: "500g" },
{ nombre: "Levadura", cantidad: "10g" },
{ nombre: "Sal", cantidad: "5g" },
{ nombre: "Mantequilla", cantidad: "250g" },
{ nombre: "Azucar", cantidad: "50g" },
{ nombre: "Canela", cantidad: "10g" }

        ],
        porciones: 22
    },
    {
    nombre: "Piedra",
    ingredientes: [
        { nombre: "Fermento", cantidad: "50g" },
        { nombre: "Pan molido", cantidad: "250g" },
        { nombre: "Agua", cantidad: "150g" },
        { nombre: "Harina", cantidad: "250g" },
        { nombre: "Bicarbonato", cantidad: "4g" },
        { nombre: "Sal", cantidad: "2g" },
        { nombre: "Mantequilla", cantidad: "80g" },
        { nombre: "Azucar", cantidad: "30g" },
        { nombre: "Royal", cantidad: "6g" },
        { nombre: "Huevo", cantidad: "50g" },
        { nombre: "Piloncillo", cantidad: "100g" },
        { nombre: "Chocolate turin", cantidad: "75g" }
    ],
    porciones: 5
},
    {
    nombre: "Oreja cocoa romero",
    ingredientes: [
        { nombre: "Masa cuernito", cantidad: "2550g" },
        { nombre: "Relleno cocoa romero", cantidad: "253g" }
    ],
    porciones: 22
},
    {
        nombre: "Quiche",
        ingredientes: [
            { nombre: "Masa cuernito", cantidad: "2550g" },
            { nombre: "Relleno Quiche", cantidad: "1760g" }
        ],
        porciones: 22
    },
    {
    nombre: "Ojo de buey",
    ingredientes: [
        { nombre: "Agua", cantidad: "118g" },
        { nombre: "Harina", cantidad: "225g" },
        { nombre: "Levadura", cantidad: "30g" },
        { nombre: "Sal", cantidad: "12g" },
        { nombre: "Mantequilla", cantidad: "112g" },
        { nombre: "Azucar", cantidad: "14g" },
        { nombre: "Relleno ojo buey", cantidad: "" }
    ],
    porciones: 12
},
    {
        nombre: "Garra de oso",
        ingredientes: [
            { nombre: "Masa garra", cantidad: "3040g" },
            { nombre: "Relleno garra oso", cantidad: "1600g" }
        ],
        porciones: 32
    },
    {
    nombre: "Strudel",
    ingredientes: [
        { nombre: "Agua", cantidad: "100g" },
        { nombre: "Azucar", cantidad: "10g" },
        { nombre: "Fermento", cantidad: "0g" },
        { nombre: "Harina", cantidad: "250g" },
        { nombre: "Sal", cantidad: "2g" },
        { nombre: "Huevo", cantidad: "50g" },
        { nombre: "Mantequilla", cantidad: "50g" },
        { nombre: "Relleno strudel", cantidad: "1400g" }
    ],
    porciones: 12
}, ,
    {
    nombre: "Strudel durazno",
    ingredientes: [
{ nombre: "Agua", cantidad: "100g" },
{ nombre: "Azucar", cantidad: "10g" },
{ nombre: "Fermento", cantidad: "0g" },
{ nombre: "Harina", cantidad: "250g" },
{ nombre: "Sal", cantidad: "2g" },
{ nombre: "Huevo", cantidad: "50g" },
{ nombre: "Mantequilla", cantidad: "50g" },
{ nombre: "Strudel durazno", cantidad: "1400g" }

    ],
    porciones: 12
},
    {
    nombre: "Rol de guayaba",
    ingredientes: [
{ nombre: "Masa garra", cantidad: "2280g" },
{ nombre: "Relleno guayaba", cantidad: "1020g" },
{ nombre: "Quesito", cantidad: "240g" }

    ],
    porciones: 24
},
    {
    nombre: "Orejita de nueces",
ingredientes: [
    { nombre: "Masa cuernito", cantidad: "2250g" },
    { nombre: "Mezcla nueces", cantidad: "480g" }
],
porciones: 45
},
    {
    nombre: "Embrollo de chai",
    ingredientes: [
        { nombre: "Masa concha", cantidad: "2400g" },
        { nombre: "Relleno chai", cantidad: "644g" }
    ],
    porciones: 24
},
    {
    nombre: "Cheesecake danés",
ingredientes: [
    { nombre: "Masa garra", cantidad: "2640g" },
    { nombre: "Mermelada fresa", cantidad: "264g" },
    { nombre: "Quesito", cantidad: "840g" }
],
porciones: 24
},
    {
    nombre: "Dona mocca",
ingredientes: [
    { nombre: "Masa garra", cantidad: "2900g" },
    { nombre: "Cubierta mocca", cantidad: "432g" }
],
porciones: 24
},
    {
    nombre: "Cubilete crema pastelera",
ingredientes: [
    { nombre: "Masa cubilete", cantidad: "600g" },
    { nombre: "Crema pastelera", cantidad: "900g" }
],
porciones: 15
},
    {
    nombre: "Cubilete piña",
ingredientes: [
    { nombre: "Masa cubilete", cantidad: "2000g" },
    { nombre: "Relleno piña", cantidad: "2800g" }
],
porciones: 50
}

];




document.addEventListener('DOMContentLoaded', function() {
    // Filtra las recetas que NO son masas (no incluyen "masa" en el nombre)
    const recetasSinMasas = recetasPanDulce.filter(r => !r.nombre.toLowerCase().includes('masa'));
    const tablaHTML = generarTablaPanDulce(recetasSinMasas);
    const tablaElemento = document.getElementById('tablaPanDulce');
    if (tablaElemento) {
        tablaElemento.innerHTML = tablaHTML;
    }
});

function obtenerPrecioIngrediente(nombreIngrediente) {
    const nombreNormalizado = nombreIngrediente.trim().toLowerCase();
    const equivalencias = {
        "levadura": "levadura",
        "mantequilla": "mantequilla",
        "huevos": "huevos",
        "leche": "leche",
        "ralladura de naranja": "extracto de naranja"
    };
    const nombreBusqueda = equivalencias[nombreNormalizado] || nombreNormalizado;
    let ingrediente = ingredientes.find(i => i.nombre.toLowerCase() === nombreBusqueda);
    if (ingrediente) return ingrediente;
    return null;
}

function parseCantidad(cantidad) {
    const match = cantidad.match(/^([\d.]+)\s*(g|ml|piezas?|)$/i);
    if (!match) return { cantidad: 0, unidad: "" };
    let valor = parseFloat(match[1]);
    let unidad = match[2].toLowerCase();
    if (unidad === "pieza" || unidad === "piezas") {
        valor = valor * 60;
        unidad = "g";
    } else if (unidad === "ml") {
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
        if (unidad === "g") {
            const precioPorGramo = info.precio / info.peso;
            total += cantidad * precioPorGramo;
        }
    });
    if (total === 0 && receta.precio) {
        return receta.precio;
    }
    return total;
}

function generarTablaPanDulce(recetas) {
    let tabla = '<table border="1"><thead><tr><th>Nombre del Pan Dulce</th><th>Precio de venta</th></tr></thead><tbody>';
    recetas.forEach(receta => {
        const precioReceta = calcularPrecioReceta(receta);
        const precioPorPieza = receta.porciones ? (precioReceta / receta.porciones) : 0;
        const costoPreparacionPorPieza = receta.preparacion && receta.porciones ? (receta.preparacion / receta.porciones) : 0;
        const precioTotal = (precioPorPieza + costoPreparacionPorPieza);
        const precioVenta = Math.ceil(precioTotal / 0.4); 
        tabla += `<tr>
            <td>${receta.nombre}</td>
            <td>$${precioVenta}</td>
        </tr>`;
    });
    tabla += '</tbody></table>';
    return tabla;
}

recetasPanDulce.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));


