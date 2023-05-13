"use strict"

/* Una empresa llamada Noblex se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, solicita que
haya un botón que diga ver televisores y permita mostrar al menos 9
televisores de 50 pulgadas y que muestre:
a. Código del producto.
b. Cantidad de televisores en stock.
c. Foto del producto.
d. Precio del producto.
e. Descripción del producto.
f. Botón de añadir al carrito.
Se pide también un botón que diga ordenar y que muestre los
televisores del menor precio al mayor precio. */
var newArray = []
var televisores = []
var televisor2 = [
    {nombre: "televisor samsung", Precio:10},
    {nombre: "televisor samsung2", Precio:5},
    {nombre: "televisor samsung3", Precio:2},
]


televisores[0] = "Televisor-Samsung";
televisores["Televisor-Samsung"] = {"Codigo": 1,
                                    "Stock":18,
                                    "Img":"img1/descarga(2).jpg",
                                    "Precio":12400,
                                    "Descripcion": "tv 50 pulgadas",
                                    };

televisores[1] = "Televisor-TopHouse";
televisores["Televisor-TopHouse"] = {"Codigo": 2,
                                    "Stock":18,
                                    "Img":"img1/descarga(1).jpg",
                                    "Precio":1000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[2] = "Televisor-Sony";
televisores["Televisor-Sony"] = {"Codigo": 3,
                                    "Stock":68,
                                    "Img":"img1/descarga(3).jpg",
                                    "Precio":3000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[3] = "Televisor-TLC";
televisores["Televisor-TLC"] = {"Codigo": 4,
                                    "Stock":48,
                                    "Img":"img1/descarga(4).jpg",
                                    "Precio":3200,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[4] = "Televisor-Asus";
televisores["Televisor-Asus"] = {"Codigo": 5,
                                    "Stock":85,
                                    "Img":"img1/descarga(5).jpg",
                                    "Precio":3000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[5] = "Televisor-Hitachi";
televisores["Televisor-Hitachi"] = {"Codigo": 6,
                                    "Stock":28,
                                    "Img":"img1/images (1).jpg",
                                    "Precio":3000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[6] = "Televisor-Motorola";
televisores["Televisor-Motorola"] = {"Codigo": 7,
                                    "Stock":128,
                                    "Img":"img1/images (1).jpg",
                                    "Precio":7000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[7] = "Televisor-LG";
televisores["Televisor-LG"] = {"Codigo": 8,
                                    "Stock":348,
                                    "Img":"img1/images.jpg",
                                    "Precio":3140,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[8] = "Televisor-Noblex";
televisores["Televisor-Noblex"] = {"Codigo": 9,
                                    "Stock":258,
                                    "Img":"img1/descarga.jpg",
                                    "Precio":1110,
                                    "Descripcion": "tv 50 pulgadas",
};


console.log(televisores[1])
console.log(televisores["Televisor-TopHouse"].Precio)
console.log(televisores["Televisor-Sony"].Precio)

var i, nombreTv, contenedor,x, precios= [];

contenedor = document.getElementById("contenedor");


console.log(televisores.length)

function VerTelevisores(){


    for(i = 0; i<9;i++){
    
     nombreTv = televisores[i];
    console.log(nombreTv)
/*     document.write(`
        <div>
            <h2>${televisores[i]}</h2>
            <p>${televisores[nombreTv].Codigo}</p>
            <p>${televisores[nombreTv].Stock}</p>
            <p>${televisores[nombreTv].Precio}</p>
            <p>${televisores[nombreTv].Descripcion}</p>
           ;
            `) */
        document.write(`<div>`);
        document.write(` <h2>${televisores[i]}</h2>`);
        document.write(` <p>${televisores[nombreTv].Codigo}</p>`);
        document.write(`<p>${televisores[nombreTv].Stock}</p>`);
        document.write(`<img src="${televisores[nombreTv].Img}"></img>`);
        document.write(`<p>${televisores[nombreTv].Precio}</p>`);
        document.write(`<p>${televisores[nombreTv].Descripcion}</p>`);
        document.write(`</div>`);

     /*    x = televisores[nombreTv].Precio
        precios.push(x)
        console.log(nombreTv)
 */
    }
   /*  console.log(precios) */
    document.write(` <button onclick="Ordenanos(televisores)" >Ordenanos</button>`)
    document.write(` <button onclick="Ordenanos(arraynuevo)" >imprimir</button>`)
}

function Ordenanos(arrays){

    for(let i = 0; i<9; i++){
        for(let j = 0; j<9-i;j++){
             if(arrays[j].Precio > arrays[j].Precio){
                const va = arrays[j];
                arrays[j] = arrays[j + 1];
                arrays[j+1] = va;
            } 
        }
    }
    console.log(arrays)   

    





    
    
};

const arraynuevo = Ordenanos(televisores);
console.log(arraynuevo)

 function Imprimime(){

    for(i = 0; i<9;i++){
    
        nombreTvs = arraynuevo[i];
       console.log(nombreTvs)
   
           document.write(`<div>`);
           document.write(` <h2>${arraynuevo[i]}</h2>`);
           document.write(` <p>${arraynuevo[nombreTvs].Codigo}</p>`);
           document.write(`<p>${arraynuevo[nombreTvs].Stock}</p>`);
           document.write(`<img src="${arraynuevo[nombreTvs].Img}"></img>`);
           document.write(`<p>${arraynuevo[nombreTvs].Precio}</p>`);
           document.write(`<p>${arraynuevo[nombreTvs].Descripcion}</p>`);
           document.write(`</div>`);
       }
     




 }






