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
        { nombre: "Capacillo panettone mini", pieza: 100, precio: 25 },
        { nombre: "Capacillo panettone cuarto", pieza: 10, precio: 60 },
        { nombre: "Capacillo panettone mediano", pieza: 10, precio: 80 },
        { nombre: "Capacillo panettone grande", pieza: 10, precio: 100 },
        { nombre: "Capacillo grande", pieza: 10, precio: 50 },
        { nombre: "Capacillo chico", pieza: 10, precio: 30 },
        
        
        // Rellenos salados
        { nombre: "Relleno de jamon", peso: 1000, precio: 92 },
        { nombre: "Relleno de espinacas", peso: 1000, precio: 63.5},
        { nombre: "Relleno Tarta tatin", peso: 1000, precio: 100.30 },
        { nombre: "Relleno pambazo", peso: 1000, precio: 83.50 },
        { nombre: "Relleno Quiche", peso: 1500, precio: 0.65 },
        { nombre: "Salsa guajillo", peso: 733, precio: 234.58 },
        { nombre: "Relleno strudel", peso: 1400, precio: 83.50 },
        { nombre: "Relleno pollo", peso: 2000, precio: 234.58 },
        { nombre: "Relleno hojaldra", peso: 2160, precio: 156.25 },



        //Rellenos de pan dulce
        { nombre: "Relleno Tarta tatin", peso: 1000, precio: 51.85 },
        { nombre: "Crema pastelera", peso: 1400, precio: 43.69 },
        { nombre: "Relleno Quiche", peso: 1500, precio: 100.30 },
        { nombre: "Relleno rehilete", peso: 733, precio: 74.56 },
        { nombre: "Relleno strudel", peso: 1400, precio: 105.02 },
        { nombre: "Relleno garra oso", peso: 1000, precio: 26.16 },
        { nombre: "Relleno cocoa romero", peso: 230, precio: 15.90 },
        { nombre: "Quesito", peso: 1300, precio: 141.40 },
        { nombre: "Strudel durazno", peso: 1400, precio: 139.02 },
        { nombre: "Relleno guayaba", peso: 1200, precio: 106.80 },
        { nombre: "Mermelada fresa", peso: 650, precio: 39.15 },
        { nombre: "Crema diplomatica", peso: 550, precio: 38.37 },
        { nombre: "Mermelada mandarina", peso: 600, precio: 39.15 },
        { nombre: "Relleno mandarina", peso: 1200, precio: 82.36 },
        { nombre: "Relleno camote", peso: 3000, precio: 244.20 },
        { nombre: "Mezcla nueces", peso: 400, precio: 70.00 },
        { nombre: "Relleno chai", peso: 432, precio: 80.01 },
        { nombre: "Relleno panettone", peso: 900, precio: 153.30 },
        { nombre: "Relleno calabaza", peso: 1500, precio: 114.80 },
        { nombre: "Relleno queso calabaza", peso: 1700, precio: 74.56 },
        { nombre: "Relleno piña", peso: 900, precio: 89.20 },
        { nombre: "Relleno nuez", peso: 500, precio: 83.81 },
        { nombre: "Relleno queso limon", peso: 1400, precio: 156.75 },
        { nombre: "Mermelada chabacano", peso: 750, precio: 75.15 },
        { nombre: "Relleno rol calabaza", peso: 535, precio: 47.97 },
        { nombre: "Relleno panettone chocolate", peso: 900, precio: 186.00 },
        { nombre: "Relleno blueberry", peso: 300, precio: 63.49 },
        { nombre: "Relleno blanco tronco", peso: 570, precio: 56.22 },
        { nombre: "Relleno panettone chai", peso: 900, precio: 196.00 },


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
        { nombre: "Fermento", peso: 1000, precio: 12.19 },
        { nombre: "Masa cuerno", peso: 1000, precio: 53.82 },
        { nombre: "Masa concha", peso: 1000, precio: 47.22 },
        { nombre: "Masa garra", peso: 1000, precio: 47.81 },
        { nombre: "Masa baguette", peso: 1000, precio: 13.25 },
        { nombre: "Masa panettone", peso: 1000, precio: 52.43 },
        { nombre: "Masa fruit cake", peso: 1000, precio: 100.47 },
        { nombre: "Masa caja", peso: 1000, precio: 19.84 },
        { nombre: "Masa empanada argentina", peso: 1000, precio: 19.68 },
        { nombre: "Masa focaccia", peso: 1000, precio: 21.54 },
        { nombre: "Masa integral", peso: 1000, precio: 19.84 },
        { nombre: "Masa colchon", peso: 1000, precio: 33.28 },
        { nombre: "Masa galleta integral", peso: 1000, precio: 57.80 },
        { nombre: "Masa cubilete", peso: 1000, precio: 53.39 },
        { nombre: "Masa panettone chocolate", peso: 1000, precio: 51.62 },
        { nombre: "Bizcochuelo chocolate", peso: 1000, precio: 59.69 },
        { nombre: "Masa panettone chai", peso: 1000, precio: 54.64 },


        // Cubiertas
        { nombre: "Merengues honguitos", pieza: 20, precio: 2 },
        { nombre: "Glaseado fruit cake", peso: 1000, precio: 100},
        { nombre: "salsa caramelo", peso: 460, precio: 33.38 },
        { nombre: "Cubierta mocca", peso: 500, precio: 69.03 },
        { nombre: "Tapa chocolate", peso: 3200, precio: 433.91 },
        { nombre: "Glaseado red", peso: 328, precio: 11.20 },
        { nombre: "Glaseado matcha", peso: 285, precio: 13.56 },
        { nombre: "Glaseado leche dorada", peso: 287, precio: 13.56 },
        { nombre: "Ceniza", peso: 200, precio: 7.50 },
        { nombre: "Glaseado fruit cake", peso: 400, precio: 40.08 },
        { nombre: "Tapa mazapán", peso: 3200, precio: 283.91 },
        { nombre: "Glaseado citricos", peso: 330, precio: 10.95 },
        // falta ajuste { nombre: "Glaseado chocolate", peso: 330, precio: 10.95 },
        { nombre: "Tapa vainilla", peso: 3000, precio: 202.30 },
        { nombre: "Cubierta calabaza", peso: 1200, precio: 114.80 },
        { nombre: "Glaseado calabaza", peso: 200, precio: 13.61 },
        { nombre: "Glaseado lavanda", peso: 450, precio: 30.45 },
        { nombre: "Merengues honguitos", peso: 200, precio: 20.00 },
        { nombre: "Ganache chocolate", peso: 140, precio: 28.40 },
        { nombre: "Tapa chocolate ligera", peso: 150, precio: 5.66 },
        { nombre: "Tapa chai ligera", peso: 150, precio: 7.09 },

        
    
    ];
const recetasPanDeTemporada = [
    {
        nombre: "Pambazo",
        ingredientes: [    
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Mantequilla", cantidad: "50g" },
            { nombre: "Azucar", cantidad: "60g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Agua", cantidad: "550g" },
            { nombre: "Sal", cantidad: "25g" },
            { nombre: "Relleno pambazo", cantidad: "1500g" }
        ], 
        porciones: 15,
        preparacion: 0
    }, {
        nombre: "Hojaldra",
        ingredientes: [    
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Leche", cantidad: "400g" },
            { nombre: "Agua", cantidad: "350g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Levadura", cantidad: "30g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Mantequilla", cantidad: "60g" },
            { nombre: "Azucar", cantidad: "200g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Relleno hojaldra", cantidad: "2160g" }
        ],
        porciones: 24,
        preparacion: 0
        
    }, {
        nombre: "Pan de muerto",
        ingredientes: [    
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Azucar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "500g" },
            { nombre: "Nuez castilla", cantidad: "150g" },
            { nombre: "Ralladura naranja", cantidad: "6g" },
            { nombre: "Canela", cantidad: "3g" },
            { nombre: "Anis", cantidad: "3g" },
            { nombre: "Azahar", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "200g" },
            { nombre: "Azucar", cantidad: "150g" },
            { nombre: "Sal", cantidad: "12g" },

        ],
        porciones: 23,
        preparacion: 240
    }
    , {
        nombre: "Pan de muerto de chocolate",
        ingredientes: [
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Azucar", cantidad: "150g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "500g" },
            { nombre: "Chocolate rito", cantidad: "180g" },
            { nombre: "Chocolate turin", cantidad: "150g" },
            { nombre: "Canela", cantidad: "3g" },
            { nombre: "Anis", cantidad: "3g" },
            { nombre: "Azahar", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "200g" },
            { nombre: "Azucar", cantidad: "150g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Ralladura naranja", cantidad: "6g" }
        ],
        porciones: 23,
        preparacion: 240
    }, {
        nombre: "Pan de muerto ceniza",
        ingredientes: [    
            { nombre: "Fermento", cantidad: "100g" },   
            { nombre: "Azucar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "500g" },
            { nombre: "Ralladura naranja", cantidad: "6g" },
            { nombre: "Canela", cantidad: "3g" },
            { nombre: "Anis", cantidad: "3g" },
            { nombre: "Azahar", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "200g" },
            { nombre: "Ceniza", cantidad: "150g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Relleno camote", cantidad: "2760g" }
        ],
        porciones: 23,
    }, {
        nombre: "Pan de muerto mandarina",
        ingredientes: [  
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Azucar", cantidad: "200g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Huevo", cantidad: "250g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "500g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Ralladura naranja", cantidad: "6g" },
            { nombre: "Canela", cantidad: "3g" },
            { nombre: "Anis", cantidad: "3g" },
            { nombre: "Azahar", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "200g" },
            { nombre: "Azucar", cantidad: "150g" },
            { nombre: "Relleno mandarina", cantidad: "2760g" }

        ],
        porciones: 23,
    }, {
        nombre: "Pan de muerto guayaba",
        ingredientes: [   
            { nombre: "Fermento", cantidad: "100g" },
            { nombre: "Azucar", cantidad: "100g" },
            { nombre: "Harina", cantidad: "1000g" },
            { nombre: "Yema", cantidad: "250g" },
            { nombre: "Leche", cantidad: "500g" },
            { nombre: "Levadura", cantidad: "20g" },
            { nombre: "Mantequilla", cantidad: "300g" },
            { nombre: "Guayaba", cantidad: "300g" },
            { nombre: "Ralladura naranja", cantidad: "6g" },
            { nombre: "Canela", cantidad: "3g" },
            { nombre: "Anis", cantidad: "3g" },
            { nombre: "Azahar", cantidad: "10g" },
            { nombre: "Mantequilla", cantidad: "200g" },
            { nombre: "Ceniza", cantidad: "150g" },
            { nombre: "Sal", cantidad: "12g" },
            { nombre: "Relleno guayaba", cantidad: "805g" }
        ],
        porciones: 23,
    }, {
        nombre: "Panettone mini",
        ingredientes: [    
           
            {nombre: "Masa panettone", cantidad: "2500g" },
            {nombre: "Relleno panettone", cantidad: "830g" },
            {nombre: "Capacillo panettone mini", cantidad: "23 piezas" },


        ],
        porciones: 23,
    }, {
        nombre: "Panettone cuarto",
        ingredientes: [ 
            { nombre: "Masa panettone", cantidad: "2500g" },
            { nombre: "Relleno panettone", cantidad: "830g" },
            { nombre: "Capacillo panettone cuarto", cantidad: "10 piezas" },

        ],
        porciones: 10,
    }, {
        nombre: "Panettone medio kg",
        ingredientes: [    
            
            { nombre: "Masa panettone", cantidad: "2500g" },
            { nombre: "Relleno panettone", cantidad: "830g" },
            { nombre: "Capacillo panettone mediano", cantidad: "5 piezas" },
        ],
        porciones: 5,
    }, {
        nombre: "Panettone grande",
        ingredientes: [
          
            { nombre: "Masa panettone", cantidad: "2500g" },
            { nombre: "Relleno panettone", cantidad: "830g" },
            { nombre: "Capacillo panettone grande", cantidad: "3 piezas" },
        ], 
        porciones: 3,

    }, {
        nombre: "Fruit cake grande",
        ingredientes: [    
           
            {nombre: "Masa fruit cake", cantidad: "1400g" },
            {nombre: "Capacillo grande", cantidad: "2 piezas" },
            {nombre: "Merengues honguitos", cantidad: "20 piezas" },
            {nombre: "Glaseado fruit cake", cantidad: "225g" },
            {nombre: "Galleta jengibre", cantidad: "1500g" },

        ],
        porciones: 1.4,
    }, {
        nombre: "Fruit cake mini",
        ingredientes: [    
            
            { nombre: "Masa fruit cake", cantidad: "1400g" },
            { nombre: "Capacillo chico", cantidad: "14 piezas" },
            { nombre: "Frutos secos", cantidad: "0" },
            { nombre: "Glaseado fruit cake", cantidad: "0g" },
           // { nombre: "Galleta jengibre", cantidad: "4600g" },
            

        ],
        porciones: 14,

    }, {
        nombre: "Panettone grande chocolate",
        ingredientes: [    
            { nombre: "Masa panettone chocolate", cantidad: "2500g" },
            { nombre: "Relleno panettone chocolate", cantidad: "550g" },
            { nombre: "Capacillo panettone grande", cantidad: "2.5 piezas" },
            { nombre: "Tapa chocolate ligera", cantidad: "280g" },
        ],
        porciones: 2.5,
    }, {
        nombre: "Panettone medio kg chocolate",
        ingredientes: [    
            
            { nombre: "Masa panettone chocolate", cantidad: "2500g" },
            { nombre: "Relleno panettone chocolate", cantidad: "830g" },
            { nombre: "Capacillo panettone mediano", cantidad: "5 piezas" },
            { nombre: "Tapa chocolate ligera", cantidad: "280g" },

        ],
        porciones: 5,
    }, {
        nombre: "Panettone cuarto chocolate",
        ingredientes: [    
            { nombre: "Masa panettone chocolate", cantidad: "2500g" },
            { nombre: "Relleno panettone chocolate", cantidad: "830g" },
            { nombre: "Capacillo panettone cuarto", cantidad: "10 piezas" },
            { nombre: "Tapa chocolate ligera", cantidad: "280g" },
        ],
        porciones: 10,
    }, {
        nombre: "Panettone mini chocolate",
        ingredientes: [    
           
            { nombre: "Masa panettone chocolate", cantidad: "2500g" },
            { nombre: "Relleno panettone chocolate", cantidad: "830g" },
            { nombre: "Capacillo panettone mini", cantidad: "21 piezas" },
            { nombre: "Tapa chocolate ligera", cantidad: "280g" },

        ],
        porciones: 25,
    }, {
        nombre: "Panettone mini chai",
        ingredientes: [    
            { nombre: "Masa panettone chai", cantidad: "2500g" },
            { nombre: "Relleno panettone chai", cantidad: "830g" },
            { nombre: "Capacillo panettone mini", cantidad: "21 piezas" },
            { nombre: "Tapa chai ligera", cantidad: "280g" },
        ],
        porciones: 25,
    }, {
        nombre: "Panettone cuarto chai",
        ingredientes: [    
            { nombre: "Masa panettone chai", cantidad: "2500g" },
            { nombre: "Relleno panettone chocolate", cantidad: "830g" },
            { nombre: "Capacillo panettone cuarto", cantidad: "10 piezas" },
            { nombre: "Tapa chocolate ligera", cantidad: "280g" },

        ],
        porciones: 10,
    }, {
        nombre: "Panettone medio kg chai",
        ingredientes: [  
            { nombre: "Masa panettone chai", cantidad: "2500g" },
            { nombre: "Relleno panettone chocolate", cantidad: "830g" },
            { nombre: "Capacillo panettone mediano", cantidad: "5 piezas" },
            { nombre: "Tapa chocolate ligera", cantidad: "280g" },

        ],
        porciones: 5,
    }, {
        nombre: "Panettone grande chai",
        ingredientes: [    
            
            { nombre: "Masa panettone chai", cantidad: "2500g" },
            { nombre: "Relleno panettone chai", cantidad: "550g" },
            { nombre: "Capacillo panettone grande", cantidad: "2.5 piezas" },
            { nombre: "Tapa chai ligera", cantidad: "280g" },
        ],
        porciones: 2.5,
    }, 
];

function calcularPrecioPorReceta(receta) {
    let precioTotal = 0;

    receta.ingredientes.forEach(ing => {
        const nombreReceta = (ing.nombre || '').toString().trim().toLowerCase();
        const ingredienteBase = ingredientes.find(i => (i.nombre || '').toString().trim().toLowerCase() === nombreReceta);

        if (!ingredienteBase) {
            console.warn(`Ingrediente no encontrado: ${ing.nombre}`);
            return;
        }

        // Extraer cantidad y unidad (soporta "1500g", "1.5kg", "250 mg", "1000")
        let cantidadRaw = (ing.cantidad || '').toString().trim().toLowerCase();
        if (cantidadRaw === '') {
            console.warn(`Cantidad no definida para: ${ing.nombre}`);
            return;
        }

        // Obtener número y unidad
        const numero = parseFloat(cantidadRaw.replace(',', '.'));
        if (isNaN(numero)) {
            console.warn(`Cantidad inválida para ${ing.nombre}: ${ing.cantidad}`);
            return;
        }
        // soportar ingredientes por pieza (ej. "2pz", "3 piezas", "1 unidad") o cuando la base tiene propiedad `pieza`
        const pieceRegex = /\b(pieza|piezas|pz|pza|pc|pcs|unidad|unidades|u)\b/;
        const isPieceUnit = pieceRegex.test(cantidadRaw);

        if (isPieceUnit || typeof ingredienteBase.pieza !== 'undefined') {
            let piezas = numero;

            // Si el usuario pasó una cantidad en peso pero la base sólo tiene 'pieza',
            // intentar convertir usando ingredienteBase.peso como gramos por pieza (si está disponible).
            if (!isPieceUnit && (cantidadRaw.includes('g') || cantidadRaw.includes('kg') || cantidadRaw.includes('mg'))) {
                if (ingredienteBase.peso && ingredienteBase.peso > 0) {
                    let gramosSolicitados = numero;
                    if (cantidadRaw.includes('kg')) gramosSolicitados = numero * 1000;
                    else if (cantidadRaw.includes('mg')) gramosSolicitados = numero / 1000;
                    // interpretar ingredienteBase.peso como gramos por pieza
                    piezas = gramosSolicitados / ingredienteBase.peso;
                } else {
                    console.warn(`No se puede convertir gramos a piezas para ${ing.nombre}`);
                    return;
                }
            }

            // Si la definición base incluye cantidad de piezas por paquete (pieza), calcular precio por pieza
            if (ingredienteBase.pieza && ingredienteBase.pieza > 0) {
                const precioPorPieza = ingredienteBase.precio / ingredienteBase.pieza;
                precioTotal += precioPorPieza * piezas;
                return;
            }

            // Si no hay 'pieza' en la base, asumimos que el precio indicado es por unidad/pieza
            precioTotal += ingredienteBase.precio * piezas;
            return;
        }
        let cantidadGramos = numero;
        if (cantidadRaw.includes('kg')) {
            cantidadGramos = numero * 1000;
        } else if (cantidadRaw.includes('mg')) {
            cantidadGramos = numero / 1000;
        } else {
            // si contiene "g" o "gr" o no tiene unidad asumimos gramos
            // ya queda como numero (gramos)
            cantidadGramos = numero;
        }

        // Evitar división por cero o peso indefinido
        if (!ingredienteBase.peso || ingredienteBase.peso === 0) {
            console.warn(`Peso base inválido para ${ingredienteBase.nombre}`);
            return;
        }

        // Precio por gramo del ingrediente base
        const precioPorGramo = ingredienteBase.precio / ingredienteBase.peso;

        // Sumar costo (precio por gramo * gramos usados)
        precioTotal += precioPorGramo * cantidadGramos;
    });

    // Costo por tiempo de preparación (si existe)
    if (receta.preparacion) {
        // preparacion en minutos -> costo por hora
        const costoPorHora = 60;
        const tiempoEnHoras = receta.preparacion / 60;
        precioTotal += tiempoEnHoras * costoPorHora;
    }

    // Dividir entre porciones (si existe)
    const porciones = receta.porciones && receta.porciones > 0 ? receta.porciones : 1;
    return precioTotal / porciones;

   
}

function mostrarTabla() {
    const tabla = document.getElementById('tablaPanDeTemporada');
    let html = '<tr><th>Nombre</th><th>Precio</th></tr>';
    
    recetasPanDeTemporada.forEach((receta, index) => {
        const precio = calcularPrecioPorReceta(receta)/0.35;
        const precioRedondeado = Math.round(precio);
        html += `<tr>
            <td>${receta.nombre}</td>
            <td>$${precioRedondeado}</td>
        </tr>`;
    });
    
    tabla.innerHTML = html;
}
window.onload = function() {
    recetasPanDeTemporada.sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarTabla();
};



