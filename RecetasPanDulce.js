
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
        { nombre: "Relleno de nata", peso: 1000, precio: 50 },
        { nombre: "Clara", peso: 1000, precio: 60 },
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
        { nombre: "Tocino", peso: 500, precio: 35 },
        { nombre: "Pistache", peso: 100, precio: 60 },
        { nombre: "Jamon serrano", peso: 1000, precio: 50 },
        { nombre: "Eneldo", peso: 50, precio: 50 },
        { nombre: "Nuez", peso: 50, precio: 200 },
        { nombre: "Almendras", peso: 100, precio: 300 },
        { nombre: "Crema pastelera", peso: 300, precio: 80 },
        { nombre: "Relleno de fresa", peso: 100, precio: 60 },
        { nombre: "Tapa concha", peso: 1000, precio: 15 },
        { nombre: "Relleno nata", peso: 1000, precio: 15 },
        { nombre: "Masa de concha", peso: 1000, precio: 50 },
        { nombre: "Relleno embrollo", peso: 1000, precio: 80 },
        { nombre: "Almendras", peso: 1000, precio: 300 },
        { nombre: "Relleno guayaba", peso: 1000, precio: 90 },
        { nombre: "Frutos secos", peso: 1000, precio: 200 },
        { nombre: "Canela y anís", peso: 1000, precio: 80 },
        { nombre: "Ron", peso: 1000, precio: 200 },
        { nombre: "Almendras", peso: 1000, precio: 15 },
        { nombre: "Pasitas", peso: 1000, precio: 120 },
        { nombre: "Pera", peso: 1000, precio: 60 },
        { nombre: "Azúcar glass", peso: 1000, precio: 25 },
        { nombre: "Almendras", peso: 1000, precio: 300 },
        { nombre: "Limón y jengibre", peso: 1000, precio: 70 },
        { nombre: "Aceite", peso: 1000, precio: 50 },
        { nombre: "Manzana", peso: 1000, precio: 60 },
        { nombre: "Relleno nuez", peso: 1000, precio: 200 },
        { nombre: "Miel de maple", peso: 1000, precio: 180 },
        { nombre: "Plátano", peso: 1000, precio: 60 },
        { nombre: "Vainilla", peso: 1000, precio: 70 },
        { nombre: "Relleno de piña", peso: 1000, precio: 250 },
        { nombre: "Semillas de girasol", peso: 1000, precio: 120 },
        { nombre: "Bicarbonato", peso: 1000, precio: 80 },
        { nombre: "Royal", peso: 1000, precio: 120 },
        { nombre: "Durazno", peso: 1000, precio: 60 },
        { nombre: "Relleno manzana", peso: 1000, precio: 90 }, 
        { nombre: "Pan molido", peso: 1000, precio: 40 },
        { nombre: "Piloncillo", peso: 1000, precio: 35 },
        { nombre: "Colorante", peso: 100, precio: 80 },
        { nombre: "Pasta choux", peso: 1000, precio: 120 },
        { nombre: "Diplomática de fresa", peso: 1000, precio: 150 },
        { nombre: "Buttercream", peso: 1000, precio: 200 },
        { nombre: "Crema", peso: 1000, precio: 60 },
        { nombre: "Arándanos", peso: 1000, precio: 200 },
        { nombre: "Almendras fileteadas", peso: 1000, precio: 320 },
        { nombre: "Queso crema", peso: 1000, precio: 180 },
        { nombre: "Cocoa", peso: 1000, precio: 150 },
        { nombre: "Romero", peso: 1000, precio: 30 }
       
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
        porciones: 24
    },
    {
        nombre: "Cornetto",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "200g" },
            { nombre: "Leche", cantidad: "360g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "620g" },
            { nombre: "Sal", cantidad: "5g" },
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Semillas de girasol", cantidad: "240g" }
        ],
        porciones: 21
    },
    {
        nombre: "Cubilete de crema pastelera",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "960g" },
            { nombre: "Huevo", cantidad: "300g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "50g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Crema pastelera", cantidad: "3000g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Nuez", cantidad: "240g" }
        ],
        porciones: 50
    },
    {
        nombre: "Moño",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "350g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "660g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Pasitas", cantidad: "560g" },
            { nombre: "Crema pastelera", cantidad: "400g" }
        ],
        porciones: 24
    },
    {
        nombre: "Riel de fresa-zarzamora y queso",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "700g" },
            { nombre: "Leche", cantidad: "0g" },
            { nombre: "Levadura", cantidad: "4g" },
            { nombre: "Mantequilla", cantidad: "630g" },
            { nombre: "Sal", cantidad: "20g" },
            { nombre: "Relleno de fresa", cantidad: "1458g" },
            { nombre: "Crema pastelera", cantidad: "350g" },
            { nombre: "Almendras", cantidad: "160g" }
        ],
        porciones: 24
    },

    {
        nombre: "Riel de piña",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "700g" },
            { nombre: "Leche", cantidad: "0g" },
            { nombre: "Levadura", cantidad: "4g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "20g" },
            { nombre: "Relleno de piña", cantidad: "810g" }
        ],
        porciones: 6
    },
       
    { nombre: "Rehilete de higo",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Huevo", cantidad: "100g" },
            { nombre: "Higo", cantidad: "300g" }
        ],
        porciones: 20
    },
    {
        nombre: "Embrollo de chai",
        ingredientes: [
            { nombre: "Masa de concha", cantidad: "1200g" },
            { nombre: "Harina", cantidad: "400g" },
            { nombre: "Huevo", cantidad: "100g" },
            { nombre: "Leche", cantidad: "200g" },
            { nombre: "Levadura", cantidad: "8g" },
            { nombre: "Mantequilla", cantidad: "100g" },
            { nombre: "Crema", cantidad: "56g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Relleno embrollo", cantidad: "1000g" },
            { nombre: "Almendras", cantidad: "60g" }
        ],
        porciones: 60
    },
    {
        nombre: "Bisquet",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "300g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "8g" },
            { nombre: "Mantequilla", cantidad: "350g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Royal", cantidad: "6g" }
        ],
        porciones: 6
    },
    {
        nombre: "Riel de guayaba",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "700g" },
            { nombre: "Leche", cantidad: "0g" },
            { nombre: "Levadura", cantidad: "8g" },
            { nombre: "Mantequilla", cantidad: "630g" },
            { nombre: "Sal", cantidad: "20g" },
            { nombre: "Relleno guayaba", cantidad: "1458g" }
        ],
        porciones: 28
    },
    {
        nombre: "Rol navideño",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Azúcar glass", cantidad: "200g" },
            { nombre: "Vainilla", cantidad: "10g" },
            { nombre: "Frutos secos", cantidad: "880g" },
            { nombre: "Crema pastelera", cantidad: "400g" },
            { nombre: "Canela y anís", cantidad: "120g" },
            { nombre: "Ron", cantidad: "120g" }
        ],
        porciones: 24
    },
    {
        nombre: "Brownie",
        ingredientes: [
            { nombre: "Azúcar mascabado", cantidad: "90g" },
            { nombre: "Chocolate", cantidad: "240g" },
            { nombre: "Huevo", cantidad: "150g" },
            { nombre: "Harina", cantidad: "120g" },
            { nombre: "Mantequilla", cantidad: "180g" },
            { nombre: "Nuez", cantidad: "" },
            { nombre: "Azúcar glass", cantidad: "200g" },
            { nombre: "Vainilla", cantidad: "10g" }
        ],
        porciones: 24
    },
    {
        nombre: "Orejita",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "120g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Nuez", cantidad: "200g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "20g" }
        ],
        porciones: 24
    },
    {
        nombre: "Abánicos",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "650g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "20g" },
            { nombre: "Chocolate", cantidad: "384g" }
        ],
        porciones: 20
    },
    {
        nombre: "Roll de almendra",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Almendras", cantidad: "336g" }
        ],
        porciones: 12
    },
    {
        nombre: "Cuerno dulce",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Crema pastelera", cantidad: "600g" }
        ],
        porciones: 28
    }, 

    {
        nombre: "Rol de canela pasas y nueces",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Nuez", cantidad: "240g" },
            { nombre: "Pasitas", cantidad: "560g" },
            { nombre: "Crema pastelera", cantidad: "400g" },
            { nombre: "Canela", cantidad: "120g" }
        ],
        porciones: 8
    },
    {
        nombre: "Strudel de pera con almendras",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "10g" },
            { nombre: "Harina", cantidad: "250g" },
            { nombre: "Agua", cantidad: "100g" },
            { nombre: "Huevo", cantidad: "50g" },
            { nombre: "Mantequilla", cantidad: "50g" },
            { nombre: "Sal", cantidad: "2g" },
            { nombre: "Pera", cantidad: "1200g" },
            { nombre: "Azúcar glass", cantidad: "60g" },
            { nombre: "Almendras", cantidad: "200g" },
            { nombre: "Canela", cantidad: "120g" }
        ],
        porciones: 26
    },
    {
        nombre: "Rebanada de mantequilla",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "300g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "300g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "600g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Limón y jengibre", cantidad: "40g" },
            { nombre: "Aceite", cantidad: "10g" }
        ],
        porciones: 12
    },
    {
        nombre: "Strudel de manzana original",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "10g" },
            { nombre: "Harina", cantidad: "250g" },
            { nombre: "Agua", cantidad: "100g" },
            { nombre: "Huevo", cantidad: "50g" },
            { nombre: "Mantequilla", cantidad: "50g" },
            { nombre: "Sal", cantidad: "2g" },
            { nombre: "Manzana", cantidad: "1400g" },
            { nombre: "Azúcar glass", cantidad: "60g" },
            { nombre: "Canela", cantidad: "90g" }
        ],
        porciones: 40
    },
    {
        nombre: "Tarta de nuez",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "240g" },
            { nombre: "Huevo", cantidad: "190g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "" },
            { nombre: "Mantequilla", cantidad: "100g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Relleno nuez", cantidad: "1820g" },
            { nombre: "Miel de maple", cantidad: "200g" },
            { nombre: "Nuez", cantidad: "200g" }
        ],
        porciones: 50
    },
    {
        nombre: "Pan francés",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "160g" },
            { nombre: "Harina", cantidad: "760g" },
            { nombre: "Huevo", cantidad: "240g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "150g" },
            { nombre: "Sal", cantidad: "10g" },
            { nombre: "Aceite", cantidad: "10g" },
            { nombre: "Plátano", cantidad: "720g" },
            { nombre: "Canela", cantidad: "90g" }
        ],
        porciones: 50
    },
    {
        nombre: "Strudel de pera al vino tinto",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "" },
            { nombre: "Harina", cantidad: "" },
            { nombre: "Huevo", cantidad: "" },
            { nombre: "Azúcar", cantidad: "" },
            { nombre: "Vainilla", cantidad: "60g" },
            { nombre: "Levadura", cantidad: "" },
            { nombre: "Mantequilla", cantidad: "" },
            { nombre: "Sal", cantidad: "" },
            { nombre: "Relleno de piña", cantidad: "3060g" },
            { nombre: "Crema pastelera", cantidad: "" },
            { nombre: "Semillas de girasol", cantidad: "" }
        ],
        porciones: 7
    },
    {
        nombre: "Cubilete de piña",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "960g" },
            { nombre: "Huevo", cantidad: "300g" },
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Vainilla", cantidad: "60g" },
            { nombre: "Levadura", cantidad: "" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "10g" },
            { nombre: "Relleno de piña", cantidad: "3060g" },
            { nombre: "Crema pastelera", cantidad: "" },
            { nombre: "Semillas de girasol", cantidad: "" }
        ],
        porciones: 24
    },
    {
        nombre: "Carterita de pastelera",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Pasitas", cantidad: "120g" },
            { nombre: "Crema pastelera", cantidad: "800g" }
        ],
        porciones: 21
    },
    {
        nombre: "Concha vainilla",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "24g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Tapa concha", cantidad: "588g" }
        ],
        porciones: 25
    }, 
    {

        nombre: "Banderillas",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "300g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Mascabado", cantidad: "660g" }
        ],
        porciones: 6
    },
    {
        nombre: "Colchon",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "80g" },
            { nombre: "Harina", cantidad: "380g" },
            { nombre: "Huevo", cantidad: "120g" },
            { nombre: "Leche", cantidad: "250g" },
            { nombre: "Levadura", cantidad: "23g" },
            { nombre: "Mantequilla", cantidad: "75g" },
            { nombre: "Sal", cantidad: "5g" }
        ],
        porciones: 21
    },
    {
        nombre: "Cuerno de rehilete",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Huevo", cantidad: "100g" }
        ],
        porciones: 20
    },
    {
        nombre: "Brownie",
        ingredientes: [
            { nombre: "Azúcar mascabado", cantidad: "90g" },
            { nombre: "Chocolate", cantidad: "240g" },
            { nombre: "Huevo", cantidad: "150g" },
            { nombre: "Harina", cantidad: "120g" },
            { nombre: "Mantequilla", cantidad: "180g" },
            { nombre: "Nuez", cantidad: "" },
            { nombre: "Azúcar glass", cantidad: "200g" },
            { nombre: "Vainilla", cantidad: "10g" }
        ],
        porciones: 24
    },
    {
        nombre: "Concha mazapán",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "160g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "25g" },
            { nombre: "Mantequilla", cantidad: "400g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Tapa concha", cantidad: "588g" }
        ],
        porciones: 6
    },
    {
        nombre: "Rehilete de durazno",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Huevo", cantidad: "100g" },
            { nombre: "Durazno", cantidad: "320g" }
        ],
        porciones: 5
    },
    {
        nombre: "Tarta de manzana",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "480g" },
            { nombre: "Huevo", cantidad: "150g" },
            { nombre: "Vainilla", cantidad: "30g" },
            { nombre: "Bicarbonato", cantidad: "4g" },
            { nombre: "Mantequilla", cantidad: "200g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Royal", cantidad: "4g" },
            { nombre: "Relleno manzana", cantidad: "" },
            { nombre: "Agua", cantidad: "100g" }
        ],
        porciones: 9
    }, 

    {
        nombre: "Piedra",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "30g" },
            { nombre: "Harina", cantidad: "250g" },
            { nombre: "Pan molido", cantidad: "250g" },
            { nombre: "Piloncillo", cantidad: "100g" },
            { nombre: "Mantequilla", cantidad: "80g" },
            { nombre: "Sal", cantidad: "3g" },
            { nombre: "Huevo", cantidad: "60g" },
            { nombre: "Agua", cantidad: "100g" },
            { nombre: "Chocolate", cantidad: "90g" },
            { nombre: "Canela", cantidad: "10g" }
        ],
        porciones: 9
    },
    {
        nombre: "Gusanito de canela",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "25g" },
            { nombre: "Harina", cantidad: "240g" },
            { nombre: "Canela", cantidad: "8g" },
            { nombre: "Mantequilla", cantidad: "112g" },
            { nombre: "Sal", cantidad: "2g" },
            { nombre: "Agua", cantidad: "150g" },
            { nombre: "Royal", cantidad: "2g" },
            { nombre: "Huevo", cantidad: "230g" },
            { nombre: "Leche", cantidad: "125g" }
        ],
        porciones: 9
    },
    {
        nombre: "Pasta choux patisserie",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "4g" },
            { nombre: "Harina", cantidad: "125g" },
            { nombre: "Agua", cantidad: "125g" },
            { nombre: "Leche", cantidad: "125g" },
            { nombre: "Mantequilla", cantidad: "110g" },
            { nombre: "Sal", cantidad: "2g" },
            { nombre: "Huevo", cantidad: "230g" }
        ],
        porciones: 1
    },
    {
        nombre: "Pasta choux José Ramón",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "4g" },
            { nombre: "Harina", cantidad: "150g" },
            { nombre: "Agua", cantidad: "125g" },
            { nombre: "Leche", cantidad: "125g" },
            { nombre: "Mantequilla", cantidad: "125g" },
            { nombre: "Sal", cantidad: "2g" },
            { nombre: "Huevo", cantidad: "230g" }
        ],
        porciones: 1
    },
    {
        nombre: "Craquelin patisserie",
        ingredientes: [
            { nombre: "Azúcar glass", cantidad: "50g" },
            { nombre: "Harina", cantidad: "60g" },
            { nombre: "Mantequilla", cantidad: "60g" },
            { nombre: "Colorante", cantidad: "10g" }
        ],
        porciones: 6
    },
    {
        nombre: "Profiterol Santa",
        ingredientes: [
            { nombre: "Pasta choux", cantidad: "1000g" },
            { nombre: "Diplomática de fresa", cantidad: "80g" },
            { nombre: "Buttercream", cantidad: "80g" }
        ],
        porciones: 24
    }, 
    {
        nombre: "Scone",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "400g" },
            { nombre: "Huevo", cantidad: "100g" },
            { nombre: "Leche", cantidad: "200g" },
            { nombre: "Levadura", cantidad: "8g" },
            { nombre: "Mantequilla", cantidad: "100g" },
            { nombre: "Crema", cantidad: "56g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Arándanos", cantidad: "48g" },
            { nombre: "Chocolate", cantidad: "48g" },
            { nombre: "Almendras fileteadas", cantidad: "48g" },
            { nombre: "Azúcar glass", cantidad: "50g" },
            { nombre: "Royal", cantidad: "6g" },
            { nombre: "Queso crema", cantidad: "240g" },
            { nombre: "Canela", cantidad: "" }
        ],
        porciones: 20
    },
    {
        nombre: "Rol de guayaba",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "560g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Guayaba", cantidad: "720g" }
        ],
        porciones: 24
    },
    {
        nombre: "Oreja de cocoa con romero",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "20g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Agua", cantidad: "650g" },
            { nombre: "Leche", cantidad: "350g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "640g" },
            { nombre: "Sal", cantidad: "20g" },
            { nombre: "Cocoa", cantidad: "200g" },
            { nombre: "Romero", cantidad: "100g" },
            { nombre: "Azúcar", cantidad: "300g" }
        ],
        porciones: 24
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
