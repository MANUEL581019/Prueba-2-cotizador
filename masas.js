
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
        { nombre: "Azúcar", peso: 1000, precio: 21 },
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
        { nombre: "Fermento", peso: 1000, precio: 12.5 },
        { nombre: "Frutos secos", peso: 1000, precio: 150 },
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
        { nombre: "Pasas", peso: 1000, precio: 50 },
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
        { nombre: "Ron", peso: 1000, precio: 200 },
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
        { nombre: "Royal", peso: 1000, precio: 35 },
        
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

       


    ];


const recetaMasa = [
    { 
        nombreDeMasa: "Masa cuernito",
        ingredientes: [
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "60g" },
            { nombre: "Sal", cantidad: "20g" }, 
            { nombre: "Mantequilla de empaste", cantidad: "580g" }
        ],
        pesoTotal: 2500, // 2.5kg en gramos
    }, 
    { 
        nombreDeMasa: "Masa concha",
        ingredientes: [
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Azúcar", cantidad: "160g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Huevo", cantidad: "250g" }
        ],
        pesoTotal: 2300, // 2.3kg en gramos
    }, 
    {
        nombreDeMasa: "Masa galleta canela integral",
        ingredientes: [
            { nombre: "Mantequilla", cantidad: "170g" },
            { nombre: "Azucar mascabado", cantidad: "190g" },
            { nombre: "Sal", cantidad: "1g" },
            { nombre: "Harina integral", cantidad: "380g" },
            { nombre: "Canela", cantidad: "10g" },
             ],
        pesoTotal: 750, // .75 kg en gramos
    },
    {
        nombreDeMasa: "Masa panettone",
        ingredientes: [
        { nombre: "Fermento", cantidad: "100g" },
        { nombre: "Azúcar", cantidad: "300g" },
        { nombre: "Harina", cantidad: "1000g" },
        { nombre: "Huevo", cantidad: "200g" },
        { nombre: "Leche", cantidad: "180g" },
        { nombre: "Levadura", cantidad: "30g" },
        { nombre: "Mantequilla", cantidad: "400g" },
        { nombre: "Yema", cantidad: "200g" },
        { nombre: "Ralladura de naranja", cantidad: "6g" },
        { nombre: "Mermelada mandarina", cantidad: "100g" }, 
             ],
        pesoTotal: 2500, // 2.5 kg en gramos
     },
    {
        nombreDeMasa: "Masa baguette",
                ingredientes: [
        { nombre: "Fermento", cantidad: "500g" },
        { nombre: "Harina", cantidad: "1300g" },
        { nombre: "Agua", cantidad: "800g" },
        { nombre: "Levadura", cantidad: "10g" },
        { nombre: "Sal", cantidad: "28g" }
                ],
                pesoTotal: 2600, // 2.6kg en gramos
    }, {
        nombreDeMasa: "Masa Garra",
        ingredientes: [
           
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Mantequilla", cantidad: "60g" },
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Mantequilla de empaste", cantidad: "500g" }
        ],
       pesoTotal: 2900, // 2.9kg en gramos
    }, {
        nombreDeMasa: "Masa Fruit cake",
        ingredientes: [
        { nombre: "Fermento", cantidad: "100g" },
        { nombre: "Azucar mascabado", cantidad: "140g" },
        { nombre: "Harina", cantidad: "250g" },
        { nombre: "Huevo", cantidad: "250g" },
        { nombre: "Mantequilla", cantidad: "240g" },
        { nombre: "Jengibre", cantidad: "10g" },
        { nombre: "Canela", cantidad: "10g" },
        { nombre: "Clavo", cantidad: "4g" },
        { nombre: "Royal", cantidad: "8g" },
        { nombre: "Frutos secos", cantidad: "260g" },
        { nombre: "Nuez pecana", cantidad: "30g" },
        { nombre: "Pasas", cantidad: "50g" },
        { nombre: "Almendra entera", cantidad: "30g" },
        { nombre: "Arandanos", cantidad: "50g" },
        { nombre: "Sal", cantidad: "4g" },
        { nombre: "Ralladura de naranja", cantidad: "6g" },
        { nombre: "Ron", cantidad: "100g" },
        { nombre: "Glaseado fruit cake", cantidad: "150g" },
        { nombre: "Galleta jengibre", cantidad: "1000g" }
    ],
    pesoTotal: 2700, // 2.7kg en gramos
}, {
    nombreDeMasa: "Masa caja",
    ingredientes: [
        { nombre: "Fermento", cantidad: "300g" },
        { nombre: "Azucar", cantidad: "30g" },
        { nombre: "Harina", cantidad: "300g" },
        { nombre: "Harina integral", cantidad: "300g" },
        { nombre: "Leche en polvo", cantidad: "20g" },
        { nombre: "Levadura", cantidad: "20g" },
        { nombre: "Agua", cantidad: "300g" },
        { nombre: "Mantequilla", cantidad: "40g" },
        { nombre: "Sal", cantidad: "12g" }
    ],
       pesoTotal: 1300, // 1.3kg en gramos
    }, {
    nombreDeMasa: "Masa empanada argentina",
        ingredientes: [
        { nombre: "Harina", cantidad: "500g" },
        { nombre: "Agua", cantidad: "250g" },
        { nombre: "Mantequilla", cantidad: "100g" },
        { nombre: "Sal", cantidad: "2g" }
   ],
    pesoTotal: 850, // 850g en gramos
    }, {
         nombreDeMasa: "Masa colchon",
        ingredientes: [
    
    { nombre: "Fermento", cantidad: "100g" },
    { nombre: "Leche", cantidad: "150g" },
    { nombre: "Harina", cantidad: "340g" },
    { nombre: "Mantequilla", cantidad: "60g" },
    { nombre: "Huevo", cantidad: "50g" },
    { nombre: "Yema", cantidad: "30g" },
    { nombre: "Azúcar", cantidad: "75g" },
    { nombre: "Sal", cantidad: "4g" },
    { nombre: "Levadura", cantidad: "15g" }

    ],
    pesoTotal: 820, // 820g en gramos
    },{
        nombreDeMasa: "Masa integral",
        ingredientes: [
{ nombre: "Levadura", cantidad: "10g" },
{ nombre: "Fermento", cantidad: "500g" },
{ nombre: "Harina", cantidad: "650g" },
{ nombre: "Harina integral", cantidad: "650g" },
{ nombre: "Agua", cantidad: "800g" },
{ nombre: "Sal", cantidad: "28g" },
{ nombre: "Levadura", cantidad: "10g" }

],
pesoTotal: 2600, // 2.6kg en gramos
},{
    nombreDeMasa: "Masa Focaccia",
    ingredientes: [
{ nombre: "Fermento", cantidad: "350g" },
{ nombre: "Harina", cantidad: "1000g" },
{ nombre: "Aceite de oliva", cantidad: "100g" },
{ nombre: "Levadura", cantidad: "30g" },
{ nombre: "Agua", cantidad: "500g" },
{ nombre: "Romero con oregano", cantidad: "10g" },
{ nombre: "Azucar", cantidad: "20g" },
{ nombre: "Sal", cantidad: "25g" }

    ],
    pesoTotal: 2000, // 2kg en gramos
},{
    nombreDeMasa: "Masa cubilete",
    ingredientes: [
        { nombre: "Fermento", cantidad: "0g" },
        { nombre: "Azucar", cantidad: "200g" },
        { nombre: "Huevo", cantidad: "300g" },
        { nombre: "Harina", cantidad: "960g" },
        { nombre: "Vainilla", cantidad: "40g" },
        { nombre: "Mantequilla", cantidad: "400g" },
        { nombre: "Sal", cantidad: "4g" }
    ],
    pesoTotal: 1900, // 1.9kg en gramos
}
];


function calcularPrecioPorKilo(masa, ingredientesLista) {
    let costoTotal = 0;
    masa.ingredientes.forEach(ing => {
        const ingrediente = ingredientesLista.find(i => i.nombre.toLowerCase() === ing.nombre.toLowerCase());
        if (ingrediente && ingrediente.peso && ingrediente.precio) {
            // Extraer cantidad en gramos
            const cantidad = parseFloat(ing.cantidad.replace('g', ''));
            // Calcular el costo proporcional
            costoTotal += (cantidad / ingrediente.peso) * ingrediente.precio;
        }
    });
    // Precio por kilo
    return masa.pesoTotal ? (costoTotal / masa.pesoTotal) * 1000 : 0;
}

const tabla = document.getElementById('tablaMasas');
recetaMasa.forEach(masa => {
    const fila = tabla.insertRow();
    const celdaNombre = fila.insertCell();
    celdaNombre.textContent = masa.nombreDeMasa;
    const celdaDetalles = fila.insertCell();
    /*
    celdaDetalles.innerHTML = masa.ingredientes.map(ing => {
        const ingrediente = ingredientes.find(i => i.nombre.toLowerCase() === ing.nombre.toLowerCase());
        if (ingrediente && ingrediente.peso && ingrediente.precio) {
            const cantidad = parseFloat(ing.cantidad.replace('g', ''));
            const costoPorMasa = (cantidad / ingrediente.peso) * ingrediente.precio;
            return `<div>${ing.nombre}: $${costoPorMasa.toFixed(2)} por masa</div>`;
        }
        return `<div>${ing.nombre}: N/A</div>`;
    }).join('');
    */

    const celdaPrecio = fila.insertCell();
    const precioPorKilo = calcularPrecioPorKilo(masa, ingredientes);
    celdaPrecio.textContent = `$${Math.ceil(precioPorKilo)} `;
});