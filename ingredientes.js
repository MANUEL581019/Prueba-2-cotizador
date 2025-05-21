
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

    ];
document.addEventListener("DOMContentLoaded", function (){

 

   const tabla = document.getElementById("tablaIngredientes");

    ingredientes.forEach(ingrediente => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${ingrediente.nombre}</td>
 
            <td>$${ingrediente.precio}</td>
        `;

        tabla.appendChild(fila);
    });
    

    // Ordenar ingredientes alfabéticamente por nombre
    ingredientes.sort((a, b) => a.nombre.localeCompare(b.nombre));
    tabla.innerHTML = ""; // Limpiar la tabla antes de volver a llenarla

    ingredientes.forEach(ingrediente => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${ingrediente.nombre}</td>
          
            <td>$${ingrediente.precio}</td>
        `;
        tabla.appendChild(fila);
    });
    // Restaurar los encabezados de la tabla
    const encabezados = document.createElement("tr");
    encabezados.innerHTML = `
        <th>Ingrediente</th>
        
        <th>Precio</th>
    `;

    // Limpiar la tabla antes de volver a llenarla
    tabla.appendChild(encabezados);
    tabla.insertBefore(encabezados, tabla.firstChild);
    
});
