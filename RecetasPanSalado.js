

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
        
        
        
        { nombre: "Relleno de jamon", peso: 500, precio: 40 },
        { nombre: "Relleno de cochinita", peso: 300, precio: 80 },
        { nombre: "Relleno de atun", peso: 100, precio: 60 },
        { nombre: "Espinacas", peso: 1000, precio: 15 },
        { nombre: "Salsa de tomate", peso: 50, precio: 200 },
        { nombre: "Peperoni", peso: 250, precio: 150 },
        { nombre: "Mozarella", peso: 10, precio: 300 }   

        
      
        
    ];


const recetasPanSalado = [
    {
        nombre: "Baguette",
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
        nombre: "Bagel",
        ingredientes: [
            { nombre: "Agua", cantidad: "500ml" },
            { nombre: "Azúcar", cantidad: "30g" },
            { nombre: "Fermento", cantidad: "150g" },
            { nombre: "Harina", cantidad: "1200g" },
            { nombre: "Leche", cantidad: "400ml" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Mantequilla", cantidad: "800g" },
            { nombre: "Sal", cantidad: "25g" }, 
            { nombre: "Mano de obra", cantidad: "0g" }
        ],
        porciones: 15
    },

    {   nombre: "Pan de caja blanco",
        ingredientes: [
            { nombre: "Agua", cantidad: "300ml" },
            { nombre: "Azúcar", cantidad: "30g" },
            { nombre: "Azúcar morena", cantidad: "100g" },
            { nombre: "Fermento", cantidad: "300g" },
            { nombre: "Harina", cantidad: "600" },
            { nombre: "Leche", cantidad: "100ml" },
            { nombre: "Leche en polvo", cantidad: "20g" },
            { nombre: "Levadura", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "40g" },
            { nombre: "Sal", cantidad: "14g" }
        ],
        porciones: 1.5

    }, 

    {
        nombre: "Pan multi-grano",
        ingredientes: [
            { nombre: "Fermento", cantidad: "200g" },
            { nombre: "Agua", cantidad: "400ml" },
            { nombre: "Levadura", cantidad: "12g" },
            { nombre: "Harina integral", cantidad: "300g" },
            { nombre: "Harina blanca", cantidad: "600" },
            { nombre: "Harina cebada", cantidad: "100ml" },
            { nombre: "Harina centeno", cantidad: "20g" },
            { nombre: "Mijo", cantidad: "10g" },
            { nombre: "Linaza", cantidad: "40g" },
            { nombre: "Trigo entero", cantidad: "14g" },
            { nombre: "Cebada entera", cantidad: "14g" },
            { nombre: "Avena", cantidad: "30g" }
        ],
        porciones: 8

    },

    {
        nombre: "ciabatta",
        ingredientes: [
            { nombre: "Agua", cantidad: "1300ml" },
            { nombre: "Fermento", cantidad: "800g" },
            { nombre: "Harina", cantidad: "1300g" },
            { nombre: "Levadura", cantidad: "14g" },
            { nombre: "Sal", cantidad: "32g" },
        ],
        porciones: 20

    },

    {
            nombre: "Barra Parmesano",
            ingredientes: [
                { nombre: "Hierbas", cantidad: "10g" },
                { nombre: "Harina", cantidad: "1300g" },
                { nombre: "Agua", cantidad: "750ml" },
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "15g" },
                { nombre: "Parmesano", cantidad: "270g" },
                { nombre: "Ajo", cantidad: "10g" }
            ],
            porciones: 1.5
        }, 
        {
            nombre: "Focaccia",
            ingredientes: [
                { nombre: "Fermento", cantidad: "350g" },
                { nombre: "Harina", cantidad: "1000g" },
                { nombre: "Aceitunas", cantidad: "100g" },
                { nombre: "Aceite de oliva", cantidad: "100ml" },
                { nombre: "Levadura", cantidad: "30g" },
                { nombre: "Agua", cantidad: "500ml" },
                { nombre: "Romero con oregano", cantidad: "10g" },
                { nombre: "Jitomate", cantidad: "250g" },
                { nombre: "Azúcar", cantidad: "20g" },
                { nombre: "Sal", cantidad: "25g" }, 
                { nombre: "Sal de grano", cantidad: "10g" }
            ],
            porciones: 4
        },
        {
            nombre: "Cuerno de masa madre blanco",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "15g" },
                { nombre: "Harina", cantidad: "300g" },
                { nombre: "Fermento", cantidad: "200g" },
                { nombre: "Leche en polvo", cantidad: "10g" },
                { nombre: "Levadura", cantidad: "10" },
                { nombre: "Agua", cantidad: "150ml" },
                { nombre: "Mantequilla", cantidad: "20g" }, 
                { nombre: "Sal", cantidad: "6g" }
            ],
            porciones: 5.5
        }, 

        {
            nombre: "Pan de caja con masa madre y cemillas",
            ingredientes: [
                { nombre: "Fermento", cantidad: "400g" },
                { nombre: "Harina", cantidad: "600g" },
                { nombre: "Azúcar", cantidad: "30g" },
                { nombre: "Leche en polvo ", cantidad: "20g" },
                { nombre: "Levadura", cantidad: "20g" },
                { nombre: "Agua", cantidad: "300ml" }, 
                { nombre: "Mantequilla", cantidad: "40g" }, 
                { nombre: "Semillas varias", cantidad: "10g" },
                { nombre: "Sal", cantidad: "12g" }
            ],
            porciones: 1.2
        }, 

        {
            nombre: "Empanada de calabacita con queso",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "40g" },
                { nombre: "Harina", cantidad: "2000g" },
                { nombre: "Agua", cantidad: "1400ml" },
                { nombre: "Hierbas", cantidad: "8g" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Mantequilla", cantidad: "1120g" }, 
                { nombre: "Sal", cantidad: "40g" },
                { nombre: "Relleno Calabaza", cantidad: "1000g" },
            ],
            porciones: 50
        }, 
        {   nombre: "Campesino de crema",
                ingredientes: [
                    { nombre: "Azúcar", cantidad: "40g" },
                    { nombre: "Harina", cantidad: "2000g" },
                    { nombre: "Agua", cantidad: "1400ml" },
                    { nombre: "Hierbas", cantidad: "8g" },
                    { nombre: "Levadura", cantidad: "16g" },
                    { nombre: "Mantequilla", cantidad: "1120g" }, 
                    { nombre: "Sal", cantidad: "40g" },
                    { nombre: "Relleno Calabaza", cantidad: "1000g" },
                ],

        }, 
        {
            nombre: "Bolillo",
            ingredientes: [
                { nombre: "Fermento", cantidad: "400g" },
                { nombre: "Harina", cantidad: "1300g" },
                { nombre: "Agua", cantidad: "750ml" },
                { nombre: "Sal", cantidad: "28" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Semillas", cantidad: "400g" }
            ],
            porciones: 16
        },
        {
            nombre: "Barra de nuez de castilla ",
            ingredientes: [
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Harina", cantidad: "650g" },
                { nombre: "Harina integral", cantidad: "650g" },
                { nombre: "Higo", cantidad: "0g" },
                { nombre: "Agua", cantidad: "800g" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "12g" },
                { nombre: "Nuez de castilla", cantidad: "160g" } 
            
            ],
        }, 
        {
            nombre: "Ajo",
            ingredientes: [
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Harina", cantidad: "1300g" },
                { nombre: "Agua", cantidad: "800ml" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Albahaca", cantidad: "5g" },
                { nombre: "Ajo", cantidad: "80g" }
            ],
            porciones: 5
        }, 
        {
            nombre: "Barra de mostaza y miel",
            ingredientes: [
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Mostaza", cantidad: "160g" },
                { nombre: "Harina", cantidad: "1300g" },
                { nombre: "Harina integral", cantidad: "250g" },
                { nombre: "Miel", cantidad: "80g" },
                { nombre: "Agua", cantidad: "720ml" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "14g" }
    
            ],
            porciones: 5
        }, 
        {
            nombre: "Quiche de espinacas",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "500g" },
                { nombre: "Harina", cantidad: "240g" },
                { nombre: "Huevo", cantidad: "190" },
                { nombre: "Leche", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Mantequilla", cantidad: "100g" },
                { nombre: "Relleno de espinacas", cantidad: "1000g" },
                { nombre: "Sal", cantidad: "5g" } 
            ],
            porciones: 26
        }, 
        {
            nombre: "Bola multigrano",
            ingredientes: [
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Semillas varias", cantidad: "300g" },
                { nombre: "Harina", cantidad: "650g" },
                { nombre: "Harina integral", cantidad: "650g" },
                { nombre: "Agua", cantidad: "800ml" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "16g" }
            ],
            porciones: 6
        }, 
        {
            nombre: "Bollo de queso con chipotle",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "80g" },
                { nombre: "Harina", cantidad: "380g" },
                { nombre: "Huevo", cantidad: "120g" },
                { nombre: "Leche", cantidad: "250ml" },
                { nombre: "Levadura", cantidad: "23g" },
                { nombre: "Mantequilla", cantidad: "75g" }, 
                { nombre: "Sal", cantidad: "5g" },
                { nombre: "Queso", cantidad: "180g" },
                { nombre: "Chipotle", cantidad: "15g" }, 
                { nombre: "Ajonjoli", cantidad: "15g" },   
                { nombre: "Salchicha", cantidad: "30g" }
            ],
            porciones: 18
        }, 
        {
            nombre: "Empanadas de pollo con mole",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "20g" },
                { nombre: "Harina", cantidad: "1000g" },
                { nombre: "Agua", cantidad: "700ml" },
                { nombre: "Hierbas", cantidad: "4g" },
                { nombre: "Levadura", cantidad: "8g" },
                { nombre: "Mantequilla", cantidad: "560g" }, 
                { nombre: "Sal", cantidad: "20g" }, 
                { nombre: "Relleno de pollo", cantidad: "1000g" }
            
            ],
            porciones: 25
        }, 
        {
            nombre: "Empanada de jamon y queso argentina",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "500g" },
                { nombre: "Harina", cantidad: "1300g" },
                { nombre: "Agua", cantidad: "800ml" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Aceitunas", cantidad: "1000g" }
            ],
            porciones: 21
        },
        {
            nombre: "Empanada de cochinita pibil",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "40g" },
                { nombre: "Harina", cantidad: "2000g" },
                { nombre: "Agua", cantidad: "1400ml" },
                { nombre: "Hierbas", cantidad: "8g" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Mantequilla", cantidad: "1120g" }, 
                { nombre: "Sal", cantidad: "40g" },
                { nombre: "Relleno de cochinita", cantidad: "500g" }
            ],
            porciones: 50
        }, 
        {
            nombre: "Empanada de atun",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "40g" },
                { nombre: "Harina", cantidad: "2000g" },
                { nombre: "Agua", cantidad: "1400ml" },
                { nombre: "Hierbas", cantidad: "8g" },
                { nombre: "Levadura", cantidad: "16g" },
                { nombre: "Mantequilla", cantidad: "1120g" }, 
                { nombre: "Sal", cantidad: "40g" },
                { nombre: "Relleno de atun", cantidad: "500g" }
            ],
            porciones: 50
        },

        {
            nombre: "Piza de peperoni",
            ingredientes: [
                { nombre: "Fermento", cantidad: "100g" },
                { nombre: "Azúcar", cantidad: "20g" },
                { nombre: "Harina", cantidad: "1000g" },
                { nombre: "Aceite de oliva", cantidad: "100ml" },
                { nombre: "Levadura", cantidad: "30g" },
                { nombre: "Agua", cantidad: "500ml" }, 
                { nombre: "Romero con oregano", cantidad: "10g" }, 
                { nombre: "Sal", cantidad: "25g" },
                { nombre: "Salsa de tomate", cantidad: "450g" }, 
                { nombre: "Peperoni", cantidad: "100g" },
                { nombre: "Epinacas", cantidad: "1000g" }, 
                { nombre: "Mozarella", cantidad: "1000g" }
            ],
            porciones: 21
        }, 
        {
            nombre: "Empanada de atun argentina",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "0g" },
                { nombre: "Harina", cantidad: "500g" },
                { nombre: "Agua", cantidad: "250ml" },
                { nombre: "Hierbas", cantidad: "0g" },
                { nombre: "Levadura", cantidad: "5g" },
                { nombre: "Mantequilla", cantidad: "100g" },
                { nombre: "Sal", cantidad: "2g" },
                { nombre: "Relleno de calabaza", cantidad: "1000g" }
            ],
            porciones: 21
        }, 
        {
            nombre: "Bollo zaza",
            ingredientes: [
                { nombre: "Azúcar", cantidad: "30g" },
                { nombre: "Harina", cantidad: "600g" },
                { nombre: "Fermento", cantidad: "400g" },
                { nombre: "Leche en polvo", cantidad: "20g" },
                { nombre: "Levadura", cantidad: "20g" },
                { nombre: "Agua", cantidad: "300ml" },
                { nombre: "Mantequilla", cantidad: "40g" }, 
                { nombre: "Ajonjoli", cantidad: "50g" },
                { nombre: "Sal", cantidad: "12g" }
            ],
            porciones: 12
        },
        {
            nombre: "Papa con tocino", 
            ingredientes: [
                { nombre: "Azúcar", cantidad: "20g" },
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Harina", cantidad: "1000g" },
                { nombre: "Pure de papa", cantidad: "160g" },
                { nombre: "Levadura", cantidad: "30g" },
                { nombre: "Agua", cantidad: "650ml" },
                { nombre: "Romero", cantidad: "10g" }, 
                { nombre: "Sal", cantidad: "20g" },
                { nombre: "Tocino", cantidad: "250g" }
            ],
            porciones: 5
        }, 
        {
            nombre: "Jamon serrano",
            ingredientes: [
                { nombre: "Fermento", cantidad: "500g" },
                { nombre: "Pistache", cantidad: "150g" },
                { nombre: "Agua", cantidad: "750ml" },
                { nombre: "Sal", cantidad: "28g" },
                { nombre: "Levadura", cantidad: "15g" },
                { nombre: "Jamon serrano", cantidad: "150g" },
                { nombre: "Eneldo", cantidad: "10g" }
            ],
            porciones: 50
        }


    ];

    /**
     * Genera una tabla HTML con los nombres de los panes salados.
     * @param {Array} recetas Array de recetas de pan salado.
     * @returns {string} HTML de la tabla.
     */
    function generarTablaPanesSalados(recetas) {
        let html = '<table border="1"><thead><tr><th>Nombre del Pan Salado</th></tr></thead><tbody>';
        recetas.forEach(receta => {
            html += `<tr><td>${receta.nombre}</td></tr>`;
        });
        html += '</tbody></table>';
        return html;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const tabla = document.getElementById('tablaPanSalado');
        if (tabla) {
            tabla.innerHTML = generarTablaPanesSalados(recetasPanSalado);
        }
    });

    /**
     * Calcula el precio total de una receta.
     * @param {Object} receta Receta con ingredientes.
     * @returns {number} Precio total de la receta.
     */
    function calcularPrecioReceta(receta) {
        let total = 0;
        receta.ingredientes.forEach(item => {
            const ingrediente = ingredientes.find(i => i.nombre === item.nombre);
            if (ingrediente) {
                // Extraer cantidad numérica y unidad
                const match = item.cantidad.match(/^([\d.]+)\s*(g|ml)?$/i);
                if (match) {
                    let cantidad = parseFloat(match[1]);
                    let unidad = match[2] || 'g';
                    // Convertir ml a g si es necesario (asumimos 1ml = 1g para agua/leche)
                    if (unidad === 'ml' && (item.nombre === 'Agua' || item.nombre === 'Leche')) {
                        unidad = 'g';
                    }
                    // Normalizar peso base del ingrediente
                    let pesoBase = ingrediente.peso;
                    // Si el ingrediente es "Mano de obra", solo suma el precio
                    if (item.nombre === "Mano de obra") {
                        total += ingrediente.precio;
                    } else {
                        total += (cantidad / pesoBase) * ingrediente.precio;
                    }
                }
            }
        });
        return total;
    }

    /**
     * Genera una tabla HTML con los nombres de los panes salados y sus precios.
     * @param {Array} recetas Array de recetas de pan salado.
     * @returns {string} HTML de la tabla.
     */
    function generarTablaPanesSaladosConPrecio(recetas) {
        let html = '<table border="1"><thead><tr><th>Nombre del Pan Salado</th><th>Precio Total</th><th>Precio por Pieza</th></tr></thead><tbody>';
        recetas.forEach(receta => {
            const precioTotal = calcularPrecioReceta(receta);
            const precioPorPieza = receta.porciones ? (precioTotal / receta.porciones) : 0;
            html += `<tr>
                <td>${receta.nombre}</td>
                <td>$${precioTotal.toFixed(2)}</td>
                <td>$${precioPorPieza.toFixed(2)}</td>
            </tr>`;
        });
        html += '</tbody></table>';
        return html;
    }

    // Reemplaza la función anterior para mostrar la tabla con precios
    document.addEventListener('DOMContentLoaded', function() {
        const tabla = document.getElementById('tablaPanSalado');
        if (tabla) {
            tabla.innerHTML = generarTablaPanesSaladosConPrecio(recetasPanSalado);
        }
    });
    // Ejemplo de uso en un archivo HTML:
    // document.getElementById('tablaPanesSalados').innerHTML = generarTablaPanesSalados(recetasPanSalado);

    