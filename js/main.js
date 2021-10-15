
//Variables y constantes.

const valorPantalones = 8995;
const valorRemeras = 3995;
const valorZapatillas = 9995;


//Objeto para las prendas
class Prenda {
    constructor(id, producto, tamanio, color, stock, precio) {

        this.id = id;
        this.producto = producto;
        this.tamanio = tamanio;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
    }

    restaDeStock() {
        this.stock = this.stock - 1;
    }
}

//Pantalones

const jean00 = new Prenda("jean00", "Jean Indigo", 30, "Azul", 15, 8995);
const jean01 = new Prenda("jean01", "Jean Indigo", 32, "Azul", 15, 8995);
const jean02 = new Prenda("jean02", "Jean Indigo", 34, "Azul", 15, 8995);
const jean03 = new Prenda("jean03", "Jean Indigo", 36, "Azul", 15, 8995);

const chino00 = new Prenda("chino00", "Chino", 30, "Beige", 15, 8995);
const chino01 = new Prenda("chino01", "Chino", 32, "Beige", 15, 8995);
const chino02 = new Prenda("chino02", "Chino", 34, "Beige", 15, 8995);
const chino03 = new Prenda("chino03", "Chino", 36, "Beige", 15, 8995);

let arrayPantalones = [jean00, jean01, jean02, jean03, chino00, chino01 ,chino02, chino03];

//Remeras

const remera01B = new Prenda("remera00B", "Remera Básica", "M", "Negro", 15, 3995);
const remera00B = new Prenda("remera01B", "Remera Básica", "S", "Negro", 15, 3995);
const remera02B = new Prenda("remera02B", "Remera Básica", "L", "Negro", 15, 3995);
const remera03B = new Prenda("remera03B", "Remera Básica", "XL", "Negro", 15, 3995);

const remera00R = new Prenda("remera00R" ,"Remera Rayada", "S", "Blanca", 15, 3995);
const remera01R = new Prenda("remera01R" ,"Remera Rayada", "M", "Blanca", 15, 3995);
const remera02R = new Prenda("remera02R" ,"Remera Rayada", "L", "Blanca", 15, 3995);
const remera03R = new Prenda("remera03R" ,"Remera Rayada", "XL", "Blanca", 15, 3995);

let arrayRemeras = [remera00B, remera01B, remera02B, remera03B, remera00R, remera01R, remera02R, remera03R];

//Zapatillas

const zapatillas00D = new Prenda("zapatillas00D" ,"Daddy shoes", 40, "Negro", 15, 9995);
const zapatillas01D = new Prenda("zapatillas01D" ,"Daddy shoes", 41, "Negro", 15, 9995);
const zapatillas02D = new Prenda("zapatillas02D" ,"Daddy shoes", 42, "Negro", 15, 9995);
const zapatillas03D = new Prenda("zapatillas03D" ,"Daddy shoes", 43, "Negro", 15, 9995);
const zapatillas04D = new Prenda("zapatillas04D" ,"Daddy shoes", 44, "Negro", 15, 9995);

const zapatillas00B = new Prenda("zapatilllas00B","Calzado Bryan", 40, "Verde", 15, 9995);
const zapatillas01B = new Prenda("zapatilllas01B","Calzado Bryan", 41, "Verde", 15, 9995);
const zapatillas02B = new Prenda("zapatilllas02B","Calzado Bryan", 42, "Verde", 15, 9995);
const zapatillas03B = new Prenda("zapatilllas03B","Calzado Bryan", 43, "Verde", 15, 9995);
const zapatillas04B = new Prenda("zapatilllas04B","Calzado Bryan", 44, "Verde", 15, 9995);

let arrayZapatillas = [zapatillas00D, zapatillas01D, zapatillas02D, zapatillas03D, zapatillas04D, zapatillas00B, zapatillas01B, zapatillas02B,zapatillas03B, zapatillas04B];

//Finaliza el objeto.


//Variables que toman los value de los select pertenecientes al HTML.
valueJean0 = document.getElementById("talleJean");

valueChino0 = document.getElementById("talleChino");

valueRemera0R = document.getElementById("talleRemeraRayada");

valueRemera0B = document.getElementById("talleRemeraBasica");

valueZapatillas0B = document.getElementById("talleZapatillasBryan");

valueZapatillas0D = document.getElementById("talleZapatillasDaddyShoes");

//Función que agrega los jeans al carrito con sus respectivos talles/stock.
function jeanAlCarrito(){
    
    if (valueJean0.value == "30" ) {

        shoppingCart.push(jean00);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueJean0.value == "32"){

        shoppingCart.push(jean01);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueJean0.value == "34" ){

        shoppingCart.push(jean02);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueJean0.value == "36"){

        shoppingCart.push(jean03);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
    }

}

//Función que agrega los chinos al carrito con sus respectivos talles/stock.
function chinoAlCarrito (){

    if (valueChino0.value == "30" ) {

        shoppingCart.push(chino00);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueChino0.value == "32"){

        shoppingCart.push(chino01);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueChino0.value == "34" ){

        shoppingCart.push(chino02);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueChino0.value == "36"){

        shoppingCart.push(chino03);
        valorDelCarrito.push(valorPantalones);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
    }

}

//Función que agrega las remeras rayadas al carrito con sus respectivos talles/stock.
function remeraRayadaAlCarrito() {

    if (valueRemera0R.value == "S" ) {

        shoppingCart.push(remera00R);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0R.value == "M"){

        shoppingCart.push(remera01R);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0R.value == "L" ){

        shoppingCart.push(remera02R);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0R.value == "XL"){

        shoppingCart.push(remera03R);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
    }

}

//Función que agrega las remeras basicas al carrito con sus respectivos talles/stock.
function remeraBasicaAlCarrito(){

    if (valueRemera0B.value == "S" ) {

        shoppingCart.push(remera00B);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0B.value == "M"){

        shoppingCart.push(remera01B);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0B.value == "L" ){

        shoppingCart.push(remera02B);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0B.value == "XL"){

        shoppingCart.push(remera03B);
        valorDelCarrito.push(valorRemeras);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
    }

}

//Función que agrega a las zapatillas bryan al carrito con sus respectivos talles/stock.
function zapatillasBryanAlCarrito(){

    if (valueZapatillas0B.value == "40" ) {

        shoppingCart.push(zapatillas00B);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0B.value == "41"){

        shoppingCart.push(zapatillas01B);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0B.value == "42" ){

        shoppingCart.push(zapatillas02B);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0B.value == "43"){

        shoppingCart.push(zapatillas03B);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if ( valueZapatillas0B.value == "44"){

        shoppingCart.push(zapatillas04B);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
    }

}

//Función que agrega a las zapatillas daddy shoes al carrito con sus respectivos talles/stock.
function zapatillasDaddyShoesAlCarrito() {

    if (valueZapatillas0D.value == "40" ) {

        shoppingCart.push(zapatillas00D);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0D.value == "41"){

        shoppingCart.push(zapatillas01D);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0D.value == "42" ){

        shoppingCart.push(zapatillas02D);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0D.value == "43"){

        shoppingCart.push(zapatillas03D);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if ( valueZapatillas0D.value == "44"){

        shoppingCart.push(zapatillas04D);
        valorDelCarrito.push(valorZapatillas);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
    }
}

//Función de calculo de IVA
function calcularIva(producto) {
    let calculoIva = producto * iva + producto;

    return calculoIva;
}

//Función para eliminar los productos del carrito.

function eliminarProductos() {
    {
        localStorage.removeItem('carrito');
        console.log("Muchas gracias. Carrito vacío.")
    }

}

//Función que finaliza la compra("Evalúa" el cobro) y vacía el carrito.

function finalCompra(){

        for (prenda of shoppingCart) {
            prenda.restaDeStock();
        }


        $(".header-ind").append(
            `
            <div id="mensajeCompra" class="alert alert-success">
                Muchas gracias por la compra!
            </div>
            `
        );
        $("#mensajeCompra").slideDown("slow")
        .delay("1000")
        .slideUp("slow");
        localStorage.removeItem('carrito');
    }

//Elementos del carrito que se van a guardar

const carritoLocal = localStorage.getItem("carrito");
const shoppingCart = [];

if (carritoLocal != null) {
    const carritoLocalObject = JSON.parse(carritoLocal);
    for (const prod of carritoLocalObject) {
        shoppingCart.push(new Prenda(prod.id , prod.tamanio, prod.stock, prod.precio));
    }
}

//Funcion para mostrar el carrito.

let productosCarrito = "";
let precioCarrito = 0;
let valorDelCarrito = [];

    function estructuraCarrito(){
        $("#divCarrito").html(`  <ul class="carritoJavaScript">
                                        <li>
                                        Lleva los siguientes productos:
                                        \n ${productosCarrito}
                                        </li>
                                        <li>
                                        Por un total de $${precioCarrito}
                                        </li>
                                    </ul>`);
    }

function muestraCarrito(){
    for (valor of shoppingCart){
        precioCarrito += valor.precio;
    }
    for (elemento of shoppingCart) {
        productosCarrito += `\n -${elemento.producto}`;
    }
        $("#divCarrito").html(estructuraCarrito);
    }

    const URLREMERAS = "https://matirg97.github.io/ProyectoIndumentaria/remeras.json";

    $.getJSON(URLREMERAS, function(respuesta,estado){
        let misDatos = respuesta;

        if(estado === "success"){
            
            for(const dato of respuesta){

                if( dato.id === "Remera00B"){

                    $("#divRemeraBasica00").prepend(`
                    <h3>${dato.nombre}</h3>
                <img src="${dato.imagen}" alt="" class="imagenDelJson">
                <p>${dato.descripcion}</p>
                <p>Precio : $${dato.precio}</p>
                    `);

                } else if ( dato.id === "Remera00R" ){

                    $("#divRemeraRayada00").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                    }
                }
            }
        }
    );

    const URLPANTALONES = "https://matirg97.github.io/ProyectoIndumentaria/pantalones.json";

    $.getJSON(URLPANTALONES, function(respuesta,estado){
        let misDatos = respuesta;

        if(estado === "success"){
            
            for(const dato of respuesta){
                if ( dato.id === "jean00" ){

                    $("#divJeanIndigo00").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                } else if ( dato.id === "chino00" ){

                    $("#divChinoBeige00").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                }
            }
        }
    });

    const URLZAPATILLAS = "https://matirg97.github.io/ProyectoIndumentaria/zapatillas.json";

    $.getJSON(URLZAPATILLAS, function(respuesta,estado){
        let misDatos = respuesta;

        if(estado === "success"){
            
            for(const dato of respuesta){
                if ( dato.id === "zapatillas00D" ){

                    $("#divZapatillas00D").append(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                } else if ( dato.id === "zapatillas00B" ){

                    $("#divZapatillas00B").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                }
            }
        }
    });

//Boton que pertenece al "eliminar elementos" del header.
$("#botonEliminarProductos").click(eliminarProductos);

//Boton que pertenece al carrito del header.
$("#botonCarritoHeader").click(muestraCarrito);

//Boton de pago perteneciente al header.
$("#botonPagarPrendas").click(finalCompra);

//Boton de "Agregar al carrito" de los jeans.
$("#buttonJean").click(jeanAlCarrito);

//Boton de "Agregar al carrito" de los chinos:
$("#buttonChino").click(chinoAlCarrito);

//Boton de "Agregar al carrito" de las remeras Rayadas:
$("#buttonRemeraRayada").click(remeraRayadaAlCarrito);

//Boton de "Agregar al carrito" de las remeras Basicas:
$("#buttonRemeraBasica").click(remeraBasicaAlCarrito);

//Boton de "Agregar al carrito" de las zapatillas Bryan:
$("#buttonZapatillasBryan").click(zapatillasBryanAlCarrito);

//Boton de "Agregar al carrito" de las zapatillas Daddy Shoes:
$("#buttonZapatillasDaddyShoes").click(zapatillasDaddyShoesAlCarrito);