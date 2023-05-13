"use strict"

/* 2. Una empresa llamada Texit se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, y solicita
que la misma tenga un botón que diga cargar producto, y cada vez
que se le haga clic, podrá cargarse un producto, también se pide un
botón que diga ver productos para poder ver los productos cargados.
El usuario podrá cargar la siguiente información:
a. Código del producto.
b. Nombre del producto.
c. Categoría del producto.
d. Precio del producto.
e. Descripción del producto. */



function CargarProducto(){

    
    document.write(`
    <form action="#" method="post" style="background: bisque; display="flex"; aling-items: center; 
    justify-content: center;">
        
        <div >
            <label for="Codigo">Codigo</label>  
            <input type="number" name="Codigo" id="Codigo">
        </div>
        <br>
        <div>
            <label for="Nombre">Nombre</label>  
            <input type="text" name="Nombre" id="Nombre">
        </div>
        <br>
        <div>
            <label for="Categoria">Categoria</label>
            <input type="text" name="Categoria" id="Categoria">
        </div>
        <br>
        <div>   
            <label for="Precio">Precio</label>
            <input type="number" name="Precio" id="Precio">
        </div>
        <br>
        <div>
            <label for="Descripción">Descripción</label>
            <textarea type="text" name="Descripción" id="Descripcion"></textarea>
        </div>
                

            <button type="reset">Reset</button>

    </form>`)
document.write(`<button onclick="MostrarProducto();">mostrar producto</button>`)


} 


function MostrarProducto(){

    var Codigo = document.getElementById("Codigo").value;
    var Nombre = document.getElementById("Nombre").value;
    var Categoria = document.getElementById("Categoria").value;
    var Precio = document.getElementById("Precio").value;
    var Descripcion = document.getElementById("Descripcion").value;
    
    

    document.write(`
    
    <p>El codigo del producto es: ${Codigo}</p>
    <p>El Nombre del producto es: ${Nombre}</p>
    <p>La Categoria del producto es: ${Categoria}</p>
    <p>El precio del producto es: ${Precio}</p>
    <p>La Descripción del producto es: ${Descripcion}</p>
    </br></br>
    `)


}



/* 3. Una empresa llamada Noblex se presenta en la consultoría y plantea
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