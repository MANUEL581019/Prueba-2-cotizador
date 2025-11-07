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
        { nombre: "Strudel durazno", peso: 1400, precio: 139.02 },
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

        // Masas 
        { nombre: "Fermento", peso: 1000, precio: 12.20 },
        { nombre: "Masa madre", peso: 1000, precio: 25.50 },
        { nombre: "Masa cuerno", peso: 1000, precio: 53.82 },
        { nombre: "Masa concha", peso: 1000, precio: 48.18 },
        { nombre: "Masa garra", peso: 1000, precio: 47.85 },
        { nombre: "Masa baguette", peso: 1000, precio: 13.44 },
        { nombre: "Masa panettone", peso: 1000, precio: 52.43 },
        { nombre: "Masa fruit cake", peso: 1000, precio: 124.23 },
        { nombre: "Masa caja", peso: 1000, precio: 17.40 },
        { nombre: "Masa empanada argentina", peso: 1000, precio: 19.72 },
        { nombre: "Masa focaccia", peso: 1000, precio: 21.91 },
        { nombre: "Masa integral", peso: 1000, precio: 17.40 },
        { nombre: "Masa colchon", peso: 1000, precio: 33.45 },
        { nombre: "Masa galleta integral", peso: 1000, precio: 57.88 },
        { nombre: "Masa cubilete", peso: 1000, precio: 53.50 },
        
      
        
    ];

const recetasPanSalado = [
    
    {       nombre: "Baguettin",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "1500g" },
            { nombre: "Aceituna negra", cantidad: "200g" }, 
        ],
        porciones: 13,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Beguel",
        ingredientes: [
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Harina", cantidad: "520g" },
            { nombre: "Agua", cantidad: "300ml" },
            { nombre: "Azucar", cantidad: "80g" },
            { nombre: "Mantequilla", cantidad: "20g" },
            { nombre: "Levadura", cantidad: "10g" },
            { nombre: "Sal", cantidad: "10g" }
        ],
        porciones: 7,
        tiempoPreparacion: "240 minutos"
    }, 
    {
        nombre: "Barra Parmesano",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2500g" },
            { nombre: "Hierbas", cantidad: "10g" },
            { nombre: "Parmesano", cantidad: "260g" },
            { nombre: "Ajo", cantidad: "10g" }

        ],
        porciones: 7,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Baguette",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2500g" },
            
        ],
        porciones: 5,
        tiempoPreparacion: "240 minutos"
    },{
        nombre: "Focaccia grande",
        ingredientes: [
            
        { nombre: "Masa focaccia", cantidad: "2000g" },
        { nombre: "Aceituna negra", cantidad: "100g" },
        { nombre: "Romero con oregano", cantidad: "10g" },
        { nombre: "Jitomate", cantidad: "250g" },
        { nombre: "Sal de grano", cantidad: "10g" }
        ],
        porciones: 4,
        tiempoPreparacion: "200 minutos"
    },{
        nombre: "Ciabatta",
        ingredientes: [
            { nombre: "Masa ciabatta", cantidad: "2500g" }
        ],
        porciones: 16,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Barra de aceitunas",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2500g" },
            { nombre: "Aceituna negra", cantidad: "200g" },
            { nombre: "Hierbas", cantidad: "10g" }
        ],
        porciones: 5.8,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Integral arandanos",
        ingredientes: [
            { nombre: "Masa integral", cantidad: "2760g" },
            { nombre: "Arandanos", cantidad: "250g" }
        ],
        porciones: 5.9,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Cuerno de masa madre blanco",
        ingredientes: [
            { nombre: "Masa caja", cantidad: "700g" }
        ],
        porciones: 5.5,
        tiempoPreparacion: "200 minutos"
    }, {
        nombre: "Pan de caja integral",
        ingredientes: [
            { nombre: "Masa caja", cantidad: "1550g" },
            { nombre: "Semillas varias", cantidad: "60g" }
        ],
        porciones: 1.4,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Empanada calabacita con queso",
        ingredientes: [
            
            { nombre: "Masa cuerno", cantidad: "2000g" },
            { nombre: "Relleno calabaza", cantidad: "1000g" }
        ],
        porciones: 20,
        tiempoPreparacion: "60 minutos"
    }, {
        nombre: "Barra nuez castilla grande",
        ingredientes: [
        { nombre: "Masa integral", cantidad: "2300g" },
        { nombre: "Nuez castilla", cantidad: "160g" }
        ],
        porciones: 5,
        tiempoPreparacion: "60 minutos"
    }, {
        nombre: "Bolillo",  
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2400g" },
            { nombre: "Ajonjoli", cantidad: "80g" }
        ],
        porciones: 16,
        tiempoPreparacion: "60 minutos"
    },{
        nombre: "Focaccia individual",  
        ingredientes: [
            { nombre: "Masa focaccia", cantidad: "500g" },
            { nombre: "Aceituna negra", cantidad: "50g" },
            { nombre: "Romero", cantidad: "5g" }
        ],
        porciones: 1,
        tiempoPreparacion: "60 minutos"
    }, {
        nombre: "Ajo",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2300g" },
            { nombre: "Albahaca", cantidad: "5g" },
            { nombre: "Ajo", cantidad: "80g" }
        ],
        porciones: 5,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Barra de mostaza y miel",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2300g" },
            { nombre: "Mostaza", cantidad: "160g" },
            { nombre: "Miel", cantidad: "80g" }
        ],
        porciones: 5,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Buns",
        ingredientes: [
            { nombre: "Masa colchon", cantidad: "700g" }

        ],
        porciones: 7,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Bola multigrano",
        ingredientes: [
            { nombre: "Fermento", cantidad: "500g" },
            { nombre: "Semillas varias", cantidad: "300g" },
            { nombre: "Harina", cantidad: "650g" },
            { nombre: "Harina integral", cantidad: "650g" },
            { nombre: "Agua", cantidad: "800g" },
            { nombre: "Sal", cantidad: "28g" },
            { nombre: "Levadura", cantidad: "16g" }
        ],
        porciones: 6,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Quiche de espinacas",
        ingredientes: [
            { nombre: "Masa cuerno", cantidad: "2600g" },
            { nombre: "Relleno espinacas", cantidad: "1000g" }
        ],
        porciones: 26,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Empanada de jamon y queso argentina",
        ingredientes: [
            { nombre: "Masa empanada argentina", cantidad: "1050g" },
            { nombre: "Relleno jamon", cantidad: "1000g" }
        ],
        porciones: 21,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Empanada de cochinita pibil",
        ingredientes: [
            { nombre: "Masa cuerno", cantidad: "2500g" },
            { nombre: "Relleno cochinita", cantidad: "1000g" }
        ],
        porciones: 20,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Empanada pollo con mole",
        ingredientes: [
            { nombre: "Masa cuerno", cantidad: "2500g" },
            { nombre: "Relleno pollo", cantidad: "1000g" }
        ],
        porciones: 25,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Empanada de atun",
        ingredientes: [
            { nombre: "Masa cuerno", cantidad: "2500g" },
            { nombre: "Relleno atun", cantidad: "1000g" }
        ],
        porciones: 20,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Pizza pepperoni",
        ingredientes: [
            { nombre: "Masa focaccia", cantidad: "1950g" },
            { nombre: "Salsa tomate", cantidad: "450g" },
            { nombre: "Pepperoni", cantidad: "375g" },
            { nombre: "Espinacas", cantidad: "60g" },
            { nombre: "Mozarella", cantidad: "450g" }
        ],
        porciones: 15,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Bollito relleno de queso",
        ingredientes: [
            { nombre: "Masa caja", cantidad: "3000g" },
            { nombre: "Ajonjoli", cantidad: "10g" },
            { nombre: "Queso crema", cantidad: "600g" },
            { nombre: "Rajas", cantidad: "150g" }
        ],
        porciones: 30,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Empanada de atún argentina",
        ingredientes: [
            { nombre: "Masa empanada argentina", cantidad: "1050g" },
            { nombre: "Relleno atun", cantidad: "1680g" }
        ],
        porciones: 21,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Papa tocino",
        ingredientes: [
            { nombre: "Fermento", cantidad: "500g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Puré de papa", cantidad: "160g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Agua", cantidad: "650g" },
            { nombre: "Romero", cantidad: "10g" },
            { nombre: "Tocino", cantidad: "250g" },
            { nombre: "Sal", cantidad: "20g" }
        ],
        porciones: 5,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Bollo Zaza",
        ingredientes: [
            { nombre: "Azúcar", cantidad: "30g" },
            { nombre: "Harina", cantidad: "600g" },
            { nombre: "Masa madre", cantidad: "400g" },
            { nombre: "Leche en polvo", cantidad: "20g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Agua", cantidad: "300g" },
            { nombre: "Mantequilla", cantidad: "40g" },
            { nombre: "Ajonjoli", cantidad: "50g" },
            { nombre: "Sal", cantidad: "12g" }
        ],
        porciones: 12,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Jamón serrano",
        ingredientes: [
            { nombre: "Fermento", cantidad: "500g" },
            { nombre: "Pistache", cantidad: "150g" },
            { nombre: "Harina", cantidad: "1300g" },
            { nombre: "Agua", cantidad: "750g" },
            { nombre: "Sal", cantidad: "28g" },
            { nombre: "Levadura", cantidad: "15g" },
            { nombre: "Jamón serrano", cantidad: "150g" },
            { nombre: "Eneldo", cantidad: "10g" }
        ],
        porciones: 6,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Barra de aceitunas mediano",
        ingredientes: [
            { nombre: "Masa baguette", cantidad: "2500g" },
            { nombre: "Hierbas", cantidad: "10g" },
            { nombre: "Aceituna negra", cantidad: "200g" }
        ],
        porciones: 11.7,
        tiempoPreparacion: "240 minutos"
    }, {
        nombre: "Barra de aceitunas chico",
        ingredientes: [

            { nombre: "Masa baguette", cantidad: "2500g" },
            { nombre: "Hierbas", cantidad: "10g" },
            { nombre: "Aceituna negra", cantidad: "200g" }
        ],
        porciones: 18,
        tiempoPreparacion: "240 minutos"
    }

    
];

  

    function calcularPrecioReceta(receta, ingredientesBase) {
        // Calcular costo de ingredientes
        const costosIngredientes = receta.ingredientes.map(ing => {
            // Buscar ingrediente base por nombre (ignorando mayúsculas/minúsculas)
            const ingredienteBase = ingredientesBase.find(
                base => base.nombre.toLowerCase() === ing.nombre.toLowerCase()
            );
            if (!ingredienteBase || !ingredienteBase.peso || !ingredienteBase.precio) {
                return { nombre: ing.nombre, precio: null, error: "Ingrediente no encontrado o datos incompletos" };
            }
            // Extraer cantidad en gramos (asume formato "30g" o "300ml")
            const cantidadMatch = ing.cantidad.match(/([\d.]+)\s*(g|ml)/i);
            if (!cantidadMatch) {
                return { nombre: ing.nombre, precio: null, error: "Formato de cantidad inválido" };
            }
            const cantidad = parseFloat(cantidadMatch[1]);
            // Calcular precio por gramo
            const precioPorGramo = ingredienteBase.precio / ingredienteBase.peso;
            // Calcular precio total del ingrediente en la receta
            const precioTotal = cantidad * precioPorGramo;
            return { nombre: ing.nombre, precio: precioTotal };
        });

        // Calcular costo por tiempo de preparación (1 minuto = 1 peso)
        const tiempoMatch = receta.tiempoPreparacion.match(/(\d+)/);
        const costoTiempo = tiempoMatch ? parseFloat(tiempoMatch[1]) : 0;

        // Agregar el costo del tiempo como un elemento más en el array
        costosIngredientes.push({ nombre: "Tiempo de preparación", precio: costoTiempo });

        return costosIngredientes;
    }

   
    
    // Mostrar solo nombre del pan y precio por pieza
    renderTablaPreciosRecetas(recetasPanSalado, ingredientes, "tablaPanSalado");

    function renderTablaPreciosRecetas(recetas, ingredientesBase, tablaId) {
        const tabla = document.getElementById(tablaId);
        if (!tabla) return;

        // Limpiar tabla
        tabla.innerHTML = `
            <tr>
                <th>Nombre del Pan</th>
                <th>Precio por Pieza</th>
            </tr>
        `;

        recetas.forEach(receta => {
            const precios = calcularPrecioReceta(receta, ingredientesBase);
            const precioTotal = precios.reduce((sum, ing) => sum + (ing.precio || 0), 0);
            // Precio por pieza (porción = piezas)
            const precioPorPieza = receta.porciones ? (precioTotal / receta.porciones) : precioTotal;
            const precioFinal = (precioPorPieza / 0.4);
            const fila = document.createElement('tr');
            // Ordenar recetas alfabeticamente (solo la primera vez que se renderiza)
            // Ordenar recetas alfabeticamente antes de renderizar
            fila.innerHTML = `
                <td>${receta.nombre}</td>
                <td>$${Math.ceil(precioFinal)}</td>
            `;
            tabla.appendChild(fila);
            
        });
        
    }
    // Ordenar recetasPanSalado por nombre (insensible a mayúsculas/minúsculas) y re-renderizar la tabla
    recetasPanSalado.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
    renderTablaPreciosRecetas(recetasPanSalado, ingredientes, "tablaPanSalado");