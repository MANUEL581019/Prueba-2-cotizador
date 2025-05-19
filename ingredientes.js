
const ingredientes = [
        { nombre: "Azúcar", peso: 500, precio: 20 },
        { nombre: "Harina", peso: 1000, precio: 15 },
        { nombre: "Sal", peso: 250, precio: 5 },
        { nombre: "Levadura", peso: 100, precio: 10 },
        { nombre: "Mantequilla", peso: 250, precio: 30 },
        { nombre: "Leche", peso: 1000, precio: 25 },
        { nombre: "Huevos", peso: 60, precio: 2 },
        { nombre: "Especias", peso: 50, precio: 50 },
        { nombre: "Chocolate", peso: 200, precio: 100 },
        { nombre: "Frutas", peso: 500, precio: 40 },
        { nombre: "Nueces", peso: 300, precio: 80 },
        { nombre: "Semillas", peso: 100, precio: 60 },
        { nombre: "Aceite", peso: 1000, precio: 15 },
        { nombre: "Agua", peso: 1000, precio: 0 },
        { nombre: "Vainilla", peso: 50, precio: 200 },
        { nombre: "Cacao", peso: 250, precio: 150 },
        { nombre: "Azúcar Glass", peso: 500, precio: 25 },
        { nombre: "Colorante", peso: 10, precio: 300 },
        { nombre: "Esencia de Almendra", peso: 50, precio: 250 },
        { nombre: "Frutos Secos", peso: 200, precio: 90 },
        { nombre: "Miel", peso: 500, precio: 35 },
        { nombre: "Levadura Fresca", peso: 100, precio: 12 },
        { nombre: "Sal Marina", peso: 250, precio: 8 },
        { nombre: "Pasta de Almendra", peso: 100, precio: 120 },
        { nombre: "Glaseado", peso: 200, precio: 70 },
        { nombre: "Crema de Leche", peso: 500, precio: 45 },
        { nombre: "Frutas Secas", peso: 300, precio: 55 },
        { nombre: "Sirope", peso: 250, precio: 40 },
        { nombre: "Extracto de Limón", peso: 50, precio: 150 },
        { nombre: "Extracto de Naranja", peso: 50, precio: 150 },
        { nombre: "Pasta de Chocolate", peso: 200, precio: 120 },
        { nombre: "Coco Rallado", peso: 100, precio: 80 },
        { nombre: "Frutos Rojos", peso: 250, precio: 60 },
        { nombre: "Pasta de Avellana", peso: 200, precio: 130 },
        { nombre: "Sustituto de Huevo", peso: 100, precio: 20 },


    ];
document.addEventListener("DOMContentLoaded", function (){

 

   const tabla = document.getElementById("tablaIngredientes");

    ingredientes.forEach(ingrediente => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${ingrediente.nombre}</td>
            <td>${ingrediente.peso} g</td>
            <td>$${ingrediente.precio}</td>
        `;

        tabla.appendChild(fila);
    });


});

